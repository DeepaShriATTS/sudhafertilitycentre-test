"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { FaPlay, FaFilm, FaTimes, FaList } from "react-icons/fa";
import Buttonbottm from "@/components/button";
import { getYoutubeThumbnail } from "@/middleware/videosRoute"; // adjust path if your data/util file lives elsewhere

import "swiper/css";
import "swiper/css/navigation";

export default function GallerySlider({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const [modalItem, setModalItem] = useState(null); // item whose playlist is open in the modal
  const swiperInstanceRef = useRef(null);

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

  const getPlaylistEmbedUrl = (item) => {
    const playlistId = getPlaylistId(item.videoUrl);
    if (!playlistId) return null;
    return `https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=1&rel=0`;
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

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handleCardClick = (item, index) => {
    // Only the active (centered) card is interactive — open its playlist in the modal
    if (index !== activeIndex) return;
    swiperInstanceRef.current?.autoplay?.stop();
    setModalItem(item);
  };

  const closeModal = useCallback(() => {
    setModalItem(null);
    swiperInstanceRef.current?.autoplay?.start();
  }, []);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSwiper = (swiper) => {
    swiperInstanceRef.current = swiper;
  };

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

  if (!items || items.length === 0) {
    return null;
  }

  const modalEmbedUrl = modalItem ? getPlaylistEmbedUrl(modalItem) : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        /* ── Section wrapper ── */
        .gs-section {
          padding: 40px 0 56px;
          font-family: 'Inter', sans-serif;
          width: 100%;
          background: linear-gradient(135deg, #ebf2fe 0%, #e1f0ff 100%);
          border-radius: 20px;
        }

        .gs-container {
          width: 100%;
          max-width: 1600px;
          margin: 0 auto;
          padding: 0 16px;
        }

        /* ── Swiper ── */
        .gs-swiper {
          width: 100%;
          padding: 20px 0 36px !important;
          overflow: visible;
        }

        .gs-swiper .swiper-slide {
          height: auto;
        }

        /* ── Card outer wrapper (handles stack + active-state animation) ── */
        .gs-card-outer {
          position: relative;
          cursor: pointer;
          transition: transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
            opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
            filter 0.4s ease-out;
          filter: blur(8px);
          opacity: 0.35;
          transform: scale(0.82) translateZ(0);
          pointer-events: none;
          will-change: transform, opacity, filter;
          backface-visibility: hidden;
        }

        .swiper-slide-active .gs-card-outer {
          filter: none;
          opacity: 1;
          transform: scale(1.15) translateZ(0);
          pointer-events: auto;
          position: relative;
          z-index: 5;
        }

        /* Stacked "deck" layers behind the card — reads as a playlist, not a single video */
        .gs-stack-layer {
          position: absolute;
          left: 6%;
          right: 6%;
          border-radius: 16px;
          background: #fff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
        }

        .gs-stack-layer-1 {
          top: 10px;
          bottom: -10px;
          transform: scale(0.97);
          z-index: 0;
          background: #f1f4fa;
        }

        .gs-stack-layer-2 {
          top: 20px;
          bottom: -20px;
          transform: scale(0.93);
          z-index: -1;
          background: #e4e9f3;
        }

        /* ── Card ── */
        .gs-card {
          position: relative;
          z-index: 1;
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          transition: box-shadow 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .swiper-slide-active .gs-card {
          box-shadow: 0 24px 56px rgba(23, 51, 102, 0.18);
        }

        /* ── Thumbnail area ── */
        .gs-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: linear-gradient(135deg, #1a1d24 0%, #0f1117 100%);
          overflow: hidden;
        }

        .gs-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
          display: block;
        }

        .gs-card-outer:hover .gs-thumb {
          transform: scale(1.08);
        }

        /* Fallback when image fails */
        .gs-thumb-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background: linear-gradient(135deg, #1a1d24 0%, #0f1117 100%);
        }

        .gs-thumb-fallback-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.35);
          font-size: 20px;
          backdrop-filter: blur(8px);
        }

        .gs-thumb-fallback-text {
          font-size: 0.8rem;
          color: rgba(255,255,255,0.3);
          text-align: center;
          padding: 0 12px;
          font-weight: 500;
        }

        /* ── Play overlay ── */
        .gs-play-overlay {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          background: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          backdrop-filter: blur(2px);
        }

        .swiper-slide-active .gs-card-outer:hover .gs-play-overlay {
          opacity: 1;
        }

        .gs-play-circle {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 12px 32px rgba(23, 51, 102, 0.35);
        }

        .swiper-slide-active .gs-card-outer:hover .gs-play-circle {
          transform: scale(1.15);
          box-shadow: 0 16px 48px rgba(23, 51, 102, 0.45);
        }

        .gs-play-circle svg {
          color: #173366;
          font-size: 20px;
          margin-left: 3px;
        }

        /* ── Playlist badge ── */
        .gs-playlist-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.72);
          backdrop-filter: blur(4px);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2px;
        }

        .gs-playlist-badge svg {
          font-size: 11px;
          color: #fff;
        }

        /* ── CTA row ── */
        .gs-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 16px;
          margin-top: 40px;
        }

        .gs-cta h3 {
          font-weight: 700;
          text-align: center;
          margin: 0;
          font-size: 1.1rem;
          color: #173366;
          letter-spacing: -0.3px;
        }

        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        /* ── Modal ── */
        .gs-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(10, 12, 20, 0.78);
          backdrop-filter: blur(6px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: gs-fade-in 0.25s ease-out;
        }

        @keyframes gs-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .gs-modal-content {
          position: relative;
          width: 100%;
          max-width: 1100px;
          background: #0f1117;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
          animation: gs-pop-in 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes gs-pop-in {
          from { transform: scale(0.92); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }

        .gs-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 16px 20px;
          background: #14161d;
        }

        .gs-modal-title {
          margin: 0;
          font-family: 'Inter', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .gs-modal-close {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .gs-modal-close:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.08);
        }

        .gs-modal-player-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #000;
        }

        .gs-modal-iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .gs-modal-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          text-align: center;
          padding: 24px;
        }

        @media (max-width: 640px) {
          .gs-modal-backdrop {
            padding: 0;
          }
          .gs-modal-content {
            border-radius: 0;
            max-width: 100%;
            height: 100%;
          }
          .gs-modal-player-wrap {
            aspect-ratio: auto;
            flex: 1;
            height: calc(100% - 68px);
          }
        }
      `}</style>

      <section className="gs-section">
        <div className="gs-container">
          <Swiper
            onSwiper={handleSwiper}
            modules={[Autoplay]}
            loop={true}
            centeredSlides={true}
            speed={700}
            spaceBetween={56}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
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
                    {/* Stacked layers behind the card to read as "playlist" */}
                    <div className="gs-stack-layer gs-stack-layer-2" />
                    <div className="gs-stack-layer gs-stack-layer-1" />

                    <div className="gs-card">
                      {/* Thumbnail area */}
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

                        {/* Playlist badge — top right */}
                        <div className="gs-playlist-badge">
                          <FaList />
                          <span>{videoCount ? `${videoCount} videos` : "Playlist"}</span>
                        </div>

                        {/* Play overlay */}
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

          {/* CTA */}
          <div className="gs-cta">
            <h3>Childless Couples to Happy Parents</h3>
            <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
          </div>
        </div>
      </section>

      {/* ── Playlist Modal ── */}
      {modalItem && (
        <div
          className="gs-modal-backdrop"
          onClick={closeModal}
        >
          <div
            className="gs-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
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

            <div className="gs-modal-player-wrap">
              {modalEmbedUrl ? (
                <iframe
                  className="gs-modal-iframe"
                  src={modalEmbedUrl}
                  title={modalItem.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="gs-modal-fallback">
                  No playlist available for this item.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}