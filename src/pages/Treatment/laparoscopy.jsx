"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/laparoscopy/Banner.webp";
import { MarqueeComponent } from "@/components/marqueeSlider";
import Button from "@/components/button/button";
import About from "@/assets/Treatments/laparoscopy/About.webp";
import Microscope from "@/assets/Treatments/IVF/microscope.webp";
import WhyChoose from "@/assets/Treatments/IVF/WhyChoose.webp";

import Facilities from "@/assets/Treatments/IVF/Facilities.webp";
import Image from "next/image";
import FAQItem from "@/components/accordion";
import SubBanner from "@/assets/contact-us/SubBanner.webp";
import { Ambattur } from "@/middleware/imagesroute";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ContactForm from "@/components/contact/contactForm";
const FAQ = [
  {
    question: "What is laparoscopy done for?",
    answer:
      "Laparoscopy is a minimally invasive surgery used to identify and treat infertility-related issues such as blocked tubes, endometriosis, or fibroids. At Sudha Fertility Centre, the best fertility centre in India, we perform a laparoscopy to diagnose and treat conditions affecting the reproductive organs with the best laparoscopic surgeons in India.",
  },
  {
    question: "Is laparoscopy surgery painful?",
    answer:
      "You will not feel the pain during the laparoscopy as it is a minimally invasive surgery performed under sedation. Some discomfort may occur post-surgery, but it’s manageable. Sudha Fertility Centre provides expert care to ensure a smooth recovery after the procedure.",
  },
  {
    question: "How does laparoscopy help to get pregnant?",
    answer:
      "Laparoscopy has helped many couples diagnose the underlying causes of infertility and prefer the personalised treatment plan. It is also used to treat conditions like endometriosis, blocked fallopian tubes, and fibroids, improving fertility. Sudha Fertility Centre, the best fertility centre in India, has performed 1 lakh+ successful laparoscopic surgeries",
  },
  {
    question: "Why would a woman need a laparoscopy after infertility?",
    answer:
      "Laparoscopy helps diagnose and treat conditions contributing to infertility, such as ovarian cysts, fibroids, and endometriosis. Sudha Fertility Centre, the best fertility centre in India, uses laparoscopy to address these issues and enhance fertility.",
  },
  {
    question: "Is laparoscopy a major surgery?",
    answer:
      "Laparoscopy is minimally invasive and considered a minor surgery compared to the traditional surgeries. At Sudha Fertility Centre, laparoscopy is performed by the best surgeons to diagnose and treat the conditions in the abdomen or pelvis.",
  },
  {
    question: "Is laparoscopy necessary for infertility?",
    answer:
      "Laparoscopy may be recommended for certain infertility cases, particularly if conditions like endometriosis, blocked fallopian tubes, or fibroids are suspected. The fertility specialist at Sudha Fertility Centre diagnoses and treats these conditions",
  },
  {
    question: "Why do doctors suggest laparoscopy?",
    answer:
      "Doctors suggest laparoscopy to diagnose or treat fertility problems, such as blocked tubes or endometriosis. At Sudha Fertility Centre, fertility experts perform laparoscopy under the guidance of ultrasound to diagnose and treat the conditions affecting fertility and help you in your parenthood journey.",
  },
  {
    question: "What is the cost of laparoscopic surgery?",
    answer:
      "The average cost of laparoscopy ranges between ₹50,000 to ₹1,50,000. But it may vary depending on the complexity of the procedure. Sudha Fertility Centre, the best fertility centre in India, offers affordable, high-quality laparoscopic services to treat fertility issues. ",
  },
  {
    question: "How long does it take to recover after laparoscopic surgery?",
    answer:
      "Recovery after laparoscopic surgery is generally quicker than traditional surgery. It takes just days to weeks, for a few patients it may take longer depending on the health condition. At Sudha Fertility Centre, we provide personalised post-operative care and help you heal and get back to your routine.",
  },
  {
    question: "Is complete bed rest needed after a laparoscopy surgery?",
    answer:
      "Complete bed rest is not necessary after laparoscopic surgery. While it is important to rest and avoid exhausting activities, most patients can resume light activities within a few days. At Sudha Fertility Centre, we provide personalised post-surgery guidance to ensure a smooth recovery.",
  },
  {
    question: "How successful is laparoscopy for fertility?",
    answer:
      "Laparoscopy is highly effective in diagnosing and treating fertility issues. Success rates depend on the condition being treated. Sudha Fertility Centre, the best fertility centre in India, uses laparoscopy to improve fertility outcomes.",
  },
  {
    question: "When should I do IVF after laparoscopy?",
    answer:
      "The timing for IVF after laparoscopy depends on your recovery and the treatment plan outlined by your fertility specialist. Generally, you may need to wait a few weeks after the surgery for full recovery before starting IVF. At Sudha Fertility Centre, we recommend a thorough follow-up consultation after laparoscopy to assess your healing and discuss the best timing for IVF.",
  },
];

