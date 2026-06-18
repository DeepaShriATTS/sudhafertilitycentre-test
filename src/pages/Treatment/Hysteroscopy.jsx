"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/IVF/Banner.webp";
import About from "@/assets/Treatments/Hysteroscopy/About.webp";
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
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/contact/contactForm";

const facilities = [
  {
    title: "Advanced hysteroscopy technology suite.",
    position: "left-10 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "High-resolution imaging equipment",
    position: "left-10 top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "Dedicated rooms for pre- and post-procedure resting.",
    position: "-left-28 top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "Fully-equipped operating rooms.",
    position: "right-24 top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Hygienic environment.",
    position: "right-[148px] top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Experienced gynaecologists and fertility specialists in India.",
    position: "-right-28  top-[275px] ",
    rounded: "rounded-bl-none",
  },
];

function Hysteroscopy() {
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
              <h1 className="font-outfit font-semibold  mt-3">
              Hysteroscopy
              
              </h1>
              <p className="mt-4 text-[22px] leading-[1.6] ">
              Find Hope and Healing Through Precision.
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About About Hysteroscopy */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <h2 className="font-semibold flex justify-center text-center lg:hidden">
            About Hysteroscopy
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image src={About} alt="About IUI" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    About Hysteroscopy
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    Hysteroscopy is a diagnostic procedure that is performed to
                    examine and identify the issues and complications inside the
                    uterus and cervix. Hysteroscopy is performed using a tool
                    called a hysteroscope, a thin, lighted tube. This will be
                    inserted through a woman’s vagina by the surgical experts to
                    diagnose the problems. This process is usually undergone for
                    both surgical and diagnostic purposes.
                  </p>
                  <p className="mt-2">
                    The fertility specialists suggest performing hysteroscopy
                    for patients who have a history of multiple unsuccessful IVF
                    attempts to identify the problem and assess if the patient’s
                    uterus is fit for childbearing.
                  </p>
                </div>
                <div className="mt-5">
                  <Button title="Get a Free Consultation" link="#contactus"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hysteroscopy in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className="font-semibold flex justify-center text-center mt-14 lg:hidden">
            Hysteroscopy in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    Hysteroscopy in Sudha Fertility Centre
                  </h2>
                </div>
                <div className="Accordian mt-4">
                  <p className="text-gray-600">
                    Sudha Fertility Centre is equipped with the best fertility
                    doctors in India, who are determined to help you in your
                    journey towards parenthood. Our fertility experts suggest
                    performing hysteroscopy under the following circumstances.
                  </p>

                  <ul className="text-gray-600 text-[18px] font-[400] space-y-2 list-inside list-disc mt-3">
                    <li>Abnormal bleeding</li>
                    <li>Too much menstrual bleeding</li>
                    <li>Post-menopausal bleeding</li>
                    <li>Recurrent miscarriages</li>
                    <li>Uterine fibroids and polyps</li>
                    <li>Causes of infertility</li>
                    <li>Misplaced IUD</li>
                    <li>Any uterine abnormalities</li>
                    <li>Extreme pelvic pain</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 flex items-center justify-center mt-6 md:mt-0">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image
                    src={Microscope}
                    alt="IVF in Sudha Fertility Centre"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="description shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)] rounded-lg p-6 md:mt-[100px] mt-[70px] px-4 sm:px-6 md:px-8">
            <p className="text-gray-600">
              Hysteroscopy is done for both diagnostic and surgical procedures.
              The diagnostic process is done to identify the structural
              irregularities in the uterus that may cause abnormal bleeding. It
              may also be used to confirm other test results such as ultrasound
              or hysterosalpingography (HSG). HSG is done to check whether the
              fallopian tubes are blocked.
            </p>

            <p className="text-gray-600 mt-3">
            Operative hysteroscopy is done by the best surgeons of Sudha Fertility Centre to treat abnormalities diagnosed during diagnostic hysteroscopy. Operative hysteroscopy is not advised to be performed on pregnant women, and when there is an inflammation on the cervix or pelvis. Patients who are allergic to nickel or radioactive contrast dye are also not encouraged to undergo this procedure. It is also not to be performed on those suffering from uterine cancer. 
            </p>
          </div>
        </div>
      </div>

      {/*  Why choose us for Hysteroscopy?  */}
      <div className="container mx-auto md:mt-[100px] mt-[50px]  relative h-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="Title lg:hidden text-center">
            <h2 className=" font-semibold mb-3">
              Why choose us for Hysteroscopy?
            </h2>
            <h4 className="font-semibold mt-2 ">
              Uncover the hope for a healthier generation with Hysteroscopy.
            </h4>
          </div>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full flex justify-center items-center">
                  <Image
                    src={WhyChoose}
                    alt="About IUI"
                    className="rounded-2xl mt-5"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title hidden lg:block">
                  <h2 className=" font-semibold mb-3">
                    Why choose us for Hysteroscopy?
                  </h2>
                  <h4 className="font-semibold mt-2 ">
                    Uncover the hope for a healthier generation with
                    Hysteroscopy.
                  </h4>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    As the best fertility centre in India, Sudha Fertility
                    Centre has performed more than thousands of successful
                    hysteroscopies with the best fertility doctors in India.
                    Hysteroscopy has helped thousands of couples to identify the
                    root cause of infertility and help them achieve their dream
                    of parenthood in reality. Unlike other, more invasive
                    gynecological procedures, hysteroscopy offers a quick
                    recovery time, minimal discomfort, and a detailed view of
                    the uterine cavity, allowing our specialists to diagnose and
                    address issues with precision and care. Every step we take
                    is dedicated to helping you on your journey to parenthood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className=" bg-[#F0F5FF] md:mt-[100px] mt-[70px]">
        <div className="container mx-auto relative   mb-9">
          <div className="max-w-7xl mx-auto px-4 mt-10 sm:px-6 pt-10 lg:px-8 h-full">
            <h2 className=" font-semibold text-center mb-12">Facilities</h2>

            {/* Desktop Layout - For Lg screen only */}
            <div className="relative hidden md:flex  2xl:hidden justify-center items-center">
              <div className="flex justify-center items-center gap-12 ">
                <div className="left space-y-5 flex-1">
                  {facilities.slice(0, 3).map((facility, index) => (
                    <div key={index} className="flex justify-center">
                      <div className=" rounded-bl-none w-full rounded-2xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
                        <p className="text-sm font-medium text-gray-800 text-center flex justify-center items-center">
                          {facility.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="Image flex justify-center items-center flex-1">
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
      <div className="container mx-auto md:mt-[100px] mt-[70px]">
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

            <div className="relative h-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 mt-12">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="font-outfit font-semibold  text-white">
                  Welcome Your Baby into Your Home
                </h2>
              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                <Button title="Book Your Free Appointment" link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact  */}
      <div className="md:mt-[100px] mt-[70px]" id="contactus">
        <ContactForm />
      </div>

      {/* MarqueeComponent */}
      <section className="md:mt-[100px] mt-[70px] md:mb-[100px] mb-[70px]">
        {/* <div className="container mx-auto">
          <div className=" mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
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
          {/* </div>
        </div> */}
      </section>
    </>
  );
}

export default Hysteroscopy;
