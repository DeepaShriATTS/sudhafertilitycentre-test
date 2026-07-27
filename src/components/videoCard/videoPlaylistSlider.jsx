"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPlay, FaFilm, FaTimes, FaList, FaCheck, FaVolumeMute, FaMapMarkerAlt } from "react-icons/fa";
import Buttonbottm from "@/components/button";
import { getYoutubeThumbnail } from "@/middleware/videosRoute"; // adjust path if your data/util file lives elsewhere
import Image from "next/image";

import "swiper/css";
import "../../app/cssStyling/videoSlider.css";

// Max number of playlist videos that will play automatically, back to back,
// before the player stops and waits for a manual click.
const MAX_AUTO_PLAY_COUNT = 2;

// How long the cursor must sit on a card before the hover-preview loads.
// Short enough to feel instant, long enough to ignore accidental pass-throughs.
const HOVER_PREVIEW_DELAY = 80;

// Loaded once and reused — avoids re-injecting the YouTube IFrame API script
// every time the modal opens.
let youtubeApiPromise = null;
function loadYoutubeIframeApi() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.YT && window.YT.Player) return Promise.resolve(window.YT);
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve) => {
    const previousCallback = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousCallback?.();
      resolve(window.YT);
    };

    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.head.appendChild(tag);
  });

  return youtubeApiPromise;
}

// Extract an 11-character YouTube video ID from any common single-video URL
// shape: youtu.be/<id>, youtube.com/watch?v=<id>, youtube.com/embed/<id>, etc.
function getVideoIdFromUrl(value) {
  if (!value) return null;

  try {
    const parsedUrl = new URL(value);

    if (parsedUrl.hostname.includes("youtu.be")) {
      const id = parsedUrl.pathname.replace("/", "").split("/")[0];
      return id || null;
    }

    const vParam = parsedUrl.searchParams.get("v");
    if (vParam) return vParam;

    const pathMatch = parsedUrl.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
    if (pathMatch) return pathMatch[2];

    return null;
  } catch {
    return null;
  }
}

// Normalizes a possibly-missing/protocol-relative thumbnail URL and builds a
// fallback chain of YouTube CDN sizes to try if the given one 404s.
function buildThumbCandidates(video) {
  const candidates = [];
  const raw = video?.thumbnail;

  if (raw) {
    candidates.push(raw.startsWith("//") ? `https:${raw}` : raw);
  }
  if (video?.id) {
    candidates.push(`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`);
    candidates.push(`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`);
    candidates.push(`https://i.ytimg.com/vi/${video.id}/default.jpg`);
  }
  return candidates;
}

