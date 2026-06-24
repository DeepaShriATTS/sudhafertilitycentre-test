"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
// import SudhaAbout from "@/assets/branch/Paramakudi/Paramakudi_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
// import Hospital from "@/assets/branch/Paramakudi/Paramakudi.webp";
// import SoundharyaNivasini from "@/assets/branch/Paramakudi/SoundharyaNivasini.webp";
import SudhaAbout from "@/assets/branch/theni/theni_about.webp";
import Hospital from "@/assets/branch/theni/Theni.webp";
import { Theni } from "@/middleware/imagesroute";

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
import { Ambattur, Paramakudi } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { paramakudiVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);

function ParamakudiPage() {
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
      setVisibleCount(Paramakudi.faqs.length); // Show all FAQs
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



  const ParamakudiReview = [
    {
      quote:
        `Very very thanks to paramakudi sudha hospital and Dr. Nivasini mam and nursing staff. Today my best day my life my wife has positive result( isci). Best fertility centre in paramakudi`,
      name: "Girija ganesan",
      title: "Patient",
    },
    {
      quote:
        "Tx to sudha hospital doctors and staff. Today got  positive results.  dr.nivasini mam good support person. Stress freee pt frdly hospital.",
      name: "Guru Marees",
      title: "Patient",
    },
    {
      quote:
        "Good fertility center,staffs are very Kindly approach on every poples.thank u",
      name: "Praveen Kumar",
      title: "Patient",
    },
    {
      quote:
        `This is Muthu from Villupuram. I knew the Sudha hospital through my friend. My daughter got married at 2019. She don't have child. So we went to Sudha hospital Paramakudi for my daughter's fertility treatment. Now she delivered a boy baby. I really happy with my boy. I want to thank for each and every staff in this hospital.
  Once again I thank the doctor mam she gave hope to my family and my daughter. Nowadays we're very happy with my grandson. I thanks the Sudha hospital management with gratefulness.`,
      name: "muthukumaran sivaraman",
      title: "Patient",
    },
    {
      quote:
        "I am Chandrika Eswaran, I am now seeing in sudha hospital Paramakudi Here Dr .Nivasini mam gives one support for me. This makes me to  continue this hospital. Nursing staff also so good speech Counsellor  vanitha also so good speaker totally this hospital is so good. Their speech make to continue her . By Gods grace as well as the doctors way of speech  I got positive vibration . By that now i am conceive  I am so happy. Management wise totally so good .I support sudha hospital.",
      name: "Sandhya E",
      title: "Patient",
    },
    {
      quote:
        "Hi, I am sowmiya Chakravarty. I came her treatment for fertility. After  few months I conceive now I have a cute baby. I am so happy for having a child . Great thanks to Sudha hospital. The management was so good. Hospital staff specially Nivasini mam was so kind. The other staff Maha sister Vanitha mam other op staff speech create a positive thoughts. Thankfull for Sudha hospital",
      name: "Sowmiya Sowmiya",
      title: "Patient",
    },
    {
      quote:
        "Sudha hospital   Paramakudi branch  last 5years no kids  iam  send it sudha hospital     Paramakudi.   treatment   started  my saide vry improve  iam vry confidant  in my self  vry good exlent service counselling   also clearly  staff vry caring thank god",
      name: "Bharatha Selvi",
      title: "Patient",
    },
    {
      quote:
        "I am Sangeetha. I came here for treatment through my friend referral. The way of approach is very nice. Doctor speech make me confident to get rid of my difficulties. After visiting the hospital I have a positive thoughts and positive mind which make me a confident. Thank u sudha hospital",
      name: "Sangeetha Lishva",
      title: "Patient",
    },
    {
      quote:
        `😍💘👨‍👩‍👧Best hospital in Paramakudi for fertility treatment. The care is top notch and positive vibes are best. Multiple visit on other hospitals are didn't work for us but here got good news in 1st month treatment itself.
  Got my princess after 5 yers through IUI on 25th Mar'23. Thanks a lot to Nivashini Mam, Archana, Dhanalakshmi and Vanitha Mam🙏💘😍👨‍👩‍👧. Try visit once then you will feel good vibes. ⚡`,
      name: "krishna moorthi",
      title: "Patient",
    },
    {
      quote:
        "Sudha hospital Paramakudi dr  staff good service   my sister 15 years no chid    iam going on sudha hospital  Dr nivashni staff vry good caring  treatment vry satisfied thank you sudha hospital Paramakudi branch",
      name: "ᴠꜱ ᴄʀᴇᴀᴛɪᴏɴ",
      title: "Patient",
    },
    {
      quote:
        "I Am Really Happy to Visit Here,Because 11 yrs We have not baby but now I Have Pregnant because Sudha hospital treatment very Good and Taking Care and All Staffs so kind and Caring persons and Thank u for Sudha Family",
      name: "sudha Ramesh",
      title: "Patient",
    },
    {
      quote:
        "Hi I am Pavithra Jayaprakash,  Last 5 years I am going for treatment. I went so many hospitals but I cannot get apt results. Through online only I came sudha hospital for treatment. The way way approach patient was nice. Dr.Nivasini mam is very kind. The staff working in this hospital was veey polite and kind. Now I got positive result. I am very excitement on hearing this. I got pregnanat trough natural only. onceagain I thank Dr.mam for giving this . Iproud to say Now I am MOM for a Child. THANK U SUDHA HOSPITAL",
      name: "Jaya Prakash",
      title: "Patient",
    },
    {
      quote:
        "🎊 Best Hospital for Fertility Treatment. Got good news after 4 years. All are too friendly like family. Especially Dr Nivasini Mam. The way she speaks, we will get more confident. Maha & Vanitha sisters are approachable always and too friendly. Strongly recommended to all.👍😍🎉",
      name: "krishna moorthi",
      title: "Patient",
    },
    {
      quote:
        "Hi i am Anupriya yuvaraj, really enaku treatment kudutha doctor super. I am just married 9 months ago. After marriage only 6 months I came this hospital through camp. She (doctor) said u will came after 1 year of trying baby. Well attitude. this month I can see positive results of my pregnancy. Really am happy to say this very good hospital.nursing staffs also working good.",
      name: "Anu Priya",
      title: "Patient",
    },
    {
      quote:
        "After 20 years we got a girl baby and Then my wife and family got so happy and it' s given by Sudha Fertility Paramakudi Gift Because Me and my wife got treatment above 10 different IVF hospital But waste of Time and Money only because all treatment goes to failure 😭😭😭 and never I can't forget a sudha Fertility Centre Paramakudi with the help of Madurai Sudha Hospital Also , because all staff are treated like a Family and Their Followup is so good because I never seen this type of Staff and Doctors, Daily they call to my wife give their medicine instructions and Food instructions and They Only Gives Successful Treatment and Again again Thanks to Sudha Fertility Paramakudi",
      name: "Sanjay",
      title: "Patient",
    },
    {
      quote:
        "Hair I'm Kalai. married since 10 yrs. Before 3momth take ivf treatment now i am got positive results. So happy me and my family. Thanks so much. Maha sister good speech and archana staff. Dr. Nivasini mam given positive vibes .vanitha sister Also good",
      name: "kalai suthan",
      title: "Patient",
    },
    {
      quote:
        `Hi, I am Ajitha dhivakaran. I came for fertility treatment. After Came to this hospital I got a positive energy and I have a confident. Thanks to sudha hospital. The staff handling was very nice and good. Eco friendly
  environment.`,
      name: "ajitha ajitha",
      title: "Patient",
    },
    {
      quote:
        "I am so happy to inform you, I get pregnancy positive in sudha fertility centre,. Since 4yrs of marriage life I am in challenge to get pregnant. After visiting to sudha hospital I get a positive vibration and confident . Futher treatment I got really positive result. Now I'm pregnant. Thanks to sudha hospital and Dr. Nivasini mam and op staff and other staff. Thank you mam. I support sudha fertility hospitals",
      name: "Chandra Mohan mohan",
      title: "Patient",
    },
    {
      quote:
        "Hi iam ramya Ramkumar I came har treatment for Paramakudi sudha hospital. I conceive now I have a cute baby iam so happy great thanks to Paramakudi sudha hospital management and staff.specially thanks to Dr Nivasini mam and staff Maha sister Vanitha mam other sudha hospital all staff thanks for Paramakudi sudha hospital....",
      name: "RAM KUMAR",
      title: "Patient",
    },
    {
      quote:
        `Hi Im Santhi Mahendran, we are facing infertility problems for the past 15 years since married,
  Before coming to sudha hospitals we are taking lot and lots of treatment from other hospitals then am come to sudha hospital now am pregnant😍 thank you so much for the taking care of my self..
  Dr. Nivasini mam's way of speech and explaining our problems and giving solutions were easy to understand. Thank you Sudha Hospitals... `,
      name: "Karpaiah Rajasekhar",
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
                      VanakKam Paramakudi
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Paramakudi</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Your journey to parenthood begins here.
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
          <InfiniteMovingCardsDemo reviews={ParamakudiReview} />
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

                      <p className="mt-3 text-gray-600">
                        Sudha Fertility Centre has been a pioneer in fertility care across Tamil Nadu, supporting thousands of couples and achieving successful outcomes. The new Paramakudi branch is built with the same vision to provide world-class fertility services locally, without families having to travel far.
                      </p> <br />
                      <p className="mt-3 text-gray-600">
                        Here, our specialists combine medical precision with compassionate care. Every consultation is designed to understand each couple's unique needs, and every treatment plan is tailored to give the best chance of success. Beyond medical services, we focus on emotional support, ensuring couples feel guided and cared for throughout their journey.
                      </p>
                      <h3 className="text-[#173366] mt-3 font-semibold">
                        Best Fertility Treatments in Paramakudi:
                      </h3>
                      <p className="mt-3 text-gray-600">
                        The Paramakudi branch offers a complete range of fertility treatments, supported by advanced technology and experienced doctors. Whether you are beginning your journey or seeking advanced procedures, our team is equipped to guide you at every stage.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Paramakudi"
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
                      Core fertility treatments include:
                    </p>

                    <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">

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
                        Ovarian Rejuvenation (ABCD)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                    </ul>

                    <p className="mt-3 mb-3 text-gray-600">
                      Gynaecological care and surgeries:
                    </p>

                    <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">

                      <li>C‑section and normal delivery </li>
                      <li>Laparoscopy and Hysteroscopy</li>
                      <li>Myomectomy and cervical cerclage</li>
                      <li>
                        Fertility preservation procedures
                      </li>

                    </ul>

                    <p className="mt-3 text-gray-600">
                      This comprehensive approach ensures that couples receive both fertility‑specific treatments and broader women’s health support under one roof.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best IVF Hospital in Paramakudi?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      Sudha Fertility Centre has earned its reputation through consistent success rates and patient‑focused care. In Paramakudi, we bring the same strengths:                    </p>
                    <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">

                      <li>Affordable treatments without compromising quality</li>
                      <li>Quick diagnostic reports to avoid delays in treatment</li>
                      <li>Experienced specialists with proven expertise</li>
                      <li>
                        Outstanding IVF success rates recognized across Tamil Nadu
                      </li>
                      <li>Custom treatment plans for each individual</li>

                    </ul>

                    <p className="mt-3 text-gray-600">
                      Families choose Sudha not only for medical excellence but also for the warmth and care they experience at every step.
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
                      <p className=" text-gray-600 mt-3">
                        Our Paramakudi branch is equipped with modern infrastructure and advanced technology to support fertility treatments and patient care. By blending technology with compassionate care, Sudha Fertility Centre in Paramakudi stands as a trusted partner for couples on their path to parenthood                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>State‑of‑the‑art IVF laboratory </li>
                        <li>Quick diagnostic equipment for faster results </li>
                        <li>24/7 medical support with trained staff </li>
                        <li>Comfortable consultation and recovery spaces </li>
                        <li>High-quality services at an affordable cost </li>
                        <li>Full-time Fertility Support Team </li>
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
                        in Paramakudi
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Paramakudi
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
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-7 "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* <div className="w-full lg:w-1/2">
                      <Image
                        src={SoundharyaNivasini}
                        alt="SoundharyaNivasini"
                        className="w-full h-auto rounded-xl"
                      />
                    </div> */}
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold ">
                      Our Fertility Specialist in Paramakudi
                      </h3> */}
                      {/* <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. U. Soundharya Nivasini
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, DNB, OG
                      </p>
                      <p className="text-md text-[#000000] mt-3">
                        Fertility Consultant / OB-GYN
                      </p>
                      <p className="text-gray-600 mt-3">
                        Dr. U Soundharya Nivasini, a fertility consultant at Sudha Fertility Centre, Paramakudi, brings expertise honed through DNB (Obstetrics & Gynaecology) training at Meenakshi Mission Hospital and Research Centre, Madurai. With a track record of over 60 successful IUI procedures and consultations with more than 1000 patients, Dr. Nivasini consistently garners praise for her compassionate care and empowering guidance.
                      </p> */}
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
                  {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Paramakudi.gallery} />
                  </motion.div> */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Theni.gallery} />
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
                              Gandhiji Main Road, near Taluk Office, SPM Colony, Attupalam, Paramakudi, Tamil Nadu 623707.
                            </p>
                            <Link href="https://maps.app.goo.gl/gVtpKeuCQyh1pqDe6">
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
            {Paramakudi.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Paramakudi.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Paramakudi.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}
        {/* <MarqueeComponent
          items={Theni.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}
        <GallerySlider items={paramakudiVideos} />
        <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>

        {/* <MarqueeComponent
          items={Paramakudi.gallery}
          direction="right"
          speed="fast"
          className="custom-class"
        /> */}

        {/* <MarqueeComponent
          items={Theni.gallery}
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

export default ParamakudiPage;
