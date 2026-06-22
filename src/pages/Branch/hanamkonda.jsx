"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/hyderabad/hyderabad_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/hanamkonda/hanamkonda.webp";
import Hanamkonda from "@/assets/branch/hanamkonda/hanamkonda.jpg";
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
import { Ambattur, Hanamkondas, Hyderabad } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { hanamkondaVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";

function HanamkondaPage() {
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
      setVisibleCount(Hanamkondas.faqs.length); // Show all FAQs
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


  const HanamkondaReview = [
    {
      quote:
        "be specific about positive experiences with the staff, highlight their attentiveness and care, mention the cleanliness of the facility, praise efficient procedures, and express gratitude for the overall quality of treatment while also mentioning any specific doctors or nurses who stood out",
      name: "Anil Sagili (Vijju009)",
      title: "Patient",
    },
    {
      quote:
        "Sudha fertility Hospital in Banjara hills Hanamkonda offers effective and affordable fertility treatments. The Doctors use advanced techniques and provide the best care, The success rate is high. So very thank full.!",
      name: "S RAJ films",
      title: "Patient",
    },
    {
      quote:
        `I am very happy with the service and guidance from Dr.Akhila ma'am and her sub ordinates . Also so helpful from complete Admin team also. Especially Anuradha from Admin team and Spandana ( Sr nurse )
  My heart full thanks once again to Dr. Akhila ma'am and sudha hospital.
  I definitely recommend this hospital and Dr Akhila to my known ones.
  Overall completely satisfied and recommend this hospital.
  I request Hospital to help so many people to fulfill  their life time wish & to complete parent wood.`,
      name: "Lalitha Botta",
      title: "Patient",
    },
    {
      quote:
        `We are  so thankful to sudha fertility hospital Banjara hills
  Because we going to be parents and Dr Akhila ma'am diagnosis and treatment care was so good and nurses staff and infront office department recieving coordination so good friendly hospitality management system every nice .I suggest sudha fertility hospital.
  One and only one solution for those who having fertility problem solution is sudha fertility hospital .`,
      name: "Salla Pandu",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility center in Banjara hills provides amazing care. From consultation to treatment, everything was handled professionally. Highly recommend this IVF centre in Banjara hills.`,
      name: "Pallavi Thummunuri",
      title: "Patient",
    },
    {
      quote:
        `We are so happy because of we got upt positive
  After 7 yrs of marriage iam conceived
  Here in sudha fertility  centre
  The doctor akhila mam treatment is soo good
  How they we're explained all the procedure steps are so sweet and obedient. And all the staff, entire sudha family coordination is so good,
  We are so happy, since 1 year we are coming to this hospital
  Finally we got a positive
  Tqs to sudha family and dr akhila mam and entire hole team of sudha
  Yqs alot 💐💐💐💐💐💐💐💐💐💐`,
      name: "Karnakar Bonala",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility Banjara hills Hanamkonda have given best effective treatment and affordable treatment Doctors use advance techniques and best care good success rate and finally my cousin sister is happy so thankful to sudha fertility`,
      name: "SRINATH GUPTHA",
      title: "Patient",
    },
    {
      quote:
        "Dr. Akhila ma'am are very experienced, and the treatment process is smooth. I highly recommend this IVF hospital in Banjara hills Hanamkonda for anyone facing fertility issues",
      name: "peddiniti jyothi",
      title: "Patient",
    },
    {
      quote:
        "We have tried so many attempts. But finally got success in sudha fertility hospital. Staff support also good. Everything went smooth. Thanks sudha fertility",
      name: "ramani chrompet",
      title: "Patient",
    },
    {
      quote:
        `Thank you Dr. Akhila mam and Samatha mam for our Positive results. Treatment and caring all positive here.
  We are very happy.`,
      name: "phani kumar",
      title: "Patient",
    },
    {
      quote:
        `Im so happy to visit Sudha Fertility hospital...
  Dr.akhila ayyagari postive nature doctor given as the positive result after so many days and years our waiting got over with one result...
  The staff nurse and pharmacy staff all are so helpful at any time with as .care and safety to the patient are so nice ... Counselling and co- ordinate through patient are so nice 👍...
  All over sudha hospital is best for IVF ...`,
      name: "Abdul Azeem",
      title: "Patient",
    },
    {
      quote:
        "Me and my wife so happy with sudha hospital dr. Akhila ayyagari Guide as properly we followed  finally our dream as been realized.... Thak you sudha hospital fertility...",
      name: "Rodda Sailu",
      title: "Patient",
    },
    {
      quote:
        `We had an outstanding experience at Sudha Hospital. Dr. Akhila left a lasting impression and was pivotal throughout our journey. In our experience, very few doctors match her level of integrity, care, expertise, and professionalism. She consistently prioritizes her patients and their needs. Dr. Akhila took the time to explain each step of the treatment process in detail, ensuring we fully understood our options and what to expect. Her clear communication and patience were invaluable. She possesses a remarkable ability to empathize with her patients, showing genuine compassion and a commitment to achieving the best possible outcomes.
  
  The facilities and labs are modern and well-maintained. I would like to highlight Spandana, Madhavi, Lakshmi, and Saritha for their exceptional and personalized care. I also appreciate Priyanka and Rajeswari for their excellent coordination of our visits. Mathin Garu is very cordial and regularly checked on us & ensured we had the unparalleled experience. Overall, the team at Sudha Fertility Hospital is fantastic and works seamlessly together.
  
  We wholeheartedly recommend Sudha Fertility Hospital to anyone seeking fertility treatment. A special thank you to Dr. Akhila for making a significant difference in our journey.`,
      name: "naveen kumar",
      title: "Patient",
    },
    {
      quote:
        `GoodI really happy to sharewith  experience  to sudha hospital Hanamkonda ...  Staffs  guidance and warm welcome is good. Time keeping is well.
  Dr. Akhila ayyagari mam is very polite and clearly explained about my treatment..`,
      name: "reddy Sandhya",
      title: "Patient",
    },
    {
      quote:
        "We are very happy and satisfied with treatment. Can't express the happiest feelings. We are very glad to have such a friendly hospital, Specially we thank to Dr ahkila ayyagiri mam...",
      name: "Rabi",
      title: "Patient",
    },
    {
      quote:
        "We are very happy to share our experience with Sudha hospital… DR.akhila Mam is very kind and polite we got best treatment here and staff is very good",
      name: "Gunda Rajini 506",
      title: "Patient",
    },
    {
      quote:
        "We are really pleased to share my experience about sudha hospital dr. Akhila mam is an excellent she has fabulous hard working on nice treatment thank you for all staff for nice supporting",
      name: "Sharada Eeeamoni",
      title: "Patient",
    },
    {
      quote:
        "We are very happy and satisfied with treatment. Can't express the happiest feelings. We are very glad to have such a friendly hospital, Specially we thank to Dr Prathibha Ma'am\ Dr Samatha Ma'am and all staff members. Thank you very much for blessing us.",
      name: "Navnita Kandukuri",
      title: "Patient",
    },
    {
      quote:
        `It was a great experience with Sudha Hospital especially with Swapna Naik mam.
  She is not only an Excellent Doctor , she is simple, superb Human being, Sober, approachable, a friendly approach with smiling face with her selfless service. Always amazing treatment. Even the staff treats very well here. I am happy that finally after a huge effort finally I got conceived. Thanks to the entire team of Sudha hospital.`,
      name: "Anusha Agarwal",
      title: "Patient",
    },
    {
      quote:
        "I want to share My experience at sudha hospitals.Dr. Akhila medam is an Excellent,  fabulous and hard working women.she has struggled lot in our treatment. I am very thankful to Dr.pradeepa madam ,Dr .Akhila madam to support us in every aspect .And also very thankful to the staff of the hospital especially sister spandana.",
      name: "sajid sameera",
      title: "Patient",
    },
  ];


  return (
    <>
      <div className="relative w-full min-h-[880px] md:min-h-[600px] lg:min-h-[600px]">
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
                      Swagatham Hanamkonda
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Hanamkonda</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Bringing Your Parenthood Dreams to Life in Hanamkonda - Your Trusted Fertility Care
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
          <InfiniteMovingCardsDemo reviews={HanamkondaReview} />
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
                        Sudha Fertility Centre, India’s leading name in reproductive care, proudly launched its branch in Hanamkonda in 2025. With a legacy of over 40+ Years in fertility treatment, we bring our world-renowned expertise closer to families in Hanamkonda and surrounding areas.
                      </p>
                      <p className="mt-3  text-gray-600">
                        With more than four decades of medical excellence and a track record of thousands of successful pregnancies, we are committed to helping you experience the joy of parenthood. Sudha Fertility Centre is widely recognised as the best fertility hospital in Hanamkonda, combining compassionate care with cutting-edge technology.
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
                  <motion.div>

                    <h3 className="mt-3 text-[#173366] font-semibold">
                      Best Fertility Treatments Offered in Hanamkonda
                    </h3>
                    <p className="mt-3 mb-3 text-gray-600">
                      As the best fertility centre in Hanamkonda, we offer advanced fertility treatments to suit your unique needs, whether you're just starting your parenthood journey or have faced challenges before.
                    </p>

                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-gray-600">
                      As the leading fertility hospital in Hanamkonda, we specialise in the following treatments,
                    </p>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>Normal Delivery – Natural Labour for Mothers </li>
                      <li>IVF – In Vitro Fertilization</li>
                      <li>IUI – Intrauterine Insemination</li>
                      <li>ICSI – Intracytoplasmic Sperm Injection</li>
                      <li>
                        IMSI – Intracytoplasmic Morphologically Selected Sperm Injection
                      </li>
                      <li>TESE – Testicular Sperm Extraction</li>
                      <li>PESA – Percutaneous Epididymal Sperm Aspiration</li>
                      <li>LAH – Laser Assisted Hatching</li>
                      <li>
                        Ovarian ABCD – Ovarian Rejuvenation (Autologous Blood Cell Derivative)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP – Platelet-Rich Plasma Therapy</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS, as well as other fertility preservation processes are performed by the best fertility doctors in Hanamkonda.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md "
                      />
                    </div>




                    <h3 className=" text-[#173366] font-semibold mt-5">
                      Why Sudha Fertility Centre is the Best Fertility Hospital in Hanamkonda?
                    </h3>
                    <p className="text-gray-600 mt-3">
                      Choosing the right fertility hospital is crucial. Sudha Fertility Centre, Hanamkonda, stands out as the best fertility hospital in Hanamkonda for several compelling reasons:
                    </p>


                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2">Experienced Fertility Specialists
                      </h4>
                        Our doctors are highly trained in reproductive medicine and backed by decades of collective experience treating complex infertility cases.
                      </li>

                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2">World-Class IVF Lab
                      </h4>
                        We house one of the most advanced IVF labs in the region, equipped with top-grade incubators, air purification systems, and embryology tools.
                      </li>


                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2"> High IVF Success Rates
                      </h4>
                        Sudha Fertility Centre is regarded as the best IVF centre in Hanamkonda due to our consistently high success rates, even in complex or repeated IVF failures.
                      </li>

                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2"> Transparent and Ethical Care
                      </h4>
                        We follow a clear, honest, and ethical medical approach. No unnecessary treatments or hidden charges.
                      </li>


                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2">  Holistic Fertility Support
                      </h4>
                        From fertility counselling to nutrition guidance and emotional well-being, we support you through every phase of treatment.
                      </li>

                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2">  Affordable IVF Packages
                      </h4>
                        Being the best IVF hospital in Hanamkonda, we believe in accessible fertility care. Our affordable pricing and EMI options make IVF treatment easier for every couple.
                      </li>
                    </ul>


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
                      <p className="text-md text-gray-600 mt-3">
                        Designed to meet international standards, Sudha Fertility Centre in Hanamkonda offers a clean, calm, and advanced space for couples to undergo fertility care in comfort.
                      </p>


                      <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2] ">
                        <li>Fully-equipped Diagnostic Services  </li>
                        <li>World-class IVF Laboratory</li>
                        <li>State-of-the-art Operation Theatres </li>
                        <li>Supporting Medical Staff </li>
                        <li>Cost-Efficient Procedures </li>
                        <li>Round-the-clock Pharmacy </li>
                        <li>24*7 Medical Care</li>


                      </ul>

                    </div>
                    <div className="w-full lg:w-1/2 mt-5 " >

                      <ImageSlider className="" images={Ambattur.Facilities.Facilitiesimg} />
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
                    <div className="w-full lg:w-1/2 ">
                      <h3 className="text-[#173366] font-semibold leading-[1.4]">
                        Fertility Specialists <br />
                        in Hanamkonda
                      </h3>
                      <h4 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Hanamkonda
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
                      <p className="text-md text-gray-600 mt-3 ">
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
                        src={Hanamkonda}
                        alt="hanamkonda"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold">
                        Our Fertility Specialist in Hanamkonda
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. Manasa Shyamala
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, DGO, FRM - ART & Endocrinology
                      </p>
                      <p className="text-[#000000] mt-3">
                        Fertility Specialist
                      </p>
                      <p className=" text-gray-600 mt-3">
                        Dr. Manasa Shyamala is an experienced fertility specialist at Sudha Fertility Centre. Known for her compassionate approach and clinical excellence, she is dedicated to providing personalized treatment plans tailored to each couple’s unique fertility journey. With her expertise in evidence-based reproductive care and a commitment to transparency and empathy, Dr. Manasa has successfully guided many couples on their path to parenthood.
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
                    <ImageGrid images={Hanamkondas.gallery} />
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
                      <h4 className="font-semibold mt-2">
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
                              100 Feet Rd, opposite Shyamala Gardens, Saptagiri Colony, Hanamkonda, Telangana 506370
                            </p>
                            <Link href="https://maps.app.goo.gl/xDisk6tufXdoqzxL7">
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

            <h2 className=" font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Hanamkondas.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Hanamkondas.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Hanamkondas.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}

        <GallerySlider items={hanamkondaVideos} />

        
        <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Hanamkondas.gallery}
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

export default HanamkondaPage;
