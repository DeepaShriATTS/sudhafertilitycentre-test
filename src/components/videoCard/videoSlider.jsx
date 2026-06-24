"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import video1 from "../../assets/thumbs/video1.jpg";
import video2 from "../../assets/thumbs/video2.jpg";
import video3 from "../../assets/thumbs/video3.jpg";

export default function VideoSlider() {
  const sliderRef = useRef(null);
  const [playIndex, setPlayIndex] = useState(null);
  const intervalRef = useRef(null);
  const isPlayingRef = useRef(false);
  const [visibleSlides, setVisibleSlides] = useState(3); // track visible slides based on screen

  const videos = [
    {
      url: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/Sudha+mother+%26+child+care.mp4",
      thumb: video1,
    },
    {
      url: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/Sudha+Multi+Promo.mp4",
      thumb: video2,
    },
    {
      url: "https://ship-crm-img.s3.eu-north-1.amazonaws.com/Sudha+cancer+centre.mp4",
      thumb: video3,
    },
  ];

  // Detect visible slides count based on window width
  useEffect(() => {
    function updateVisibleSlides() {
      const width = window.innerWidth;
      if (width < 640) {
        setVisibleSlides(1); // mobile
      } else if (width < 1024) {
        setVisibleSlides(2); // tablet
      } else {
        setVisibleSlides(3); // desktop
      }
    }

    updateVisibleSlides();
    window.addEventListener("resize", updateVisibleSlides);
    return () => window.removeEventListener("resize", updateVisibleSlides);
  }, []);

  // Auto-scroll function
  const startAutoScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (isPlayingRef.current) return;

      const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
      const scrollStep = slider.clientWidth / visibleSlides; // width of one visible slide

      let nextScrollLeft = slider.scrollLeft + scrollStep;

      if (nextScrollLeft > maxScrollLeft - 5) {
        // -5 to avoid floating point precision issues
        nextScrollLeft = 0;
      }

      slider.scrollTo({
        left: nextScrollLeft,
        behavior: "smooth",
      });
    }, 2500); // 2.5 seconds, you can adjust
  };

  useEffect(() => {
    startAutoScroll();
    return () => clearInterval(intervalRef.current);
  }, [visibleSlides]);

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

  return (
    <>
    
       <style jsx global>{`
       
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
       
        .no-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    <div className="w-full overflow-hidden py-6">
      <div
        ref={sliderRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory touch-pan-x overscroll-x-none"
        style={{ WebkitOverflowScrolling: "touch" }} // for smooth iOS scroll
      >
        {videos.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handlePlay(idx)}
            className={`
              snap-start
              flex-shrink-0
              bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer
              ${visibleSlides === 1 ? "w-full" : ""}
              ${visibleSlides === 2 ? "w-1/2" : ""}
              ${visibleSlides === 3 ? "w-1/3" : ""}
            `}
          >
            {playIndex === idx ? (
              <video
                className="w-full h-56 object-cover"
                src={item.url}
                controls
                autoPlay
                onPlay={() => handlePlay(idx)}
                onPause={handlePause}
                onEnded={handlePause}
              />
            ) : (
              // <Image
              //   src={item.thumb}
              //   className="w-full h-56 object-cover"
              //   alt="Thumbnail"
              //   priority={idx === 0} // prioritize first image for faster load
              //   loading="eager"
              // />
                <Image
                  src={item.thumb}
                  className="w-full h-56 object-cover"
                  alt="Thumbnail"
                  priority={idx === 0}        // Only first image gets priority
                  loading={idx === 0 ? "eager" : "lazy"}  // Rest are lazy-loaded
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  placeholder="blur"          // Optional: shows blur while loading
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
            )}
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
