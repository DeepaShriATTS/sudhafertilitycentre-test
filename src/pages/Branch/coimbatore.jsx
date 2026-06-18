"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/coimbatore/coimbatore_about.webp";
import { motion } from "framer-motion";
import Dhanabakiyam from "@/assets/branch/coimbatore/dhanabakiyamone.png";
import Ambika from "@/assets/branch/coimbatore/ambika.webp";
import Vishnupriya from "@/assets/branch/coimbatore/vishnu-priya.webp";


import Hospital from "@/assets/branch/coimbatore/cbe.webp";
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
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur, Coimbatore } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function CoimbatorePage() {
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
      setVisibleCount(Coimbatore.faqs.length); // Show all FAQs
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



  const Coimbatorereviews = [
    {
      quote:
        `I got a very wonderfull experance from here because Dr. Dhanabagyam mam and her staff's also provided us with very good
  support and care. Excellent medical team and medicine's are available here.So thank you very much to Dr. Dhanabagyam mam
  ( MD), Asst. Docters: Dr. Karthika mam, Dr. Vishnupriya mam, OP sisters: Thilaka sister,Mallika sister etc., Reception
  sister: Jeni sister and all supportive staffs....`,
      name: "liji arumughan",
      title: "Patient",
    },
    {
      quote:
        `We got male baby.thaks to Dr.Dhanabakyam mam.(M.D)
  Assistant Doctors
  Dr.karthiga mam
  Dr.vishnupriya mam
  OPD thiaga sister
  OPD selin sister.
  Reception Jeni sister
  And all staffs are carrying my cute baby.
  Thanks to sudha hospital cbe team.`,
      name: "Sathya Jaisanker",
      title: "Patient",
    },
    {
      quote:
        `Good service. Dr. Dhanabhagiyam has given great support and mam need to live long to make others life meaningful, and
  staff support is also great. Assistant doctors support was good and even in night shift support was good. Nurses taken
  care very good care and guided well. Thanks to all sudha hospital coimbatore team`,
      name: "Padma Naban",
      title: "Patient",
    },
    {
      quote:
        `Really happy and completely heavenly feel what I have to say… it’s dream come true for us…7 years wait and finally it
  has come… the doctors and sister starting from the reception we never felt like an outsider… hospitality was so great
  and sisters were so humble to us… whenever we have doubts over the diet or medicines we can call them at any point of
  time…`,
      name: "Krish Kumar",
      title: "Patient",
    },
    {
      quote:
        `We got male baby. God blessed male baby.Thanks to sudha hospital coimbatore. Thanks to Dr.Dhanabakyam mam (M.D.).
  Assistant Doctor's
  Dr.Karthiga Mam.
  Dr.vishnu Priya Mam.
  Op staffs
  Thilaga Sister
  Mallika Sister.
  Reception Jeni Sister.
  And all sraffs are carring my babies.
  Thanks to sudha hospital coimbatore team.`,
      name: "Kalai Selvan",
      title: "Patient",
    },
    {
      quote:
        `We got twins baby. (male and female). Thanks to Dr. Dhanabakyam man.
  Assistant doctors.
  Dr. Karthiga mam
  Dr. Vishnu Oriya man.
  Op thilaga sis
  Malliga sister
  Except reception Jeni sister and all staff's are carrying my babies.
  Thanks to sudha hospital Coimbatore.`,
      name: "Anuvasu Anuvasu",
      title: "Patient",
    },
    {
      quote:
        `One the Best IVF hospital in coimbatore. We got a girl baby. Special thanks to Dr.Dhanabhagyam mam, Dr.Karthiga mam,
  Dr.Divya mam, Op Thilaga & Malliga sister, ward nurse Saraswathi, Priyanka, Geetha, Yoga,, Reception Jeni & Margrete
  sister, cash counter Mythili sister. All nurses and staffs (lab & medical ) are special carrying during our IVF journey.
  My IVF journey started on Jul 2023 and a little princess born on Jun 2024. "My dream comes true"
  once again thank you so much Dr.DB mam for your lovely wishes and blessings to my daughter.`,
      name: "Nandhi pandi",
      title: "Patient",
    },
    {
      quote:
        `We got twin babies. Thanks to Dr. dhanabakyam mam🙏.
  Assistant Doctors.
  Dr. Katrthika mam.
  Dr. Vishnu priya mam.
  Thilaga sister
  Malliga sister.
  And reception Jeni sister
  And all staffs are carrying my babies 🙏
  Thanks to sudha hospital Coimbatore team🙏🙏💜💜💓💓
  `,
      name: "Kabilan",
      title: "Patient",
    },
    {
      quote:
        `My name mythili seenivasan after 6 years of marriage life I didn't conceive because pcod problems my brother in law
  suggested me sudha hospital and their welfare so we decided to proceed to the hospital and asked for treatment to get
  positive results the hospital provided excellent care for me with high skilled doctors`,
      name: "Mythili Murugasamy",
      title: "Patient",
    },
    {
      quote:
        `Thanks to doctor Dhananagyam mam doctor Karthika mam and doctor Vishnu Priya mam for helping us in each and every stage
  of pregnancy to deliver two beautiful babies...
  Also Thilaga, Malliga, Sarasu, Shantha, Yoga sisters for taking utmost care..
  Highly recommended for the care taken by the hospital`,
      name: "Rahotman P",
      title: "Patient",
    },
    {
      quote:
        `We have approached sudha hospital for the normal pregnancy check up. We cannot thank you enough Dr.Dhanabagyam mam, Dr
  Karthiga mam, Mrs. Malliga nurse,Mrs saraswathy nurse,Ms Shelin nurse and other doctors and staffs for providing the
  greatest support and guidance throughout the pregnancy journey. Every checkup they are doing the scan and monitor the
  baby's growth closely. It helps us to know about the present situation and overcome challenges if there are any
  .Especially the crew have taken the proper follow up for the normal delivery. During labour nurses and doctors were very
  supportive and guided in the right direction.. without them normal delivery would haven't possible.
  Receptionist , lab assistance and other staffs were cooperative , always approachable and responds to queries properly.
  We recommend this hospital for both normal and test tube . Definitely u will feel the difference and get confidence.`,
      name: "siva ranjani",
      title: "Patient",
    },
    {
      quote:
        `After 15 years I'm pregnant I'm so happy to share this thank you so much for Dr. Dhanabagyam mam and sudha hospital
  team`,
      name: "Kani",
      title: "Patient",
    },
    {
      quote:
        `Hospital speciality, care, treatment all very well.
  my wife treatment taking Dr DHANABACYAM Madam. Madam taking care is well. Now we had got cute boy baby`,
      name: "Suresh K",
      title: "Patient",
    },
    {
      quote:
        `We have 4 years struggle in our fertility issue but after we came to sudha hospital nice treatment given to my wife now
  she is pregnant thanks a lot to sudha hospital`,
      name: "S.Tamil Selvan",
      title: "Patient",
    },
    {
      quote:
        `We got male baby.Thanks to Dr.Dhanabakyam mam. Number one of God in sudha hospital. Thanks to
  Dr.Ambiga mam.
  Dr.Divya lakshmi mam.
  Dr.karthiga mam.
  OPD Thilaga Sister.
  OPD Mallika.
  Reception Jeni Sister.
  Billing sister Mythili.
  And all staffs are carring my babies. Thanks to Dr.Dhanabakyam mam.
  Thanks to sudha hospital Coimbatore teams`,
      name: "Narayana moorthy",
      title: "Patient",
    },
    {
      quote:
        "Good service provided to my wife while in patient delivered twins we are happy with this hospital",
      name: "Dhana Dhana",
      title: "Patient",
    },
    {
      quote:
        `Had a great experience in sudha hospital has great co operation staffs and doctors are very good and positive the best
  hospital in town currently. Got positive after many years of treatment. Special thanks to doctor dhanabagyam.`,
      name: "Jothi Senthil",
      title: "Patient",
    },
    {
      quote:
        `Thank u first of all for giving me a beautiful girl baby and all my regards goes to Dr.Dhanabagyam mam,Dr. Karthika
  mam,Dr. Ambika mam, Dr. Divya mam and all nursing staffs malliga sister, thilaga sister, selin sister and i thank all
  the reception staffs jeni sister, margret sister, mythili sister,as well I thank the admin department kasthuri mam and
  Nikilesh sir... This will be a memorable moment in my life with a new beginning..... 🥰`,
      name: "Kowsi Maniraj",
      title: "Patient",
    },
    {
      quote:
        `My wife had tube blockage and even after ivf at Delhi she was not able to conceive. We were recommended to Sudha
  hospital & Dr Dhanabakhyam by a friend. The Dr used the advanced tech & medicine and gave good care. Only due their
  constant check up , My wife was able to conceive. Now after 6 yrs of marriage we are blessed with a baby girl . All
  staffs of Sudha hospital and nurses are very co operative and very caring. Thank you Dr. Dhanabakhyam, Dr Karthika, Dr
  Ambika, Dr Divya and all nurses and staff of Sudha hospital.`,
      name: "santhosh raj",
      title: "Patient",
    },
    {
      quote:
        `We got girl baby. Thanks to Dr.Dhanabakyam mam.
  Dr.ambuga mam.
  Dr.Divya lakshmi mam.
  Op tgilaga sister.
  Op malliga sister.
  Reception jeni sister.
  Good working environment, friendly staff and very close to living place.
  We fell a very good experience in patient care and gravity to treatment. We are so happy with rhe service and
  hospitality of the staffs and nurses.
  Thanks to sudha hospital coimbatote team `,
      name: "Nithya 08",
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
                    <h2 className="text-[#FFC65C] font-semibold uppercase">
                      VANAKKAM Coimbatore
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Coimbatore</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Trust, care, and expertise on your fertility journey.
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
          <InfiniteMovingCardsDemo reviews={Coimbatorereviews} />
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
                <section id="about" className="pt-2">
                  <div
                    className="flex flex-col lg:flex-row gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <h3 className="text-[#173366] mb-2  font-semibold">
                        About
                      </h3>

                      <p className="mt-3  text-gray-600">
                        Sudha Fertility Centre launched its branch in Coimbatore in 2011. With expertise of service in fertility care, Sudha is the best fertility hospital in Coimbatore. Equipped with latest technologies and world class infrastructure, Our team of fertility and IVF specialists is committed to make your parenthood journey a personal one. We are driven to make your parenthood dream come true.
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
                      World class Fertility Treatments in Coimbatore:
                    </h3>
                    <p className="mt-3  text-gray-600">
                      We have the latest technologies and the best fertility doctors in Coimbatore, we provide you the best fertility treatments in Coimbatore. We can’t complete our days without seeing the happiness of couples, we are with you throughout your parenthood journey.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-gray-600">
                      As the best Fertility centre in Coimbatore, Sudha Fertility Centre offers
                    </p>
                    <ul className=" text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                      <li>Normal Delivery - Natural Labour For Mothers </li>
                      <li>IVF - In Vitro Fertilization </li>
                      <li>IUI - Intrauterine Insemination </li>
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
                    <p className="mt-3 mb-3 text-gray-600">
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are done by the best fertility specialists in Coimbatore.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366]  font-semibold mt-5">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Coimbatore?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      At Sudha Fertility Centre, we understand the emotional trauma of infertility and our support staff is with you throughout. With focus on innovation and patient care, we are redefining possibilities in reproductive healthcare. As the best IVF hospital in Coimbatore, we provide fertility and fertility-related treatments for all age groups and make your parenthood dream come true. We have more than 40+ Branches across South India and Sri Lanka and have delivered more than lakhs of healthy babies. Our commitment to help couples in their parenting journey made us a renowned IVF centre in Coimbatore.
                    </p>
                    {/* <p className="mt-3 text-gray-600">
                      With more than 20 branches across South India and Sri
                      Lanka, we hold a record of delivering more than lakhs of
                      healthy babies. Our commitment to helping couples in their
                      parenthood journey made us a renowned IVF centre in
                      Coimbatore.
                    </p> */}
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
                        As the best fertility hospital in Coimbatore, Sudha Fertility Centre provides the best fertility treatments with care and attention. With world class facilities and cutting-edge treatments, we make your parenting journey comfortable and joyful at every stage.
                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>State-of-the-art Laboratories for IVF Treatment</li>
                        <li>24/7 Access to Pharmacy </li>
                        <li>Dedicated Labour Room for Normal Delivery </li>
                        <li>Round-the-Clock Care</li>
                        <li>Experienced Multidisciplinary Team </li>
                        <li>Comprehensive Diagnostic Services </li>
                        <li>3 Neonatal Intensive Care Units (NICU)</li>
                        <li>Well Equipped Operation Theatres </li>
                        <li>Personalised Treatment Plans</li>
                        <li>Cost-efficient Procedures and Treatments.</li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                      <ImageSlider images={Ambattur.Facilities.Facilitiesimg} className="rounded-xl" />
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
                      <h3 className="text-[#173366] mb-3 font-semibold leading-[1.4]">
                        Fertility Specialists <br /> in Coimbatore
                      </h3>
                      <h4 className="text-[20px] font-semibold mt-2 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Coimbatore
                      </h4>
                      <h4 className="text-[18px] text-[#173366] font-semibold mt-2">
                        S. Dhanabagyam
                      </h4>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, MD, O&G, ART
                      </p>
                      <p className="text-md text-[#000000] mt-3">
                        Senior Consultant IVF & ART Specialist
                      </p>
                      <p className="mt-3 text-gray-600">
                        Dr. Dhanabagyam, a fertility and women’s health visionary, had a dream to create a women’s care and fertility centre offering best treatments at affordable prices. Under her guidance and expertise the first Sudha Fertility Centre was started in 1995 in Erode. Today the centre has grown into a network of 40+ highly successful branches across South India and Sri Lanka.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                      <Image
                        src={Dhanabakiyam}
                        alt="Dhanabakiyam"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-wrap lg:flex-nowrap gap-8 mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <Image
                        src={Ambika}
                        alt="Ambika"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">


                      <h4 className="text-[18px] text-[#173366] font-semibold mt-2">
                        Dr. Ambika C.P
                      </h4>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, MS (OBG), DNB

                      </p>
                      <p className="text-md text-[#000000] mt-3">
                        Infertility and OBGY Consultant
                      </p>
                      <p className="mt-3 text-gray-600">
                        Dr. Ambika C.P. is a dedicated Consultant in Infertility and Obstetrics & Gynaecology at Sudha Fertility Centre. With strong academic credentials and hands-on experience in managing a wide range of fertility challenges, she combines clinical precision with empathetic care. Dr. Ambika is known for her patient-focused approach, offering customized treatment plans to support each couple on their journey to parenthood.
                      </p>
                    </div>

                  </motion.div>

                  <motion.div
                    className="flex flex-wrap lg:flex-nowrap gap-8 mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >

                    <div className="w-full lg:w-1/2 mt-5">


                      <h4 className="text-[18px] text-[#173366] font-semibold mt-2">
                        Dr. C. Vishnupriya
                      </h4>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, MS (OG)

                      </p>
                      <p className="text-md text-[#000000] mt-3">
                        Consultant – OBGY
                      </p>
                      <p className="mt-3 text-gray-600">
                        Dr. C. Vishnupriya is an experienced OBGY consultant at Sudha Fertility Centre, committed to providing holistic care in women’s health, from adolescence through menopause. She specializes in managing both routine and high-risk obstetric cases, as well as a wide range of gynaecological conditions. With a gentle and approachable manner, Dr. Vishnupriya ensures that every patient receives personalized, evidence-based care in a supportive environment.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                      <Image
                        src={Vishnupriya}
                        alt="Vishnupriya"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>

                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery">
                  <h3 className="text-[#173366] mt-4  font-semibold">
                    Gallery
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Coimbatore.gallery} />
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
                              410, Bharathiyar Rd, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu - 641044.
                            </p>
                            <Link href="https://maps.app.goo.gl/FzY9JxNQMHxAPzzv9" >
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
            <h2 className="font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Coimbatore.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Coimbatore.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
        <MarqueeComponent
          items={Coimbatore.gallery}
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
          items={Coimbatore.gallery}
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

export default CoimbatorePage;
