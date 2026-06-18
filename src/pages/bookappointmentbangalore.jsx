"use client";
import React, { useState } from "react";
import Banner from "@/assets/book-appointment.webp";
import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";

import Thumbnail from "@/assets/book-appointment/thumbnail.webp";
import Playbtn from "@/assets/book-appointment/playbtn.svg";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import BookAppointmentFormbangalore from "@/components/contact/BookAppointmentFormbangalore";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur } from "@/middleware/imagesroute";

import Buttonbottm from "@/components/button";
const testimonials = [
  {
    name: "Akshay Appu",
    text: `The entire team of Sudha Hospitals Bangalore branch treats the patients as their family. I love the team and entire atmosphere.
We had a great experience with the entire team. Starting from reception till Housekeeping services, all are very good. They all treated us as their family members. After 3 years, now we are parents. Thank you so much Doctor, nurses and counseling for the support. Special thanks to admin Rufin mam. Best fertility centre in bangalore.`,
    // image: ProfileImage,
  },

  {
    name: "Valli Senna",
    text: `I have been married for 3 years and was trying to get pregnant, but all our efforts failed. Later, I heard about sudha fertility centre, Bangalore and visited the centre few months back. Doctor explained all the treatments in a very polite and understandable way. The team of Bangalore sudha treated me as their sister. I thank the entire team for the support through out my journey. Now I'm pregnant and I'm very happy to be a parent now. My entire family is celebrating sudha fertility centre, Bangalore to give us the great 😊 joy. I'll definitely recommend the sudha fertility centre to all. Because of the good nursing staff manonmani, experienced doctor, excellent counselor jincy and above all Rufin mam, the admin of the centre treated me very well, explained all our treatments and cleared all our doubts. Thank you so much to the entire team. Best fertility centre in Bangalore is sudha fertility centre.`,
    // image: ProfileImage,
  },
  {
    name: "Anandha gopala Pai",
    text: `We are happy to inform that we are parents after being trying for many months. The doctor and the entire team of sudha fertility centre, bangalore gave us full support and guidance especially the hope. The way they behaved with us was like a family. In all our reviews, consultations were good, the approach of all staff from reception to housekeeping was very good. Very good management of staff. We have been to many fertility centres, but sudha surpassed all. The cooperation from Admin, counselor, staff nurses are extraordinary. Our heartfelt gratitude to the entire sudha fertility, bangalore team. Explanation given by admin and counselor was satisfactory from the begining. The entire team is equal to god 🙏Kudos to the entire team.... 👍 I definitely and strongly recommend this centre to all who are in need of children. Best fertility centre. All our experiences can never be explained in this review. Do visit the centre and experience yourself. Finally, we are parents.... ♥️✨ thanks a lot team....`,
    // image: ProfileImage,
  },
  // Add more testimonials as needed
];