// Plain <img> (not next/image) on purpose — external YouTube thumbnail hosts
// would otherwise need to be allow-listed in next.config.js images.remotePatterns,
// and a missing/protocol-relative video.thumbnail previously broke next/image
// outright. This cascades through fallback sizes and finally an icon.
function PlaylistThumb({ video }) {
  const candidates = buildThumbCandidates(video);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const src = candidates[candidateIndex];

  if (!src) {
    return (
      <div className="gs-playlist-thumb-fallback">
        <FaFilm />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={video.title || "Video thumbnail"}
      width={120}
      height={90}
      className="object-cover"
      loading="lazy"
      onError={() => {
        setCandidateIndex((prev) =>
          prev + 1 < candidates.length ? prev + 1 : prev
        );
      }}
    />
  );
}

export default function GallerySlider({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const [modalItem, setModalItem] = useState(null); // item whose playlist is open in the modal
  const [playlistVideos, setPlaylistVideos] = useState([]);
  const [playlistLoading, setPlaylistLoading] = useState(false);
  const [playlistError, setPlaylistError] = useState(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [autoPlayCount, setAutoPlayCount] = useState(0);
  const [autoAdvanceStopped, setAutoAdvanceStopped] = useState(false);

  // Hover-preview state: only one card previews at a time. previewId is the
  // item id whose muted embed is mounted; previewVisible drives the fade-in
  // so the iframe doesn't just pop in, and also drives the play-button fade-out.
  const [previewId, setPreviewId] = useState(null);
  const [previewVisible, setPreviewVisible] = useState(false);
  const hoverTimerRef = useRef(null);
  const canHoverRef = useRef(false);

  const swiperInstanceRef = useRef(null);
  const playerRef = useRef(null); // YT.Player instance
  const playerContainerRef = useRef(null); // div the player mounts into
  const stateRef = useRef({ currentVideoIndex: 0, autoPlayCount: 0 }); // avoids stale closures inside YT event callbacks

  useEffect(() => {
    stateRef.current.currentVideoIndex = currentVideoIndex;
    stateRef.current.autoPlayCount = autoPlayCount;
  }, [currentVideoIndex, autoPlayCount]);

  // Only enable hover-preview on devices that actually have a hover pointer
  // (skips phones/tablets, where mouseenter can otherwise ghost-fire on tap).
  useEffect(() => {
    canHoverRef.current =
      typeof window !== "undefined" &&
      window.matchMedia?.("(hover: hover) and (pointer: fine)").matches;
  }, []);

  const getPlaylistId = (value) => {
    if (!value) return null;
    try {
      const parsedUrl = new URL(value);
      const listParam = parsedUrl.searchParams.get("list");
      if (listParam) return listParam;
      return null;
    } catch {
      return null;
    }
  };

  const resolveThumbnail = (item) => {
    if (item.firstVideoUrl) return getYoutubeThumbnail(item.firstVideoUrl);
    if (item.thumbnail) return item.thumbnail;
    return null;
  };

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleCardClick = (item, index) => {
    // Only the active (centered) card is interactive — open its playlist in the modal
    if (index !== activeIndex) return;
    clearHoverPreview();
    swiperInstanceRef.current?.autoplay?.stop();
    setModalItem(item);
  };

  // ── Hover preview (card-level, muted single-video loop) ──
  const clearHoverPreview = useCallback(() => {
    clearTimeout(hoverTimerRef.current);
    setPreviewVisible(false);
    setPreviewId(null);
  }, []);

  const handleCardMouseEnter = useCallback((item) => {
    if (!canHoverRef.current) return;
    const videoId = getVideoIdFromUrl(item.firstVideoUrl);
    if (!videoId) return;

    clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setPreviewId(item.id);
      requestAnimationFrame(() => setPreviewVisible(true));
    }, HOVER_PREVIEW_DELAY);
  }, []);

  const handleCardMouseLeave = useCallback((item) => {
    clearTimeout(hoverTimerRef.current);
    if (previewId === item.id || !previewId) {
      setPreviewVisible(false);
      setTimeout(() => setPreviewId((current) => (current === item.id ? null : current)), 150);
    }
  }, [previewId]);

  useEffect(() => () => clearTimeout(hoverTimerRef.current), []);

  const destroyPlayer = useCallback(() => {
    if (playerRef.current) {
      try {
        playerRef.current.destroy();
      } catch {}
      playerRef.current = null;
    }
  }, []);

  const closeModal = useCallback(() => {
    destroyPlayer();
    setModalItem(null);
    setPlaylistVideos([]);
    setPlaylistError(null);
    setCurrentVideoIndex(0);
    setAutoPlayCount(0);
    setAutoAdvanceStopped(false);
    swiperInstanceRef.current?.autoplay?.start();
  }, [destroyPlayer]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiper = (swiper) => {
    swiperInstanceRef.current = swiper;
  };

  const orderPlaylistWithFirstVideoFirst = (videos, item) => {
    const preferredId = getVideoIdFromUrl(item?.firstVideoUrl);
    if (!preferredId) return videos;

    const preferredIndex = videos.findIndex((video) => video.id === preferredId);
    if (preferredIndex <= 0) return videos;

    const reordered = [...videos];
    const [preferredVideo] = reordered.splice(preferredIndex, 1);
    reordered.unshift(preferredVideo);
    return reordered;
  };

  const playVideoAt = useCallback(
    (index, { isAutoAdvance = false } = {}) => {
      const video = playlistVideos[index];
      if (!video || !playerRef.current) return;

      setCurrentVideoIndex(index);

      if (isAutoAdvance) {
        setAutoPlayCount((prev) => prev + 1);
      } else {
        setAutoPlayCount(1);
        setAutoAdvanceStopped(false);
      }

      try {
        playerRef.current.loadVideoById(video.id);
      } catch {}
    },
    [playlistVideos]
  );

  useEffect(() => {
    if (!modalItem) return;

    const playlistId = getPlaylistId(modalItem.videoUrl);
    if (!playlistId) {
      setPlaylistError("No playlist found for this item.");
      return;
    }

    let cancelled = false;
    setPlaylistLoading(true);
    setPlaylistError(null);

    fetch(`/api/playlist?list=${encodeURIComponent(playlistId)}&limit=25`)
      .then((res) => res.json())
      .then((data) => {
        if (cancelled) return;
        if (data.error || !data.videos?.length) {
          setPlaylistError(data.error || "No videos found in this playlist.");
          setPlaylistVideos([]);
          return;
        }
        setPlaylistVideos(orderPlaylistWithFirstVideoFirst(data.videos, modalItem));
      })
      .catch(() => {
        if (!cancelled) {
          setPlaylistError("Couldn't load playlist videos. Please try again.");
        }
      })
      .finally(() => {
        if (!cancelled) setPlaylistLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [modalItem]);

  useEffect(() => {
    if (!modalItem || playlistVideos.length === 0) return;
    if (!playerContainerRef.current) return;

    let cancelled = false;

    loadYoutubeIframeApi().then((YT) => {
      if (cancelled || !YT || !playerContainerRef.current) return;

      destroyPlayer();

      const preferredId =
        getVideoIdFromUrl(modalItem.firstVideoUrl) || playlistVideos[0].id;

      playerRef.current = new YT.Player(playerContainerRef.current, {
        videoId: preferredId,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
          playsinline: 1,
        },
        events: {
          onStateChange: (event) => {
            if (event.data !== YT.PlayerState.ENDED) return;

            const { currentVideoIndex: curIdx, autoPlayCount: count } =
              stateRef.current;

            if (count >= MAX_AUTO_PLAY_COUNT) {
              setAutoAdvanceStopped(true);
              return;
            }

            const nextIndex = curIdx + 1;
            if (nextIndex >= playlistVideos.length) {
              setAutoAdvanceStopped(true);
              return;
            }

            playVideoAt(nextIndex, { isAutoAdvance: true });
          },
        },
      });

      const startIndex = playlistVideos.findIndex((v) => v.id === preferredId);
      setCurrentVideoIndex(startIndex >= 0 ? startIndex : 0);
      setAutoPlayCount(1);
      setAutoAdvanceStopped(false);
    });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalItem, playlistVideos, destroyPlayer]);

  useEffect(() => {
    if (!modalItem) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalItem, closeModal]);

  useEffect(() => {
    if (modalItem) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [modalItem]);

  useEffect(() => {
    return () => destroyPlayer();
  }, [destroyPlayer]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="gs-section">
      <div className="gs-container">
       
        <h2 className=" font-semibold text-center">
         Childless couples to happy parents
        </h2>
        <p className="text-gray-600 mt-2 text-center">
         True stories from our happy parents
        </p>

        <div className="gs-swiper-outer">
          <Swiper
            onSwiper={handleSwiper}
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            speed={700}
            spaceBetween={24}
            slidesPerView={3}
            autoplay={{
              delay: 3200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            breakpoints={{
              320: { slidesPerView: 1.15, spaceBetween: 16 },
              375: { slidesPerView: 1.15, spaceBetween: 16 },
              425: { slidesPerView: 1.3, spaceBetween: 16 },
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            onSlideChange={handleSlideChange}
            className="gs-swiper"
          >
            {items.map((item, index) => {
              const thumbSrc = resolveThumbnail(item);
              const videoCount = item.videoCount || item.itemCount;
              const previewVideoId = getVideoIdFromUrl(item.firstVideoUrl);
              const isPreviewing = previewId === item.id && previewVideoId;
              const isActive = index === activeIndex;

              return (
                <SwiperSlide key={item.id}>
                  <div
                    className={`gs-card-outer${isActive ? " is-active" : ""}`}
                    onClick={() => handleCardClick(item, index)}
                    onMouseEnter={() => handleCardMouseEnter(item)}
                    onMouseLeave={() => handleCardMouseLeave(item)}
                    role={isActive ? "button" : undefined}
                    tabIndex={isActive ? 0 : -1}
                    onKeyDown={(e) => {
                      if (isActive && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        handleCardClick(item, index);
                      }
                    }}
                    aria-label={isActive ? `Play ${item.title || "video"}` : undefined}
                  >
                    <div className="gs-card">
                      <div className="gs-thumb-wrap">
                        {!failedImages[item.id] && thumbSrc ? (
                          <Image
                            src={thumbSrc}
                            alt={item.title}
                            className="gs-thumb"
                            width={480}
                            height={300}
                            onError={() => handleImageError(item.id)}
                          />
                        ) : (
                          <div className="gs-thumb-fallback">
                            <div className="gs-thumb-fallback-icon">
                              <FaFilm />
                            </div>
                            <span className="gs-thumb-fallback-text">
                              {item.title || "No preview available"}
                            </span>
                          </div>
                        )}

                        {isPreviewing && (
                          <iframe
                            key={item.id}
                            className="gs-hover-preview"
                            style={{ opacity: previewVisible ? 1 : 0 }}
                            src={`https://www.youtube-nocookie.com/embed/${previewVideoId}?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&playsinline=1&loop=1&playlist=${previewVideoId}&iv_load_policy=3`}
                            title={`${item.title || "Video"} preview`}
                            allow="autoplay; encrypted-media"
                            tabIndex={-1}
                            aria-hidden="true"
                          />
                        )}

                        <div className="gs-scrim" aria-hidden="true" />

                        <div className="gs-playlist-badge">
                          <FaList />
                          <span>{videoCount ? `${videoCount} videos` : "Playlist"}</span>
                        </div>

                        {previewVisible && isPreviewing && (
                          <div className="gs-muted-tag">
                            <FaVolumeMute /> Preview
                          </div>
                        )}

                        <button
                          type="button"
                          className={`gs-play-overlay${previewVisible && isPreviewing ? " is-hidden" : ""}`}
                          tabIndex={-1}
                          aria-hidden="true"
                        >
                          <span className="gs-play-circle">
                            <FaPlay />
                          </span>
                        </button>

                        <div className="gs-card-caption">
                          {item.location && (
                            <p className="gs-card-location">
                              <FaMapMarkerAlt /> {item.location}
                            </p>
                          )}
                          {item.title && <p className="gs-card-title">{item.title}</p>}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        <div className="gs-cta">
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
      </div>

      {/* ── Playlist Modal: fixed player + scrollable playlist sidebar ── */}
      {modalItem && (
        <div className="gs-modal-backdrop" onClick={closeModal}>
          <div className="gs-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="gs-modal-header">
              <p className="gs-modal-title">{modalItem.title}</p>
              <button
                type="button"
                className="gs-modal-close"
                onClick={closeModal}
                aria-label="Close video playlist"
              >
                <FaTimes />
              </button>
            </div>

            <div className="gs-modal-body">
              <div className="gs-modal-player-col">
                <div className="gs-modal-player-wrap">
                  {playlistLoading && (
                    <div className="gs-modal-loading">Loading playlist…</div>
                  )}
                  {!playlistLoading && playlistError && (
                    <div className="gs-modal-fallback">{playlistError}</div>
                  )}
                  {!playlistLoading && !playlistError && (
                    <div
                      ref={playerContainerRef}
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
                    />
                  )}
                </div>

                {!playlistLoading && !playlistError && playlistVideos[currentVideoIndex] && (
                  <div className="gs-now-playing-info">
                    <p className="gs-now-playing-title">
                      {playlistVideos[currentVideoIndex].title}
                    </p>
                    <p className="gs-auto-advance-note">
                      {autoAdvanceStopped
                        ? "Auto-play finished — pick another video to keep watching."
                        : `Playing video ${currentVideoIndex + 1} of ${playlistVideos.length} · auto-plays up to ${MAX_AUTO_PLAY_COUNT} videos`}
                    </p>
                  </div>
                )}
              </div>

              <div className="gs-modal-playlist-col">
                <div className="gs-playlist-col-header">
                  <p className="gs-playlist-col-title">
                    <FaList /> Up next
                  </p>
                  {playlistVideos.length > 0 && (
                    <p className="gs-playlist-col-count">
                      {playlistVideos.length} videos in this playlist
                    </p>
                  )}
                </div>

                <div className="gs-playlist-scroll">
                  {playlistLoading && (
                    <div className="gs-playlist-state-msg">Loading videos…</div>
                  )}
                  {!playlistLoading && playlistError && (
                    <div className="gs-playlist-state-msg">{playlistError}</div>
                  )}
                  {!playlistLoading &&
                    !playlistError &&
                    playlistVideos.map((video, idx) => {
                      const isActive = idx === currentVideoIndex;
                      return (
                        <div
                          key={video.id}
                          className={`gs-playlist-item${isActive ? " is-active" : ""}`}
                          onClick={() => playVideoAt(idx)}
                        >
                          <div className="gs-playlist-item-thumb-wrap">
                            <PlaylistThumb video={video} />
                            {isActive ? (
                              <div className="gs-playlist-item-index">
                                <FaPlay style={{ fontSize: 10 }} />
                              </div>
                            ) : (
                              <div className="gs-playlist-item-index">{idx + 1}</div>
                            )}
                            {video.duration && (
                              <span className="gs-playlist-item-duration">
                                {video.duration}
                              </span>
                            )}
                          </div>
                          <div className="gs-playlist-item-text">
                            <p className="gs-playlist-item-title">{video.title}</p>
                            {isActive && (
                              <p className="gs-playlist-item-now-playing">
                                <FaCheck style={{ fontSize: 9 }} /> Now playing
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}