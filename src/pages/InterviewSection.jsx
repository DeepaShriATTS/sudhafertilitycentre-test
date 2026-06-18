"use client";
import React, { useState } from "react";
import Banner from "@/assets/contact-us/Banner.webp";
import Button from "@/components/button";

import { motion } from "framer-motion";
import Image from "next/image";
import Dhanabagyam from "@/assets/About/dhanabagyam.webp";
import Pradeepa from "@/assets/About/pradeepa.webp";
import Link from "next/link";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";
import Buttonbottm from "@/components/button";

import { MdArrowOutward } from "react-icons/md";
const managementData = [
  {
    id: 2,
    name: "Dr. S. Dhanabagyam ",
    role: "President, Sudha Hospitals Pvt ltd ",
    course: "MD, O&G, ART ",
    description: "",
    image: Dhanabagyam,
    website: "",
  },

  {
    id: 4,
    name: "Dr. S. Pradeepa",
    role: "Vice President, Sudha Hospitals Pvt ltd ",
    course: "DGO, DNB (OG), MNAMS, RCOG)",
    description: "",
    image: Pradeepa,
    website: "https://drpradeepa.com/",
  },
];

const images = [
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      src="https://www.youtube.com/embed/5ogetYWaiGE?si=R7dr-tddgoBtvoAj"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="w-full h-[220px] rounded-[14px]" // Fixed height
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]" //
      src="https://www.youtube.com/embed/KJtvttAZVuA?si=hLC06l181ItV5PmD"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/Sv7c-qP5cVU?si=9s9iv6RbsuKjlE2S"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/qtS5EK29wDc?si=DKzYJFeUUTyB4Eoz"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/_CE2nwRkzPs?si=xQLKIzBjbSdpREgn"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/E_r-Uvpolvs?si=_gNbu6te-ErqbuD1"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/GMCE8xDUfZE?si=f1cTdM1rA4hdGllR"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[16px]"
      src="https://www.youtube.com/embed/Ne4MMlfm2CM?si=ac7YK3fjxB7DPZHv"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/Sv7c-qP5cVU?si=TvTr6wwNrD-vqlIZ"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/D6lyAvoxJpg?si=9UoxkHqfHQ96bphg"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/_CE2nwRkzPs?si=NCXtlKr7U9azAXAm"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
  <div className="w-full max-w-lg mx-auto ">
    <iframe
      className="w-full h-[220px] rounded-[14px]"
      src="https://www.youtube.com/embed/EetKsCl6SM8?si=j4cClzjzVN5KQ0ho"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>,
];

function InterviewSection() {
  const [visibleImages, setVisibleImages] = useState(9);

  const loadMore = () => {
    setVisibleImages((prev) => prev + 6);
  };
  return (
    <>
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-16">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-outfit font-semibold ">
                Insights From The Best Fertility Experts of<br /> Sudha Fertility Centre
              </h1>

            </div>
          </div>
        </div>
      </div>

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
                      <p className="text-gray-600 text-center">
                        IUI Babies
                      </p>
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
                      <p className="text-gray-600 text-center">
                        IVF Babies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>
      <div className="container mx-auto  mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">
              Our Management
            </h2>
            <p className="text-gray-600 mt-3">
              The Visionaries Powering Your Parenthood Dream
            </p>

            <div className="flex justify-center mt-5">
              <div className="grid grid-cols-1 sm:grid-cols-2  gap-4 sm:gap-6">
                {managementData.map((member) => (
                  <div
                    key={member.id}
                    className="bg-white rounded-lg  overflow-hidden transform transition-all duration-300 "
                  >
                    <div className="group p-3 sm:p-4">
                      <div className="relative w-full aspect-square mb-3 sm:mb-4">
                        <Image
                          src={member.image}
                          alt={member.name}
                          className="rounded-lg object-cover"
                          // fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-outfit text-left font-semibold text-base sm:text-lg line-clamp-2">
                          {member.name}
                        </h3>
                        <p className=" text-left text-gray-600 line-clamp-2">
                          {member.role}
                        </p>
                        <p className=" text-left text-gray-600 line-clamp-2">
                          {member.course}
                        </p>
                        {member.website && (
                          <div className="text-left group-hover:opacity-100 transition-opacity duration-300">
                            <Link
                              href={member.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm sm:text-base font-semibold flex gap-2 text-blue-900 hover:underline"
                            >
                              Connect with Us <MdArrowOutward size={18} className="rotate-45" />
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <h2 className=" font-semibold my-6 text-center pb-8"> Hear From the Experienced Fertility Doctors of <br /> Sudha Fertility Centre</h2>

          {/* Masonry Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 gap-4 mt-3">
            {images.slice(0, visibleImages).map((element, index) => (
              <div key={index} className="mb-4 ">
                <div className="w-full max-w-lg mx-auto ">{element}</div>
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

      <section className="mt-[70px] md:mt-[100px] mb-[70px] md:mb-[100px]">
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
          <h3 className=" font-bold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Ambattur.gallery}
          direction="right"
          speed="fast"
          className="custom-class"
        /> */}
      </section>
    </>
  );
}

export default InterviewSection;
