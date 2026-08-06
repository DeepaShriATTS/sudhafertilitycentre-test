"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/IVF/Banner.webp";
import About from "@/assets/Treatments/ICSI/About.webp";
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
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ContactForm from "@/components/contact/contactForm";

const IVFData = [
  {
    question: "Ovulation Stimulation",
    answer:
      "If the woman ovulates regularly, medications are not prescribed to stimulate ovulation. If ovulation doesn’t occur the fertility specialists at Sudha Fertility Centre will prescribe certain medications to stimulate egg development.",
  },
  {
    question: "Egg retrieval and Sperm extraction",
    answer:
      "Our ICSI doctors retrieve the eggs using a suction device with a mild anesthetic, so you don’t feel pain. The sperm will be collected on the same day of egg retrieval. The ejaculated sperm will be collected into the lab-provided container.",
  },
  {
    question: "Fertilization",
    answer:
      "Once the collected semen sample is washed, a single sperm will be collected and injected into an egg with a thin hollow needle. The embryologists in Sudha Fertility Centre inject the best quality sperm into each mature egg under a microscope.",
  },
  {
    question: "Embryo Development",
    answer:
      "It takes 24 hours to fertilize an egg and develop into an embryo. The fertilized embryos will be kept in the lab for 3 to 6 days and will be monitored by fertility experts for growth and development.",
  },
  {
    question: "Embryo Transfer",
    answer:
      "The ICSI specialists pick the healthiest embryos for the procedure. Once the embryos reach a certain stage of development, one or two healthy embryos are selected and will be placed in the woman’s womb using a catheter under the guidance of ultrasound.",
  },
];

const FAQ = [

  {
    question: "Is ICSI an expensive treatment?",
    answer: "ICSI treatment costs can vary, but it is generally more expensive than standard IVF treatment due to the advanced techniques used. As the best fertility centre in India, Sudha Fertility Centre offers affordable treatments with personalised care to help you through your fertility journey"
  },
  {
    question: "What are the risk factors associated with ICSI? ",
    answer: "ICSI is a safe procedure. The factors associated with risk might be genetic issues or pregnancy complications which can be avoided by genetic screening proper intake of medications and regular checkups. At Sudha Fertility Centre we provide personalised care and support at every step of your parenthood journey. "
  },
  {
    question: "Does ICSI always result in multiple pregnancies? ",
    answer: "ICSI does not always lead to multiple pregnancies, though the chances may be slightly higher depending on factors like the number of embryos implanted. At Sudha Fertility Centre, the best fertility centre in India, we aim to achieve the healthiest outcome for you. "
  },
  {
    question: "Are the babies conceived through ICSI born healthy? ",
    answer: "There is no association between the ART procedures and the baby’s health. It solely depends on the health of the parents. Proper care and nutrition intake can help you deliver a healthy baby. But complications like genetic factors can affect the baby’s health which can also be priorly diagnosed during the PGD process in fertility treatment. At Sudha Fertility Centre, the best fertility center in India, we provide expert care and monitor every step to ensure the best possible outcome for both mother and baby. "
  },
  {
    question: "How successful is ICSI?",
    answer: "ICSI is highly successful, especially for couples with male infertility issues. Success rates may vary based on individual factors. At Sudha Fertility Centre, the best fertility centre in India, we offer personalised treatment plans to help you in your parenthood journey and deliver a healthy baby."
  },
  {
    question: "When should I consider ICSI? ",
    answer: "ICSI is helpful and often preferred to couples facing major male infertility challenges or having a record of unsuccessful IVF cycles.  At Sudha Fertility Centre, the best fertility hospital in India, we take a comprehensive approach to fertility care, ensuring that each step of your treatment is tailored to maximize your chances of success. "
  },
  {
    question: "How to prepare for ICSI treatment?",
    answer: "Involve in regular exercise, maintain a healthy diet, and quit alcohol and smoking. The infertility journey can be stressful, so it’s important to be mentally prepared. The process includes medical assessments, hormone treatments, and counseling. At Sudha Fertility Centre, the best IVF centre in India, our expert team will guide you through each step to ensure you enjoy your parenthood journey."
  },
  {
    question: "How is ICSI different from IVF? ",
    answer: "ICSI is a more specialized form of IVF where a single sperm is injected directly into the egg in the laboratory. While in IVF the sperm is mixed with the egg and left for natural fertilization. Sudha Fertility Centre, the best IVF centre in India, offers both ICSI and IVF with the best fertility doctors in India."
  },
  {
    question: "What is the Cost of ICSI treatment in Bangalore? ",
    answer: "The average cost of ICSI treatment in Bangalore ranges between ₹1,20,000 to ₹2,50,000. However, the exact cost depends on the clinic chosen and the number of cycles performed. At Sudha Fertility Centre, the best IVF centre in Bangalore, we offer ICSI and other fertility treatments at an affordable cost with no compromise in care and quality."
  },
  {
    question: "Is ICSI treatment painful?",
    answer: "ICSI treatment is not painful, it can cause mild discomfort during the process of egg retrieval. Our fertility doctors at Sudha Fertility Centre make sure you’re comfortable during the procedure, which is why we are recognized as one of the best IVF centres in India."
  },
  {
    question: "What are the benefits of ICSI? ",
    answer: "ICSI is highly beneficial to couples facing severe male infertility issues like poor sperm quality, motility, or abnormal sperm shape. At Sudha Fertility Centre, recognised as one of the best IVF centres, we offer expert ICSI treatment with personalized care to help you achieve your dream of parenthood."
  },
  {
    question: "How are ICSI and IVF inter-connected?",
    answer: "ICSI is a specialised technique used in the IVF process. IVF involves fertilizing an egg with sperm in the lab, while ICSI directly injects a single sperm into an egg in the laboratory. At Sudha Fertility Centre, the best IVF hospital in India, we use ICSI as part of the IVF process to enhance success rates and help couples achieve their parenthood goals."
  },
];

