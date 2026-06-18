"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/Puducherry/pondicherry_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/Puducherry/pondicherry.webp";
import AISHWARYAJAGAN from "@/assets/branch/Puducherry/DR.AISHWARYAJAGAN.webp";
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
import ScrollMotion from "@/components/animation/scrollMotion";
import { Ambattur, Puducherry } from "@/middleware/imagesroute";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function PuducherryPage() {
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
      setVisibleCount(Puducherry.faqs.length); // Show all FAQs
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


  const PondicherryReview = [
    {
      quote:
        "Sudha Fertility Hospital in pondicherry offers effective and affordable fertility treatments. The doctors use advanced techniques and provide the best care. The success rate is high. So thankful.",
      name: "Vishnu Ratchagan",
      title: "Patient",
    },
    {
      quote:
        "Good hospital setting. And ventilation. Staffs behavior good in manner. Particularly kamini sister, sankari sister and raji sister. Special thanks to Dr. Aiswarya mam. Excellent explanation and calm approach towards patients . Counseling sister padmapriya very friendly in manner and very good procedure explanation.",
      name: "Sumathi Ragav",
      title: "Patient",
    },
    {
      quote:
        "Good staff...we express heartfelt thanks to dr.iswarya mam..we come with lots of doubts and fears...we started with hopeful positive activities towards baby...wonderful team keep it up...compared to other hospitals cost is too low....",
      name: "Parsina Mary.M",
      title: "Patient",
    },
    {
      quote:
        "Best treatment at affordable prices...good staffs ....staffs are very kind...thanks to Dr. Iswarya mam ...out parenthood comes true...special thanks to Padma Priya sister who explains procedures very detailedly and kindly.... wonderful full keep it up...my heartfull thanks",
      name: "Kayal Vizhi",
      title: "Patient",
    },
    {
      quote:
        "Good hospital setting. Staffs are very kind and care taking...thank you so much for dr. Iswarya mam..special thanks to counselling sister padmapriya very good procedure explanation",
      name: "prakash prakash",
      title: "Patient",
    },
    {
      quote:
        "After multiple failed attempts in other hospitals, we lost hope. I finally found success at Sudha IVF Centre in Pondicherry .The doctors are highly skilled, and the treatments are advanced. Highly recommended!",
      name: "Dhina Dhinagar",
      title: "Patient",
    },
    {
      quote:
        "Sudha Fertility Centre in pondicherry provides amazing care. From consultation to treatment, everything was handled professionally. The doctors explained our options well. Highly recommend this IVF Centre in pondicherry!",
      name: "Sakthivel S",
      title: "Patient",
    },
    {
      quote:
        "Good hospital setting. Staffs are very good. Thank you to dr. Aiswarya mam. Good team. Keep it up. Special thanks to padmapriya sister....",
      name: "Vijay Vs",
      title: "Patient",
    },
    {
      quote:
        "Good environment and ventilation hospital setting. Dr. Aiswarya jagan mam very kind and detilaed explation of procedures. Sisters kamini and raji so kind and taking care. Counsellor padmapriya very good explanation of all procedures. Thank u for all. Good team. Keep it up.",
      name: "Venkatesan S",
      title: "Patient",
    },
    {
      quote:
        "Best Fertility Centre in pondy! The treatment plan was clear, and the doctors explained every step well. I felt comfortable throughout my IVF journey.",
      name: "Sowmya M",
      title: "Patient",
    },
    {
      quote:
        "Good environment and ventilation setting. Dr. Aishwarya mam explained procedure very clearly. Kamini sister and raji sis very kind taking care of us . Now we are entering to the parenting . Only possible to Sudha hospital. Special thanks to vignesh sir and vivek sir,and padmapriya sister. Good team",
      name: "Karthiga Devi",
      title: "Patient",
    },
    {
      quote:
        "The doctors are very experienced, and the treatment process is smooth. I highly recommend this IVF Hospital in pondy for anyone facing fertility issues.",
      name: "Sowmya M",
      title: "Patient",
    },
    {
      quote:
        "Good hospital and ventilation setting. Staffs are very friendly. Dr. Aishwarya Japan mam explain the condition very detailedly. Kamins sister, Raji sister are very caring . Padmapriya sister give very good counseling and detailed explanation",
      name: "Anbu Arasi",
      title: "Patient",
    },
    {
      quote:
        "Thanks to Dr. Aishwarya Jagan Mam and her wonderful team. Our cousin is now 4 months pregnant and very excited. Dr. Aishwarya Jagan is a very professional and passionate doctor; Thanks again for helping them start their family. We highly recommend them.",
      name: "Suresh Krish",
      title: "Patient",
    },
    {
      quote:
        "Doctor advice was satisfactory. Staff nurse & other staff was friendly behaviour. One of the best ivf centre in pondicherry. Treating us like their own friends and family members. thank you...",
      name: "Rajalakshmi Rajavel",
      title: "Patient",
    },
    {
      quote:
        "One of the low cost IVF treatment in pondicherry. Staffs are very good. Good hospital setting. Dr. Aiwarya mam treatment good.",
      name: "Sakthi Kalai",
      title: "Patient",
    },
    {
      quote:
        "Sudha hospital a very wonderful hospital in pondicherry. Dr.Aishwarya jegan is very very responsible & fantastic dr in her duty all staffs r sooo much responsible especially kamini sister very verry good staffs,veni,viji,Sarasa,raj good staffs I have been married for 10yrs I have lot of pbm ex.thyroid chocolate cyst,fits,one time IVF failure ,6 time iui failure,3 times scopy but Dr.Aiswarya mdm clear my all pbm now I am 2 month pregnant thank u sudha my life will again blossoms.......",
      name: "Priyasathish S",
      title: "Patient",
    },
    {
      quote:
        "One of the Low IVF cost treatment in pondicherry. Good hospitality service by staffs. Consultation advice is satisfying.",
      name: "Padma Priya",
      title: "Patient",
    },
    {
      quote:
        "One of the best IVF hospital in Pondicherry at low cost treatment. Explanation of Procedure by doctor mam was good & staff nurse behaviour was so kind. Thank you sudha hospital for treating me like as their family member.",
      name: "sarasa S",
      title: "Patient",
    },
    {
      quote:
        `First of all thanks to sudha hospital team Pondicherry. happy to say My Sister blessed twin boy and girl Dr.Aishwarya Jagan consultation and caring good. Admission period ward staffs good approach caring house.
  keeping department cleaning well`,
      name: "Vidhya Veeraiyan",
      title: "Patient",
    },
    {
      quote:
        "One of the best fertility centre in pondicherry. Doctor mam & counsellor advice gives positive energy. They are giving treatment as their hospital quotes. தாய்மை ஒரு வரம். Hoping for the best.",
      name: "Johnkomathi",
      title: "Patient",
    },
    {
      quote:
        "My endless gratitude to sudha fertility center, for blessing us with our precious gift and made our way journey comfortable 🙏. We don't know how this team baked away all our worries, making my treatment 100 percent successful with best memories. Love and immense respect from New born parents",
      name: "Kuralanban P",
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
                    <h2 className="text-[#FFC65C]  font-semibold uppercase">
                      VANAKKAM Pondicherry
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Pondicherry</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Fulfilling your parenthood dreams through advanced treatments.
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
        <div className="absolute -bottom-80 lg:-bottom-64 w-full ">
          <InfiniteMovingCardsDemo reviews={PondicherryReview} />
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
                  <motion.div
                    className="flex flex-col lg:flex-row gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <h3 className="text-[#173366]  font-semibold">
                        About
                      </h3>

                      <p className=" mt-3 text-gray-600">
                        Since launching in 2022, Sudha Fertility Centre in Pondicherry has been offering the highest quality fertility care. With a team of the best fertility specialists, technicians, and support staff, we provide personalised care and support at every stage of your journey towards parenthood. Our dedication to fertility care retains us as the best fertility centre in Pondicherry.
                      </p>
                      <h3 className=" text-[#173366] mt-3 font-semibold">
                        Fertility Treatments in Pondicherry:
                      </h3>
                      <p className="mt-3 text-gray-600">
                        At Sudha Fertility Centre, we offer the best fertility treatments in Pondicherry, guided by experienced fertility specialists. Our mission is to help couples in their fertility journey by fulfilling their dream of parenthood into reality makes us the leading fertility hospital in Pondicherry.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className=" mt-3 mb-3 text-gray-600">
                      As the best IVF center in Pondicherry, Sudha Fertility Centre is committed to solving all your infertility issues with the following treatments.
                    </p>
                    <ul className="text-gray-600 list-disc pl-4 leading-[2.2]">
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
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Pondicherry.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Pondicherry?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      Sudha Fertility Centre in Pondicherry has brought happiness to thousands of families longing for a child. From newlywed couples to older couples longing for a baby for years, we have made those dreams come true. As the most trusted IVF hospital in Pondicherry, we ensure that each couple receives the best care and enjoys every step of their parenthood journey.
                    </p>
                    <p className="mt-3 text-gray-600">
                      Our mission is to support couples to overcome their fertility challenges and experience the joy of parenthood. Sudha Fertility Centre is identified as the best fertility centre in Pondicherry as we have brought, and bringing hope and joy to families facing complex fertility challenges by offering the best solutions that make their dream come true.
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
                      <h3 className="text-[#173366] font-semibold">
                        Facilities
                      </h3>
                      <p className="mt-3 text-gray-600">
                        At Sudha Fertility Centre, we combine world-class technology and expert care to ensure a smooth, personalized journey into parenthood as the best fertility centre in Pondicherry. As the best fertility hospital in Pondicherry, we help you transform your dream of parenthood into reality with our best fertility treatments and world-class facilities, delivering excellence at every stage of your parenthood journey.
                      </p>
                      <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
                        <li>25 Bed Facility </li>
                        <li>Operation Theatres </li>
                        <li>3 General Wards</li>
                        <li>24/7 Pharmacy </li>
                        <li>
                          Dedicated In-house Clinicians and Support Staff{" "}
                        </li>
                        <li>Well-equipped Diagnostic Services</li>
                        <li>World-class IVF Laboratories</li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                      <ImageSlider images={Ambattur.Facilities.Facilitiesimg} />
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
                      <h3 className="text-[#173366] font-semibold leading-[1.4]">
                        Fertility Specialists   <br />
                        in Pondicherry
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Pondicherry
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
                      <p className=" text-gray-600 mt-3 ">
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
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={Pradeepa}
                        alt="Pradeepa"
                        className="w-full h-auto rounded-xl"
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
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-7 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={AISHWARYAJAGAN}
                        alt="AISHWARYAJAGAN"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold">
                        Our Fertility Specialist in Pondicherry
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. Aishwarya Jagan
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, MD(OG) FMAS, DMAS, Dip.ART
                      </p>
                      {/* <p className="text-[#000000] mt-3">
                     
                      </p> */}
                      <p className="text-gray-600 mt-3">
                        Dr. Aishwarya Jagan is a highly skilled fertility expert at Sudha Fertility Centre. With specialized training in advanced reproductive technologies, she is dedicated to providing comprehensive, personalized care to couples on their journey to parenthood, ensuring the best outcomes in fertility treatments.
                      </p>
                    </div>
                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery">
                  <h3 className="text-[#173366] mt-4 font-semibold">
                    Gallery
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Puducherry.gallery} />
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
                      <h3 className="text-[#173366] font-semibold">
                        Location
                      </h3>
                      <h4 className="font-semibold mt-3">
                        Book Your Free Appointment
                      </h4>
                      <p className="text-gray-600 mt-3">
                        Take the first step towards your parenthood journey.
                      </p>





                      <div className=" rounded-lg space-y-6 mt-5">
                        {/* Phone Section */}
                        <div className="flex items-center lg:space-x-4 sm:space-x-1 space-x-1">
                          <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full">
                            <IoCallOutline className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-500">
                              CALL
                            </p>
                            <p className="font-semibold ">
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
                              No.21, J.K Towers, 100 Feet Rd, Ellaipillaichavady, Sathya Nagar East, Puducherry, 605013.
                            </p>
                            <Link href="https://maps.app.goo.gl/63ez9CyRiUTc7PDx7">
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
                            <p className="font-semibold ">
                              care@sudhahospitals.com
                            </p>
                          </div>
                        </div>
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
            <h2 className="font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Puducherry.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Puducherry.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
        <MarqueeComponent
          items={Puducherry.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Puducherry.gallery}
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

export default PuducherryPage;