function Bookappointmentbangalore() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div>
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>
        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-28">
            <div className="text-white text-center px-4 font-outfit">
              <h2 className="font-semibold mb-3 text-[#FFC65C]">
                ಬೆಂಗಳೂರಿನಲ್ಲಿ
              </h2>
              <h1 className="font-outfit font-semibold ">
                ಸುಧಾ ಫರ್ಟಿಲಿಟಿ ಸೆಂಟರ್ ಆಯೋಜಿಸುತ್ತಿದೆ

              </h1>

              <h2 className="font-outfit font-semibold mt-3"> ಉಚಿತ ಫರ್ಟಿಲಿಟಿ ಸಮಾಲೋಚನಾ ಶಿಬಿರ </h2>

              <div className="button mt-8 flex justify-center items-center" >
                <Button style={{ fontFamily: "'Noto Sans Kannada', sans-serif" }}
                  title={"ಇಂದೇ ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಕಾಯ್ದಿರಿಸಿ "}
                  link="#contact-now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8">
          <h2 className="font-semibold text-md text-center">
            ಲಕ್ಷಾಂತರ ಕುಟುಂಬಗಳ ಸಂತೋಷದಿಂದ <br /> ಪ್ರೇರಿತರಾಗಿ
          </h2>
        </div>
      </div>

      <div className="container mx-auto md:mt-[70px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-9">
              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-[#173366] text-center">
                        3.5L+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 font-medium text-center">
                        ತಾನಹೀನ ದಂಪತಿಗಳಿಗೆ ಸಮಾಲೋಚನೆ
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
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        1L+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 font-medium text-center">
                        ಪರೊಸ್ಕೋಪಿಕ್ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆಗಳು
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        35k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 font-medium text-center">
                        (IUI) ಶಿಶುಗಳು
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        60k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 font-medium text-center">
                        (IVF) ಶಿಶುಗಳು
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="font-semibold">ತಾಯ್ತನದ ವರವನ್ನು ಪಾಲಿಸಿ</h2>
              <p className="mt-3">
                ಧಾ ಫರ್ಟಿಲಿಟಿ ಸೆಂಟರ್ ಆಯೋಜಿಸಿರುವ ಮಹಿಳೆಯರಿಗಾಗಿ ಉಚಿತ ವೈದ್ಯಕೀಯ ತಪಾಸಣೆ ಮತ್ತು ವಿಶೇಷ ಸಮಾಲೋಚನಾ ಶಿಬಿರ.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-3">
                <li>ಗರ್ಭಾಶಯದ ಚೀಲ ಸಮಸ್ಯೆಗಳು</li>
                <li>ಗರ್ಭಾಶಯದ ಫೈಬ್ರಾಯ್ಡ್‌ಗಳು</li>
                <li>ಗರ್ಭಾಶಯದ ಅಸಹಜತೆಗಳು</li>
                <li>ಬಂಜೆತನ ಚಿಕಿತ್ಸ</li>
              </ul>
              <p className="mt-3">
                ಜೆತನಕ್ಕೆ ಸಂಬಂಧಿಸಿದ ಎಲ್ಲಾ ಸ್ಥಿತಿಗಳಿಗೆ ಉಚಿತ ವೈದ್ಯಕೀಯ ಸಮಾಲೋಚನೆ.
              </p>
            </div>
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              {/* <Image
                src={Thumbnail}
                alt="Story Behind Sudha Fertility Centre"
                className="w-full h-auto rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=fAoaLHKsQKk",
                      "_blank"
                    )
                  }
                  className=" p-2 rounded-full shadow-lg"
                >
                  <Image src={Playbtn} alt="img" />
                </button>
              </div> */}


              <iframe className="w-full h-[350px] rounded-[30px]" src="https://www.youtube.com/embed/fAoaLHKsQKk?si=Cj8TUQ8Rs-XSoTeV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 rounded-[20px] bg-white shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)] p-4 md:p-8">
            <div className="relative w-full md:w-1/3  p-l-4 p-b-4 p-t-4">
              <h2 className="text-lg font-semibold md:text-left text-center text-[#173366]">
                ದಿನಾಂಕ:
              </h2>
              <h6 className="text-[#000000] md:text-left text-center font-semibold mt-3">
                ಮೇ 10
                <span className="font-bold text-[#173366]">
                  ರಿಂದ 12, 2025
                </span>{" "}

              </h6>
            </div>

          
            <div className="block md:hidden w-full h-px bg-gray-400"></div>

          
            <div
              className="hidden md:block w-px bg-gray-400 h-16 "
              style={{ margin: "0px" }}
            ></div>

            <div className="relative w-full md:w-1/3 p-l-4 p-b-4 p-t-4 ">
              <h2 className="text-lg font-semibold md:text-left text-center text-[#173366]">
                ಸಮಯ:
              </h2>
              <h6 className="text-[#000000] md:text-left text-center font-semibold mt-3">
                ಬೆಳಿಗ್ಗೆ <span className="font-semibold"> 8 </span> ರಿಂದ ಸಂಜೆ <span className="font-semibold">4</span>ರವರೆಗೆ
              </h6>
            </div>

          
            <div className="block md:hidden w-full h-px bg-gray-400"></div>

           
            <div
              className="hidden md:block w-px bg-gray-400 h-16"
              style={{ margin: "0px" }}
            ></div>

            <div className="relative w-full md:w-1/3 p-l-4 p-b-4 p-t-4 ">
              <h2 className="text-lg font-semibold md:text-left text-center text-[#173366]">
                ಸ್ಥಳ:
              </h2>
              <h6 className="text-[#000000] leading-[1.6] md:text-left text-center font-semibold mt-3">
                ಬಾಗಿಲು ಸಂಖ್ಯೆ - 1534, 21ನೇ ಮುಖ್ಯರಸ್ತೆ, 7ನೇ ಅಡ್ಡರಸ್ತೆ, 1ನೇ ವಲಯ, HSR ಲೇಔಟ್, ಬೆಂಗಳೂರು, ಕರ್ನಾಟಕ 560102
              </h6>
            </div>
          </div>
        </div>
      </div> */}



      <div className="container mx-auto mt-5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x-2 divide-solid divide-[#E7E7E7] p-4 md:p-6">
            {/* <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                ಪ್ರವೇಶ ಉಚಿತ
              </h4>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-center items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
               ೂರ್ವ ನೋಂದಣಿ ಕಡ್ಡಾಯ
              </h4>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                ೂರ್ವ ನೋಂದಣಿ ಕಡ್ಡಾಯ
              </h4>
            </div> */}
          </div>
          <p className="text-center">
            ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ,
            <span className="text-[#173366] border-b-2 border-[#173366]">
              <Link href={"tel:7670076006"} className=""> +91-76-7007-6006 </Link>
            </span>
            ಗೆ ಕರೆ ಮಾಡಿ.
          </p>
        </div>
      </div>

      <section className="md:mt-[100px] mt-[70px]">
        <div className="container mx-auto ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" text-center relative">
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  className="text-gray-500 hidden md:block hover:text-gray-700"
                >
                  <IoArrowBackSharp />
                </button>
                <motion.div
                  key={current}
                  className="p-[25px]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold mb-2 ">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-600 mb-4 mt-4">
                    {testimonials[current].text}
                  </p>
                </motion.div>

                <button
                  onClick={nextSlide}
                  className="text-gray-500 hidden md:block hover:text-gray-700"
                >
                  <IoArrowForwardOutline />
                </button>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevSlide}
                  className="text-gray-500 block md:hidden hover:text-gray-700"
                >
                  <IoArrowBackSharp />
                </button>
                <div className="flex justify-center items-center space-x-2 w-full">
                  <span>{String(current + 1).padStart(2, "0")}</span>
                  <div className="md:w-[200px] w-[100px] bg-gray-300 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-[#173366] h-full transition-all duration-300"
                      style={{
                        width: `${((current + 1) / testimonials.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span>{String(testimonials.length).padStart(2, "0")}</span>
                </div>
                <button
                  onClick={nextSlide}
                  className="text-gray-500 block md:hidden hover:text-gray-700"
                >
                  <IoArrowForwardOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="md:mt-[100px] mt-[70px]" id="contact-now">
        <BookAppointmentFormbangalore />
      </section>

      <section className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px]">
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
          <h2 className="text-2xl font-bold text-center ">
            Childless Couples to Happy Parents
          </h2>
          <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Ambattur.gallery}
          direction="right"
          speed="fast"
          className="custom-class"
        /> */}
        {/* </div>
          </div> */}
      </section>
    </div>
  );
}

export default Bookappointmentbangalore;
