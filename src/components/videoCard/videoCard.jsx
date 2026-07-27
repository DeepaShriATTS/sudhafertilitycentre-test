'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { Dialog } from '@headlessui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Play from '../../assets/Home/play-btn.svg';
import Image from 'next/image';

export const getYoutubeThumbnail = (videoUrl) => {
  if (videoUrl.includes('embed/')) {
    const videoId = videoUrl.split('embed/')[1].split('?')[0];
    return `https://img.youtube.com/vi/${videoId}/0.jpg`;
  } else {
    console.error('Invalid YouTube embed URL');
    return 'https://via.placeholder.com/300x200.png?text=Invalid+Video';
  }
};

export const videos = [
  {
    id: 1,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/Ma6II9Cw4MY?si=XkcBXcm7N4MWJgi8"),
    videoUrl: "https://www.youtube.com/embed/Ma6II9Cw4MY?si=XkcBXcm7N4MWJgi8",
    title: "Video 1",
    description: "This is the first video description."
  },
  {
    id: 3,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/h71m87dx-3E?si=0hChZTJ2zEZ6KK31"),
    videoUrl: "https://www.youtube.com/embed/h71m87dx-3E?si=0hChZTJ2zEZ6KK31",
    title: "Video 3",
    description: "This is the third video description."
  },
  {
    id: 4,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/1IBiq-xw5Q8?si=LxpDRJ7BAt-WELtC"),
    videoUrl: "https://www.youtube.com/embed/1IBiq-xw5Q8?si=LxpDRJ7BAt-WELtC",
    title: "Video 4",
    description: "This is the fourth video description."
  },
  {
    id: 5,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/llt2lwBjACc?si=lew9IAGGNrZGx3Y7"),
    videoUrl: "https://www.youtube.com/embed/llt2lwBjACc?si=lew9IAGGNrZGx3Y7",
    title: "Video 5",
    description: "This is the fifth video description."
  },
  {
    id: 6,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/fAoaLHKsQKk?si=oYJ3U2fE1zbu7QfL"),
    videoUrl: "https://www.youtube.com/embed/fAoaLHKsQKk?si=oYJ3U2fE1zbu7QfL",
    title: "Video 5",
    description: "This is the fifth video description."
  },
  {
    id: 7,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/cntFBWcv62A?si=3-7YuPLz0-Gh1cXT"),
    videoUrl: "https://www.youtube.com/embed/cntFBWcv62A?si=3-7YuPLz0-Gh1cXT",
    title: "Video 5",
    description: "This is the fifth video description."
  },
  {
    id: 8,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/Cp5yj5Fq7sM?si=SVl8ulTYlCO7dKx9"),
    videoUrl: "https://www.youtube.com/embed/Cp5yj5Fq7sM?si=SVl8ulTYlCO7dKx9",
    title: "Video 5",
    description: "This is the fifth video description."
  },
  {
    id: 9,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/6jcLO3srNto?si=U1MoNxYOYxnExBOZ"),
    videoUrl: "https://www.youtube.com/embed/6jcLO3srNto?si=U1MoNxYOYxnExBOZ",
    title: "Video 5",
    description: "This is the fifth video description."
  },
  {
    id: 10,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/3vMPqaEFzfw?si=EHeX9I3vR9yCwMx2"),
    videoUrl: "https://www.youtube.com/embed/3vMPqaEFzfw?si=EHeX9I3vR9yCwMx2",
    title: "Video 5",
    description: "This is the fifth video description."
  },
  {
    id: 11,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/IBdO2ZKyFH8?si=Rh6C6E15lD4rJtK-"),
    videoUrl: "https://www.youtube.com/embed/IBdO2ZKyFH8?si=Rh6C6E15lD4rJtK-",
    title: "Video 5",
    description: "This is the fifth video description."
  },
  {
    id: 12,
    thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/zM5GIh-qUGQ?si=vdbb6_sGaHw3uMHI"),
    videoUrl: "https://www.youtube.com/embed/zM5GIh-qUGQ?si=vdbb6_sGaHw3uMHI",
    title: "Video 5",
    description: "This is the fifth video description."
  },
];

const HOVER_PREVIEW_DELAY_MS = 1;

