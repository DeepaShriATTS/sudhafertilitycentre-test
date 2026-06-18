"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaPlay, FaFilm } from "react-icons/fa";
import Buttonbottm from "@/components/button";

import "swiper/css";
import "swiper/css/navigation";

export default function GallerySlider({ items = [] }) {
  const [playingId, setPlayingId] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [failedImages, setFailedImages] = useState({});
  const swiperInstanceRef = useRef(null);

  const getEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);
      if (parsedUrl.hostname === "youtu.be") {
        return `https://www.youtube.com/embed/${parsedUrl.pathname.slice(1)}?autoplay=1&rel=0`;
      }
      if (parsedUrl.hostname.includes("youtube.com") && parsedUrl.searchParams.get("v")) {
        return `https://www.youtube.com/embed/${parsedUrl.searchParams.get("v")}?autoplay=1&rel=0`;
      }
      if (url.includes("/embed/")) return `${url}?autoplay=1`;
      return null;
    } catch {
      return null;
    }
  };

  const handleImageError = (id) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const handlePlay = (item) => {
    setPlayingId(item.id);
    swiperInstanceRef.current?.autoplay?.stop();
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setPlayingId(null);
    swiperInstanceRef.current?.autoplay?.start();
  };

  const handleSwiper = (swiper) => {
    swiperInstanceRef.current = swiper;
  };

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

        /* ── Section wrapper ── */
        .gs-section {
          padding: 40px 0 56px;
          font-family: 'Inter', sans-serif;
          width: 100%;
          background: linear-gradient(135deg, #f8f9fa 0%, #f0f3f7 100%);
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
          padding: 20px 0 !important;
          overflow: visible;
        }

        /* All slides — uniform */
        .gs-swiper .swiper-slide {
          height: auto;
        }

        /* ── Card ── */
        /* All cards blurred by default */
        .gs-card {
          border-radius: 20px;
          overflow: hidden;
          background: #fff;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
          filter: blur(5px);
          opacity: 0.35;
          transform: scale(0.88);
          pointer-events: none;
        }

        /* Active center card — sharp and fully visible */
        .swiper-slide-active .gs-card {
          filter: none;
          opacity: 1;
          transform: scale(1);
          pointer-events: auto;
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

        /* Thumbnail image */
        .gs-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.3s ease;
          display: block;
        }

        .gs-card:hover .gs-thumb {
          transform: scale(1.08);
        }

        .gs-thumb-wrap.is-playing .gs-thumb {
          opacity: 0;
          pointer-events: none;
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

        /* ── Inline iframe ── */
        .gs-iframe-wrap {
          position: absolute;
          inset: 0;
          z-index: 4;
          border-radius: 0;
          overflow: hidden;
        }

        .gs-iframe {
          display: block;
          width: 100%;
          height: 100%;
          border: none;
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

        .swiper-slide-active .gs-card:hover .gs-play-overlay {
          opacity: 1;
        }

        .gs-thumb-wrap.is-playing .gs-play-overlay {
          opacity: 0;
          pointer-events: none;
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

        .swiper-slide-active .gs-card:hover .gs-play-circle {
          transform: scale(1.15);
          box-shadow: 0 16px 48px rgba(23, 51, 102, 0.45);
        }

        .gs-play-circle svg {
          color: #173366;
          font-size: 20px;
          margin-left: 3px;
        }

        /* ── Card caption ── */
        .gs-caption {
          padding: 16px 18px 18px;
          background: #fff;
        }

        .gs-caption-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #111;
          margin: 0 0 6px;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .gs-caption-desc {
          font-size: 0.8rem;
          color: rgba(0, 0, 0, 0.55);
          line-height: 1.6;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          font-weight: 500;
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

        /* Smooth scrolling */
        .swiper-wrapper {
          transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
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
            spaceBetween={32}
            slidesPerView={3}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSlideChange={handleSlideChange}
            className="gs-swiper"
          >
            {items.map((item) => {
              const isPlaying = playingId === item.id;
              const embedUrl = getEmbedUrl(item.videoUrl);

              return (
                <SwiperSlide key={item.id}>
                  <div
                    className="gs-card"
                    onClick={() => !isPlaying && handlePlay(item)}
                  >
                    {/* Thumbnail area */}
                    <div className={`gs-thumb-wrap${isPlaying ? " is-playing" : ""}`}>

                      {/* Thumbnail image or fallback */}
                      {!failedImages[item.id] && item.thumbnail ? (
                        <img
                          src={item.thumbnail}
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

                      {/* Play overlay — visible on hover */}
                      {!isPlaying && (
                        <div className="gs-play-overlay">
                          <div className="gs-play-circle">
                            <FaPlay />
                          </div>
                        </div>
                      )}

                      {/* Inline iframe — rendered when playing */}
                      {isPlaying && embedUrl && (
                        <div className="gs-iframe-wrap">
                          <iframe
                            className="gs-iframe"
                            src={embedUrl}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </div>
                      )}
                    </div>

                    {/* Caption below card */}
                    {/* <div className="gs-caption">
                      <p className="gs-caption-title">{item.title}</p>
                      {item.description && (
                        <p className="gs-caption-desc">{item.description}</p>
                      )}
                    </div> */}
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
    </>
  );
}