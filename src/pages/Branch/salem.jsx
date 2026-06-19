"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/Salem/salem_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/Salem/salem.webp";
import charulatha from "@/assets/branch/Salem/charulatha.webp";
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
import { Ambattur, Salem } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function SalemPage() {
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
      setVisibleCount(Salem.faqs.length); // Show all FAQs
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



  const SalemReview = [
    {
      quote:
        "Am interested to share review about sudha Salem branch.... Staffs with good approach with us doctors and staffs approach were satisfied for us",
      name: "Sangeeta D",
      title: "Patient",
    },
    {
      quote:
        "Am satisfied with their care  and their talk with us soft handling of all staff and doctor tq to salem team",
      name: "V Sabari",
      title: "Patient",
    },
    {
      quote:
        "Nice approach from Salem team .am satisfied by their  caring and counseling  about our problem thank you to Salem sudha team",
      name: "Soundharya Chandrasekaran",
      title: "Patient",
    },
    {
      quote:
        `We had an excellent experience ar sudha fertility centre Salem. Consultant, Nursing staff and even non medical staffs are very humble and I appreciate their efforts telling us everything in detail. Nursing staff explained each and every procedure clearly. Even though I asked them many questions they politely answered all my queries.
  The ambience was very much fresh and clean and gave us positive vibes. The organisation and staffs working there treated patients with respect and dignity. I would highly recommend Sudha Fertility centre Salem for further treatments.`,
      name: "Raja Mani",
      title: "Patient",
    },
    {
      quote:
        "The hospital Atmosphere and staff service are good ...!!They treated the patient very kind way. Treatment is good and the doctor's care for the patient is excellent and the environment is neat and clean.",
      name: "shiva vijayamohan",
      title: "Patient",
    },
    {
      quote:
        "Best fertility  in salem. Good approach with doctorand staff. Good patient care. This to sudha fertility",
      name: "Parimalam",
      title: "Patient",
    },
    {
      quote:
        "Am satisfaction with this care and their talk with us staff handling of all staffs and doctors to salem team",
      name: "Mansur Basha",
      title: "Patient",
    },
    {
      quote:
        "I taken so many treatment in many hospital. Once went to sudha hospital salem give more positive think and response also good. Good environment and handling very nice. Thanks to entire team salem sudha. Cost wise is very low budget. I refer sudha best fertility  hospital in salem",
      name: "Uvaraj Uvaraj",
      title: "Patient",
    },
    {
      quote:
        "Happy to share my experience in today camp visit in Salem sudha hospital centre . Good care all staff's Dr. Charulatha mam explain the treatment very well thank you sudha fertility centre Salem👌. Today useful day",
      name: "Sutha elangovan",
      title: "Patient",
    },
    {
      quote:
        "We are very happy with Sudha hospital at salem.We face a lots of failures . Now I feel bette.Thank u from the bottom of my heart to all our doctors,nurses,and all staffs.Especially thanks to Dr.pradeepa mam",
      name: "Amutha",
      title: "Patient",
    },
    {
      quote:
        "Good approach from all, good couple care, budget friendly hospital .... Doctor and staff taking us care like famiy",
      name: "stephen arul raj",
    },
    {
      quote:
        "I'm taking treatment in salem sudha hpl. treatment was good staffs n drs was good caring I'm very satisfied with this branch. Best ivf center. I suggested this hpl for my friends and relatives",
      name: "Manjula mani09",
      title: "Patient",
    },
    {
      quote:
        "It was the best fertility centre in salem. Especially ReceptionStaffs, Gowsalya, and Sudha,ward staffs care very excellent.Dr. Charulatha mam are very nice.",
      name: "Ramesh guru",
      title: "Patient",
    },
    {
      quote:
        "We are very happy with Sudha hospital salem. Our married since 3 Years. Wetaken a treatment in so many hospital. We face a lots of failures. It's been a long time with fertility issues. At last we know about this hospital through our relative. Eagerly waiting to see my wife.Doctor are very nice. Even Reception staffs and Nurses handling the patient are very responsibile",
      name: "Abiarun",
      title: "Patient",
    },
    {
      quote:
        "Have a very pleasant and Good experience with Salem sudha hospital. They are having well experienced doctors and Nurse for guide us . Very much thanks to Dr.sandhya rani Madam for her guidance and the support team with good manner",
      name: "Jeeva Jeeva",
      title: "Patient",
    },
    {
      quote:
        `My sister was married 4yrs ago. We planned to went sudha hospitals Salem through camp .she is currently 9 month pregnant.i am so happy to share my sister pregnancy journey.. all staffs are really very caring  and  helpful mind.. infrastructure good.Reception staffs are very good they are friendly to welcoming all with  smiley faces.. Time keeping is good. Kindly recommend my friends and relatives.
  Best fertility centre in Salem..`,
      name: "Mathivanan A",
      title: "Patient",
    },
    {
      quote:
        "It's my one of the best experience at sudha hospital Salem, treatment is too good and cost wise is ok for all type of people.....special Thanks to Consultant mam for giving the correct treatment and whole team doing great job and kindly recommended to all....",
      name: "Sathya Priya",
      title: "Patient",
    },
    {
      quote:
        "Recently took treatment in Sudha fertility centre, Salem branch. Had a warm and comforting experience. working members, the nurses, doctors and non medical staffs were very supportive and caring. Explained every procedure with great patience. Very happy with their services.",
      name: "Raajaraajeshwari Jeyachandran",
      title: "Patient",
    },
    {
      quote:
        "Awesome hospital infrastructure. Very caring from all staff. They treated well & good. Neat and environment. Dr. Sandhiyarani mam approach also too good. Today very useful to us. Thank you sudha hospital salem.",
      name: "Prema Govindhraj",
      title: "Patient",
    },
    {
      quote:
        "Staffs are good .... Doctor consultation is good and effective.counselling also good in explain wise very well..one of the best fertility centre in salem sudha fertility centre",
      name: "Staffs are good .... Doctor consultation is good and effective.counselling also good in explain wise very well..one of the best fertility centre in salem sudha fertility centre",
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
                      VANAKKAM Salem
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Salem</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Every little miracle starts with a moment of trust.
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
        <div className="absolute -bottom-80 lg:-bottom-64 w-full  ">
          <InfiniteMovingCardsDemo reviews={SalemReview} />
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
                      <h3 className="text-[#173366]  font-semibold">
                        About
                      </h3>

                      <p className="mt-3 text-gray-600">
                        With the opening of our Salem branch in 2018, Sudha Fertility Centre has become the go-to destination for fertility care in the region. We are proud to be recognised as the best fertility hospital in Salem, offering personalised services to make your parenthood dreams come true. Our team of compassionate experts is committed to guiding you through every step with care and understanding.
                      </p>
                      <h3 className="text-[#173366] mt-3 font-semibold">
                        World-class Fertility Treatments in Salem:
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Sudha Fertility Centre stands as a beacon of hope for couples in Salem seeking advanced fertility treatments. With the best fertility specialists and cutting-edge technology, we are your trusted fertility centre for comprehensive solutions to infertility challenges.
                      </p>


                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden">
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
                      As the best fertility hospital in Salem, Sudha Fertility
                      Centre specialises in the following treatments,
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
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Salem.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Salem?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      At Sudha Fertility Centre in Salem, we have helped numerous families overcome fertility challenges by treating them with the utmost care, and we take great joy in watching parents hold their newborns for the very first time. Our success stories in Salem are diverse, spanning young to older couples looking to start their journey to parenthood.
                    </p>
                    <p className="mt-3 text-gray-600">
                      Our fertility centre in Salem has established itself as a beacon of hope, consistently offering fertility treatments that bring joy to families facing complex challenges. Guided by the expertise of the best IVF doctors in Salem, many couples who have longed for a child have been blessed with babies, making their dream of parenthood come true at Sudha Fertility Centre.
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
                      <h3 className="text-[#173366]  font-semibold">
                        Facilities
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Sudha Fertility Centre, the Best IVF Centre in Salem is
                        committed to transforming your dreams of embracing
                        parenthood into reality. We offer quick and practical
                        solutions with proven outcomes. We are dedicated to
                        making your parenthood dreams come true with world-class
                        fertility treatments and facilities, delivering
                        excellence throughout your entire journey.
                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>Round-the-clock Medical Care </li>
                        <li>Fully Equipped Laboratories </li>
                        <li>24/7 Diagnostic Services </li>
                        <li>Easily Accessible Pharmacies </li>
                        <li>State-of-the-art Operation Theatre </li>
                        <li>Dedicated Labour Ward for Natural Birth </li>
                        <li>Advanced Ultrasound Equipments </li>
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
                      <h3 className="text-[#173366]  font-semibold leading-[1.4]">
                        Fertility Specialists <br />
                        in Salem
                      </h3>
                      <h4 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Salem
                      </h4>
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
                    <div className="w-full lg:w-1/2 mt-5">
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
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={charulatha}
                        alt="charulatha"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold">
                        Our Fertility Specialist in Salem
                      </h3> */}
                      <h4 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. Charulatha Baaskaran
                      </h4>
                      <p className="text-md text-[#000000] mt-3">
                        M.D(OG), DMAS
                      </p>
                      <p className="text-[#000000] mt-3">
                        Fertility Consultant / Gynaecologist
                      </p>
                      <p className=" text-gray-600 mt-3">
                        Dr. Charulatha Baaskaran, M.D.,(OG), Fertility Consultant/Gynecologist, brings over 3 1/2 years of expertise in obstetrics and gynecology to our team. With extensive experience including over 50 ICSI, 75 IUI, and 120 IVF procedures, Charulatha Baaskaran is dedicated to providing exceptional care tailored to each patient’s needs. Her proficiency extends to hysteroscopy, laparoscopy, LSCS, and various other procedures, ensuring comprehensive support for all aspects of women’s health.
                      </p>
                    </div>
                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery">
                  <h3 className="text-[#173366] mt-5 font-semibold">
                    Gallery
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Salem.gallery} />
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




                      <div className="mt-5 rounded-lg space-y-6">
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
                              No 191/9, Sarada College Main Road, Fairlands(PO), Salem - 636016
                            </p>
                            <Link href="https://maps.app.goo.gl/we4guYa55j7MYKYw6">
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
            <h2 className="font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Salem.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Salem.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Salem.gallery}
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
          items={Salem.gallery}
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

export default SalemPage;
