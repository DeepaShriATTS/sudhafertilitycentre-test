"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/kishnagiri/krishnagiri_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/kishnagiri/kishnagiri.webp";
import Lavanya from "@/assets/branch/kishnagiri/lavanya.webp";
import Kanimozhi from "@/assets/branch/kishnagiri/kanimozhi.webp";
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
import { Ambattur, Kishnagiri } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { krishnagiriVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);

function KrishnagiriPage() {
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
      setVisibleCount(Kishnagiri.faqs.length); // Show all FAQs
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

  const KrishnagiriReview = [
    {
      quote:
        "They used the latest  fertility  treatment. And we success ever in our first  attempt. Best fertility  center in krishna giri sudha hospital. ..so happy  first  visited.....",
      name: "Govindaraj",
      title: "Patient",
    },
    {
      quote:
        "Best one the sudha fertility center in krishnagiri..all the staff are so cooperative dedicated showed committed and so friendly..we are truly thankful to sudha hospital krishnagiri for the greatest blessings and for helping us live our long time dream..",
      name: "Chandru .k",
      title: "Patient",
    },
    {
      quote:
        `Best one of the sudha fertility center in krishnagiri  thank you so much for your kind words and for being an exceptional doctor. We are so grateful and it was the best decision we made.
  Special mention to her nurses , pharmacist and receptionist they were absolutely good`,
      name: "Narayanasamy",
      title: "Patient",
    },
    {
      quote:
        "Best one the Sudha fertility centre hear back from our patients about their experience with us! Your feedback is much appreciated and we’re very pleased to know that you’ve had a great experience with us! We’ll ensure that our medical team receives your kind feedback! we’re thankful that you’ve taken the time to reach out to us! Have a good day!",
      name: "Pugals sathya",
      title: "Patient",
    },
    {
      quote:
        `Thank you so much for your kind words and for being an exceptional doctor. We are so grateful and it was the best decision we made.
  Special mention to her nurses , pharmacist and receptionist they were absolutely fantastic! Now that after so many years my little baby boy has arrived. We would like to say a special THANK YOU to each and every one of you.`,
      name: "Jayamohan",
      title: "Patient",
    },
    {
      quote:
        "One of the best fertility center...... I attend camp at the thirupathur.... Within 3 month I got positive results...... I get positive with twin babies.... I am really blessed,.... The doctor explained the treatment very well.... They cleared all my doubts..... Me and my family members very happy 😊",
      name: "Santhi Don",
      title: "Patient",
    },
    {
      quote:
        "Best one the sudha fertility centre in Krishnagiri..good treatment and good caring..spl a lot Dr.lavanya mam obviously the leader running the show.. this was my experience with sudha hospital in Krishnagiri...",
      name: "Nandeesh Nandeesh",
      title: "Patient",
    },
    {
      quote:
        "Best one the fertility center in Krishnagiri... doctor and sister the staff were polite and friendly knowledgeable.. some say the treatment was well organized and the outcome was perfect...",
      name: "Kanchana Srinivasan",
      title: "Patient",
    },
    {
      quote:
        `best one of the Sudha fertility centre in Krishnagiri... I am first visited so happy. Dr. lavanya mam
  good explanation friendly carring and staffs  and nurse good carring i appreciate this hospital thank you for sudha hospital`,
      name: "Naveen Kumar",
      title: "Patient",
    },
    {
      quote:
        "Best one the sudha fertility centre in Krishnagiri..I heartily thanks all the doctors, nurses,and  staff who are working in sudha hospital , Krishnagiri we got positive result after many years.",
      name: "Kalai Vani",
      title: "Patient",
    },
    {
      quote:
        "Best one the sudha fertility centre in Krishnagiri.. we are for yearr and this place gave us hope.definitely the best centre in Krishnagiri",
      name: "Suhana R",
      title: "Patient",
    },
    {
      quote:
        "Best one the sudha fertility centre in Krishnagiri.. overall service is good.doctors and nurses are very caring and helpful.... thanks you to sudha hospital...",
      name: "Devi Muniraj",
      title: "Patient",
    },
    {
      quote:
        "Krishnagiri sudha hospital good fertility center... It was a great experience staff and take care of patients on regular interval... Dr. Lavanya mam was polite and humble and gave valuable advice during the pregnancy of my wife and also during delivery hospitality was great...",
      name: "Lakshmi Thirunoor",
      title: "Patient",
    },
    {
      quote:
        "Sudha fertility center in Krishnagiri is best.it provide world class treatment at an affordable cost.there success rate are high and their is excellent.",
      name: "Harsith J S",
      title: "Patient",
    },
    {
      quote:
        "Best fertility center in krishnagiri. Mm struggled with infertility for years but this place gave me hope.. The doctor explained everything clearly and the staff was very kind....",
      name: "Vigashini",
      title: "Patient",
    },
    {
      quote:
        "Best one  the sudha fertility  center  in krishnagiri. Doctors  and staff  and his full  medical  team  who processed  surgery  successfully  with  constant  caring  and support  special  and heartfelt thank  for  my nurse  and staff  for  nice  treatment  and hospitality....",
      name: "Nirosha magi Karthika",
      title: "Patient",
    },
    {
      quote:
        "The hospital's commitment to quality care and patient satisfaction is evident in its clean and comfortable facilities, friendly staff, and clear communication. Patients appreciate the attention to detail and empathy shown by doctors and nurses. The hospital's focus on innovation and technology also sets it apart. With a range of specialties and services, patients can trust they're receiving the best care. From admission to discharge, the hospital's team ensures a smooth and supportive experience. Patients leave feeling heard, healed, and hopeful. The hospital's dedication to excellence shines through in every aspect of care.",
      name: "Vijaya Lakshmi",
      title: "Patient",
    },
    {
      quote:
        "The best experience at Sudha fertility hospital in krishnagiri! They treat every patient with care and concern.The success rate is high,and the doctors are very professional.",
      name: "Divya Thilagavathi",
      title: "Patient",
    },
    {
      quote:
        "After multiple failed attempts in other hospitals,we lost hope.I finally found success at sudha fertility IVF centre in Krishnagiri.The doctors are highly skilled,and the treatments are advanced.Highly recommended!",
      name: "Harish m",
      title: "Patient",
    },
    {
      quote:
        "Best one the sudha fertility centre in Krishnagiri..we are very glad to hear of your seamless experience... doctor and staffs are good service..I m so happy to hear this hospital thanks you for sudha hospital",
      name: "Sangeetha Sangee",
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
                      VANAKKAM Krishnagiri
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Krishnagiri</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Helping you embrace the joy of parenthood.
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
          <InfiniteMovingCardsDemo reviews={KrishnagiriReview} />
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
                      <h3 className="text-[#173366] mb-3  font-semibold">
                        About
                      </h3>

                      <p className="mt-3  text-gray-600">
                        Sudha Fertility Centre opened its Krishnagiri branch in 2022 with a mission to provide top-quality fertility care. As the leading fertility hospital in Krishnagiri, we offer personalised care at every stage of your parenthood journey. Our compassionate and experienced team is dedicated to turning your dream of becoming a parent into a reality. Combining state-of-the-art technology and compassionate care, Sudha Fertility Centre is dedicated to making your parenthood journey as smooth and fulfilling as possible.
                      </p>
                      <h3 className="mt-3 text-[#173366] font-semibold">
                        Best Fertility Treatments in Krishnagiri:
                      </h3>

                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                  </div>
                  <motion.div>
                    <p className="mt-3  text-gray-600">
                      Sudha Fertility Centre offers advanced fertility treatments in Krishnagiri, specialising in IVF services. Our team of expert specialists ensures you receive the best care and guidance to help you navigate the challenges of infertility.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-gray-600">
                      As the best fertility hospital in Krishnagiri, Sudha Fertility Centre specialises in the following treatments,
                    </p>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>Normal Delivery - Natural Labour For Mothers</li>
                      <li>IVF - In Vtro Fertilization </li>
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
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Krishnagiri.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] font-semibold mt-5">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Krishnagiri?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      As the best fertility centre in Krishnagiri, Sudha Fertility Centre has transformed the dreams of countless families into reality. Every hopeful couple that comes through our doors is given personalised and compassionate care, and we are deeply moved to witness the moment parents embrace their newborns. Our stories of success in Krishnagiri span generations, from newlyweds to older couples longing to become parents.
                    </p>
                    <p className="mt-3 text-gray-600">
                      Our fertility centre in Krishnagiri has earned a distinguished reputation for helping families facing even the most challenging fertility issues. With the expertise of some of Krishnagiri’s finest fertility and IVF specialists, we have made parenthood a reality for many couples who had almost given up hope, bringing countless healthy babies into the world through Sudha Fertility Centre.
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
                        Our fertility centre in Krishnagiri has earned a distinguished reputation for helping families facing even the most challenging fertility issues. With the expertise of some of Krishnagiri’s finest fertility and IVF specialists, we have made parenthood a reality for many couples who had almost given up hope, bringing countless healthy babies into the world through Sudha Fertility Centre.
                      </p>

                      <div className="flex flex-row justify-between ">
                        <ul className="text-gray-600 list-disc pl-4 leading-[2.2] mt-3">
                          <li>
                            Advanced Embryology Labs for IVF and ICSI Procedures
                          </li>
                          <li>High-tech Scan and Ultrasound Rooms  </li>
                          <li>Accessible and Affordable Treatment Options  </li>
                          <li>State-of-the-art Operation Theatres  </li>
                          <li>A 24×7 Functioning Lab and Pharmacy </li>
                          <li>
                            Labor Room for Pregnant Women to Ensure Safe Childbirth
                          </li>
                          <li>NICU and ICU Facilities </li>
                        </ul>
                      </div>

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
                        Fertility Specialists <br />
                        in Krishnagiri
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Krishnagiri
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
                        src={Kanimozhi}
                        alt="Kanimozhi"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold">
                        Our Fertility Specialist in Krishnagiri
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. S. Kanimozhi
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS., DGO, DIP ART
                      </p>
                      <p className="text-[#000000] mt-3">
                        Consultant IVF & ART Specialist
                      </p>
                      <p className="text-md text-gray-600 mt-3">
                        Dr. Kanimozhi, Fertility Consultant, Sudha Fertility Centre, Krishnagiri, brings expertise in reproductive medicine with qualifications including MBBS, DGO, and ART certification. With a track record of over 98 ICSI, 117 IUI, and numerous IVF procedures.
                      </p>
                      <p className="text-gray-600 mt-3 hidden  sm-block">
                        Dr. Kanimozhi has earned the trust of over 1700 patients through her compassionate care and sound advice. With almost 3 years of dedicated service, she has also demonstrated proficiency in laparoscopic, hysteroscopic, and other related procedures, ensuring top-quality care for her patients.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div>
                    <p className="text-gray-600 mt-3 sm-hidden">
                      Dr. Kanimozhi has earned the trust of over 1700 patients through her compassionate care and sound advice. With almost 3 years of dedicated service, she has also demonstrated proficiency in laparoscopic, hysteroscopic, and other related procedures, ensuring top-quality care for her patients.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col lg:flex-row gap-8 mt-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >

                    <div className="w-full lg:w-1/2">
                      <h3 className="text-[18px] text-[#173366] font-semibold ">
                        Dr. B. Lavanya
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS., MS(OG)
                      </p>
                      <p className="text-[#000000] mt-3">
                        Consultant Obstetrics & Gynecologist
                      </p>
                      <p className="text-md text-gray-600 mt-3">
                        Dr. Lavanya B, MBBS, MS (OG), is a dedicated gynecologist at our Sudha Fertility Centre. With expertise in procedures such as LSCS and hysterectomy, she has provided care to over 150 patients. Dr. Lavanya’s commitment to excellence ensures her patients receive exceptional treatment and support.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={Lavanya}
                        alt="Lavanya"
                        className="w-full h-auto rounded-xl"
                      />
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
                    <ImageGrid images={Kishnagiri.gallery} />
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
                              C/O Uma Rani Hospitals, Complex No. 1/136A, Annai Sathya Nagar, Salem Rd, Near LIC Building, Krishnagiri, Tamil Nadu - 635001.
                            </p>
                            <Link href="https://maps.app.goo.gl/cevJko2UJAEA7iZY6">
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
            {Kishnagiri.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Kishnagiri.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Kishnagiri.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}

        <GallerySlider items={krishnagiriVideos} />

        <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Kishnagiri.gallery}
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

export default KrishnagiriPage;
