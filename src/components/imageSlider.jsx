"use client";

import { useState } from "react";
// import { Button } from "ui.aceternity";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";

export default function ImageSlider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // const nextSlide = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevSlide = () => {
  //   setCurrentIndex((prevIndex) =>
  //     prevIndex === 0 ? images.length - 1 : prevIndex - 1
  //   );
  // };

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden">
      {/* Image Display */}
      <div className="relative flex items-center justify-center">
        <Image
          src={images}
          alt=""
          className="w-full  object-cover rounded-lg shadow-lg"
        />

        {/* Previous Button */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <FaChevronLeft className="text-xl text-gray-700" />
        </button> */}

        {/* Next Button */}
        {/* <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          <FaChevronRight className="text-xl text-gray-700" />
        </button> */}
      </div>

      {/* Pagination Dots */}
      {/* <div className="flex justify-center mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div> */}
    </div>
  );
}
