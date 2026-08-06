"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { VideoSkeletonRow, VideoThumbnailSkeleton } from "@/components/loaders/VideoCardSkeleton";
import { FaPlay } from "react-icons/fa";
import video1 from "../../assets/thumbs/video1.jpg";
import video2 from "../../assets/thumbs/video2.jpg";
import video3 from "../../assets/thumbs/video3.jpg";

/**
 * Video data defined at module scope — never recreated on re-render.
 */
const VIDEOS = [
  {
    url: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/Sudha+mother+%26+child+care.mp4",
    thumb: video1,
    title: "Sudha Mother & Child Care",
  },
  {
    url: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/Sudha+Multi+Promo.mp4",
    thumb: video2,
    title: "Sudha Multi Promo",
  },
  {
    url: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/Sudha+cancer+centre.mp4",
    thumb: video3,
    title: "Sudha Cancer Centre",
  },
];

function SliderImage({ item, idx }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full h-56 bg-neutral-200 overflow-hidden">
      {!loaded && <VideoThumbnailSkeleton className="absolute inset-0 h-56 w-full" />}
      <Image
        src={item.thumb}
        className={`w-full h-56 object-cover transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        alt={`${item.title}`}
        onLoad={() => setLoaded(true)}
        priority={idx === 0}
        loading={idx === 0 ? "eager" : "lazy"}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      />
      {/* Play button overlay */}
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-all group-hover:bg-black/20">
        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-[#173366] shadow-md pl-1 transition-transform group-hover:scale-110">
          <FaPlay className="text-lg" />
        </div>
      </div>
      {/* Title overlay */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
        <p className="text-white text-sm font-medium drop-shadow">{item.title}</p>
      </div>
    </div>
  );
}

export default function VideoSlider() {
  const sliderRef = useRef(null);
  const [playIndex, setPlayIndex] = useState(null);
  const [mounted, setMounted] = useState(false);
  const intervalRef = useRef(null);
  const isPlayingRef = useRef(false);

  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 640px)");
  const visibleSlides = isDesktop ? 3 : isTablet ? 2 : 1;

  useEffect(() => {
    setMounted(true);
  }, []);

  // Auto-scroll when no video is playing
  const startAutoScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (isPlayingRef.current) return;

      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const scrollStep = slider.clientWidth / visibleSlides;
      let nextScrollLeft = slider.scrollLeft + scrollStep;

      if (nextScrollLeft > maxScrollLeft - 5) {
        nextScrollLeft = 0;
      }

      slider.scrollTo({ left: nextScrollLeft, behavior: "smooth" });
    }, 2500);
  };

  useEffect(() => {
    if (!mounted) return;
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visibleSlides, mounted]);

  const handlePlay = (idx) => {
    setPlayIndex(idx);
    isPlayingRef.current = true;
    clearInterval(intervalRef.current);
  };

  const handlePause = () => {
    isPlayingRef.current = false;
    setPlayIndex(null);
    startAutoScroll();
  };

  if (!mounted) {
    return <VideoSkeletonRow count={3} aspect="h-56" />;
  }

  const widthClass =
    visibleSlides === 1 ? "w-full" : visibleSlides === 2 ? "w-1/2" : "w-1/3";

  return (
    <div className="w-full overflow-hidden py-6">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-visible-scrollbar snap-x snap-mandatory touch-pan-x overscroll-x-none"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {VIDEOS.map((item, idx) => (
          <div
            key={idx}
            onClick={() => playIndex !== idx && handlePlay(idx)}
            className={`group snap-start flex-shrink-0 bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer ${widthClass}`}
          >
            {playIndex === idx ? (
              <video
                className="w-full h-56 object-cover"
                src={item.url}
                controls
                muted
                poster={typeof item.thumb === "string" ? item.thumb : item.thumb.src}
                onPlay={() => handlePlay(idx)}
                onPause={handlePause}
                onEnded={handlePause}
                aria-label={item.title}
              />
            ) : (
              <SliderImage item={item} idx={idx} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

