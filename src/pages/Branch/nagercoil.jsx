"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/ambatur/doc.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/nagercoil/nagercoil.webp";
import nagercoil from "@/assets/branch/nagercoil/keerthana.webp";
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
import { Ambattur, Nagercoil } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { nagercoilVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);


function NagercoilPage() {
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
      setVisibleCount(Nagercoil.faqs.length); // Show all FAQs
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


  const NagercoilReview = [
    {
      quote:
        "Good hospital, kind and supportive staff, good care. So far, progress is good. Thank you for praying for me. I am looking forward to it. Thank you especially to the doctors, nurses and staff.",
      name: "Shanthi 2586",
      title: "Patient",
    },
    {
      quote:
        "Few week before I'm visit sudha fertility hospital at Nagercoil ,really Amazing service, Good staffs, neat and clean maintenance, friendly doctors,must recommend Sudha fertility hospital Nagercoil 💯😍",
      name: "Vasantha Ladson",
      title: "Patient",
    },
    {
      quote:
        `As a doctor, I highly appreciate the exceptional care and expertise provided by Sudha Fertility centre.Their team demonstrates a high standard of clinical excellence, combining advanced medical treatments with a compassionate, patient-centered approach.
  Being one of the pioneer in the field of IVF, I strongly recommend their services to anyone seeking fertility support.`,
      name: "Jenish Krishnan",
      title: "Patient",
    },
    {
      quote:
        "Good Doctor ,caring staffs, excellent treatment.",
      name: "Kamala Chithra",
      title: "Patient",
    },
    {
      quote:
        "Good Hospital",
      name: "Mathavi Paramanantham",
      title: "Patient",
    },
    {
      quote:
        "Best hospital. My friend approached so many hospitals and consulted many doctors for 5 years but couldn't succeed. But in Sudha she got pregnant in the first attempt. I'm so happy and glad that I suggested Sudha Fertility Centre to her. Such great treatments and facilities provided and the hospital staff approached very kindly that we felt positive when we entered. Best Fertility Centre in Nagercoil.",
      name: "Sharumathi Loganathan",
      title: "Patient",
    },
    {
      quote:
        "Such a Good Fertility Hospital. The doctors explained so clearly that I've suggested this hospital to my friends and family who are suffering without a child like me. I struggled for the past 8 years but now got positive result just after the first cycle in Sudha. I'm so happy and excited. This is the Best Fertility Centre I've ever consulted.",
      name: "Durga Raga",
      title: "Patient",
    },
    {
      quote:
        "Excellent care and professional staff at sudha hospital in Nagercoil. Doctors and staffs are so caring and attentive. The best fertility center. Thank you",
      name: "Poovarasi Poovarasi",
      title: "Patient",
    },
    {
      quote:
        "Doctors and staffs are so caring and attentive  . One of the best fertility centre.",
      name: "janu devi",
      title: "Patient",
    },
    {
      quote:
        "Excellent care and very good Dr and Staff",
      name: "Esakki Sudha",
      title: "Patient",
    },
    {
      quote:
        `Hi ,
  We consulted with doctor here and gave us hope towards treatment here. We are happy with service of nurses. we are happy with the service provided here. Best fertility centre in Nagercoil`,
      name: "swagath kumar",
      title: "Patient",
    },
    {
      quote:
        "Really good doctors and staffs they r giving good scope to patients...",
      name: "Bhagath Singh",
      title: "Patient",
    },
    {
      quote:
        `
  Nice explanation for our queries. And hopefull speech from doctor & staffs",
  name: "Sankar 97",
  title: "Patient",
  },
  {
  quote:
  "They are started 23rd branch in Nagercoil, they are  providing good services good staff approach`,
      name: "Sundarapandi Pandi",
      title: "Patient",
    },
    {
      quote:
        "Good service and response  best fertility center",
      name: "Jothi Murugan",
      title: "Patient",
    },
    {
      quote:
        "Good team, Good Hospital; Very happy",
      name: "Rithika",
      title: "Patient",
    },
    {
      quote:
        "Best fertility centre in Nagercoil",
      name: "Bala Krishnan",
      title: "Patient",
    },
    {
      quote:
        "Good hospital for ivf treatment and procedure.",
      name: "SONA S",
      title: "Patient",
    },
    {
      quote:
        "staff services very good",
      name: "jemima josop",
      title: "Patient",
    },
    {
      quote:
        "Very good fertility Centre",
      name: "suryadevi sivam",
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
                      VANAKKAM Nagercoil
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Nagercoil</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Where parenthood begins with care and compassion.
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
          <InfiniteMovingCardsDemo reviews={NagercoilReview} />
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

                      <p className="mt-3  text-gray-600">
                        Sudha Fertility Centre
                        became a welcoming place of hope for families in
                        Nagercoil, renowned for delivering exceptional fertility
                        treatments. As the best fertility hospital in the area,
                        we emphasize personalized and supportive care. With
                        decades of trusted experience, our committed specialists
                        strive to guide couples toward the joy of parenthood.
                      </p>
                      <h3 className="mt-3 text-[#173366] font-semibold">
                        Best Fertility Treatments in Nagercoil:
                      </h3>
                      <p className="mt-3  text-gray-600">
                        As India’s leading fertility hospital, Sudha Fertility
                        Centre in Nagercoil combines the expertise of the best
                        fertility doctors with a reputation for compassionate
                        care. Our advanced fertility treatments, personalized
                        approach, and state-of-the-art technology ensure that
                        every couple receives the best possible care and the
                        highest chance of success in their parenthood journey.
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
                      As the best IVF centre in Nagercoil, Sudha Fertility
                      Centre specialises in the following treatments,
                    </p>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
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
                    <p className="mt-3  text-gray-600">
                      and other gynaec-related surgeries like C-section,
                      Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst
                      and fluid aspiration, Myomectomy, ERA, OBS as well as
                      other fertility preservation processes are performed by
                      the best fertility doctors in Nagercoil.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Nagercoil?
                    </h3>
                    <p className="mt-3  text-gray-600">
                      At Sudha Fertility Centre in Nagercoil, we proudly hold the reputation of being the best IVF hospital, transforming the dreams of thousands of couples into reality. From young newlyweds envisioning their future family to older couples who have waited years to hold a child, we’ve become a beacon of hope for many. With a legacy of delivering lakhs of healthy babies across our branches, we remain committed to our mission as Nagercoil’s leading fertility centre.
                    </p>
                    <p className="mt-3  text-gray-600">
                      Our expert team is dedicated to offering the highest quality fertility care with a personal touch. At Sudha Fertility Centre, we understand that each couple’s journey is unique, and we provide customized treatment plans that address their individual needs. Guided by the finest IVF specialists, we combine advanced technology with compassionate care to support couples every step of the way. Our goal is to make the dream of parenthood a joyful reality for every family.
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
                      <p className=" text-gray-600 mt-3">
                        Renowned as the best fertility hospital in Nagercoil,
                        Sudha Fertility Centre is equipped with advanced
                        technologies and world-class facilities. We are
                        committed to supporting and caring for you throughout
                        every step of your parenthood journey.
                      </p>
                      <ul className="text-md mt-3 text-gray-600 list-disc pl-4 leading-[2.2]">
                        <li>Fully-equipped diagnostic services </li>
                        <li>World-class IVF laboratory </li>
                        <li>State-of-the-art operation theatres </li>
                        <li>Supporting medical staff </li>
                        <li>Cost efficient procedures </li>
                        <li>Round-the-clock pharmacy</li>
                        <li>24*7 medical care </li>
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
                        in Nagercoil
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Nagercoil
                      </h3>
                      <h4 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr.S. Pradeepa
                      </h4>
                      <p className="text-md text-[#000000] mt-3">
                        DGO, DNB(OG), MNAMS, ART, FICOG
                      </p>
                      <p className="text-[#000000] mt-3">
                        Senior Consultant IVF & ART Specialist
                      </p>
                      <p className="text-gray-600 mt-3 ">
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
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-14"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={nagercoil}
                        alt="nagercoil"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold">
                        Our Fertility Specialist in Nagercoil
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. R .Keerthana
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS., MS(OG)., DNB (OG).,PDF( Endogyn)
                      </p>
                      <p className="text-md text-gray-600 mt-3">
                        Dr.R.Keerthana, MBBS, MS, DNB(OG), PDF ( Endogyn), is a dedicated specialist at Sudha Fertility Centre. With extensive experience in women’s health and fertility care, she is committed to offering compassionate, evidence-based treatments to support couples on their path to parenthood, ensuring the highest standards of patient care and well-being.
                      </p>
                    </div>
                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery">
                  <h3 className="text-[#173366]  font-semibold mt-4">
                    Gallery
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Nagercoil.gallery} />
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
                            <p className="text-xs sm:text-sm md:text-base font-semibold text-gray-500">
                              CALL
                            </p>
                            <p className="text-sm  sm:text-sm md:text-lg font-semibold">
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
                              530, MS Rd, Vetturnimadam, Nagercoil, Tamil Nadu - 629004.
                            </p>
                            <Link href="https://maps.app.goo.gl/2ipMnKQrxtc8Hvca8">
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
                            <p className="font-semibold text-gray-500 uppercase">
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
            <h2 className=" font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Nagercoil.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Nagercoil.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Nagercoil.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}
        <GallerySlider items={nagercoilVideos} />
        <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Nagercoil.gallery}
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

export default NagercoilPage;
