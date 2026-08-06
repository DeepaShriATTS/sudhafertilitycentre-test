"use client";
import React, { useState } from "react";
import Banner from "@/assets/About/Banner.webp";
import DotBg from "@/assets/About/DotBg.webp";
import Button from "@/components/button/button";
import Founder from "@/assets/Home/Founder.webp";
import Image from "next/image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Tab1 from "@/assets/Home/tab1.webp";
import { motion } from "framer-motion";

import Vision from "@/assets/About/vision.svg";
import Value from "@/assets/About/value.svg";
import Mission from "@/assets/About/mission.svg";
import Award1 from "@/assets/About/award1.webp";
import Award2 from "@/assets/About/award2.webp";
import ManagementCards from "@/components/MangemntCard/ManagementCard";
import TimelineTabs from "@/components/TimelineTab/TimeLineTab";
import { MarqueeComponent } from "@/components/marqueeSlider";
import Buttonbottm from "@/components/button";
import { Ambattur } from "@/middleware/imagesroute";
import Thumbnail from "@/assets/About/dhanabagyam-thumbnail.png";
import sudhakarthumbnail from "@/assets/About/sudhakar-thumbnail.webp";
import ContactForm from "@/components/contact/contactForm";
import BookingButton from "@/components/button/bookingButton";
import Head from "next/head";
import Playbtn from "@/assets/book-appointment/playbtn.svg";

