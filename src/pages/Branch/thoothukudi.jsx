"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/thoothukudi/thoothukudi-about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/thoothukudi/thoothukodi.webp";
import uma from "@/assets/branch/thoothukudi/anuradha.webp";
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
import { Ambattur, Thoothukudi, Trichy } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

import { thoothukudiVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);

function ThoothukudiPage() {
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
      setVisibleCount(Thoothukudi.faqs.length); // Show all FAQs
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

  const thoothukudi = [
    {
      quote:
        "Dr. Uma madam expert guidance and treatment were truly impressive. The staff and nurses were warm, attentive, and always willing to listen to our concerns. A wonderful experience!",
      name: "harihara kannan Natarajan",
      title: "Patient",
    },
    {
      quote:
        "After multiple failed attempts in other hospitals, we lost hope. I finally found success at Sudha IVF Centre in Trichy. The doctors are highly skilled, and the treatments are advanced. Highly recommended!",
      name: "Sanjai S",
      title: "Patient",
    },
    {
      quote:
        "Best fertility centre in trichy sudha fertility . Hi iam Renugadevi  2 days before (boy baby)delivery done. I am so happy.  Dr.uma mam very kind  super treatment all staffs very good  in special  uma sister so many help. I am so very very very happy",
      name: "Daniel Daniel",
      title: "Patient",
    },
    {
      quote:
        "Best fertility centre in Trichy sudha fertility. The best experience at sudha fertility hospital in Trichy branch. They treat every patient with care and concern. The success rate is high, and the doctors are very professional. Super 💯",
      name: "M.S. Abinaya",
      title: "Patient",
    },
    {
      quote:
        "Trichy Sudha hospital Dr. S.Uma shankari mam is very kind and caring of patients. She was explained medical history of patients. Hospital staff caring also good.Thank you so much to everyone 😊🥰",
      name: "Karthick Arumugam",
      title: "Patient",
    },
    {
      quote:
        "Best ivf centre in trichy city. I'm positive  today   yes I'm conceived  . I feel blessed  thank god and dr. Uma Shankari mam also as staffs . All are take care so good . Trichy Sudha team all are good team work. Thank u sudha team .",
      name: "sumitha d",
      title: "Patient",
    },
    {
      quote:
        "Alhamdhulilah Best fertility hospital  in Trichy. Looks like good and way of guidance in staffs are too good. I am happy to share my experience. Thank you.",
      name: "Haseenah Sirajudeen",
      title: "Patient",
    },
    {
      quote:
        "I had a positive experience at ( sudha fertility centre)best IVF centre in Trichy.The staff was professional and caring ,ensuring I felt comfortable throughout my visit .over all ,highly recommended this hospital for anyone seeking quality care.",
      name: "Ravi Chandran",
      title: "Patient",
    },
    {
      quote:
        "Best fertility centre in trichy & first time i have came in hospital with little fear & lots of doubts.then hospital  staffs explained all procedures & precautions.i am hpy after visiting his hospital .way of communicating staffs to good",
      name: "Devi Devi",
      title: "Patient",
    },
    {
      quote:
        "Sudha Hospital is wonderful to treat babys Specialise is my Suggestions. Who ever babys need in treatment should came to Trichy Sudha 100% can get positive results. There was team work, HR RECEPTIONIST, DOCTORS, PHARMACY, LAB, HOUSE KEEPING persons are very CARING to us, friendly to us.We are very Satisfied to taken treatment of there. There is a good Environmental, no need to wait for long hour's they was timely treat us. Hope you all get good there!!.",
      name: "3024 _Raghul A",
      title: "Patient",
    },
    {
      quote:
        "Best fertility center in trichy. Dr. Uma shankari mam treatment is very good. Best Ivf dr in trichy. All staffs are very kind and explain clearly.",
      name: "Banu Banu",
      title: "Patient",
    },
    {
      quote:
        "Best fertility center in struggled with infertility for years, but this place gave me hope.the doctor explained everything clearly,and the staff was very kind.now, I am pregnant,And i am forever grateful to this IVF hospital in Trichy 👍👍👍",
      name: "devi devi",
      title: "Patient",
    },
    {
      quote:
        "Best fertility hospital I've seen in Trichy area. Looks like good and way of guidance in staffs are too good. I am happy to share my experience with the great leaders of handling hospital management. Thank you management for supporting all.",
      name: "jaba raj",
      title: "Patient",
    },
    {
      quote:
        "Best fertility centre in Trichy. After long time to get positive result in my life thanks to Dr.uma sankari mam and sudha Trichy team.",
      name: "Anitha Durairaj",
      title: "Patient",
    },
    {
      quote:
        "Best fertility center in trichy. Dr.uma shankari mam and sudha trichy team very nice to handling and explain clear about the IVF treatment.",
      name: "Dhanushika Hari",
      title: "Patient",
    },
    {
      quote:
        "After multiple falied attempts in another hospital we kast hope i finally  found  success at sudha ivf center in trichy branch the doctor are highly skilled and the treatment are advanced highly recommended",
      name: "GAWTHAM VARUN",
      title: "Patient",
    },
    {
      quote:
        "Before We are going two hospitals  to take IVF treatment. No one is complete our needs. Then after we search a lot and found sudha fertility centre Trichy. Right now we are taking ivf treatment. Good treatment with affordable price. Fully satisfied with a procedure and doctor explaining each and every single procedure in detail. Thank you  for kind response and good treatment.",
      name: "marikannu Mari",
      title: "Patient",
    },
    {
      quote:
        "Sudha Fertility Centre in Trichy provides amazing care. From consultation to treatment, everything was handled professionally. The doctors explained our options well. Highly recommend this IVF Centre in Trichy",
      name: "Yukesh Raj",
      title: "Patient",
    },
    {
      quote:
        "Best fertility hospital I have ever experienced. Postive approach of doctors throughout the treatment. Very Neat & Tidy environment which gives good vibes. Good hospitality management.",
      name: "Shanmuga Priya",
      title: "Patient",
    },
    {
      quote:
        "Best Hospital in Trichy. I had a positive experience at (sudha fertility centre). The staff was professional and caring, ensuring I felt comfortable throughout my visit. The facility was clean, and the wait times were reasonable. I was particularly impressed with the level of communication from the doctors, who thoroughly explained my treatment options. Billing was straightforward, with no unexpected charges. Overall, I highly recommend this hospital for anyone seeking quality care.",
      name: "Gowthami",
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
                      VANAKKAM Thoothukudi
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In{" "}
                      <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Thoothukudi </span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Your parenthood dreams are just a few steps away!
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
          <InfiniteMovingCardsDemo reviews={thoothukudi} />
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
                      <h3 className=" text-[#173366] font-semibold">
                        About
                      </h3>

                      <p className=" mt-3  text-gray-600">
                        Sudha Fertility Centre established its wings in Thoothukudi in 2025. Determined to bring world-class fertility treatments and care to everyone with the best quality, Sudha Fertility Centre is equipped with the best fertility doctors. As the best fertility hospital in Thoothukudi, we specialised in providing the best fertility treatments under one roof. With more than four decades of experience and expertise in fertility care, Sudha Fertility Centre has helped lakhs of couples to be happy parents.
                      </p>
                      <h3 className=" text-[#173366] mt-3 font-semibold">
                        Fertility Treatments in Thoothukudi:
                      </h3>
                      <p className="mt-3  text-gray-600 sm-block hidden">
                        Offering the best fertility treatments in Thoothukudi, Sudha Fertility Centre is dedicated to providing comprehensive care and quality treatments. Our experienced fertility doctors, specialists, and expert gynecologists, use advanced technologies in our world-class facilities. With the best diagnosis, our doctors ensure every patient receives the best care and treatments.
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
                    <p className="mt-3  text-gray-600 sm-hidden">
                      Offering the best fertility treatments in Thoothukudi, Sudha Fertility Centre is dedicated to providing comprehensive care and quality treatments. Our experienced fertility doctors, specialists, and expert gynecologists, use advanced technologies in our world-class facilities. With the best diagnosis, our doctors ensure every patient receives the best care and treatments.
                    </p>
                    <p className="mt-3 mb-3  text-gray-600">
                      As the best IVF centre in Thoothukudi, Sudha Fertility Centre specialises in the following treatments,
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
                    <p className="mt-3  text-gray-600">
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Thoothukudi.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] mt-3 font-semibold">
                      Why is Sudha Fertility Centre the Best Fertility Centre in Thoothukudi?
                    </h3>
                    <p className="mt-3  text-gray-600">
                      Known as the best IVF hospital in Thoothukudi, Sudha Fertility Centre has helped many couples achieve their dream of parenthood into reality. We've helped many families from young couples to older couples who have waited for a long time to be parents. With a record of delivering lakhs of healthy babies our expertise and excellence made us the best IVF centre in Thoothukudi.
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
                      <h3 className="text-[#173366] font-semibold">
                        Facilities
                      </h3>
                      <p className="mt-3  text-gray-600">
                        Our IVF centre in Thoothukudi delivers the best treatments with the best IVF doctors, fertility specialists, and a team of skilled lab technicians.
                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>Fully Equipped Diagnostic Services</li>
                        <li>The Finest In-house Clinicians and Support Staff  </li>
                        <li>Cost-effective Procedures  </li>
                        <li>Labor Room for Natural Birth</li>
                        <li>Fully Equipped Operation Theatre </li>
                        <li>Round-the-clock Pharmacy </li>
                        <li>24*7 Medical Care </li>
                        <li>IVF Laboratory  </li>
                        <li>Operation Theatre</li>

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
                      <h3 className="text-[#173366]  font-semibold leading-[1.4]">
                        Fertility Specialists in <br /> Thoothukudi
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Thoothukudi
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
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-14 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image src={uma} alt="uma" className="w-full h-auto rounded-xl" />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold ">
                        Our Fertility Specialist in Thoothukudi
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. I. Anuradha Tiwari
                      </h3>
                      <p className="text-gray-600 mt-3">MBBS, DNB (OB & Gyn)  </p>
                      <p className="text-gray-600 mt-3">
                        Dr. I. Anuradha Tiwari, MBBS, DNB, (OB & Gyn) is a Fertility Consultant at Sudha Fertility Centre, specializing in reproductive health and advanced fertility treatments. With a compassionate approach, she has helped numerous couples navigate their journey to parenthood. Her expertise in personalized fertility care makes hope a reality for aspiring families.
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
                    <ImageGrid images={Thoothukudi.gallery} />
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
                              City Center, 39/1, Thevarpuram Rd, opp. to judge quarters, Pudugramam, Thoothukudi, Tamil Nadu 628003.
                            </p>
                            <Link href="https://maps.app.goo.gl/EbrGpjnQPknvDP6TA">
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
                            <p className=" font-semibold text-gray-500">
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
            {Thoothukudi.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Thoothukudi.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Thoothukudi.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}

        <GallerySlider items={thoothukudiVideos} />

        <div className="flex justify-center gap-4 flex-wrap items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Thoothukudi.gallery}
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

export default ThoothukudiPage;
