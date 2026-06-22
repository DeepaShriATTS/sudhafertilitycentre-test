"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPlay, FaFilm, FaTimes, FaList, FaCheck } from "react-icons/fa";
import Buttonbottm from "@/components/button";
import { getYoutubeThumbnail } from "@/middleware/videosRoute"; // adjust path if your data/util file lives elsewhere

import "swiper/css";
import "swiper/css/navigation";
import {videoSliderCss} from "../../app/cssStyling/videoSlider.css";

// Max number of playlist videos that will play automatically, back to back,
// before the player stops and waits for a manual click.
const MAX_AUTO_PLAY_COUNT = 2;

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

    // youtu.be/<id>
    if (parsedUrl.hostname.includes("youtu.be")) {
      const id = parsedUrl.pathname.replace("/", "").split("/")[0];
      return id || null;
    }

    // youtube.com/watch?v=<id>
    const vParam = parsedUrl.searchParams.get("v");
    if (vParam) return vParam;

    // youtube.com/embed/<id> or /shorts/<id>
    const pathMatch = parsedUrl.pathname.match(/\/(embed|shorts)\/([^/?]+)/);
    if (pathMatch) return pathMatch[2];

    return null;
  } catch {
    return null;
  }
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

  const swiperInstanceRef = useRef(null);
  const playerRef = useRef(null); // YT.Player instance
  const playerContainerRef = useRef(null); // div the player mounts into
  const stateRef = useRef({ currentVideoIndex: 0, autoPlayCount: 0 }); // avoids stale closures inside YT event callbacks

  // Keep a ref mirror of state so the YouTube player's onStateChange callback
  // (registered once per player instance) always reads fresh values.
  useEffect(() => {
    stateRef.current.currentVideoIndex = currentVideoIndex;
    stateRef.current.autoPlayCount = autoPlayCount;
  }, [currentVideoIndex, autoPlayCount]);

  // Extract a YouTube playlist ID from a playlist URL (?list=...)
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

  // Resolve a thumbnail for the card. Prefer item.firstVideoUrl (a single-video
  // URL) since getYoutubeThumbnail needs a video ID, not a playlist ID — a
  // thumbnail built from item.thumbnail/item.videoUrl (a playlist URL) will be broken.
  // Falls back to item.thumbnail only if no firstVideoUrl is supplied.
  const resolveThumbnail = (item) => {
    if (item.firstVideoUrl) return getYoutubeThumbnail(item.firstVideoUrl);
    if (item.thumbnail) return item.thumbnail;
    return null;
  };

  // Reorder a fetched playlist so the video matching item.firstVideoUrl plays
  // first, instead of whatever the scraper happened to return at index 0.
  // The rest of the playlist order is preserved for "up next".
  const orderPlaylistWithFirstVideoFirst = (videos, item) => {
    const preferredId = getVideoIdFromUrl(item?.firstVideoUrl);
    if (!preferredId) return videos;

    const preferredIndex = videos.findIndex((video) => video.id === preferredId);
    if (preferredIndex <= 0) return videos; // already first, or not found in this batch

    const reordered = [...videos];
    const [preferredVideo] = reordered.splice(preferredIndex, 1);
    reordered.unshift(preferredVideo);
    return reordered;
  };

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleCardClick = (item, index) => {
    // Only the active (centered) card is interactive — open its playlist in the modal
    if (index !== activeIndex) return;
    swiperInstanceRef.current?.autoplay?.stop();
    setModalItem(item);
  };

  const destroyPlayer = useCallback(() => {
    if (playerRef.current) {
      try {
        playerRef.current.destroy();
      } catch {
        // player may already be in a torn-down state — safe to ignore
      }
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

  // Play a specific video by its position in the playlistVideos list.
  // `isAutoAdvance` distinguishes a user click (resets the auto-play budget)
  // from the automatic "next video" transition (consumes the budget).
  const playVideoAt = useCallback(
    (index, { isAutoAdvance = false } = {}) => {
      const video = playlistVideos[index];
      if (!video || !playerRef.current) return;

      setCurrentVideoIndex(index);

      if (isAutoAdvance) {
        setAutoPlayCount((prev) => prev + 1);
      } else {
        // Manual selection always re-arms the auto-advance budget so the
        // viewer gets up to MAX_AUTO_PLAY_COUNT fresh auto-plays from here.
        setAutoPlayCount(1);
        setAutoAdvanceStopped(false);
      }

      try {
        playerRef.current.loadVideoById(video.id);
      } catch {
        // ignore — player may not be ready yet
      }
    },
    [playlistVideos]
  );

  // Fetch playlist video list from our server-side scraper API whenever a
  // new modalItem is opened.
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
        // Always surface item.firstVideoUrl as the first video to play,
        // regardless of the order the scraper returned the playlist in.
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

  // Once we have the video list, load the IFrame API and mount a real
  // YT.Player so we can listen for ENDED and control auto-advance.
  useEffect(() => {
    if (!modalItem || playlistVideos.length === 0) return;
    if (!playerContainerRef.current) return;

    let cancelled = false;

    loadYoutubeIframeApi().then((YT) => {
      if (cancelled || !YT || !playerContainerRef.current) return;

      destroyPlayer();

      // Prefer the explicit firstVideoUrl id if we have one — falls back to
      // playlistVideos[0].id (which orderPlaylistWithFirstVideoFirst has
      // already moved to the front when a match was found).
      const preferredId =
        getVideoIdFromUrl(modalItem.firstVideoUrl) || playlistVideos[0].id;

      playerRef.current = new YT.Player(playerContainerRef.current, {
        videoId: preferredId,
        playerVars: {
          autoplay: 1,
          rel: 0,
          modestbranding: 1,
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

      // Keep the "now playing" sidebar/index in sync with whichever video we
      // actually told the player to load.
      const startIndex = playlistVideos.findIndex((v) => v.id === preferredId);
      setCurrentVideoIndex(startIndex >= 0 ? startIndex : 0);
      setAutoPlayCount(1); // the first video counts toward the auto-play budget
      setAutoAdvanceStopped(false);
    });

    return () => {
      cancelled = true;
    };
    // playVideoAt intentionally omitted — it's recreated when playlistVideos
    // changes, which is already a dependency here.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalItem, playlistVideos, destroyPlayer]);

  // Close on Escape key
  useEffect(() => {
    if (!modalItem) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalItem, closeModal]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (modalItem) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = previousOverflow;
      };
    }
  }, [modalItem]);

  // Clean up the player if the component unmounts while modal is open
  useEffect(() => {
    return () => destroyPlayer();
  }, [destroyPlayer]);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <style jsx>{`
       videoSliderCss
      `}</style>
      <section className="gs-section">
        <div className="gs-container">
          <div className="gs-swiper-outer">
            <Swiper
              onSwiper={handleSwiper}
              modules={[Autoplay]}
              loop={true}
              centeredSlides={true}
              speed={700}
              spaceBetween={56}
              slidesPerView={3}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              onSlideChange={handleSlideChange}
              className="gs-swiper"
            >
              {items.map((item, index) => {
                const thumbSrc = resolveThumbnail(item);
                const videoCount = item.videoCount || item.itemCount;

                return (
                  <SwiperSlide key={item.id}>
                    <div
                      className="gs-card-outer"
                      onClick={() => handleCardClick(item, index)}
                    >
                      <div className="gs-stack-layer gs-stack-layer-2" />
                      <div className="gs-stack-layer gs-stack-layer-1" />

                      <div className="gs-card">
                        <div className="gs-thumb-wrap">
                          {!failedImages[item.id] && thumbSrc ? (
                            <img
                              src={thumbSrc}
                              alt={item.title}
                              className="gs-thumb"
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

                          <div className="gs-playlist-badge">
                            <FaList />
                            <span>{videoCount ? `${videoCount} videos` : "Playlist"}</span>
                          </div>

                          <div className="gs-play-overlay">
                            <div className="gs-play-circle">
                              <FaPlay />
                            </div>
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
            <h3>Childless Couples to Happy Parents</h3>
            <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
          </div>
        </div>
      </section>

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
              {/* Main player column — video stays fixed here while the list scrolls */}
              <div className="gs-modal-player-col">
                <div className="gs-modal-player-wrap">
                  {playlistLoading && (
                    <div className="gs-modal-loading">Loading playlist…</div>
                  )}
                  {!playlistLoading && playlistError && (
                    <div className="gs-modal-fallback">{playlistError}</div>
                  )}
                  {/* The YT.Player API mounts the iframe into this div itself */}
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

              {/* Playlist sidebar — scrollable list of videos, tucked in the corner */}
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
                            <img src={video.thumbnail} alt={video.title} loading="lazy" />
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
    </>
  );
}