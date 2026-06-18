"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/IVF/Banner.webp";
import About from "@/assets/Treatments/IVF/about.webp";
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

import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import { FaQ } from "react-icons/fa6";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ContactForm from "@/components/contact/contactForm";

const IVFData = [
  {
    question: "Initial Consultation",
    answer:
      "The IVF experts in Sudha Fertility Centre will review your medical history, examine you with necessary tests, and discuss treatment options. This step is vital to tailor a personalised treatment plan for a successful pregnancy.",
  },
  {
    question: "Super Ovulation or Super Stimulation",
    answer:
      "After setting the treatment plan, the first step in the IVF process is ovarian stimulation. In this process, the patient is prescribed certain medications to increase the production of eggs. During this period, the IVF doctors in Sudha will monitor you via ultrasounds and blood tests for positive results.",
  },
  {
    question: "Egg Retrieval and Sperm Collection",
    answer:
      "The next process involves a minor surgical procedure by the fertility specialists in Sudha to retrieve the eggs under sedation. Simultaneously, sperm samples will be collected from the male.",
  },
  {
    question: "Fertilization and Embryo Culture",
    answer:
      "After retrieving the eggs and sperm, they will be fertilized in the laboratory by the IVF experts in Sudha. After fertilization, the eggs grow as embryos and the fertility doctors will monitor to identify the risk of passing genetic disorders to the baby.",
  },
  {
    question: "Embryo Transfer",
    answer:
      "After proper monitoring, the healthy embryos will be placed into the woman’s womb",
  },
];

const FAQ = [
  {
    question: "Which hospital provides the best IVF treatment in India? ",
    answer:
      "Sudha Fertility Centre is widely recognized as one of the best IVF Centres in India. With a team of expert fertility specialists, cutting-edge technology, and a patient-centered approach, we offer personalized IVF treatments to help couples achieve their dream of parenthood.",
  },
  {
    question: "What is the IVF success rate in India?",
    answer:
      "The IVF success rate in India can vary depending on factors such as age, the cause of infertility, the clinic's expertise, and the treatment plan. Leading IVF Centres in India like Sudha Fertility Centre are known for their high success rates, which reflect their advanced technology, experienced fertility specialists, and personalized care.",
  },
  {
    question: "What is the cost of IVF treatment in India?",
    answer:
      "The average cost of IVF treatment in India is ₹1,20,000 to ₹2,50,000. However the exact cost can vary based on factors like the clinic, treatment type, medications, number of cycles, and additional procedures. As a leading IVF Centre in India, Sudha Fertility Centre offers personalized care with transparent and affordable pricing. ",
  },
  {
    question: "How many times can we try IVF?",
    answer:
      "The number of IVF attempts a couple can make depends on various factors, including the individual’s age, overall health, and the cause of infertility. At Sudha Fertility Centre, one of the best IVF centres, our fertility specialists assess your specific situation and guide you on the most suitable approach, ensuring the best chance of success in the first attempt itself.",
  },
  {
    question: "How long does it take for an IVF treatment?",
    answer:
      "IVF typically takes 4-6 weeks per cycle, and some couples may need more than one cycle to achieve successful results. At Sudha Fertility Centre, one of the top IVF centres in India, we prioritise providing comprehensive care and support, ensuring a well-guided and effective treatment experience throughout your journey.",
  },
  {
    question: "Is normal delivery possible in IVF treatment?",
    answer:
      "Yes, normal delivery is possible after IVF. Factors such as the mother’s health, the baby’s position, and any pregnancy-related complications are considered when determining the delivery method. Sudha Fertility Centre, the best fertility centre in India, supports you through your pregnancy journey to ensure a healthy, safe delivery.",
  },
  {
    question: "Is IVF an expensive treatment? ",
    answer:
      "The cost of IVF treatment can vary based on factors like the clinic chosen, medications, number of IVF cycles, and any additional procedures. At Sudha Fertility Centre, we provide transparent pricing and personalized care to ensure you receive the best treatment suited to your needs.",
  },
  {
    question: "Are IVF pregnancies risky? ",
    answer:
      "IVF pregnancies are generally safe, but like any pregnancy, there can be risks involved, especially in cases of multiple pregnancies or underlying health conditions. However, with advancements in IVF technology and expert care, the risks are significantly minimised. At Sudha Fertility Centre, we monitor your pregnancy closely to ensure the best outcomes for both mother and baby, providing comprehensive support throughout the process.",
  },
  {
    question: "What is the best age to undergo IVF?",
    answer:
      "The ideal age to undergo IVF is typically between 35 and 40+ Years, as fertility starts to decline after 35. However, women in their early 30s generally have higher chances of success. IVF can still be effective for women over 40. At Sudha Fertility Centre, we offer personalised care and expert guidance throughout your fertility journey with the best IVF doctors in India.",
  },
  {
    question: "When should I consider IVF after multiple miscarriages? ",
    answer:
      "If you’ve experienced multiple miscarriages, IVF is a good option to consider. Sudha Fertility Centre has helped thousands of couples who had faced multiple miscarriages deliver healthy babies. Our dedication and empathetic care retain us as the best IVF hospital in India.",
  },
  {
    question: "Should I take complete bed rest after IVF treatment? ",
    answer:
      "Complete bed rest is not required after IVF. However, it is important to avoid lifting heavy weights, doing heavy household chores, and exhausting activities. At Sudha Fertility Centre, a leading IVF centre, we offer expert guidance to help you recover comfortably and maximize your chances of success.",
  },
  {
    question: "Who should take IVF treatment? ",
    answer:
      "IVF is ideal for couples with unexplained infertility, blocked fallopian tubes, male infertility, or other reproductive issues. Sudha Fertility Centre, the best IVF centre in India, offers expert diagnosis to identify the cause of infertility and provide the best treatments.",
  },
];

