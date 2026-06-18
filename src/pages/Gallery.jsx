"use client";
import { useState } from "react";
import Image from "next/image";
import gallery1 from "../assets/gallery/1.webp";
import gallery2 from "../assets/gallery/2.webp";
import gallery3 from "../assets/gallery/3.webp";
import gallery4 from "../assets/gallery/4.webp";
import gallery5 from "../assets/gallery/5.webp";
import gallery6 from "../assets/gallery/6.webp";
import gallery7 from "../assets/gallery/7.webp";
import gallery8 from "../assets/gallery/8.webp";
import gallery9 from "../assets/gallery/9.webp";
import gallery10 from "../assets/gallery/10.webp";
import gallery11 from "../assets/gallery/11.webp";
import gallery12 from "../assets/gallery/12.webp";
import gallery13 from "../assets/gallery/13.webp";
import gallery14 from "../assets/gallery/14.webp";
import gallery15 from "../assets/gallery/15.webp";
import gallery16 from "../assets/gallery/16.webp";
import gallery17 from "../assets/gallery/17.webp";
import gallery18 from "../assets/gallery/18.webp";
import gallery19 from "../assets/gallery/19.webp";
import gallery20 from "../assets/gallery/20.webp";
import gallery21 from "../assets/gallery/21.webp";
import gallery22 from "../assets/gallery/22.webp";
import gallery23 from "../assets/gallery/23.webp";
import gallery24 from "../assets/gallery/24.webp";
import gallery25 from "../assets/gallery/25.webp";
import gallery26 from "../assets/gallery/26.webp";
import gallery27 from "../assets/gallery/27.webp";
import gallery28 from "../assets/gallery/28.webp";
import gallery29 from "../assets/gallery/29.webp";
import gallery31 from "../assets/gallery/31.webp";
import gallery32 from "../assets/gallery/32.webp";
import gallery33 from "../assets/gallery/33.webp";
import gallery34 from "../assets/gallery/34.webp";
import gallery35 from "../assets/gallery/35.webp";
import gallery36 from "../assets/gallery/36.webp";
import gallery37 from "../assets/gallery/37.webp";
import gallery38 from "../assets/gallery/38.webp";
import gallery39 from "../assets/gallery/39.webp";
import gallery40 from "../assets/gallery/40.webp";
import Banner from "@/assets/gallery/Banner.webp";
import { motion } from "framer-motion";
const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
  gallery11,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery31,
  gallery32,
  gallery33,
  gallery34,
  gallery35,
  gallery36,
  gallery37,
  gallery38,
  gallery39,
  gallery39,
  gallery40,
];

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState(18);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 6);
  };

  return (
    <>
      {/* Banner Section */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28 md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-80"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-40 mt-28">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-semibold text-3xl md:text-4xl">Moments of Hope and Happiness</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements Section */}


      <div className=" container mx-auto mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">
              Baby's smile in every hopeless home marks our proudest milestone.

            </h2>
            <h2 className="font-outfit font-semibold lg:block mt-2"> Our Achievements</h2>
          </div>

          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-[#173366] text-center">
                        3.5L+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Infertile Couples Counselled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="icon mr-4"></div>
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-center text-[#173366]">
                        1L+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Laparoscopic Surgeries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-center text-[#173366]">
                        35k+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">IUI Babies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-center text-[#173366]">
                        60k+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">IVF Babies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col items-center">
            <h2 className=" font-semibold my-8">A Glimpse into Joyful Beginnings</h2>

            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 p-4">
              {images.slice(0, visibleImages).map((src, index) => (
                <div key={index} className="mb-4 break-inside-avoid">
                  <Image
                    src={src}
                    alt={`Gallery Image ${index + 1}`}
                    className="w-full h-auto rounded-lg shadow-lg"
                    loading="lazy"
                    width={500}
                    height={300}
                  />
                </div>
              ))}
            </div>

            {/* Load More Button */}
            <div className="relative w-full flex justify-center mt-6">
              <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
              {visibleImages < images.length && (
                <button
                  onClick={loadMore}
                  className="relative z-10 px-6 py-2 button-all"
                >
                  Load More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
