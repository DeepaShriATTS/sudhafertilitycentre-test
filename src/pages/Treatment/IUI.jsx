"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/IVF/Banner.webp";
import About from "@/assets/Treatments/IUI/About.webp";
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
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ContactForm from "@/components/contact/contactForm";

const IVFData = [
  {
    question: "Ovulation stimulation",
    answer:
      "If you’re ovulating regularly, medications are not required to induce ovulation. If you’re not ovulating periodically, IUI specialists in Sudha will prescribe you medications that stimulate egg development. We plan your IVF procedure depending on your hormone and ultrasound test results.",
  },
  {
    question: "Sperm extraction",
    answer:
      "Our IUI doctors extract a sperm sample from your partner or donor and “wash it” to remove the non-motile sperms or non-healthy sperms.",
  },
  {
    question: "Insemination Procedure",
    answer:
      "In this procedure, the IUI experts used a thin catheter to inject the washed sperm sample into the uterus. By this method, the sperm skips the part of bypassing the vagina and cervix.",
  },
];

const FAQ = [
  {
    question: "Which hospital provides the best IUI treatment in Bangalore?",
    answer:
      "When looking for IUI (Intrauterine Insemination) treatment in Bangalore, Sudha Fertility Centre, the best IUI centre in Bangalore, is one of the top choices, known for its expertise and high success rates in fertility treatments. We offer you the best treatments with the best IUI doctors in India",
  },
  {
    question: "What is the success rate of IUI treatment?",
    answer:
      "The success rate of IUI treatment can vary based on factors such as the woman’s age, the cause of infertility, sperm quality, and overall reproductive health. At Sudha Fertility Centre, we offer personalised care to help optimize your chances of success with IUI treatment.",
  },
  {
    question: "Is there any risk associated with IUI treatment? ",
    answer:
      "IUI treatment is a safe procedure. There might be some risk factors including a slight chance of infection and the possibility of multiple pregnancies. At Sudha Fertility Centre, we take all precautions to minimize these risks and ensure the safety and well-being of our patients throughout the treatment process.",
  },
  {
    question: "Is IUI treatment painful?",
    answer:
      "IUI treatment is generally not painful. Most women experience only mild discomfort or cramping during the procedure, similar to menstrual cramps. At Sudha Fertility Centre, recognised as the best IUI treatment hospital in India, our experienced specialists ensure that the procedure is as comfortable as possible and provide support throughout your treatment.",
  },
  {
    question: "Can I do my regular work after IUI treatment?",
    answer:
      "Yes, it is safe to do your regular work and daily activities after IUI treatment. Light activities and normal tasks are typically fine, but it's recommended to avoid exhausting exercise or heavy lifting. At Sudha Fertility Centre, the best IUI hospital, our specialists will guide you on how to care for yourself post-treatment to support your health and maximise the chances of a positive outcome.",
  },
  {
    question: "Can I go to a job after IUI treatment?",
    answer:
      "Yes, you can go to work after IUI treatment. The procedure is minimally invasive, and most women feel well enough to resume their regular work activities the same day. However, it's best to avoid physically demanding tasks or heavy lifting. At Sudha Fertility Centre, the best IUI centre, we ensure you receive proper guidance on post-treatment care to help you feel comfortable and supported.",
  },
  {
    question: "Is normal delivery possible in IUI treatment?",
    answer:
      "Yes, normal delivery is possible after successful IUI treatment. Sudha Fertility Centre, the best fertility centre in India, offers continuous care throughout the pregnancy journey to ensure a healthy delivery.",
  },
  {
    question: "Should I take complete bed rest after IUI treatment",
    answer:
      "No, complete bed rest is not required. You can continue with normal activities but should avoid exhausting tasks or heavy lifting for a few days. At Sudha Fertility Centre, the best fertility centre in India, we provide guidance on how to manage post-IUI care effectively.",
  },
  {
    question: "What is the cost of IUI treatment?",
    answer:
      "The average cost of IUI treatment is between ₹10,000 to ₹20,000. It may vary depending on number of cycles required to attain a positive result. As the best IUI centre in India, Sudha Fertility Centre offers affordable and transparent pricing for all fertility treatments.",
  },
  {
    question: "Who should consider IUI treatment?",
    answer:
      "Couples with unexplained infertility, ovulation issues, or minor male fertility issues may consider IUI. At Sudha Fertility Centre, regarded as a leading IVF centre, we provide expert evaluations and help you determine the most suitable approach for your fertility journey.",
  },
  {
    question: "When should I consider IUI treatment?",
    answer:
      "You should consider IUI treatment if you have been trying to conceive for more than a year of regular unprotected sex. IUI is especially beneficial for couples facing mild infertility issues. At Sudha Fertility Centre, our expert IUI doctors provide personalised assessments to help determine the best treatment option for your fertility health.",
  },
  {
    question: "What is IUI treatment?",
    answer:
      "IUI (Intrauterine Insemination) is a fertility treatment where sperm is directly injected into the uterus using a catheter to increase the chances of fertilization. This process is beneficial for couples facing minor male infertility issues. At Sudha Fertility Centre, our expert IUI doctors provide personalized care to ensure the best chances of success in your fertility journey.",
  },
];