export default function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videosPerPage, setVideosPerPage] = useState(1);
  const [previewId, setPreviewId] = useState(null); // which card is showing a live preview
  const hoverTimerRef = useRef(null);

  useEffect(() => {
    const updateVideosPerPage = () => {
      if (window.innerWidth >= 1024) {
        setVideosPerPage(3);
      } else if (window.innerWidth >= 768) {
        setVideosPerPage(2);
      } else {
        setVideosPerPage(1);
      }
    };

    updateVideosPerPage();
    window.addEventListener('resize', updateVideosPerPage);
    return () => window.removeEventListener('resize', updateVideosPerPage);
  }, []);

  // Always clear any pending timer on unmount so we never call setState
  // on an unmounted component.
  useEffect(() => {
    return () => clearTimeout(hoverTimerRef.current);
  }, []);

  const totalVideos = videos.length;

  const nextSlide = () => {
    if (currentIndex + 1 < totalVideos) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Start the inline preview for a card. Only ONE iframe is ever mounted
  // at a time (previewId holds a single id), so hovering across the row
  // never loads more than one extra network request/iframe at once.
  const startPreview = useCallback((id) => {
    clearTimeout(hoverTimerRef.current);
    hoverTimerRef.current = setTimeout(() => {
      setPreviewId(id);
    }, HOVER_PREVIEW_DELAY_MS);
  }, []);

  const stopPreview = useCallback(() => {
    clearTimeout(hoverTimerRef.current);
    setPreviewId(null);
  }, []);

  const openModal = (video) => {
    // Stop any live hover/focus preview so it isn't playing silently
    // in the background behind the modal.
    stopPreview();
    setSelectedVideo(video.videoUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedVideo(null);
  };

  const visibleVideos = videos.slice(currentIndex, currentIndex + videosPerPage);

  return (
    <div className="relative w-full max-w-7xl mx-auto p-4">
      <div className="flex gap-4 overflow-hidden">
        {visibleVideos.map((video, index) => {
          const isPreviewing = previewId === video.id;
          // Only the very first card of the very first page is a realistic
          // LCP candidate, so only it gets `priority` / eager loading.
          // Every other thumbnail stays lazy so it doesn't compete for
          // bandwidth on first paint.
          const isLikelyLCP = currentIndex === 0 && index === 0;

          return (
            <div
              key={video.id}
              className="relative bg-white shadow-lg rounded-[16px] overflow-hidden w-full lg:w-1/3"
              onMouseEnter={() => startPreview(video.id)}
              onMouseLeave={stopPreview}
              onFocus={() => startPreview(video.id)}
              onBlur={stopPreview}
            >
              {isPreviewing ? (
                <iframe
                  // Muted + no controls: this is a silent hover preview,
                  // not the "real" playback experience (that happens in
                  // the modal, on purpose, after a manual play tap).
                  src={`${video.videoUrl}&autoplay=1&mute=1&controls=0&modestbranding=1&playsinline=1`}
                  className="w-full h-52 pointer-events-none"
                  allow="autoplay; encrypted-media"
                  title={video.title}
                />
              ) : (
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-52 object-cover"
                  width={500}
                  height={300}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={isLikelyLCP}
                  fetchPriority={isLikelyLCP ? 'high' : 'auto'}
                  loading={isLikelyLCP ? undefined : 'lazy'}
                />
              )}

              <button
                className={`absolute inset-0 flex items-center justify-center text-white text-3xl w-full m-auto transition-colors ${
                  isPreviewing ? 'bg-transparent' : 'bg-black bg-opacity-45'
                }`}
                onClick={() => openModal(video)}
                aria-label={`Play ${video.title}`}
              >
                {/* While a muted preview is already playing underneath,
                    don't cover it with our own dimmed "click to play"
                    button — that's what made it look like the video was
                    paused/stuck behind a play icon. The button itself
                    stays as an invisible full-card hit target so a click
                    anywhere still opens the modal. */}
                {!isPreviewing && <Image src={Play} alt="play btn" />}
              </button>
            </div>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-end items-center mt-4 gap-3">
        <p className="text-center text-gray-600 mt-2">
          {Math.min(currentIndex + videosPerPage, totalVideos)}/{totalVideos}
        </p>
        <div className="w-24 sm:w-[150px] md:w-[200px] mx-2 sm:mx-4 h-1 bg-gray-300 rounded-full relative">
          <div
            className="absolute top-0 left-0 h-1 bg-[#173366] rounded-full"
            style={{ width: `${((currentIndex + videosPerPage) / totalVideos) * 100}%` }}
          ></div>
        </div>
        <button
          onClick={prevSlide}
          disabled={currentIndex === 0}
          className="text-xl p-2 bg-gray-200 rounded-full"
          aria-label="Previous slide"
        >
          <IoIosArrowBack aria-hidden="true" />
        </button>
        <button
          onClick={nextSlide}
          disabled={currentIndex + videosPerPage >= totalVideos}
          className="text-xl p-2 bg-gray-200 rounded-full"
          aria-label="Next slide"
        >
          <IoIosArrowForward aria-hidden="true" />
        </button>
      </div>

      {/* Modal for Video */}
      <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-[999]">
        {/* Backdrop */}
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" />

        {/* Modal Container */}
        <div className="fixed inset-0 flex items-center justify-center p-3 sm:p-4 md:p-6">
          <Dialog.Panel className="relative w-full max-w-5xl rounded-xl overflow-hidden bg-black shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-3 sm:right-3 z-10
                 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center
                 rounded-full bg-black/70 text-white
                 hover:bg-black transition"
            >
              ✕
            </button>

            {/* Responsive 16:9 Video */}
            <div className="relative w-full aspect-video">
              {selectedVideo && (
                <iframe
                  // Deliberately NOT appending &autoplay=1 here: the
                  // hover/focus preview already gave a silent muted taste,
                  // so the modal opens paused and the user presses play
                  // themselves (with sound) via YouTube's own controls.
                  src={selectedVideo}
                  title="YouTube Video"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 h-full w-full"
                />
              )}
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}