const When_Why_choose = [
  "Women over 40, as aging gradually affects egg quality",
  "Individuals who had their ovaries removed.",
  "Women with blocked or damaged fallopian tubes.",
  "Men with less sperm count, motility, or abnormal sperm shape.",
  "Couples who want to be parents after menopause",
  "For couples who have a history of failed fertility treatments.",
  "Couples with genetic disorders, to prevent the transmission of genetic diseases.",
];

const prepare_for_IVF = [
  "Focus on a balanced and nutritious diet, moderate exercise, and avoid alcohol and tobacco to support your body for IVF.",
  "Ensure conditions like PMOS (PCOS), diabetes, or thyroid issues are under control, as these can impact IVF success.",
  "Include folic acid and prenatal vitamins to boost reproductive health and reduce birth risks.",
  "IVF can be an emotional journey. Communicate with your partner and your closed ones to help manage stress.",
  "Follow the prescribed medications properly and make sure you don’t skip regular checkups.",
  "Engage yourself in activities like yoga, meditation, or other relaxation techniques to maintain mental and physical well-being.",
];
const facilities = [
  {
    title: "High-tech technologies",
    position: "left-32 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "Modern IVF laboratories",
    position: "left-24 top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "Round-the-clock pharmacy access",
    position: "left-1 top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "Intellectual fertility experts",
    position: "right-32 top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Experienced embryologists",
    position: "right-28 top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Advanced treatment with exceptional care",
    position: "-right-6  top-[280px] ",
    rounded: "rounded-bl-none",
  },
];
const Do = [
  "Drink plenty of water to keep your body hydrated.",
  "Focus on nutrient-dense foods rich in vitamins, minerals, and protein to support reproductive health.",
  "Seek emotional support as IVF can be an emotional journey.",
  "Prioritise sleep and rest. Aim for at least 7 hours of quality sleep",
  "Engage in gentle activities like walking or stretching.",
];

const Dont = [
  "Avoid heavy exercises.",
  "Restrict alcohol and caffeine intake.",
  "Avoid long travel to reduce body stress.",
  "Never skip the prescribed medications or intake unprescribed ones.",
  "Avoid exposure to toxins.",
];