const When_Why_choose = [
  "Couples attempting to conceive through unprotected intercourse and have a healthy sexual life.",
  "Women with endometriosis condition (lining of the uterus growing outside the uterus).",
  "Men with reduced fertility due to sperm factors (slightly lower sperm count or motility).",
  "Couples or individuals who opt for donor sperm to get pregnant",
];

const prepare_for_IVF = [
  "Schedule a consultation with a fertility specialist and review the medical history of both partners to identify any pre-existing conditions.",
  "Both partners should adopt a healthy diet.",
  "Engage in regular exercise and maintain a healthy diet.",
  "Limit exposure to environmental toxins. ",
  "Maintain a healthy weight, being underweight or overweight can affect hormone levels and ovulation.",
];
const facilities = [
  {
    title: "Best IUI doctors in India",
    position: "left-32 top-10",
    rounded: "rounded-br-none",
  },
  {
    title: "24/7 pharmacy access",
    position: "left-24 top-44",
    rounded: "rounded-br-none",
  },
  {
    title: "Round-the-clock care and support,",
    position: "left-1 top-2/4",
    rounded: "rounded-br-none",
  },
  {
    title: "World-class equipments, ",
    position: "right-32 top-[70px] ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Experienced lab technicians",
    position: "right-28 top-[140px]  ",
    rounded: "rounded-bl-none",
  },
  {
    title: "Advanced treatments with personalised care.",
    position: "-right-6  top-[280px] ",
    rounded: "rounded-bl-none",
  },
];
const Do = [
  "Eat healthy food to help fertilization.",
  "Take the medicines prescribed by the IUI experts.",
  "Get enough sleep and rest.",
  "Focus on your physical and mental health.",
  "Exercise moderately to keep yourself active.",
];

const Dont = [
  "Avoid alcohol and smoking.",
  "Reduce caffeine intake.",
  "Refrain from ejaculation for 2-3 days before collecting a semen sample.",
];

