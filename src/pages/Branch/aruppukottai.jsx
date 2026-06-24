"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/ambatur/ambattur_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import PadmavathiDevi from "@/assets/dummy-image.webp";
import Hospital from "@/assets/dummy-location.webp";
import { CiLocationOn } from "react-icons/ci";
import ImageGrid from "@/components/imagegrid";
import Buttonbottm from "@/components/button";
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
// import Button from "@/components/button/button";
import Insta from "@/assets/Home/instagram.svg";
import youtube from "@/assets/Home/youtube.svg";
import fb from "@/assets/Home/facebook.svg";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur, Aruppukottai } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import Link from "next/link";
import NotFound from "@/app/not-found";
import dynamic from "next/dynamic";
import LoadingSpinner from '@/components/ui/loadingSpinner';

// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

function AruppukottaiPage() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false); // State to track if all FAQs are shown


  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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
  const sections = [
    { id: "about", label: "About" },
    { id: "facilities", label: "Facilities" },
    { id: "specialists", label: "Fertility Specialists" },
    { id: "gallery", label: "Gallery" },
    { id: "location", label: "Location" },
  ];

  const ambattur = [
    {
      quote:
        "Doctors and staffs are very friendly. Very good atmosphere. Comfortable to take treatment. Especially our Dr. Shyla mam is very kind and gave good guidance to us. Thank you for being support to all our situations.",
      name: "ANITHA K",
      title: "Patient",
    },
    {
      quote:
        "Very good doctors and staffs. Good environment . Very kind and calm doctor. Very well treatment.",
      name: "jothi sankar",
      title: "Patient",
    },
    {
      quote:
        "This is vinothinibalaji. Naan Inga treatment paathutu irukan. Romba calm and genuinely treated. The doctor and staff are all treated good. This is very wonderful experience.",
      name: "Reena Reena",
      title: "Patient",
    },
    {
      quote:
        "Doctor is very friendly. Am so Thankful to her. Took only two months treatment. She guided me well. Thanks to her and staffs",
      name: "Jeya Lakshmi",
      title: "Patient",
    },
    {
      quote:
        "Very good and doctors are lovely to eplain the treatment. Staff also kindly treat me.",
      name: "Vinothini Vino",
      title: "Patient",
    },
    {
      quote:
        "I got a very wonderful experance from here because Dr Shyla mam and her staff also provided us with very good support and Excellent medical team and medicine are available here. So thank you very much to doctors, OP sisters, councillor Nivetha sister, Reception sisters Kokila, Anitha, Admin mam Mrs Dhanalakshmi mam good support. All supportive staff.........",
      name: "Kalai RCB",
      title: "Patient",
    },
    {
      quote:
        "I had a very positive experience at this hospital, especially in the emergency ward a hung relief during a stress situation. I want to specifically recommend Dr mam for his kind and caring approach.He made a difficult time much easier to management kindly thanks to each and everyone.",
      name: "Vimal Ravi",
      title: "Patient",
    },
    {
      quote:
        "Within 4 months of treatment attain positive result in the first attempt of ivf with the help of Dr mam....Thanks a lot to workers who are working here....",
      name: "Mano Sham",
      title: "Patient",
    },
    {
      quote:
        "Had a great experience in sudha hospital has a great cooperation staffs and doctors are very good and positive the best hospital. Got positive result after many years of treatment. Special thanks to Drs.",
      name: "Kamu Kamaraj",
      title: "Patient",
    },
    {
      quote:
        "I am taking treatment in Chennai sudha hospital. Treatment was good staff .nurse Dr mam was good caring I am very satisfied with this branch.best IVF centre .I suggested this hospital for my friends & family.....",
      name: "K. nisha ",
      title: "Patient",
    },
    {
      quote:
        "Happy to share my experience in today camp visit in chennai sudha hospital centre.Good care all staff Dr mam explain the treatment very well thank you sudha fertility centre chennai.today useful day...",
      name: "selvi",
      title: "Patient",
    },
    {
      quote:
        "Dear sudha hospital chennai Doctor consultation is good and effective and also staffs are good. Counselling also good in explain wise very well. One of the best fertility centre in Ambattur sudha fertility centre.",
      name: "Isweriya .s",
      title: "Patient",
    },
    {
      quote:
        "Good hospital. And doctor was very kindly all staff are give clear explanation thanksto come sudha hospitalchennai",
      name: "Gpriyanka Gpriya",
      title: "Patient",
    },
    {
      quote:
        "Sudha ferlity centre chennai very good doctor and all staff are good very nice experience in sudha ferlity centre chennai thank to each and everyone ivf treatment cost was very low and package amount thank to sudha ferlity centre chennai",
      name: "Karthick Vill",
      title: "Patient",
    },
    {
      quote:
        "Sudha fertility centre chennai was very friendly and good experience and all staff give clear answer to each and everyone thank to sudha hospital Chennai best IVF treatment and low cost",
      name: "SWETHA B",
      title: "Patient",
    },
    {
      quote:
        "Best fertility hospital in chennai. Amount wise very affordable. Doctor is very good consultation and staffs is good.Thank you",
      name: "JEBA NITHISH N.S",
      title: "Patient",
    },
    {
      quote:
        "Hi myself is Nivetha iam taking treatment for Sudha hospital Chennai for best Ivf treatment in Chennai iam married 5 years I did not a baby iam coming to Sudha hospital now iam pregnant thanks to sharing my experience to Sudha hospital Chennai thanks to each and every staff thanks to Sudha hospital Chennai each doctor and staff nurse and everyone",
      name: "Nivetha Elumalai",
      title: "Patient",
    },
    {
      quote:
        "Good fertility hospital in chennai to take IVF treatment. Doctor mam & counsellor gave confidence to us. They clearly explained about treatment procedure. Low Treatment cost also. Staff nurse & other staff taking care of us very well.Recommended one.",
      name: "Vivek Mech",
      title: "Patient",
    },
    {
      quote:
        "I highly recommend Sudha Hospitals to anyone planning for IVF, as they deliver positive results on the first attempt. They have a talented team of doctors and an amazing staff across all departments who provide the utmost care.",
      name: "Mukul Pahuja",
      title: "Patient",
    },
  ];

  return (

    <>
    <NotFound/>
    </>

    // <>
    //   <div className="relative w-full min-h-[850px] md:min-h-[600px] lg:min-h-[600px]">
    //     {/* Background Image */}
    //     <div
    //       className="absolute inset-0 bg-cover -top-40 bg-center"
    //       style={{
    //         backgroundImage: `url(${BgAbout.src}), linear-gradient(to bottom, rgba(23, 51, 102, 0.7), rgba(255, 255, 255, 1))`,
    //       }}
    //     />

    //     <div>
    //       <div className="relative py-10 md:py-16">
    //         <div className="container mx-auto">
    //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    //             <div className="flex flex-col lg:flex-row justify-between items-center">
    //               {/* Left Content */}
    //               <motion.div
    //                 className="text-white w-full lg:w-1/2"
    //                 initial="initial"
    //                 animate="animate"
    //                 variants={fadeInUp}
    //               >
    //                 <h2 className="text-[#FFC65C]  font-semibold uppercase">
    //                   VANAKKAM Aruppukottai
    //                 </h2>
    //                 <h1 className=" font-bold mt-4">
    //                   Best Fertility Centre In{" "}
    //                   <br className="hidden sm:block" />
    //                   <span className="text-[#FDCB58]">Aruppukottai </span>
    //                 </h1>
    //                 <p className=" mt-4 text-[22px] leading-[1.6]">
    //                   Helping You Begin the Journey to Parenthood with Confidence
    //                 </p>
    //                 <Button
    //                   styleClass="mt-6"
    //                   text="Connect with WhatsApp"
    //                   link="https://wa.me/917670076006?text=Hi,%20Can%20I%20get%20more%20info%20on%20this?"
    //                   icon={<IoMdArrowForward />}
    //                 />
    //               </motion.div>

    //               {/* Right Content - Form */}
    //               <BranchForm />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="absolute -bottom-80 lg:-bottom-64 w-full ">
    //       <InfiniteMovingCardsDemo reviews={ambattur} />
    //     </div>
    //     <div
    //       className="absolute bottom-0 w-full h-36"
    //       style={{
    //         background:
    //           "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
    //       }}
    //     ></div>
    //   </div>

    //   <div className="container mx-auto mt-72 lg:mt-60 ">
    //     <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
    //       <div className="w-full lg:w-2/3">
    //         <div className="w-full pe-5">
    //           {/* Navbar */}
    //           <Navbar sections={sections} />

    //           {/* Sections */}

    //           <ScrollMotion>
    //             <section id="about" className=" pt-2">
    //               <div
    //                 className="flex flex-col lg:flex-row gap-8"
    //                 initial="initial"
    //                 animate="animate"
    //                 variants={fadeInUp}
    //               >
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <h3 className="text-[#173366] mb-2  font-semibold">
    //                     About
    //                   </h3>

    //                   <p className=" mt-3 text-gray-600">
    //                     In Aruppukottai, Sudha Fertility Centre brings specialised fertility care within reach for families seeking hope, healing, and clarity. Recognised as the Best Fertility Hospital in Aruppukottai, our centre blends clinical innovation with heartfelt support to help couples conceive naturally or through advanced treatment methods.
    //                   </p>

    //                   <p className="mt-3  text-gray-600">
    //                     Inaugurated in 2025, the Aruppukottai branch extends our legacy of delivering ethical, evidence-based fertility solutions. With every consultation, scan, or procedure, we focus on ensuring that patients feel heard, empowered, and informed.
    //                   </p>
    //                 </div>

    //                 <div className="w-full lg:w-1/2 mt-5 sm-hidden">
    //                   <Image
    //                     src={SudhaAbout}
    //                     alt="Ambattur"
    //                     className="w-full object-cover rounded"
    //                   />
    //                 </div>

    //               </div>
    //               <motion.div>
    //                 <h3 className="mt-3 text-[#173366] font-semibold">
    //                   Best Treatments Offered in Aruppukottai:
    //                 </h3>
    //                 <p className="mt-3 mb-3 text-gray-600">
    //                   We offer a wide range of fertility solutions, each tailored to address different reproductive challenges from hormonal imbalances to male infertility. Every treatment is planned by expert fertility doctors in Aruppukottai, ensuring safe, effective, and personalised care.
    //                 </p>
    //               </motion.div>

    //               <motion.div
    //                 initial="initial"
    //                 animate="animate"
    //                 variants={fadeInUp}
    //               >
    //                 <p className="mt-3 mb-3   text-gray-600">
    //                   As the best IVF centre in Aruppukottai, we bring together clinical expertise, modern technology, and compassion to support your journey to parenthood.
    //                 </p>
    //                 <h3 className=" text-[#173366] font-semibold mt-3 mb-3">
    //                   Our specialised services include:
    //                 </h3>
    //                 <ul className="text-md text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
    //                   <li>Normal Delivery - Natural Labour For Mothers </li>
    //                   <li>IVF - In vitro fertilization  </li>
    //                   <li>IUI - Intrauterine insemination </li>
    //                   <li>ICSI - Intracytoplasmic Sperm Injection </li>
    //                   <li>
    //                     IMSI - Intracytoplasmic morphologically selected sperm injection
    //                   </li>
    //                   <li>TESE - Testicular sperm extraction </li>
    //                   <li>PESA - Percutaneous Epididymal Sperm Aspiration</li>
    //                   <li>LAH - Laser Assisted Hatching  </li>
    //                   <li>
    //                     Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood Cell Derivative)
    //                   </li>
    //                   <li>FET - Frozen Embryo Transfer </li>
    //                   <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
    //                 </ul>
    //                 <p className="mt-3 text-gray-600">
    //                   and other gynae-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS, as well as other fertility preservation processes are performed by the best fertility doctors in Aruppukottai.
    //                 </p>
    //                 <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
    //                   <Image
    //                     src={SudhaAbout}
    //                     alt="Ambattur"
    //                     className="w-full object-cover rounded"
    //                   />
    //                 </div>
    //                 <h3 className="text-[#173366]  font-semibold mt-5">
    //                   Why Sudha Fertility Centre is the Best IVF Hospital in Aruppukottai?
    //                 </h3>
    //                 <p className=" text-gray-600 mt-3">
    //                   We understand that fertility treatment is a deeply emotional and life-changing journey. That’s why patients across Aruppukottai and nearby towns trust us not just for our medical excellence, but for our humane approach to care.
    //                 </p>
    //                 <ul className="text-md text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
    //                   <li>Tailored Treatment Plans: Designed according to your diagnosis and history</li>
    //                   <li>Affordable Treatments: We offer fertility treatments at an affordable cost ensuring best quality treatments available to everyone.    </li>
    //                   <li>Exceptional IVF Success Rates: Supported by advanced technology and strict quality control </li>
    //                   <li>Experienced Fertility Experts: With specialised training in reproductive medicine  </li>
    //                   <li>
    //                     Fast-Track Diagnosis & Lab Reports: Reducing treatment delays and stress
    //                   </li>
    //                   <li>End-to-End Emotional and Clinical Support: Every step of the way  </li>

    //                 </ul>

    //               </motion.div>

    //               <hr className="mt-4" />
    //             </section>
    //           </ScrollMotion>

    //           <ScrollMotion>
    //             <section id="facilities">
    //               <motion.div
    //                 className="flex flex-col lg:flex-row gap-8 mt-5"
    //                 initial="initial"
    //                 animate="animate"
    //                 variants={fadeInUp}
    //               >
    //                 <div className="w-full lg:w-1/2 mt-5 ">
    //                   <h3 className="text-[#173366]  font-semibold">
    //                     Facilities:
    //                   </h3>
    //                   <p className=" text-gray-600 mt-3">
    //                     Sudha Fertility Centre in Aruppukottai is purpose-built to provide a serene and efficient setting for fertility treatment. As the best fertility centre in Aruppukottai, our infrastructure supports accuracy, comfort, and patient privacy.
    //                   </p>
    //                   <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
    //                     <li>Advanced Diagnostic Imaging Units  </li>
    //                     <li>Next-Gen IVF and Embryology Labs</li>
    //                     <li>Well-Equipped OT for Fertility Surgeries </li>
    //                     <li>Full-Time Fertility Support Team</li>
    //                     <li>Affordable Treatment with EMI Options </li>
    //                     <li>In-House Medication & Fertility Supplements </li>
    //                     <li>Emergency and Monitoring Services – Available 24x7 </li>
    //                   </ul>
    //                 </div>
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <ImageSlider images={Ambattur.Facilities.Facilitiesimg} />
    //                 </div>
    //               </motion.div>
    //               <hr className="mt-5 border-gray-300" />
    //             </section>
    //           </ScrollMotion>

    //           <ScrollMotion>
    //             <section id="specialists">
    //               <motion.div
    //                 className="flex flex-wrap lg:flex-nowrap gap-8 mt-5"
    //                 initial="initial"
    //                 animate="animate"
    //                 variants={fadeInUp}
    //               >
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   {/* <p className="font-semibold mb-2">Consultant </p> */}
    //                   <h3 className="text-[#173366] mb-3 font-semibold leading-[1.4]">
    //                     Fertility Specialist in Aruppukottai
    //                   </h3>
    //                   <h3 className="text-[20px] font-semibold mt-2 leading-[1.4]">
    //                     Chief Expert of Sudha Fertility Centre in Aruppukottai
    //                   </h3>
    //                   <h4 className="text-[18px] text-[#173366] font-semibold mt-3">
    //                     Dr.S.Pradeepa Sudhakar.,
    //                   </h4>
    //                   <p className="text-md text-[#000000] mt-3">
    //                    DGO, DNB (OG), MNAMS, FICOG Senior Consultant IVF & ART Specialist 
    //                   </p>
    //                   {/* <p className="text-[#000000] mt-3">
    //                     Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS)
    //                   </p> */}
    //                   <p className="text-[#000000] mt-3">
    //                     Vice President - Sudha Hospitals Pvt. Ltd.
    //                   </p>
    //                   <p className="text-md text-gray-600 mt-3 ">
    //                     Dr. S. Pradeepa is known for her clinical brilliance and expertise in fertility-enhancing procedures and advanced reproductive scientific techniques. With a strong focus on patient care and consistently high success rates, she has helped thousands of couples realize their dream of parenthood.
    //                   </p>
    //                   <div className="sm-block hidden">
    //                     <p className="text-md  text-gray-600 mt-3">
    //                       As the Vice President of Sudha Fertility Centre, she has spearheaded the strategic growth of the organization, resulting in the successful establishment of over 40 branches within just five years. Alongside her medical excellence, Dr. Pradeepa is also recognized for her compassionate counselling services that support and guide patients through every stage of their fertility journey.
    //                     </p>
    //                     <h3 className="text-[20px] font-semibold mt-4">Awards & Achievements:</h3>
    //                     <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
    //                       <li>
    //                         Member of the American Society for Reproductive Medicine (ASRM)
    //                       </li>
    //                       <li>Member of ESHRE (European Society of Human Reproduction & Embryology) </li>
    //                       <li>Lifetime Member of ISAR (Indian Society for Assisted Reproduction)</li>
    //                       <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India </li>
    //                       <li>Faculty Member, International Federation of Fertility Societies </li>

    //                     </ul>
    //                   </div>

    //                 </div>
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <Image
    //                     src={Pradeepa}
    //                     alt="Pradeepa"
    //                     className="w-full h-auto rounded-xl"
    //                   />
    //                 </div>
    //               </motion.div>
    //               <motion.div className="sm-hidden">
    //                 <p className="text-md  text-gray-600 mt-3">
    //                   As the Vice President of Sudha Fertility Centre, she has spearheaded the strategic growth of the organization, resulting in the successful establishment of over 40 branches within just five years. Alongside her medical excellence, Dr. Pradeepa is also recognized for her compassionate counselling services that support and guide patients through every stage of their fertility journey.
    //                 </p>
    //                 <h3 className="text-[20px] font-semibold mt-4">Awards & Achievements:</h3>
    //                 <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
    //                   <li>
    //                     Member of the American Society for Reproductive Medicine (ASRM)
    //                   </li>
    //                   <li>Member of ESHRE (European Society of Human Reproduction & Embryology) </li>
    //                   <li>Lifetime Member of ISAR (Indian Society for Assisted Reproduction)</li>
    //                   <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India </li>
    //                   <li>Faculty Member, International Federation of Fertility Societies </li>

    //                 </ul>
    //               </motion.div>



    //               <hr className="mt-4 border-gray-300" />
    //             </section>
    //           </ScrollMotion>
    //           <ScrollMotion>
    //             <section id="gallery">
    //               <h3 className="text-[#173366] mt-4  font-semibold">
    //                 Gallery
    //               </h3>
    //               <motion.div
    //                 initial="initial"
    //                 animate="animate"
    //                 variants={fadeInUp}
    //               >
    //                 <ImageGrid images={Aruppukottai.gallery} />
    //               </motion.div>

    //               <hr className="mt-4 border-gray-300" />
    //             </section>
    //           </ScrollMotion>

    //           <ScrollMotion>
    //             <section id="location">
    //               <motion.div
    //                 className="flex flex-col lg:flex-row gap-8 mt-5 bg-[#F0F5FF] p-5 rounded-lg"
    //                 initial="initial"
    //                 animate="animate"
    //                 variants={fadeInUp}
    //               >
    //                 <div className="w-full lg:w-1/2">
    //                   <h3 className="text-[#173366]  font-semibold">
    //                     Location
    //                   </h3>
    //                   <h4 className=" font-semibold mt-2">
    //                     Book Your Free Appointment
    //                   </h4>
    //                   <p className=" text-gray-600 mt-3">
    //                     Take the first step towards your parenthood journey.
    //                   </p>

    //                   <div className="rounded-lg space-y-6 mt-5">
    //                     {/* Phone Section */}
    //                     <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
    //                       <div className="bg-white xl:p-2 lg:p-2 p-1  rounded-full">
    //                         <IoCallOutline className="text-xl text-black size-4 sm:size-3 xl:size-4 lg:size-4" />
    //                       </div>
    //                       <div>
    //                         <p className=" font-semibold text-gray-500">
    //                           CALL
    //                         </p>
    //                         <p className=" font-semibold">
    //                           +91 76-7007-6006
    //                         </p>
    //                       </div>
    //                     </div>
    //                     <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
    //                       <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full flex items-start justify-start shadow-md">
    //                         <CiLocationOn className="text-xl text-black size-4 sm:size-3 xl:size-4 lg:size-4" />
    //                       </div>
    //                       <div>
    //                         <p className=" font-semibold text-gray-500 uppercase">
    //                           Address
    //                         </p>
    //                         <p className="  font-semibold">
    //                           C/o. A City Hospital, 1b, Railway Feeder Rd, Near Nadar, Teppakulam, Weavers Colonyx Aziz Nagar, Aruppukottai - 626101
    //                         </p>
    //                         <Link href="" >
    //                           <button className="button-all mt-4  md:mx-0 md:mr-auto flex items-center gap-2">
    //                             <p>Get Directions</p>
    //                             <MdLocationOn size={22} />
    //                           </button>
    //                         </Link>
    //                       </div>
    //                     </div>

    //                     <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
    //                       <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full flex items-start justify-start shadow-md">
    //                         <AiTwotoneMail className="text-xl text-black size-4 sm:size-3 xl:size-4 lg:size-4" />
    //                       </div>
    //                       <div>
    //                         <p className=" font-semibold text-gray-500">
    //                           EMAIL US
    //                         </p>
    //                         <p className="  font-semibold">
    //                           care@sudhahospitals.com
    //                         </p>
    //                       </div>
    //                     </div>

    //                     {/* Social Media Section */}
    //                     {/* <div>
    //                       <div className="flex items-center mb-2">
    //                         <div className="w-[20px] border-t border-2 border-black ml-2"></div>
    //                         <p className=" font-semibold">
    //                           Connect with us:
    //                         </p>
    //                       </div>
    //                       <div className="flex gap-3">
    //                         <Link
    //                           href="https://www.facebook.com/sudhafertilitycentre"
    //                           target="_blank"
    //                         >
    //                           <Image src={fb} alt="Facebook" className="w-[40px]" />
    //                         </Link>
    //                         <Link
    //                           href="https://www.youtube.com/@sudhafertilitycentre"
    //                           target="_blank"
    //                         >
    //                           <Image src={youtube} alt="YouTube" className="w-[40px]" />
    //                         </Link>
    //                         <Link
    //                           href="https://instagram.com/sudhafertilitycentre/"
    //                           target="_blank"
    //                         >
    //                           <Image src={Insta} alt="Instagram" className="w-[40px]" />
    //                         </Link>
    //                       </div>
    //                     </div> */}
    //                   </div>
    //                 </div>
    //                 <div className="w-full lg:w-1/2">
    //                   <div className=" rounded-lg shadow-md max-w-sm mx-auto">
    //                     <div className="relative">
    //                       <Image
    //                         src={Hospital}
    //                         alt="Building"
    //                         className="rounded-lg w-full"
    //                       />
    //                       {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs flex justify-around items-center p-2 rounded-b-lg">
    //                         <div className="flex items-center space-x-1">
    //                           <FaWalking />
    //                           <span>3D Walk Through</span>
    //                         </div>
    //                         <div className="flex items-center space-x-1">
    //                           <FaMapMarkerAlt />
    //                           <span>Get Direction</span>
    //                         </div>
    //                         <div className="flex items-center space-x-1">
    //                           <FaShareAlt />
    //                           <span>Share</span>
    //                         </div>
    //                       </div> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </motion.div>
    //             </section>
    //           </ScrollMotion>
    //         </div>
    //       </div>
    //       <div className="w-full lg:w-1/3">
    //         <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg sticky top-[144px]">
    //           <AppointmentForm />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="container mx-auto">
    //     <section>
    //       <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
    //         <h2 className=" font-semibold text-center mb-6">
    //           Frequently Asked Questions
    //         </h2>
    //         {Aruppukottai.faqs.slice(0, visibleCount).map((faq, index) => (
    //           <FAQItem
    //             key={index}
    //             question={faq.question}
    //             answer={faq.answer}
    //             isOpen={openIndex === index}
    //             toggle={() => toggleFAQ(index)}
    //           />
    //         ))}
    //         {Aruppukottai.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
    //           <div className="text-center mt-16">
    //             <button
    //               className="button-all mx-auto"
    //               onClick={toggleViewMore} // Updated onClick handler
    //             >
    //               {showAll ? (
    //                 <div className="flex gap-3 items-center">
    //                   View Less <IoMdArrowBack />
    //                 </div>
    //               ) : (
    //                 <div className="flex gap-3 items-center">
    //                   View More <IoMdArrowForward />
    //                 </div>
    //               )}
    //             </button>
    //           </div>
    //         )}
    //       </div>
    //     </section>
    //   </div>

    //   <section>
    //     {/* <div className="container mx-auto">
    //         <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
    //     <MarqueeComponent
    //       items={Aruppukottai.gallery}
    //       direction="left"
    //       speed="fast"
    //       className="custom-class"
    //     />
    //     <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
    //       <h3 className=" font-bold text-center ">
    //         Childless Couples to Happy Parents
    //       </h3>
    //       <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
    //     </div>
    //     <MarqueeComponent
    //       items={Aruppukottai.gallery}
    //       direction="right"
    //       speed="fast"
    //       className="custom-class"
    //     />
    //     {/* </div>
    //       </div> */}
    //   </section>
    // </>

  );
}

export default AruppukottaiPage;