function IVF() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(0);
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
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
              In Vitro Fertilization (IVF)
               
              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
              Prepare to Welcome your Little Miracle
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About IVF */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="font-semibold flex justify-center  text-center lg:hidden">
            About IVF
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image src={About} alt="About IVF " className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4 py-7 lg:py-0">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">About IVF</h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p className="leading-[1.6] text-grey-600">
                    In vitro fertilization (IVF) is one of the well-known and
                    most successful fertility treatments preferred for couples
                    with complicated fertility problems. IVF treatment is one of
                    the assisted reproductive technology types chosen by
                    millions of couples worldwide with fertility problems. With
                    a 90% success rate around India, IVF is known as a
                    successful fertility treatment. For a few couples, the first
                    IVF cycle might be successful, for some couples, it may take
                    more than one cycle. This treatment involves several medical
                    processes from initial consultation to embryo transfer.
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

      {/* IVF in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold  flex justify-center mt-14 text-center lg:hidden">
            IVF in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1  px-4 mt-10 lg:mt-2">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    IVF in Sudha Fertility Centre
                  </h2>
                </div>
                <div className="Accordian mt-2">
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

            <div className="flex-1 lg:px-12   flex items-center justify-center mt-10 lg:mt-2">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image src={Microscope} alt="IVF in Sudha Fertility Centre" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us for IVF? */}
      <div className="bg-[#F0F5FF]">
        <div className="container mx-auto md:mt-[100px] mt-[70px] relative h-full ">
          <div className="max-w-7xl mx-auto px-4 py-10  2 sm:px-6 lg:px-8 h-full">
            <div className="Title lg:hidden text-center">
              <h2 className=" font-semibold">Why choose us for IVF?</h2>
              <p className=" mt-3 font-semibold">
                With IVF, Your Little Miracle is Just Around the Corner
              </p>
            </div>
            <div className="main flex flex-col-reverse md:flex-row">
              <div className="flex-1 lg:px-5 py-3  flex items-center justify-center mt-10 md:mt-1">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="relative w-full ">
                    <Image
                      src={WhyChoose}
                      alt="About IVF"
                      className="rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center px-4 mt-10 md:mt-1">
                <div>
                  <div className="Title hidden lg:block">
                    <h2 className=" font-semibold">Why choose us for IVF?</h2>
                    <p className=" mt-2 font-semibold">
                      With IVF, Your Little Miracle is Just Around the Corner
                    </p>
                  </div>
                  <div className="description mt-4 text-gray-600">
                    <p>
                      As a leading IVF center in India, Sudha Fertility Centre
                      has a high success rate in IVF treatments. With over 4
                      decades of expertise in fertility care, we have delivered
                      thousands of healthy IVF babies. With the best IVF doctors
                      in India, we provide you the exceptional IVF treatments in
                      India, guiding you through every step of your parenthood
                      journey and helping you achieve your dream. We offer
                      personalised counselling and compassionate care from
                      consultation to delivery. The dedication of the IVF
                      doctors in Sudha Fertility Centre prioritising every step
                      to maximize the chances of a successful healthy pregnancy
                      and also focusing on the health of both mother and baby
                      retains us as the best IVF hospital in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When and Why Choose IVF? */}
      <div className="container mx-auto relative h-full  md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className=" font-semibold text-center lg:hidden">
            When and Why Choose IVF?
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className=" font-semibold lg:block hidden">
                    When and Why Choose IVF?
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
                  <Image
                    src={ChooseIVF}
                    alt="About IVF"
                    className="rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-[#F0F5FF] md:mt-[100px] mt-[70px]">
        <div className="container mx-auto relative">
          <div className="max-w-7xl mx-auto px-4 pt-6  md:pb-0 mt-10 sm:px-6 lg:px-8 h-full">
            <h2 className="font-semibold text-center mb-8">Facilities</h2>

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
                  <div className="relative w-64 shadow-lg sm:shadow-none shadow-gray-400/50 rounded-2xl">
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

      {/* How to prepare for IVF? */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className=" font-semibold text-center lg:hidden">
            How to prepare for IVF?
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className=" py-11  flex items-center pb-8 justify-center lg:items-start ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image
                    src={PrepareIVF}
                    alt="About IVF"
                    className="rounded-2xl object-contain"
                  />
                </div>
              </div>
            </div>

            <div className=" flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className=" font-semibold lg:block hidden">
                    How to prepare for IVF?
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

      {/* Do’s & Don’ts During IVF */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  h-full ">
          <div className="shadow-[0px_0px_20px_0px_rgba(0,0,0,0.06)] p-16 rounded-[16px]">
            <div className="title">
              <h2 className=" font-semibold text-center mb-3">
                Do’s & Don’ts During IVF
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row space-y-8  sm:space-y-0 sm:space-x-8">
              {/* Do's Section */}
              <div className="do flex-1">
                <div className="heading p-5">
                  <h3 className=" font-semibold text-center text-[#173366]">
                    Do’s
                  </h3>
                </div>
                <div className="pt-0">
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
              <div className="border-l-2 border-[#E1E1E1] hidden md:block"></div>{" "}
              {/* Add this divider */}
              {/* Don'ts Section */}
              <div className="dont flex-1">
                <div className="heading p-5">
                  <h3 className=" font-semibold text-center text-[#173366]">
                    Don’ts
                  </h3>
                </div>
                <div className="pt-0">
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
      <div className="container mx-auto md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative min-h-[250px] rounded-xl shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${SubBanner.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative h-full flex flex-col  lg:flex-row items-center justify-between p-8 lg:p-12 mt-12">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
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
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
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

      {/* contact  */}
      <section className="md:mt-[100px] mt-[70px]" id="contactus">
        <ContactForm />
      </section>

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

export default IVF;