function IUI() {
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
              <h1 className="font-outfit font-semibold  mt-3">
                Intrauterine insemination (IUI)
              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
                Little you is on the way, hold on to hope
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About IUI */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold flex justify-center text-center lg:hidden">
            About IUI
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full  flex justify-center ">
                  <Image src={About} alt="About IUI" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    About IUI
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    Intrauterine Insemination (IUI) is a fertility treatment
                    process in which the sperm is directly injected into the
                    uterus to help conception. This procedure is also known as
                    artificial insemination. IUI treatment is affordable and
                    highly successful for couples with less severe fertility
                    problems. This process causes less pain and less discomfort.
                    IUI treatment improves the chances of fertilization as the
                    sperm is directly placed in the uterus and the number of
                    sperm reaching the fallopian tubes can be increased.
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

      {/* IUI in Sudha Fertility Centre */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold  flex justify-center text-center lg:hidden">
            IUI in Sudha Fertility Centre
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1  px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    IUI in Sudha Fertility Centre
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    The IUI doctors in Sudha Fertility Centre examine you and
                    recommend the right lifestyle changes, nutrients, and
                    proper time to start the IUI treatment for a positive
                    result. The IUI procedures involve the following steps.
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
                <div className="relative w-full">
                  <Image src={Microscope} alt="IVF in Sudha Fertility Centre" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why choose us for IUI? */}
      <div className=" bg-[#F0F5FF] mt-[70px] md:mt-[100px]">

        <div className="container mx-auto mt-6 lg:mt-20 relative h-full">
          <div className="max-w-7xl mx-auto px-4 py-10   sm:px-6 lg:px-8 h-full">
            <div className="Title lg:hidden text-center">
              <h2 className="font-semibold">Why choose us for IUI?</h2>
            </div>
            <div className="Title lg:hidden text-center">
              <p className="font-semibold">With IUI, your dream of becoming parents is closer than you think</p>
            </div>
            <div className="main flex flex-col-reverse md:flex-row">
              <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
                <div className="w-full h-full flex justify-center items-center">
                  <div className="relative flex justify-center items-center w-full ">
                    <Image src={WhyChoose} alt="About IUI" className="rounded-2xl" />
                  </div>
                </div>
              </div>

              <div className="flex-1 flex items-center px-4 mb-4">
                <div>
                  <div className="Title hidden lg:block mb-4">
                    <h2 className=" font-semibold">
                      Why choose us for IUI?
                    </h2>
                  </div>
                  <div className="Title hidden lg:block">
                    <p className=" font-semibold">
                      With IUI, your dream of becoming parents is closer than you think
                    </p>
                  </div>
                  <div className="description mt-4 text-gray-600">
                    <p>
                      As the best IUI centre in India, Sudha Fertility Centre has delivered more than thousands of healthy IUI babies holding a high success rate in IUI treatments. With the best IUI doctors in India, Sudha Fertility Centre provides you with the best IUI treatments in India helping you to achieve your dream of parenthood into reality. Our fertility experts are dedicated to providing you with personalised care at every step of your parenthood journey which retains us as the best IUI hospital in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* When and Why Choose IUI? */}
      <div className="container mx-auto relative h-full  mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className=" font-semibold text-center lg:hidden">
            When and Why Choose IUI?
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className=" font-semibold lg:block hidden">
                    When and Why Choose IUI?
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
                  <Image src={ChooseIVF} alt="About IUI" className="rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-[#F0F5FF] mt-[70px] md:mt-[100px]">
        <div className="container mx-auto relative   ">
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

      {/* How to prepare for IUI? */}
      <div className="container mx-auto relative h-full  mt-6 lg:mt-14 ">
        <div className="max-w-7xl mx-auto px-4 pt-8 sm:px-6  lg:px-8 h-full">
          <h2 className=" font-semibold text-center lg:hidden">
            How to prepare for IUI?
          </h2>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="lg:px-12 py-3  flex items-center pb-8 justify-center lg:items-start ">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full">
                  <Image src={PrepareIVF} alt="Prepare IUI" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className=" flex items-center ">
              <div className="p-6">
                <div className="Title ">
                  <h2 className=" font-semibold lg:block hidden">
                    How to prepare for IUI?
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

      {/* Do’s & Don’ts During IUI */}
      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  h-full">
          <div className="shadow-[0px_0px_20px_0px_rgba(0,0,0,0.06)] p-16 rounded-[16px]">
            <div className="title">
              <h2 className="font-semibold text-center mb-3">
                Do’s & Don’ts During IUI
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:space-y-0 sm:space-x-8">
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

      {/* Faq */}
      <div className="container mx-auto relative h-full  mt-[70px] md:mt-[100px]">
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

export default IUI;