const When_Why_choose = [
  "Men with severe male infertility ",
  "Men with low sperm count and motility usually less than 35% ",
  "Poor sperm morphology ",
  "History of unsuccessful IVF treatments ",
];

const prepare_for_IVF = [
  "Undergoing ICSI treatment can be emotionally challenging, so it’s vital to prepare yourself emotionally, communicate, and seek support from your loved ones.",
  "For a few couples, ICSI treatment may require multiple cycles, so it’s important to prepare yourself mentally and financially and stay hopeful and resilient.",
  "It’s also important to understand the procedure before starting the treatment and what to expect.  ",
  "Good physical health plays a vital role before starting ICSI treatment.",
];
const facilities = [
  {
    title: "World-class IVF laboratory",
    position: "left-32 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "Intellectually equipped fertility specialists",
    position: "left- top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "Round-the-clock care and support",
    position: "left-1 top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "24/7 pharmacy access",
    position: "right-40 top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "State-of-the-art ultrasound equipment ",
    position: "right-5 top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Experienced lab technicians",
    position: "right-[80px]  top-[280px] ",
    rounded: "rounded-bl-none",
  },
];
const Do = [
  "After ICSI, it’s important to take a good amount of rest.",
  "Take the prescribed medicines regularly and on time. ",
  "To boost embryo growth, a healthy diet is important. Include foods with lots of protein, vitamins, iron, and calcium.",
  "Do minimal exercises.",
];

const Dont = [
  "Don’t lift heavy weights or do heavy household chores.",
  "Avoid coffee intake.",
  "Strictly refrain from alcohol and smoke",
  "Avoid exposure to places causing vaginal infections like swimming pools.",
  "Never miss regular checkups.",
];