const cardData = [
  {
    headLine: "Four Decades of Compassionate Care in Parenthood",
    Image: Founder,
    subHead: "",
    description: {
      title: "",
      content:
        "With 40+ years of excellence in fertility and childcare, Sudha Fertility Centre is known as the best fertility centre in India. With an empathetic mission, Sudha was inaugurated in Erode in 1995 to help childless couples experience the joy of parenting. Today, we take the honor of having 40+ Branches across South India, Bangladesh, and Sri Lanka. We offer comprehensive care with no compromise in quality from metropolitan cities to rural areas. Let us help you overcome your emotional challenges and guide you through your parenthood journey. ",
    },
  },
  {
    headLine: "Being the Best by Providing the Best ",
    Image: Tab1,
    subHead: "",
    description: {
      title: "",
      content: `
      As the best fertility hospital in India, Sudha Fertility Centre is equipped with the best, from equipment to experts, with the intention to provide the best treatments to help you overcome your fertility challenges and make your dream of parenthood into reality.
    `,
      list: [
        "World-class facilities",
        "Best fertility doctors",
        "IVF specialists",
        "IUI doctors",
        "State-of-the-art technologies",
        "Finest embryologists",
        "Experienced gynecologists",
        "Meticulous surgeons",
      ],
    },
  },
  {
    headLine: " Inspired by Empathy, Driven by Purpose: ",
    Image: Tab1,
    subHead: "",
    description: {
      title: "",
      content: `
      We are inspired by the mission to help couples bring their parenthood dreams into reality. Our dedication, consistent care, and professionalism helped us remain the best fertility hospital in India. We have delivered 1 lakh+ healthy babies and brought happiness to the lives of thousands of families. Driven by the vision to vanish the stress and tears of couples longing for a baby. 
    `,
    },
  },
];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <>
      {/* Banner  */}
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
              <h1 className="font-outfit font-semibold ">
                Baby's smile in every hopeless home marks our proudest milestone.
              </h1>
              <h2 className="font-outfit font-semibold mt-3">
                Experiencing Parenthood is No More a Dream!
              </h2>
              <div className="button mt-8 mb-8 flex justify-center items-center">
                <Button
                  title={"Get a Free Consultation"}
                  link="/#contact-now"
                />
              </div>
              <div className="award mt-3 flex justify-center items-center gap-6">
                <div className="card ">
                  <div className="image">
                    <Image src={Award1} alt="Award" />
                  </div>
                </div>
                <div className="card ">
                  <div className="image">
                    <Image src={Award2} alt="Award" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Baby's smile in every hopeless home marks our proudest milestone.*/}
      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold">
              Our Achievements
              <span className="lg:block"></span>
            </h2>
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

          <div className="heading text-center xl:hidden ">
            <motion.h2
              className="font-outfit font-semibold sm-mt-14"
              key={`headline-${currentIndex}`} // Make key unique by appending index
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cardData[currentIndex].headLine}
            </motion.h2>
            <motion.p
              className="mt-2"
              key={`subheadline-${currentIndex}`} // Make key unique by appending index
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {cardData[currentIndex].subHead}
            </motion.p>
          </div>

          {/* Main Content */}
          <div className="main flex flex-col md:flex-row md:mt-[100px] mt-[70px]">
            {/* Image Section */}
            <div className="image w-full lg:w-1/2 flex justify-center items-center">
              <motion.div
                className="w-full  flex justify-center items-center"
              // key={`image-${currentIndex}`}
              // initial={{ opacity: 0, x: -20 }}
              // animate={{ opacity: 1, x: 0 }}
              // exit={{ opacity: 0, x: -100 }}
              // transition={{ duration: 0.5 }}
              >
                <Image
                  src={Founder}
                  alt="Founder"
                  className="rounded-xl object-cover w-full h-64 sm:h-80 md:h-96 lg:h-[300px] xl:h-[400px]"
                />
              </motion.div>
            </div>

            {/* Description Section */}
            <div className="description w-full lg:w-1/2 px-3 mt-4 lg:mt-2 xl:mt-5 lg:ms-5">
              {/* Desktop Heading */}
              <div className="heading hidden xl:block">
                <motion.h3
                  className="font-outfit font-semibold "
                  key={`desktop-headline-${currentIndex}`} // Make key unique by appending index
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cardData[currentIndex].headLine}
                </motion.h3>
                <motion.p
                  className="mt-2"
                  key={`desktop-subheadline-${currentIndex}`} // Make key unique by appending index
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cardData[currentIndex].subHead}
                </motion.p>
              </div>

              <div className="content rounded-xl font-outfit mt-3">
                <motion.h3
                  className="font-outfit font-semibold  text-[#173366]"
                  key={`description-title-${currentIndex}`} // Make key unique by appending index
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {cardData[currentIndex].description.title}
                </motion.h3>
                <motion.div
                  className="content rounded-xl font-outfit mt-3"
                  key={`description-content-${currentIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <p className="text-gray-600 mt-2">
                    {cardData[currentIndex].description.content}
                  </p>
                  {cardData[currentIndex].description.list && (
                    <ul className="list-disc pl-5 mt-2 text-gray-600">
                      {cardData[currentIndex].description.list.map(
                        (item, index) => (
                          <li key={index}>{item}</li>
                        ),
                      )}
                    </ul>
                  )}
                </motion.div>

                {/* Navigation */}
              </div>

              <div className="navigator flex mt-4 gap-6 justify-center lg:justify-end">
                <div
                  className="left shadow-xl rounded-full p-3 flex justify-center cursor-pointer"
                  onClick={handlePrev}
                >
                  <button>
                    <FaAngleLeft
                      className={`${currentIndex === 0 ? "text-gray-600" : ""}`}
                      size={20}
                    />
                  </button>
                </div>
                <div
                  className="next shadow-xl rounded-full p-3 flex justify-center cursor-pointer"
                  onClick={handleNext}
                >
                  <button>
                    <FaAngleRight
                      className={`${currentIndex === cardData.length - 1
                        ? "text-gray-600"
                        : ""
                        }`}
                      size={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div
        className=" container mx-auto md:mt-[100px] mt-[70px] inset-0 backdrop-blur-md bg-white/30"
        style={{
          background: `url(${DotBg.src}) center center no-repeat, #F0F5FF`,
          backgroundSize: "cover", // or 'fill' depending on your needs
        }}
      >
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="main flex flex-col lg:flex-row pt-12 pb-12">
            {/* Sticky Section */}
            <div className="first flex-1  max-h-screen z-10 md:sticky relative md:top-[120px] top-[0px] self-start">
              <div className="tiltle mt-3">
                <h2 className="font-outfit font-semibold">Our Mission</h2>
                <p className="mt-4 max-w-lg">
                  Sudha Fertility Centre is a trusted fertility hospital,
                  committed to providing compassionate and advanced care to
                  individuals and couples on their path to parenthood.
                </p>
                <div className="button mt-5">
                  <Button
                    title={"Get Free Consultation"}
                    link="/#contact-now"
                  />
                </div>
              </div>
            </div>

            {/* Non-sticky Section */}
            <div className="second flex flex-1 my-4">
              <div className="flex flex-col md:flex-row">
                <div className="vison-values flex-1">
                  <div className="vison bg-white shadow-lg rounded-xl">
                    <div className="tiles-1 p-4 rounded-lg font-outfit">
                      <div className="image">
                        <Image src={Vision} alt="Vison" />
                      </div>
                      <div className="main-tail flex mt-4">
                        <div className="content">
                          <div className="title">
                            <h3 className=" font-bold text-[#000]">Vision</h3>
                          </div>
                          <div className="des mt-2">
                            <p className="text-gray-600">
                              To support couples with compassionate care and
                              advanced fertility solutions to achieve their
                              dream of parenthood.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="value mt-10">
                    <div className="vison bg-white shadow-lg rounded-xl">
                      <div className="tiles-1 p-4 rounded-lg font-outfit">
                        <div className="image">
                          <Image src={Value} alt="Vison" />
                        </div>
                        <div className="main-tail flex mt-4">
                          <div className="content">
                            <div className="title">
                              <h3 className=" font-bold text-[#000]">Values</h3>
                            </div>
                            <div className="des mt-2">
                              <p className="text-gray-600">
                                Compassion, integrity, innovation, and
                                unwavering support in every step of the
                                parenthood journey
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mission flex-1 flex justify-center items-center mt-4 md:mt-0 md:ms-10">
                  <div className="mission">
                    <div className="vison bg-white shadow-lg rounded-xl">
                      <div className="tiles-1 p-4 rounded-lg font-outfit">
                        <div className="image">
                          <Image src={Mission} alt="Vison" />
                        </div>
                        <div className="main-tail flex mt-4">
                          <div className="content">
                            <div className="title">
                              <h3 className=" font-bold text-[#000]">
                                Mission
                              </h3>
                            </div>
                            <div className="des mt-2">
                              <p className="text-gray-600">
                                To provide empathetic, personalized care that
                                supports couples on their journey to parenthood.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Management */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold">Our Management</h2>

            <p className="max-w-5xl flex mx-auto mt-3 text-center justify-center">
              The Visionaries Powering Your Parenthood Dream
            </p>
          </div>
          <ManagementCards />
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <h2 className="text-center  font-bold mb-4">Our Journey</h2>
          <div className="flex flex-col md:flex-row items-center mt-[40px]">
            {/* IMAGE SECTION */}
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0 order-1 md:order-2">
              <Image
                src={sudhakarthumbnail}
                alt="Story Behind Sudha Fertility Centre"
                className="w-full h-auto rounded-lg"
              />

              {/* <div className="absolute inset-0 flex items-center justify-center">
      <button
        onClick={() =>
          window.open(
            "https://youtu.be/E6aWzjaivps?si=j_XV57-KpA7QVN7L",
            "_blank"
          )
        }
      >
        <Image src={Playbtn} alt="play btn" />
      </button>
    </div> */}
            </div>

            {/* TEXT SECTION */}
            <div className="w-full md:w-1/2 md:pl-10 pl-4 order-2 md:order-1">
              <p className="text-gray-600">
                <b>Dr. K. Sudhakar</b> Managing Director & Founder With over
                four decades of dedicated service in fertility care and
                childcare, <b>Dr. K. Sudhakar</b> founded Sudha Fertility Centre with a
                singular vision—to bring ethical, compassionate, and accessible
                fertility treatment to couples aspiring for parenthood.
                Established in <b>Erode in 1995,</b> Sudha began as a mission-driven
                initiative to support couples facing emotional and medical
                challenges on their fertility journey.
              </p>

              <p className="text-gray-600 mt-3">
                Under his leadership, Sudha Fertility Centre has grown into a
                trusted network with <b>40+ centres across South India, Bangladesh,
                  and Sri Lanka,</b> delivering consistent quality care across both
                urban and rural regions. Guided by empathy, clinical excellence,
                and patient-centric values, Dr. Sudhakar continues to lead Sudha
                in helping families take confident steps toward the joy of
                parenthood.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center mt-[40px]">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <Image
                src={Thumbnail}
                alt="Story Behind Sudha Fertility Centre"
                className="w-full h-auto rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://youtu.be/E6aWzjaivps?si=j_XV57-KpA7QVN7L",
                      "_blank",
                    )
                  }
                >
                  <Image src={Playbtn} alt="play btn" />
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-10 pl-4 ">
              <h3 className=" font-semibold mb-2">
                40+ Years of Excellence & Inauguration of New Branches
              </h3>
              <p className="text-gray-600">
                The journey of Sudha Fertility Centre began with an empathetic
                mission to help couples achieve their dream of parenthood. Dr.
                S. Dhanabagyam, a visionary in fertility care, the centre has
                been a beacon of hope for countless families. With decades of
                expertise, cutting-edge technology, and a legacy of bringing
                lakhs of babies into the world, Sudha Fertility Centre has
                transformed the lives of aspiring parents. Today, with 40+
                branches across South India and Sri Lanka, their unwavering
                commitment to excellence continues to make parenthood possible
                for many.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Tab  */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold">
              The Journey of Sudha Hospital
            </h2>
          </div>
          <div className="timeLine mt-[40px]">
            <TimelineTabs />
          </div>
        </div>
      </div>

      {/* MarqueeComponent */}
      <section className="md:mt-[100px] mt-[70px] md:mb-[100px] mb-[70px]">
        {/* <div className="container mx-auto">
          <div className=" mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class "
        />

        {/* <GallerySlider items={Ambattur.gallery} /> */}

        <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
          <h3 className=" font-bold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm
            text="Watch on Youtube "
            link="https://www.youtube.com/@sudhafertilitycentre"
          />
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
    </>
  );
}

export default About;
