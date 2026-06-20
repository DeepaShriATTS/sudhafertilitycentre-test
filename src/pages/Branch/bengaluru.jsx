"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/bengaluru/bangalore_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import NagaTejaswi from "@/assets/branch/bengaluru/NagaTejaswi.webp";
import Arunasaradha from "@/assets/branch/bengaluru/aruna-saradha.webp";
import Hospital from "@/assets/branch/bengaluru/Bangalore.webp";
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import ImageGrid from "@/components/imagegrid";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaWalking,
  FaMapMarkerAlt,
  FaShareAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur, Bengaluru } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { bangaloreVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";

function BengaluruPage() {
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
      setVisibleCount(Bengaluru.faqs.length); // Show all FAQs
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
  const Bengalurureview = [
    {
      quote:
        "Sudha Fertility Centre in Bangalore is the best. It provides world-class treatment at an affordable cost. Their success rates are high, and their care is excellent. If you are looking for the best fertility care, this is the place!",
      name: "Agathiyan Karthikeyan",
      title: "Patient",
    },
    {
      quote:
        "My experience at Sudha IVF Hospital in Bangalore was amazing. The staff is friendly, the doctors are highly skilled, and the treatments are advanced. The best place for couples struggling with infertility!",
      name: "Mugil Vilandai",
      title: "Patient",
    },
    {
      quote:
        "I was nervous about IVF, but the doctors and staff at the Sudha IVF Centre in Bangalore.. supported me throughout the journey. The facilities are modern, and the treatments are affordable. Highly recommended!",
      name: "king",
      title: "Patient",
    },
    {
      quote:
        "I have been married for 3 years and was trying to get pregnant, but all our efforts failed. Later, I heard about sudha fertility centre, Bangalore and visited the centre few months back. Doctor explained all the treatments in a very polite and understandable way. The team of Bangalore sudha treated me as their sister. I thank the entire team for the support through out my journey. Now I'm pregnant and I'm very happy to be a parent now. My entire family is celebrating sudha fertility centre, Bangalore to give us the great 😊 joy. I'll definitely recommend the sudha fertility centre to all. Because of the good nursing staff manonmani, experienced doctor, excellent counselor jincy and above all Rufin mam, the admin of the centre treated me very well, explained all our treatments and cleared all our doubts. Thank you so much to the entire team. Best fertility centre in Bangalore is sudha fertility centre.",
      name: "Valli Senna",
      title: "Patient",
    },
    {
      quote:
        "We are happy to inform that we are parents after being trying for many months. The doctor and the entire team of sudha fertility centre, bangalore gave us full support and guidance especially the hope. The way they behaved with us was like a family. In all our reviews, consultations were good, the approach of all staff from reception to housekeeping was very good. Very good management of staff. We have been to many fertility centres, but sudha surpassed all. The cooperation from Admin, counselor, staff nurses are extraordinary. Our heartfelt gratitude to the entire sudha fertility, bangalore team. Explanation given by admin and counselor was satisfactory from the begining. The entire team is equal to god 🙏Kudos to the entire team.... 👍 I definitely and strongly recommend this centre to all who are in need of children. Best fertility centre. All our experiences can never be explained in this review. Do visit the centre and experience yourself. Finally, we are parents.... ♥️✨ thanks a lot team....",
      name: "Anandha gopala Pai",
      title: "Patient",
    },
    {
      quote:
        "We are happy to share this review as we are going to be parents soon. We would like to thank Dr. Naga Tejasswi and their team for all their support, guidance and care .",
      name: "hari priya",
      title: "Patient",
    },
    {
      quote:
        "The entire team of Sudha Hospitals Bangalore branch treats the patients as their family. I love the team and entire atmosphere. We had a great experience with the entire team. Starting from reception till Housekeeping services, all are very good. They all treated us as their family members. After 3 years, now we are parents. Thank you so much Doctor, nurses and counseling for the support. Special thanks to admin Rufin mam. Best fertility centre in bangalore.",
      name: "Akshay Appu",
      title: "Patient",
    },
    {
      quote:
        "Visited Bangalore branch Sudha Hospitals. The Doctor is very polite and helpful. She takes care of the patients very seriously. I have seen lots of positive results in this fertility centre. Hoping for the best result for us. And the entire team is very supportive. Thanks a lot team. Best fertility centre i've ever visited in Bangalore.",
      name: "Ramesha C",
      title: "Patient",
    },
    {
      quote:
        "We are very happy to visit Sudha Hospitals, HSR layout. The doctor and the entire team are very friendly and they took care of us very well. Best fertility centre in Bangalore. Thank you team for the care. Will definitely refer the hospital to my friends.",
      name: "Triveni Yadav",
      title: "Patient",
    },
    {
      quote:
        "We visited Sudha fertility centre a year back. We have been marries for 3 years, visited so many hospitals and everything was a waste. Finally we visited sudha fertility centre. We had a great experience with the entire team. Starting from reception till Housekeeping services, all are very good. They all treated us as their family members. After 3 years, now we are parents. Thank you so much Doctor, nurses and counsellof for the support. Special thanks to admin Rufin mam. Best fertility centre in bangalore.",
      name: "Rohith Sridhar",
      title: "Patient",
    },
    {
      quote:
        "We have been trying for pregnancy from long time and were not getting hope anywhere. Later, got to know about Dr. Naga Tejaswi in Sudha hospital, Bangalore; she counselled to us and given positive hope. Seeing her determination, we really built trust on her and followed every steps as Doctor suggested. Few days before, my pregnancy came positive, thanking is not enough today to Sudha hospital Doctors Dr. Pradeepa mam and Dr Naga Tejaswi and amazing staffs and Admin Rufin mam and Manon Mani and Reception Staffs Shilpa Mahalakshmi and Sumitha sister and Jincy counseller thank you all and brought good luck for us. Thank you all and lots of love for liting positive hope and brilliant result. Thank you so much!",
      name: "Vignesh Rajendran",
      title: "Patient",
    },
    {
      quote:
        `Me visiting for the third time in sudha fertility, am having a very good experience and the way the doctor explained
    the treatment to me was very satisfactory. All the nurses and front office team including admin spend time to encourage
    us. Thanks team for the wonderful support. Best fertility centre in Bangalore.`,
      name: "Asha Rani yh",
      title: "Patient",
    },
    {
      quote:
        `Visited Sudha fertility centre, Bangalore. Dr Naga tejaswi was very friendly and the care given by entire team was very
    good. Best fertility centre in Bangalore. I recommend sudha for all who are in need of baby.
    Thank you very much, Sudha hospital
    We find good hospital for our treatment,
    Totally I am appreciating, Good response, convenience treatment, good taking care.`,
      name: "shrinivasa murthi",
      title: "Patient",
    },
    {
      quote:
        `Thanks to sudha hospital, bangalore team. We are happy to inform that we are parents now. After many years we are
    parents now. Thanks to Doctor, nursing and the entire team of bangalore for the support and guidance. Once again thanks
    all👍. I will surely recommend sudha fertility centre for all. Best fertility centre in bangalore.`,
      name: "A.K.PANDIYAN KANAGARAJ",
      title: "Patient",
    },
    {
      quote:
        `Thanks to Dr.Tejaswi & to Sudha fertility HSR team.... The doctor here is very good, experienced and the treatment
    given to us was excellent. She enquired each & every issue very particularly and gave a very good results... Thank you
    so much team for the entire support. Nursing team & the counselor are very good.`,
      name: "Soundar K",
      title: "Patient",
    },
    {
      quote:
        `Thanks sudha team, Bangalore for the support and guidance throughout our journey. Finally we are parents. Doctor,
    nurses, counselor and admin are very cooperative and supportive. I recommend sudha fertility centre to all. Best
    fertility centre.`,
      name: "priya Pandiyan",
      title: "Patient",
    },
    {
      quote:
        `I'm very happy to visit the Bangalore Sudha. Best fertility centre in Bangalore I've ever experienced. I visited a lot
    of centres and everything was in vain. Thanks to the entire sudha team for their lovable care and mental support. I hope
    that we will be parents soon.
    Thank u entire team....`,
      name: "krupa m",
      title: "Patient",
    },
    {
      quote:
        `We are very happy to visit Sudha hospital , after so many year after i got pregnant. I have a hope that we will become
    parents for sure. Similarly, now we are parents. Best fertility centre in bangalore. All treatment are provided at
    Affordable cost . We do have lot of well known centers but Sudha fertility surpassed all. Thank you so much Doctors,
    nurses and Jincy sister. Special thanks to Rufin mam also.`,
      name: "Sudhashashi D",
      title: "Patient",
    },
    {
      quote:
        `The consultation and counselling given by Doctor was very excellent. Nursing team and admin mam are very supportive
    through out our journey. THANKS TEAM FOR YOUR WONDERFUL SUPPORT. Best fertility centre in bangalore. We are very happy
    and once again thanks team.we approach with any doubts,all were clarified then and there and proper solution were also
    given.we are very convenient with the team.sudha hospital banglare`,
      name: "Mani Mani",
      title: "Patient",
    },
    {
      quote:
        `We visited the Sudha fertility centre with lots of hope. After 10 years of marriage life, now we are very very happy
    that we became parents. We went to lots of hospitals for treatment but the final hope was the sudha Fertility centre.
    Thanks to the entire team. Dr Pradeepa mam gave us hope. The Bangalore team was with us throughout our journey.
    Manonmani sister was very helpful and she cleared all the doubts anytime. Counselor explained everything in detail.
    Special thanks to Admin Rufin mam. If she is not there, we don't know how our life would be. She encouraged us with her
    kind words everytime. She is really an asset to sudha Hospitals. Thanks to entire team. Dr Naga Tejaswi mam was very
    friendly and supportive. Thanks dr. Now we are parents... 💞. Thanks to the entire team.`,
      name: "Vasu V. Vasu",
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
            <div className="container mx-auto">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
                <div className="flex flex-col lg:flex-row justify-between items-center">
                  {/* Left Content */}
                  <motion.div
                    className="text-white w-full lg:w-1/2"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2 className="text-[#FFC65C] font-semibold uppercase">
                      Namaskāra Bangalore
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Bangalore</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Together, we turn dreams into families.
                    </p>
                    <Button styleClass="mt-6" text="Connect With WhatsApp" link="https://wa.me/917670076006?text=Hi,%20Can%20I%20get%20more%20info%20on%20this?" icon={<IoMdArrowForward />} />
                  </motion.div>

                  {/* Right Content - Form */}
                  <BranchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-80 lg:-bottom-64 w-full  ">
          <InfiniteMovingCardsDemo reviews={Bengalurureview} />
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
                      <h2 className="text-[#173366] mb-2 text-[24px] font-semibold">
                        About
                      </h2>
                      {/* <p className="text-md font-bold">
                        Best Fertility Centre in Bangalore
                      </p> */}
                      <p className="mt-3  text-gray-600">
                        Sudha Fertility Centre inaugurated its branch in Bangalore in 2021. With over four decades of experience in fertility care, Sudha Fertility Centre has been a hope for thousands of families to start their parenthood journey. As a leading fertility hospital in Bangalore, we take pride in delivering personalised care through assisted reproductive technology, making us a trusted name in the region.
                      </p>
                      <p className="mt-3  text-gray-600">
                        Our team is committed to supporting you at every step of the journey, making us a trusted name in the region for turning your dreams of parenting into reality. At Sudha, our team will turn your dreams of parenthood into reality.
                      </p>

                    </div>

                    <div className="w-full lg:w-1/2 sm-hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full  object-cover rounded-md"
                      />
                    </div>
                  </div>

                  <motion.div>
                    <h2 className="text-[#173366] mb-2 mt-3 text-[24px]  font-semibold">
                      Our Fertility Treatments in Bangalore:
                    </h2>
                    <p className="mt-3 mb-3 text-gray-600">
                      At Sudha Fertility Centre, with fertility specialists in Bangalore, we offer a wide range of fertility treatments with world-class medical expertise and compassionate care to support every patient in every step of their fertility journey.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-md text-gray-600">
                      As a leading IVF Centre in Bangalore, we offer
                    </p>
                    <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                      <li>Normal Delivery - Natural Labour For Mothers </li>
                      <li>IVF - In Vitro Fertilisation</li>
                      <li>IUI - Intrauterine Insemination</li>
                      <li>ICSI - Intracytoplasmic Sperm Injection</li>
                      <li>
                        IMSI - Intracytoplasmic Morphologically Selected Sperm Injection
                      </li>
                      <li>TESE - Testicular Sperm Extraction</li>
                      <li>PESA - Percutaneous Epididymal Sperm Aspiration</li>
                      <li>LAH - Laser Assisted Hatching</li>
                      <li>
                        Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood Cell Derivative)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      and other advanced technologies like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS, as well as other fertility preservation processes are done by the top fertility specialists in Bangalore.
                    </p>

                    <div className="w-full lg:w-1/2 hidden sm-block sm-mt-12">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full  object-cover rounded-md"
                      />
                    </div>
                    <div>
                      <h3 className=" text-[#173366]  font-semibold mt-5">
                        Female Infertility Treatments in Bangalore
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Sudha Fertility Centre in Bangalore is specialised in treating female infertility and helps them conceive. Our fertility experts and embryologists, backed by fellowship in reproductive medicine, approach each patient with empathy and examine the couple completely, and provide personalised fertility treatments for a successful outcome.
                      </p>
                      <p className="mt-3 text-gray-600">
                        Females will undergo the following procedure in fertility examination for accurate diagnosis.
                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>Ovarian biology</li>
                        <li>Reproductive endocrinology</li>
                        <li>Reproductive immunology</li>
                        <li>Genetics of fertility health</li>

                      </ul>
                    </div>


                    <div>
                      <h3 className=" text-[#173366]  font-semibold mt-5">
                        Male Infertility Treatments in Bangalore
                      </h3>
                      <p className="mt-3 text-gray-600">
                        At Sudha Fertility Centre in Bangalore, we offer comprehensive male infertility treatments backed by clinical expertise and a holistic approach to care. Our goal is to improve the chances of fatherhood by identifying and addressing the root causes of infertility with precision and compassion.
                      </p>
                      <p className="mt-3 text-gray-600">
                        Our expert doctors begin with a detailed evaluation that includes semen analysis, genetic testing, and other essential diagnostic tests to ensure an accurate diagnosis. Based on the findings, we create personalized treatment plans that are designed to suit each individual’s unique fertility needs.
                      </p>
                      <p className="mt-3 text-gray-600">
                        We maintain complete transparency throughout the process, ensuring patients understand their options clearly and feel supported at every step. Depending on the diagnosis, we may recommend fertility-enhancing procedures, advanced treatment therapies, or fertility preservation techniques for long-term family planning.
                      </p>
                      <p className="mt-3 text-gray-600">
                        Using the latest in advanced reproductive scientific techniques, our specialists are committed to helping you achieve the dream of fatherhood with the highest standards of care and success.
                      </p>

                    </div>


                    <h3 className=" text-[#173366]  font-semibold mt-5">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Bangalore?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      We have helped hundreds of families overcome infertility. Every family that walks in with hope is treated with care, and it’s our greatest joy to see parents hold their little one for the first time. Our success stories in Sudha Fertility Centre in Bangalore range from young couples to old couples who want to start their parenting journey. Our Bangalore fertility centre has a record of bringing hope and joy to families facing infertility and reproductive health concerns, offering solutions that turn dreams into reality. To help you in your parenting dream, Sudha Fertility Centre in Bangalore provides you the fertility treatments with the best advanced technologies, making us the best IVF centre in India.
                    </p>

                    <p className="mt-3 text-gray-600">
                      As an advanced fertility centre, equipped with cutting-edge technology, infertility specialists, and state-of-the-art infrastructure, we use the latest technology to run diagnostic tests with internationally trained specialists. Sudha Fertility Centre is widely known for its clinical expertise, affordability, and success rates.
                    </p>


                    <p className="mt-3 text-gray-600">
                      When a couple approaches us, we make sure the patient experiences a comfortable and supportive environment from the initial consultation. With an accurate diagnosis of men's and women's health, including advanced diagnostic tests like genetic tests for identifying the root cause of infertility. We follow a patient-centric approach for a comfortable fertility journey.
                    </p>


                    <p className="mt-3 text-gray-600">
                      After the tests, our expert doctors provide personalized treatment plans, including counselling services, diet plans, fertility-enhancing procedures, like advanced assisted reproductive technology (ART) treatments like IVF, ICSI, IUI, and other alternative routes to parenthood, like surrogacy, conception through egg or sperm donors.
                    </p>

                  </motion.div>

                  <hr className="mt-4" />
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
                      <h2 className="text-[#173366] mb-2 mt-3 text-[24px]  font-semibold">
                        Facilities
                      </h2>
                      <p className="text-md text-gray-600 mt-3">
                        With cutting-edge technology and state-of-the-art facilities, Sudha Fertility Centre is a trusted and renowned IVF hospital in Bangalore offering hope and personalised solutions to couples trying for pregnancy, from young couples to old couples, to complete their family.
                      </p>
                      <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
                        <li>
                          State-of-the-art modern IVF laboratories with laminar air flow
                        </li>
                        <li>25-bed facility </li>
                        <li>Round-the-clock care</li>
                        <li>24/7 access to the Pharmacy </li>
                        <li>Dedicated Labour Room for Normal Delivery </li>
                        <li>Fully equipped Operation Theatre </li>
                        <li>Personalized treatment plans</li>
                        <li>Experienced Fertility Experts in Bangalore</li>
                        <li>
                          Fully equipped Neonatal Intensive Care Unit (NICU)
                        </li>
                        <li>Comprehensive Diagnostic Services</li>
                        <li>Cost-effective procedures and treatments.</li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                      <ImageSlider images={Ambattur.Facilities.Facilitiesimg} />

                      {/* <Image src={Facilities} alt="Facilities" className="w-full h-full object-cover" /> */}
                    </div>
                  </motion.div>
                  <hr className="mt-4 border-gray-300" />
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
                      <h2 className="text-[#173366] mb-3 text-[24px] font-semibold leading-[1.4]">
                        Fertility Specialists <br />
                        in Bangalore
                      </h2>
                      <h3 className="text-[20px] font-semibold mt-2 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Bangalore
                      </h3>
                       <h4 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr.S.Pradeepa Sudhakar.,
                      </h4>
                      <p className="text-md text-[#000000] mt-3">
                       DGO, DNB (OG), MNAMS, FICOG Senior Consultant IVF & ART Specialist 
                      </p>
                      {/* <p className="text-[#000000] mt-3">
                        Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS)
                      </p> */}
                      <p className="text-[#000000] mt-3">
                        Vice President - Sudha Hospitals Pvt. Ltd.
                      </p>
                      <p className="text-md text-gray-600 mt-3">
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
                    <div className="w-full lg:w-1/2 mt-8">
                      <Image
                        src={Pradeepa}
                        alt="Pradeepa"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>


                  </motion.div>

                  <div className="sm-hidden">
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


                  <motion.div
                    className="flex  flex-col lg:flex-row gap-8 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-8">
                      <Image
                        src={Arunasaradha}
                        alt="Aruna Saradha K"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold mt-2">
                        Our Fertility Specialist in Bangalore
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold ">
                        Dr. Aruna Saradha K
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, MS (OBG), FRM

                      </p>
                      <p className="text-[#000000] mt-3">
                        Fertility Consultant
                      </p>
                      <p className="text-md text-gray-600 mt-3">
                        Dr. Aruna Saradha K is one of the experienced infertility specialists at Sudha Fertility Centre, bringing over 9 years of clinical expertise from leading IVF hospitals and advanced fertility clinics. With 2 years dedicated to reproductive medicine, she is known for her use of the latest technology and advanced reproductive scientific techniques to enhance treatment outcomes. Dr. Aruna focuses on creating personalized treatment plans tailored to each patient’s unique fertility needs, contributing to consistently improving success rates. Her patient-centric approach and compassionate care empower individuals and couples to move forward with confidence on their fertility journey.

                      </p>
                    </div>
                    
                  </motion.div>
                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery" className="">
                  <h3 className="text-[#173366] mt-5  font-semibold">
                    Gallery
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Bengaluru.gallery} />
                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
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
                      <h3 className="text-[#173366]  font-semibold">
                        Location
                      </h3>
                      <h4 className="font-semibold mt-2">
                        Book Your Free Appointment
                      </h4>
                      <p className="text-gray-600 mt-3">
                        Take the first step towards your parenthood journey.
                      </p>

                      <div className="rounded-lg space-y-6 mt-5">
                        {/* Phone Section */}
                        <div className="flex items-center lg:space-x-4 sm:space-x-1 space-x-1">
                          <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full">
                            <IoCallOutline className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-500">
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
                            <p className="font-semibold text-gray-500 uppercase">
                              Address
                            </p>
                            <p className="font-semibold">
                              Door no. - 1534, 21st Main, 7th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka - 560102.
                            </p>
                            <Link href="https://maps.app.goo.gl/GZSDWRzyTaZgY3Le8" >
                              <button className="button-all mt-4  md:mx-0 md:mr-auto flex items-center gap-2">
                                <p>Get Directions</p>
                                <MdLocationOn size={22} />
                              </button>
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
                          <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full">
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
                        {/* <div>
                          <div className="flex items-center mb-2">
                            <div className="w-[20px] border-t border-2 border-black ml-2"></div>
                            <p className="p-1 text-sm sm:text-base md:text-lg font-bold">
                              Connect with us:
                            </p>
                          </div>
                                <div className="flex space-x-4">
                                  <Link
                                    href="https://www.facebook.com/sudhafertilitycentre"
                                    target="_blank"
                                  >
                                    <FaFacebook className="text-4xl  text-gray-600 bg-white p-2 rounded-full" />
                                  </Link>
                                  <Link
                                    href="https://www.youtube.com/@sudhafertilitycentre"
                                    target="_blank"
                                  >
                                   
                                    <FaYoutube className="text-4xl text-gray-600 bg-white p-2 rounded-full" />
                                  </Link>
                                  <Link
                                    href="https://instagram.com/sudhafertilitycentre/"
                                    target="_blank"
                                  >
                                    <FaInstagram className="text-4xl text-gray-600 bg-white p-2 rounded-full" />
                                  </Link>
                                </div>
                        </div> */}
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

            <h2 className=" font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Bengaluru.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Bengaluru.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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

          </section>

        </div>
      </div>

      <section>
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
       
        {/* <MarqueeComponent
          items={Bengaluru.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}

          <GallerySlider items={bangaloreVideos} />

        <div className="flex justify-center gap-4 flex-wrap items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Bengaluru.gallery}
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

export default BengaluruPage;
