"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/Blastocyst/Banner.webp";
import About from "@/assets/Treatments/LAH/About.webp";
import Microscope from "@/assets/Treatments/IVF/microscope.webp";
import WhyChoose from "@/assets/Treatments/IVF/WhyChoose.webp";
import ChooseIVF from "@/assets/Treatments/IVF/ChooseIVF.webp";
import Tick from "@/assets/Treatments/IVF/Tick.svg";
import Facilities from "@/assets/Treatments/IVF/Facilities.webp";
import PrepareIVF from "@/assets/Treatments/IVF/PrepareIVF.webp";
import Button from "@/components/button/button";
import Image from "next/image";
import FAQItem from "@/components/accordion";
import SubBanner from "@/assets/contact-us/SubBanner.webp";
import { Ambattur } from "@/middleware/imagesroute";
import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import Buttonbottm from "@/components/button";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/contact/contactForm";



const facilities = [
  {
    title: "High-precision laser system.",
    position: "left-32 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "Advanced embryo culture incubator",
    position: "left-16 top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "World-class microscopes and micro-manipulation tools",
    position: "-left-24 top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "Sophisticated laser control unit. ",
    position: "right-32 top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Comprehensive lab monitoring systems. ",
    position: "right-12 top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "High-tech laboratories.  ",
    position: "right-[135px]  top-[280px] ",
    rounded: "rounded-bl-none",
  },
];
function LaserAssistedHatching() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(0);
  const [faqIndex, setFaqIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleFAQ = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };
  const toggleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to initial count when showing less
      setShowAll(false); // Properly toggle state
    } else {
      setVisibleCount(Ambattur.faqs.length); // Show all FAQs
      setShowAll(true);
    }
  };
  return (
    <>
      {/* Banner */}
      <div className="relative ">
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

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-28 ">
            <div className="text-white text-center px-4 font-outfit mt-10">
              <h1 className="font-outfit font-semibold ">
              Laser-Assisted Hatching
              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
              Paving the way for your little miracle with innovative
              solutions.
                
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Laser-Assisted Hatching */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <h2 className="font-semibold flex justify-center text-center lg:hidden">
            About Laser-Assisted Hatching
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full flex justify-center items-center">
                  <Image src={About} alt="About Laser-Assisted Hatching" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    About Laser-Assisted Hatching
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    Laser-Assisted Hatching is an advanced technique used in IVF
                    to help embryos implant more effectively in the uterus. This
                    procedure involves using a focused laser beam to create a
                    small hole in the outer protective layer (zona pellucida)
                    surrounding the embryo. This helps the embryos “hatch” and
                    facilitates the process of implanting into the uterine wall.
                  </p>
                </div>
                <div className="mt-5">
                  <Button title="Get A Free Consultation" link="#contactus"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Laser-Assisted Hatching in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold flex justify-center text-center lg:hidden">
            Laser-Assisted Hatching in Sudha Fertility Centre
          </h2>
          <div className="max-w-6xl text-center">
            <div className="Title">
              <h2 className=" font-semibold hidden lg:block">
                Laser-Assisted Hatching in Sudha Fertility Centre
              </h2>
            </div>
            <div className="Accordian mt-4">
              <p className="text-gray-600 max-w-5xl mx-auto">
                As the best fertility centre in India, Sudha Fertility Centre is
                equipped with the best embryologists and fertility specialists
                in India. With world-class technology, our embryologists undergo
                the process of laser-assisted hatching with precision and care.
              </p>
            </div>
          </div>
          <div className="main flex flex-col md:flex-row mt-8">
            <div className="flex-1 px-4">
              <div>
                <div className="description ">
                  <div className=" flex items-center gap-4   rounded-lg  hover:bg-[#F0F5FF] cursor-pointer p-5">
                    <span className="text-lg font-semibold bg-[#E7E7E7]  w-10 h-10 p-3 flex items-center justify-center rounded-full">
                      01
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">Embryo Culture</h3>
                      <p className="text-gray-600">
                        The embryos are cultured in the lab for a few days after
                        fertilization.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 p-4 hover:bg-[#F0F5FF] rounded-lg cursor-pointer">
                    <span className="text-lg font-semibold bg-[#E7E7E7] w-10 h-10 flex p-3 items-center justify-center rounded-full">
                      02
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">
                          Laser Application
                      </h3>
                      <p className="text-gray-600">
                        Once the embryos reach the blastocyst stage, a laser is
                        used to create a small hole in the zona pellucida. The
                        laser is precisely aimed at a single spot to avoid
                        damaging the embryo.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center gap-4 p-4 hover:bg-[#F0F5FF] rounded-lg cursor-pointer">
                    <span className="text-lg font-semibold bg-[#E7E7E7] p-3 w-10 h-10 flex items-center justify-center rounded-full">
                      03
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">Embryo Transfer</h3>
                      <p className="text-gray-600">
                        After the process of laser-assisted hatching, the embryo
                        is transferred into the woman’s uterus.
                      </p>
                    </div>
                  </div>
                  <div className="description  p-2 mt-3 px-4 sm:px-6 md:px-8">
                    <p className="text-gray-600">
                      As one of the leading fertility centres in India, we offer
                      laser-assisted hatching, backed by a team of highly
                      trained embryologists and fertility experts.
                    </p>
                  </div>
                  
                </div>
              </div>
              
            </div>
            

            <div className="flex-1">
              <div className=" lg:px-12 flex items-center justify-center mt-6 md:mt-0">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="relative w-full flex justify-center items-center">
                    <Image
                      src={Microscope}
                      alt="IVF in Sudha Fertility Centre"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>

      {/* Why choose us for Laser-Assisted Hatching */}
      <div className="container mx-auto   relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="Title  text-center mb-7">
            <h2 className=" font-semibold">
              Why choose us for Laser-Assisted Hatching
            </h2>
            <p className=" mt-2 text-gray-600">
              Hope is reborn with each successful laser-assisted hatching
            </p>
          </div>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full flex justify-center items-center">
                  <Image src={WhyChoose} alt="About IUI" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    At Sudha Fertility Centre, we are driven by the mission to
                    help you overcome your fertility challenges and achieve your
                    dream of parenthood into reality. Our experienced fertility
                    specialists and embryologists suggest laser-assisted
                    hatching under the following circumstances:
                  </p>

                  <ul className="text-gray-600 space-y-2 list-inside list-disc mt-3">
                    <li>Advanced maternal age (above 37 years). </li>
                    <li>Thick or abnormal eggshell </li>
                    <li>Poor quality or slow-developing embryos </li>
                    <li>Patient with 2 or more previous failed IVF cycles. </li>
                    <li>Increased follicle-stimulating hormone (FSH)</li>
                  </ul>

                  <p className="description mt-4 text-gray-600">
                    This process reduces the risk of damaging the embryo and may
                    result in higher pregnancy success rates. If you’re over 37
                    and planning for pregnancy this might be a perfect option
                    for a successful pregnancy on the first attempt. With a
                    patient-centric approach and cutting-edge technology, Sudha
                    Fertility Centre continues to help countless families
                    achieve their dream of parenthood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      
    <div className="bg-[#F0F5FF] mt-[70px] md:mt-[100px]">
      <div className="container mx-auto relative   mb-9">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold text-center mb-12">Facilities</h2>

          {/* Desktop Layout - For Lg screen only */}
          <div className="relative hidden md:flex  2xl:hidden justify-center items-center">
            <div className="flex justify-center items-center gap-12 ">
              <div className="left space-y-5 flex-1">
              {facilities.slice(0,3).map((facility, index) => (
              <div key={index} className="flex justify-center">
                <div className=" rounded-bl-none w-full rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
                  <p className="text-sm font-medium text-gray-800 text-center flex justify-center items-center">
                    {facility.title}
                  </p>
                </div>
              </div>
            ))}
              </div>
          <div className="Image flex justify-center items-center   flex-1">
              <div className="relative w-64">
                <Image
                  src={Facilities}
                  alt="Facilities"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>

            <div className="right space-y-5 flex-1">
              {facilities.slice(3).map((facility, index) => (
              <div key={index} className="flex justify-center">
                <div className=" rounded-bl-none w-full rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
                  <p className="text-sm font-medium text-gray-800 text-center flex justify-center items-center">
                    {facility.title}
                  </p>
                </div>
              </div>
            ))}
              </div>

         
            
          </div>
          </div>


          <div className="relative hidden 2xl:flex justify-center items-center">
            {/* Center Image */}
            <div className="relative w-96">
              <Image
                src={Facilities}
                alt="Facilities"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            {/* Facility Cards for Desktop */}
            <div className="absolute inset-0">
              {facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`absolute ${
                    facility.position
                  } transform -translate-y-1/2 z-10 
                  ${
                    facility.position.includes("left")
                      ? "mr-4 md:mr-8 pr-4"
                      : "ml-4 md:ml-8 pl-4"
                  }
                  ${index % 2 === 0 ? "mt-8" : "mt-0"}`}
                >
                  <div
                    className={`${facility.rounded} rounded-2xl bg-white shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 `}
                  >
                    <p className="text-base font-medium text-gray-800 text-nowrap bg-white">
                      {facility.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Layout - Grid with 2 columns */}
          <div className="md:hidden grid grid-cols-2 gap-4">
          

            {/* Facility Cards for Mobile */}
            {facilities.map((facility, index) => (
              <div key={index} className="flex justify-center">
                <div className=" rounded-bl-none w-full rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
                  <p className="text-sm font-medium text-gray-800 text-center flex justify-center items-center">
                    {facility.title}
                  </p>
                </div>
              </div>
            ))}


              {/* Center Image */}
              <div className="col-span-2 flex justify-center ">
              <div className="relative w-64">
                <Image
                  src={Facilities}
                  alt="Facilities"
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div> 

      {/* Welcome Your Baby into Your Home */}
      <div className="container mx-auto mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative min-h-[250px] rounded-lg shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${SubBanner.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative h-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 mt-10">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
                <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl text-white">
                  Welcome Your Baby into Your Home
                </h1>
              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                <Button title="Book Your Free Appointment" link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact  */}
      <section className="mt-[70px] md:mt-[100px]" id="contactus">

      <ContactForm/>
      </section>

      {/* MarqueeComponent */}
      <section className="mt-[70px] md:mt-[100px] mb-[70px] md:mb-[100px]">
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex md:flex-row  flex-col justify-center gap-4 items-center mt-4 mb-4">
        <h3 className=" font-semibold text-center ">
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

export default LaserAssistedHatching;
