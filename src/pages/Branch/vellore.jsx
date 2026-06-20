"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";

import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/vellore/vellore_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/vellore/vellore.webp";
import AYSWARIYA from "@/assets/branch/vellore/AYSWARIYA.webp";
import Beatrice from "@/assets/branch/vellore/beatrice-joan.webp";
import ImageGrid from "@/components/imagegrid";
import Buttonbottm from "@/components/button";
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur, Vellore } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

import { VelloreVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";

function VellorePage() {
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
      setVisibleCount(Vellore.faqs.length); // Show all FAQs
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

  const vellore = [
    {
      quote:
        "Excellent Thanks for All Doctor's STAFFS & Sisters good Service All STAFFS & SISTERS and AISHWARYA madam.... I am Very Very Happy with Hospital. Everyone there is so nice Knowledgeable....     Have a good day 🐥🐥🐥🐥🐥🐥",
      name: "Thilagavathy S",
      title: "Patient",
    },
    {
      quote:
        "I visited many hospitals and spent lots of time and money but no success. A neighbour suggested sudha hospital Vellore. And now I am happy results. Thanks team",
      name: "Preetha B",
      title: "Patient",
    },
    {
      quote:
        "Today I visited in-house camp. Staffs very good approach. Dr explanation very clear. Thank you sudha",
      name: "Kuppan Anjali",
      title: "Patient",
    },
    {
      quote:
        "I am taking treatment in vellore sudha hospital. Treatment was good. staff and nurse good.Dr. Ayswariya mam was good caring I am very satisfied with this best IVF centre. I suggested this hospital for my friends &family",
      name: "Revathi Sathyakumar",
      title: "Patient",
    },
    {
      quote:
        "We have went for many fertility centre .but we didn't get success. After 5 years of my marriage life  now I am announcing that we got pregnant thank you Dr Aishwarya mam and all staff nurse and Admin sir  and  staff of sudha hospital Vellore . Thank you",
      name: "Praveen Selvaraji",
      title: "Patient",
    },
    {
      quote:
        "Very professional and vibrant atmosphere.doctors are very experienced and expert in this field and patient enough to hear and clear all our doubts . reception staffs very quick and well experienced. All the staffs are co operative.highly recommended for sudha fertility centre vellore.",
      name: "Rollex",
      title: "Patient",
    },
    {
      quote:
        "Today I visited sudha hospital Vellore. Dr ayswariya mam   and Dr devanayagi mam approach, treatment explanation very clear. I felt comfortable during my visit. I had wonderful experience",
      name: "Sarala S",
      title: "Patient",
    },
    {
      quote:
        "I have been married for 3 years and was trying to get pregnant, but all our efforts failed. Later, I heard about sudha fertility centre, Vellore and visited the centre few months back. Doctor explained all the treatments very clear.The team of vellore sudha treated me as their sister. I thank the entire team for the support through out my journey. Now I'm pregnant and I'm very happy to be a parent now. My entire family is celebrating sudha fertility centre, Vellore to give us the great joy. I'll definitely recommend the sudha fertility centre to all. Thank you so much to the entire team.",
      name: "Ishwarya P",
      title: "Patient",
    },
    {
      quote:
        "We visited sudha hospital vellore for myself.doctors are professional and experienced.the nursing staff and front office staffs are supportive and provide good treatment  and the hospital has  good hygiene  and sanitazion practices. Thanks lot.highly recommended",
      name: "Manidevi Manidevi",
      title: "Patient",
    },
    {
      quote:
        "Very good place for interlity treatment. Especially the mental support you get from the accomodation service. All the staff like.provide great  treatment and support and service. Especially IVF treatment is good Sudha fertility hospital available for any help. Really liked my stay here",
      name: "Gayathri S",
      title: "Patient",
    },
    {
      quote:
        "good service and excellent doctors and staffs this is my first time  came to hospital. I'm going to lot off fertility my frd refferal this hospital really is very good care and service Doctor clear explain to iui treatment and IVF treatment.",
      name: "Divya E",
      title: "Patient",
    },
    {
      quote:
        "I would recommend to Vellore sudha hospital .very good experience ,thanks to doctors , staff's & management .The best fertility centre in Vellore",
      name: "Sivasripriya",
      title: "Patient",
    },
    {
      quote:
        "Visited sudha hospital Vellore. Dr ayswariya was very friendly and the care given by entire team wasvery good . Best fertility center in Vellore I recommend sudha fertility center",
      name: "Navanitham Rani",
      title: "Patient",
    },
    {
      quote:
        "I came for my daughter treatment they really helped me a lot. Doctor and Nurses reception staff,Admin person all are heling me lot to contiue my daughters treatment . Thanks to sudha Vellore.",
      name: "Pokkisham V",
      title: "Patient",
    },
    {
      quote:
        "One of Best Fertility Centre in Vellore..  Patient care from Nursing Side and Staffs are behaving friendly.. Dr.Ayswariya mam Guiding me a clearly about the problems..The Quality of Service and response was good.  Cost is very cheap and compare to other Fertility Centres in Vellore .I was admitted for 2days in room. Infrastructure is good.",
      name: "VinothKumar Rajasekaran",
      title: "Patient",
    },
    {
      quote:
        "We have gone many places for infertility but we didn't get success but 5th year of marriage life now I'm announcing that we got pregnant and no word to say we gone under the treatment sudha hospital Vellore have treated in Good way and good care we are proud to say we are pregnant thank to sudha hospital Vellore, highly recommend.",
      name: "Kumuda C",
      title: "Patient",
    },
    {
      quote:
        "We visited sudha hospital vellore for my self. We really Happy with the sevice and staff helpingtendency. Its a great place to treatment for fertility.",
      name: "Sarasu s Sarasu s",
      title: "Patient",
    },
    {
      quote:
        "Doctors are  professional and experienced.the nursing staff  and front office staffs are  supportive and provide good treatment and the hospital has good hygiene and sanitization practices.hospital staff is courteous cooperative and helpful.once again thanks to sudha.highly recommended.",
      name: "Vimal Raj",
      title: "Patient",
    },
    {
      quote:
        "Dr. Ayswariya mam and her entire  team are all very professional and compassionate. We are grateful for all the attention ans care they provided. Sudha Fertility centre and team are amazing",
      name: "Sura m",
      title: "Patient",
    },
    {
      quote:
        "One of the Best Fertility Centre for Sudha Fertility Centre in vellore very we'll experienced Doctor available in this hospitals medicine took the Time Pharmacy staff both are nicely handle the patients nursing staffs also doing they are duty nicely staff all are approaching very well  ",
      name: "Vagamudi mallika Mallika janaki",
      title: "Patient",
    },
  ];

  return (
    <>
      <div className="relative w-full min-h-[850px] md:min-h-[600px] lg:min-h-[600px]">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover -top-40 bg-center"
          style={{
            backgroundImage: `url(${BgAbout.src}), linear-gradient(to bottom, rgba(23, 51, 102, 0.7), rgba(255, 255, 255, 1))`,
          }}
        />

        <div>
          <div className="relative py-10 md:py-16">
            <div className="container mx-auto ">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  {/* Left Content */}
                  <motion.div
                    className="text-white w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-[#FFC65C]  font-semibold uppercase">
                      VANAKKAM Vellore
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In{" "}
                      <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Vellore</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Together, we take steps towards your parenthood dream.
                    </p>
                    <Button
                      styleClass="mt-6"
                      text="Connect with WhatsApp"
                      link="https://wa.me/917670076006?text=Hi,%20Can%20I%20get%20more%20info%20on%20this?"
                      icon={<IoMdArrowForward />}
                    />
                  </motion.div>

                  {/* Right Content - Form */}
                  <BranchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-80 lg:-bottom-64 w-full">
          <InfiniteMovingCardsDemo reviews={vellore} />
        </div>
        <div
          className="absolute bottom-0 w-full h-36"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
          }}
        ></div>
      </div>

      <div className="container mx-auto mt-72 lg:mt-60">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <div className="w-full pe-5">
              {/* Navbar */}
              <Navbar sections={sections} />

              {/* Sections */}
              <ScrollMotion>
                <section id="about" className="  pt-2">
                  <div
                    className="flex flex-col lg:flex-row gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <h3 className="text-[#173366] font-semibold">
                        About
                      </h3>

                      <p className=" mt-3 text-gray-600">
                        In 2022, Sudha Fertility Centre brought its renowned fertility services to Vellore. As the leading fertility hospital in Vellore, we are committed to offering personalised, compassionate care to guide you on your journey to parenthood. Our experienced team is dedicated to supporting you every step of the way, helping you achieve your dream of starting a family.
                      </p>
                      <h3 className="text-[#173366] mt-3 font-semibold">
                        Exceptional Fertility Treatments in Vellore:
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Sudha Fertility Centre in Vellore is home to the best fertility specialists, offering personalised treatments designed to help you overcome infertility. Our expert-led fertility hospital is equipped LAHwith cutting-edge technologies to support your dreams of parenthood.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden ">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-gray-600">
                      As the best IVF centre in Vellore, Sudha Fertility Centre specialises in the following treatments,
                    </p>

                    <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                      <li>Normal Delivery - Natural Labour For Mothers </li>
                      <li>IVF - In Vitro Fertilization </li>
                      <li>IUI - Intrauterine Insemination</li>
                      <li>ICSI - Intracytoplasmic Sperm Injection</li>
                      <li>
                        IMSI - Intracytoplasmic Morphologically Selected Sperm
                        Injection
                      </li>
                      <li>TESE - Testicular Sperm Extraction</li>
                      <li>PESA - Percutaneous Epididymal Sperm Aspiration</li>
                      <li>LAH - Laser Assited Hatching</li>
                      <li>
                        Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood
                        Cell Derivative)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Vellore.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden ">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Vellore?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      At Sudha Fertility Centre, we have had the honour of helping many families overcome the obstacles of conception. Every family that arrives with hope in their hearts receives compassionate care, and it fills us with joy to witness parents holding their newborn for the first time. Our success stories in Vellore span a wide range, from young couples to older couples eager to start their journey to parenthood.
                    </p>
                    <p className="mt-3 text-gray-600">
                      Sudha Fertility Centre in Vellore is known for consistently offering hope and joy to families facing complex fertility challenges, providing effective solutions that make dreams come true. Under the guidance of the best fertility and IVF specialists in Vellore, couples who have longed for a child have been blessed with babies, fulfilling their parenthood dreams at Sudha Fertility Centre.
                    </p>
                  </motion.div>

                  <hr className="mt-5" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="facilities">
                  <motion.div
                    className="flex flex-col lg:flex-row gap-8 mt-5 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <h3 className="text-[#173366]  font-semibold">
                        Facilities
                      </h3>
                      <p className=" text-gray-600 mt-3">
                        As the premier fertility hospital in Vellore, Sudha Fertility Centre delivers prompt and effective solutions based on solid evidence. We help turn your dream of parenthood into reality with our advanced fertility treatments and exceptional facilities, ensuring excellence throughout your journey
                      </p>
                      <ul className="text-md text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>Advanced Diagnostic Services </li>
                        <li>Round-the-clock Medical Care </li>
                        <li>World-class Operation Theatres </li>
                        <li>24/7 Diagnostic Services and Laboratories </li>
                        <li>Fully Equipped and Accessible Pharmacies </li>
                        <li>Comprehensive Reports to AID in Treatment </li>
                        <li>State-of-the-art NICU </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                      <ImageSlider images={Ambattur.Facilities.Facilitiesimg} />
                    </div>
                  </motion.div>
                  <hr className="mt-5 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="specialists">
                  <motion.div
                    className="flex flex-wrap lg:flex-nowrap gap-8 mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <h3 className="text-[#173366]  font-semibold leading-[1.4]" >
                        Fertility Specialists <br />
                        in Vellore
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Vellore
                      </h3>
                      <h4 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr.S.Pradeepa Sudhakar.,
                      </h4>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, DGO, DNB (OG), MNAMS, FICOG Senior Consultant IVF & ART Specialist
                      </p>
                      {/* <p className="text-[#000000] mt-3">
                        Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS)
                      </p> */}
                      <p className="text-[#000000] mt-3">
                        Vice President - Sudha Hospitals Pvt. Ltd.
                      </p>
                      <p className=" text-gray-600 mt-3">
                        Dr. S. Pradeepa is known for her clinical brilliance and expertise in fertility-enhancing procedures and advanced reproductive scientific techniques. With a strong focus on patient care and consistently high success rates, she has helped thousands of couples realize their dream of parenthood.
                      </p>
                      <div className="sm-block hidden">
                        <p className="text-md  text-gray-600 mt-3">
                          As the Vice President of Sudha Fertility Centre, she has spearheaded the strategic growth of the organization, resulting in the successful establishment of over 40 branches within just five years. Alongside her medical excellence, Dr. Pradeepa is also recognized for her compassionate counselling services that support and guide patients through every stage of their fertility journey.
                        </p>
                        <h3 className="text-[20px] font-semibold mt-4">Awards & Achievements:</h3>
                        <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
                          <li>
                            Member of the American Society for Reproductive Medicine (ASRM)
                          </li>
                          <li>Member of ESHRE (European Society of Human Reproduction & Embryology) </li>
                          <li>Lifetime Member of ISAR (Indian Society for Assisted Reproduction)</li>
                          <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India </li>
                          <li>Faculty Member, International Federation of Fertility Societies </li>

                        </ul>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                      <Image
                        src={Pradeepa}
                        alt="Pradeepa"
                        className="w-full h-auto"
                      />
                    </div>
                  </motion.div>

                  <motion.div className="sm-hidden">
                    <p className="text-md  text-gray-600 mt-3">
                      As the Vice President of Sudha Fertility Centre, she has spearheaded the strategic growth of the organization, resulting in the successful establishment of over 40 branches within just five years. Alongside her medical excellence, Dr. Pradeepa is also recognized for her compassionate counselling services that support and guide patients through every stage of their fertility journey.
                    </p>
                    <h3 className="text-[20px] font-semibold mt-4">Awards & Achievements:</h3>
                    <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
                      <li>
                        Member of the American Society for Reproductive Medicine (ASRM)
                      </li>
                      <li>Member of ESHRE (European Society of Human Reproduction & Embryology) </li>
                      <li>Lifetime Member of ISAR (Indian Society for Assisted Reproduction)</li>
                      <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India </li>
                      <li>Faculty Member, International Federation of Fertility Societies </li>

                    </ul>
                  </motion.div>
                  <motion.div
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={AYSWARIYA}
                        alt="AYSWARIYA"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    <div className="w-full lg:w-1/2">

                      <h3 className="text-[18px] text-[#173366] font-semibold ">
                        Dr. Devanayagi
                      </h3>
                      <p className=" text-[#000000] mt-3">
                        MBBS, MS(OG)
                      </p>
                      <p className="text-[#000000] mt-3">
                        Gynaecologist
                      </p>
                      <p className="mt-3 text-gray-600">
                        Dr. M. Devanayagi, gynaecologist at Sudha Fertility Centre, Vellore. She completed MBBS.MS (OG). She consulted more than 5000 patients & moreover, and the antenatal mothers were happy with her advice throughout their pregnancy journey. The doctor has completed more than 150 hysteroscopy and laparoscopy & other procedures. She completed more than 30 high-risk deliveries and has expertise in instrumental deliveries. Dr.M.Devanayagi has been working for 2 years in Sudha hospitals. Excellent performance within that Profession.
                      </p>
                    </div>

                  </motion.div>


                  <motion.div
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >


                    <div className="w-full lg:w-1/2">

                      <h3 className="text-[18px] text-[#173366] font-semibold ">
                        Dr. A. Beatrice Joan
                      </h3>
                      <p className=" text-[#000000] mt-3">
                        MBBS, MS (OG)

                      </p>
                      <p className="text-[#000000] mt-3">
                        Gynaecologist
                      </p>
                      <p className="mt-3 text-gray-600">
                        Dr. A. Beatrice Joan is an experienced Gynaecologist at Sudha Fertility Centre, providing specialized care in women’s reproductive health and fertility-related concerns. With a strong academic background and clinical expertise, she offers compassionate, patient-centered care tailored to individual needs. Her commitment to accurate diagnosis and effective treatment supports women through every stage of their fertility journey.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={Beatrice}
                        alt="Beatrice"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </motion.div>





                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery">
                  <h3 className="text-[#173366] mt-5  font-semibold">
                    Gallery
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Vellore.gallery} />
                  </motion.div>

                  <hr className="mt-5 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="location">
                  <motion.div
                    className="flex flex-col lg:flex-row gap-8 mt-5 bg-[#F0F5FF] p-5 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <h3 className="text-[#173366] font-semibold">
                        Location
                      </h3>
                      <h4 className=" font-semibold mt-3">
                        Book Your Free Appointment
                      </h4>
                      <p className=" text-gray-600 mt-3">
                        Take the first step towards your parenthood journey.
                      </p>

                      <div className="mt-5 rounded-lg space-y-6">
                        {/* Phone Section */}
                        <div className="flex items-center lg:space-x-4 sm:space-x-1 space-x-1">
                          <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full">
                            <IoCallOutline className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
                          </div>
                          <div>
                            <p className=" font-semibold text-gray-500">
                              CALL
                            </p>
                            <p className="font-semibold">
                              +91 76-7007-6006
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
                          <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full flex items-start justify-start shadow-md">
                            <CiLocationOn className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
                          </div>
                          <div>
                            <p className=" font-semibold text-gray-500 uppercase">
                              Address
                            </p>
                            <p className=" font-semibold">
                              24, 4th East Cross Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Katpadi, Vellore, Tamil Nadu - 632006.
                            </p>
                            <Link href="https://maps.app.goo.gl/4LUQPQSooBNAsaaD6">
                              <button className="button-all mt-4  md:mx-0 md:mr-auto flex items-center gap-2">
                                <p>Get Directions</p>
                                <MdLocationOn size={22} />
                              </button>
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
                          <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full flex items-start justify-start shadow-md">
                            <AiTwotoneMail className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-500">
                              EMAIL US
                            </p>
                            <p className="font-semibold">
                              care@sudhahospitals.com
                            </p>
                          </div>
                        </div>

                        {/* Social Media Section */}

                      </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <div className=" rounded-lg shadow-md max-w-sm mx-auto">
                        <div className="relative">
                          <Image
                            src={Hospital}
                            alt="Building"
                            className="rounded-lg w-full"
                            layout="responsive" // Ensures the image is responsive
                            width={700} // Set a default width
                            height={500} // Set a default height
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px" // Define sizes for different breakpoints
                          />
                          {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs flex justify-around items-center p-2 rounded-b-lg">
                            <div className="flex items-center space-x-1">
                              <FaWalking />
                              <span>3D Walk Through</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaMapMarkerAlt />
                              <span>Get Direction</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <FaShareAlt />
                              <span>Share</span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </section>
              </ScrollMotion>
            </div>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg sticky top-[145px]">
              <AppointmentForm />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <section>
            {/* <div className="max-w-2xl mx-auto p-4"> */}
            <h3 className="text-2xl font-bold text-center mb-6">
              Frequently Asked Questions
            </h3>
            {Vellore.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Vellore.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
            {/* </div> */}
          </section>
        </div>
      </div>

      <section>
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        {/* <MarqueeComponent
          items={Vellore.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}

        <GallerySlider items={VelloreVideos} />

        <div className="flex justify-center gap-4 flex-wrap items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Vellore.gallery}
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

export default VellorePage;