function ICSI() {
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
      setVisibleCount(FAQ.length); // Show all FAQs
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
              <h1 className="font-outfit max-w-3xl font-semibold  mt-1">
                Intracytoplasmic Sperm Injection (ICSI)

              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
                Bringing your dream of a family closer to reality.
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About ICSI */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold flex justify-center text-center lg:hidden">
            About ICSI
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image src={About} alt=" About ICSI" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    About ICSI
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    Intracytoplasmic Sperm Injection (ICSI) is a type of
                    assisted reproductive technology that involves injecting the
                    male sperm directly into the egg’s cytoplasm. In the last
                    decade, ICSI has evolved to become a common fertility
                    treatment procedure. ICSI is a type of IVF. In IVF,
                    fertility experts place thousands of sperm next to an egg in
                    a laboratory dish. In ICSI treatment, a single sperm is
                    directly injected into a single egg, increasing
                    fertilization success.
                  </p>
                </div>
                <div className="mt-5">
                  <Button title="Get A Free Consultation" link="#contactus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*ICSI in Sudha Fertility Centre  */}
      <div className="container mx-auto relative h-full  mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold  flex justify-center text-center lg:hidden">
            ICSI in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1  px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    ICSI in Sudha Fertility Centre
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    The ICSI doctors in Sudha Fertility Centre consult you and
                    examine you completely before starting the procedure. This
                    process of fertilization involves the following steps by the
                    best ICSI specialists of Sudha Fertility Centre.
                  </p>
                </div>
                <div className="Accordian mt-4 ">
                  {IVFData.map((item, index) => (
                    <FAQItem
                      key={index}
                      question={item.question}
                      answer={item.answer}
                      isOpen={openIndex === index}
                      toggle={() => toggleAccordion(index)}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12   flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full mt-[50px] md:mt-[0px] ">
                  <Image src={Microscope} alt="IVF in Sudha Fertility Centre" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us for ICSI? */}
      <div className="bg-[#F0F5FF]  mt-[70px] md:mt-[100px]">
        <div className="container mx-auto mt-6 lg:mt-20 relative h-full bg-[#F0F5FF]">
          <div className="max-w-7xl mx-auto px-4 py-10  sm:px-6 lg:px-8 h-full">
            <div className="Title lg:hidden text-center">
              <h2 className=" font-semibold">Why choose us for ICSI? </h2>
              <p className=" mt-2 font-semibold">
                Transforming longing into joy, ICSI supports your journey.
              </p>
            </div>
            <div className="main flex flex-col-reverse md:flex-row">
              <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="relative w-full  flex justify-center items-center">
                    <Image src={WhyChoose} alt="About IUI" className="rounded-2xl" />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center px-4">
                <div>
                  <div className="Title hidden lg:block">
                    <h2 className=" font-semibold">
                      Why choose us for ICSI?
                    </h2>
                    <p className=" mt-2 font-semibold ">
                      Transforming longing into joy, ICSI supports your journey.
                    </p>
                  </div>
                  <div className="description mt-4 text-gray-600">
                    <p>
                      As the leading fertility centre in India, Sudha Fertility Centre has delivered more than 1 lakh, healthy babies. We make sure every couple receives personalised care and enjoy their journey toward parenthood. We are driven by the motto to help couples make their dream of parenthood into reality. The success rate of ICSI is almost the same as IVF, Sudha Fertility Centre has a high success rate. The IVF doctors and embryologists in Sudha ensure to support you in every step of your parenthood journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When & Why choose ICS */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className=" font-semibold text-center lg:hidden">
            When & Why choose ICSI
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className=" font-semibold lg:block hidden">
                    When & Why choose ICSI
                  </h2>
                </div>
                <div className=" pt-6">
                  <div className="space-y-4">
                    {When_Why_choose.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center lg:items-start ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full">
                  <Image src={ChooseIVF} alt="About IUI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-[#F0F5FF]  mt-[70px] md:mt-[100px]">
        <div className="container mx-auto relative   mb-9">
          <div className="max-w-7xl mx-auto px-4 pt-10 mt-10 sm:px-6 lg:px-8 h-full">
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
                    className={`absolute ${facility.position
                      } transform -translate-y-1/2 z-10 
                              ${facility.position.includes("left")
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

      {/* How to prepare for ICSI? */}
      <div className="container mx-auto relative h-full  mt-[70px] md:mt-[100px] ">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className=" font-semibold text-center lg:hidden">
            How to prepare for ICSI?
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="lg:px-12 py-3  flex items-center pb-8 justify-center lg:items-start ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full">
                  <Image src={PrepareIVF} alt="About IUI" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className=" flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className=" font-semibold lg:block hidden">
                    How to prepare for ICSI?
                  </h2>
                </div>
                <div className=" pt-6">
                  <div className="space-y-4">
                    {prepare_for_IVF.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Do’s & Don'ts During ICSI */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  h-full">
          <div className="shadow-[0px_0px_20px_0px_rgba(0,0,0,0.06)] p-16 rounded-[16px]">
            <div className="title">
              <h2 className=" font-semibold text-center mb-3">
                Do’s & Don'ts During ICSI
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row space-y-8 sm:space-y-0 sm:space-x-8">
              {/* Do's Section */}
              <div className="do flex-1">
                <div className="heading p-5">
                  <h3 className=" font-semibold text-center text-[#173366]">
                    Do’s
                  </h3>
                </div>
                <div className="pt-6">
                  <div className="space-y-4">
                    {Do.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Vertical Divider */}
              <div className="border-l-2 border-gray-300"></div>{" "}
              {/* Add this divider */}
              {/* Don'ts Section */}
              <div className="dont flex-1">
                <div className="heading p-5">
                  <h3 className=" font-semibold text-center text-[#173366]">
                    Don’ts
                  </h3>
                </div>
                <div className="pt-6">
                  <div className="space-y-4">
                    {Dont.map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Your Baby into Your Home */}
      <div className="container mx-auto  mt-[70px] md:mt-[100px]">
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

            <div className="relative h-full flex flex-col lg:flex-row items-center text-center justify-between  lg:p-12  mt-10">
              <div className="w-full lg:w-1/2 flex items-center justify-between lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="font-outfit font-semibold   text-white">
                  Welcome Your Baby into Your Home
                </h2>

              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                <Button title="Book Your Free Appointment" link="#contactus" />
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="container mx-auto relative h-full  mt-[70px] md:mt-[100px]">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="content mx-auto flex-1 text-center lg:text-left">
            <h2 className="font-outfit font-semibold flex justify-center">
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
            {Ambattur.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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

      {/* contact  */}
      <section className=" mt-[70px] md:mt-[100px]" id="contactus">

        <ContactForm />
      </section>

      {/* MarqueeComponent */}
      <section className=" mt-[70px] md:mt-[100px]  mb-[70px] md:mb-[100px]">
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

export default ICSI;