function Laparoscopy() {
  const facilities = [
    {
      title: "World-class laparoscopic surgical equipment",
      position: "left-5 top-10",
      rounded: "rounded-br-none",
    },
    {
      title: "Fully-equipped operating rooms",
      position: "left-20 top-44",
      rounded: "rounded-br-none",
    },
    {
      title: "High-resolution imaging equipment",
      position: "left-9 top-2/4",
      rounded: "rounded-br-none",
    },
    {
      title: "Dedicated rooms for pre- and post-procedure resting",
      position: "-right-8 top-[70px] ",
      rounded: "rounded-bl-none",
    },
    {
      title: "Round-the-clock emergency medical support",
      position: "-right-1 top-[140px]  ",
      rounded: "rounded-bl-none",
    },
    {
      title: "State-of-the-Art Ultrasound Technology",
      position: "right-32  top-[280px] ",
      rounded: "rounded-bl-none",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(5);
  const [faqIndex, setFaqIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };
  const toggleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to initial count when showing less
      setShowAll(false); // Properly toggle state
    } else {
      setVisibleCount(Ambattur.faqs.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
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
              <h1 className="font-outfit font-semibold">
              Laparoscopy
                
              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
              Embrace the power of precision for a healthier tomorrow.
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Laparoscopy */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h3 className="font-semibold flex justify-center text-center lg:hidden">
            About Laparoscopy
          </h3>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full justify-center items-center">
                  <Image src={About} alt="About IUI" className="rounded-2xl " />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    About Laparoscopy
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    Laparoscopy is a minimally invasive procedure performed to
                    examine the stomach or pelvis. In this process, a thin
                    lighted tube with a video camera is inserted with a tiny
                    incision into your belly. In fertility treatments,
                    laparoscopy allows to diagnose the fertility problems that
                    are not identified in other tests. Issues like endometriosis
                    and pelvic adhesions can be detected only with the help of
                    surgical observance, done through laparoscopy. It also takes
                    very little time to recover, unlike traditional open
                    surgical procedures.
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

      {/*  Laparoscopy in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold flex justify-center text-center mt-14 lg:hidden">
            Laparoscopy in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    Laparoscopy in Sudha Fertility Centre
                  </h2>
                </div>
                <div className="Accordian mt-4">
                  <p className="text-gray-600">
                    A laparoscopy is performed under general anesthetic, so the
                    patient will be asleep during the procedure and will not
                    feel any pain. Sudha Fertility Centre is well equipped with
                    experienced laparoscopic surgeons to perform this procedure
                  </p>

                  <ul className="text-gray-600 space-y-2 list-inside list-disc mt-3">
                    <li>
                      The surgeon will make a small cut near the belly button of
                      the patient
                    </li>
                    <li>
                      Air will be pumped into the tummy through the cut making
                      it easier for the surgeons to examine the inside of the
                      tummy
                    </li>
                    <li>
                      A laparoscopy which is thin and flexible with a camera
                      inside will be inserted into the cut to make the inside of
                      the tummy visible on screen.{" "}
                    </li>
                    <li>
                      If the patient requires surgery, the surgeon may need to
                      make more small cuts to insert surgical tools
                    </li>
                    <li>
                      After the surgery, the tools and most of the gas will be
                      removed and the incisions will be closed with stitches or
                      surgical tape
                    </li>
                  </ul>

                  <p className="text-gray-600 mt-5">
                    Mostly after laparoscopy surgery, the patient can go home
                    the same day. The surgeons will advise for discharge after
                    monitoring the breathing, heart rates, and prolonged
                    bleeding.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 flex items-center justify-center mt-6 md:mt-0">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full">
                  <Image
                    src={Microscope}
                    alt="IVF in Sudha Fertility Centre"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Why choose us for Laparoscopy?  */}
      <div className="container mx-auto mt-[70px] md:mt-[100px]  relative h-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="Title lg:hidden text-center">
            <h2 className=" font-semibold">
              {" "}
              Why choose us for Laparoscopy?{" "}
            </h2>
            <p className="font-semibold mt-2 ">
              Where hope meets expertise—experience the promise of laparoscopy
            </p>
          </div>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full flex justify-center items-center">
                  <Image
                    src={WhyChoose}
                    alt="About IUI"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title hidden lg:block">
                  <h2 className=" font-semibold">
                    Why choose us for Laparoscopy?
                  </h2>
                  <p className="font-semibold mt-2 ">
                    Where hope meets expertise—experience the promise of
                    laparoscopy
                  </p>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    Being the best fertility hospital in India, Sudha Fertility
                    Centre has performed 1 lakh+ successful laparoscopies with
                    the best surgeons in India. With laparoscopy, our fertility
                    doctors have identified the fertility challenges and helped
                    many couples achieve their dream of parenthood into reality.
                    With the best surgeons, we perform painless laparoscopies,
                    offering
                  </p>
                </div>

                <ul className="text-gray-600 space-y-2 list-inside list-disc mt-3">
                  <li>Minimal scarring</li>
                  <li>Shorter recovery time</li>
                  <li>Precise Diagnosis</li>
                  <li>
                    Faster fertility treatments to increase the chances of
                    conception
                  </li>
                </ul>

                <div className="description mt-4 text-gray-600">
                  <p>
                    At Sudha Fertility Centre, we combine advanced technology
                    with compassionate care to help you on your path to
                    parenthood.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}

      <div className="bg-[#F0F5FF] mt-[70px] md:mt-[100px]">
        <div className="container mx-auto relative ">
          <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
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
              <div className="col-span-2 flex justify-center">
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

      {/* FAQ  */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="content mx-auto flex-1 text-center lg:text-left">
            <h2 className="font-outfit font-semibold  flex justify-center">
            Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-5">
            {FAQ.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={faqIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {FAQ.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
              <div className="text-center mt-16">
               <button
                                                    className="button-all mx-auto"
                                                    onClick={toggleViewMore} // Updated onClick handler
                                                  >
                                                    {showAll ? (
                                                      <div className="flex gap-3 items-center">
                                                        View Less <IoMdArrowBack />
                                                      </div>
                                                    ) : (
                                                      <div className="flex gap-3 items-center">
                                                        View More <IoMdArrowForward />
                                                      </div>
                                                    )}
                                                  </button>
              </div>
            )}
          </div>
        </div>
      </div>

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
        <h3 className="font-semibold text-center ">
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

export default Laparoscopy;
