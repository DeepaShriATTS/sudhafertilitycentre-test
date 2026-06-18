'use client';

import { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Play from '../../assets/Home/play-btn.svg'
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
      id: 2,
      thumbnail: getYoutubeThumbnail("https://www.youtube.com/embed/oMipXnLGmj4?si=Fwrp8kK31DmJ3ytB"),
      videoUrl: "https://www.youtube.com/embed/oMipXnLGmj4?si=Fwrp8kK31DmJ3ytB",
      title: "Video 2",
      description: "This is the second video description."
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
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/llt2lwBjACc?si=lew9IAGGNrZGx3Y7"),
      videoUrl: "https://www.youtube.com/embed/llt2lwBjACc?si=lew9IAGGNrZGx3Y7",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 6,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/fAoaLHKsQKk?si=oYJ3U2fE1zbu7QfL"),
      videoUrl: "https://www.youtube.com/embed/fAoaLHKsQKk?si=oYJ3U2fE1zbu7QfL",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 7,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/cntFBWcv62A?si=3-7YuPLz0-Gh1cXT"),
      videoUrl: "https://www.youtube.com/embed/cntFBWcv62A?si=3-7YuPLz0-Gh1cXT",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 8,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/Cp5yj5Fq7sM?si=SVl8ulTYlCO7dKx9"),
      videoUrl: "https://www.youtube.com/embed/Cp5yj5Fq7sM?si=SVl8ulTYlCO7dKx9",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 9,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/6jcLO3srNto?si=U1MoNxYOYxnExBOZ"),
      videoUrl: "https://www.youtube.com/embed/6jcLO3srNto?si=U1MoNxYOYxnExBOZ",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 10,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/3vMPqaEFzfw?si=EHeX9I3vR9yCwMx2"),
      videoUrl: "https://www.youtube.com/embed/3vMPqaEFzfw?si=EHeX9I3vR9yCwMx2",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 11,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/IBdO2ZKyFH8?si=Rh6C6E15lD4rJtK-"),
      videoUrl: "https://www.youtube.com/embed/IBdO2ZKyFH8?si=Rh6C6E15lD4rJtK-",
      title: "Video 5",
      description: "This is the fifth video description."
    },
    {
      id: 12,
      thumbnail:getYoutubeThumbnail("https://www.youtube.com/embed/zM5GIh-qUGQ?si=vdbb6_sGaHw3uMHI"),
      videoUrl: "https://www.youtube.com/embed/zM5GIh-qUGQ?si=vdbb6_sGaHw3uMHI",
      title: "Video 5",
      description: "This is the fifth video description."
    },
  ];

  export default function VideoCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videosPerPage, setVideosPerPage] = useState(1);
  
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
  
    return (
      <div className="relative w-full max-w-7xl mx-auto p-4">
        <div className="flex gap-4 overflow-hidden">
          {videos.slice(currentIndex, currentIndex + videosPerPage).map((video, index) => (
            <div key={index} className="relative bg-white shadow-lg rounded-[16px] overflow-hidden w-full lg:w-1/3">
              <img src={video.thumbnail} alt={video.title} className="w-full h-52 object-cover" />
              <button
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-45 text-white text-3xl w-full  m-auto"
                onClick={() => {
                  setSelectedVideo(video.videoUrl);
                  setIsOpen(true);
                }}
              >
                <Image src={Play} alt="play btn" />
              </button>
            </div>
          ))}
        </div>
  
        {/* Navigation Buttons */}
        <div className="flex justify-end items-center mt-4 gap-3">
          <p className="text-center text-gray-600 mt-2">
            {Math.min(currentIndex + videosPerPage, totalVideos)}/{totalVideos}
          </p>
          <div className="w-[200px] mx-4 h-1 bg-gray-300 rounded-full relative">
            <div
              className="absolute top-0 left-0 h-1 bg-[#173366] rounded-full"
              style={{ width: `${((currentIndex + videosPerPage) / totalVideos) * 100}%` }}
            ></div>
          </div>
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="text-xl p-2 bg-gray-200 rounded-full"
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={nextSlide}
            disabled={currentIndex + videosPerPage >= totalVideos}
            className="text-xl p-2 bg-gray-200 rounded-full"
          >
            <IoIosArrowForward />
          </button>
        </div>
  
        {/* Modal for Video */}
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 ">
          <div className="p-4 rounded-lg relative ">
            <button onClick={() => setIsOpen(false)} className="absolute -top-5 right-0 text-white text-lg">✕</button>
            {selectedVideo && (
              <iframe
                width="100%"
                height="auto"
                src={selectedVideo}
                title="YouTube video"
                allow="autoplay; encrypted-media"
                className="rounded-lg w-96 xl:w-[800px] h-96 md:h-[300px] md:w-[500px] lg:h-[400px] lg:w-[700px] xl:h-[500px]"
              ></iframe>
            )}
          </div>
        </Dialog>
      </div>
    );
  }