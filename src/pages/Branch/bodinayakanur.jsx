"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/chennai/chennai_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Shanmugavalli from "@/assets/dummy-image.webp";
import Indhumathy from "@/assets/branch/chennai/indhumathy.webp";
import Hospital from "@/assets/dummy-location.webp";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ImageGrid from "@/components/imagegrid";
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur, Bodinayakanur } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import NotFound from "@/app/not-found";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);

function BodinayakanurPage() {
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
      setVisibleCount(Bodinayakanur.faqs.length); // Show all FAQs
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

  const chennai = [
    {
      quote:
        "Very happy to share after 10 yrs. We got good news from sudha hospital chennai. We thanks to sudha hospital entire team. I would like to recommend about sudha fertility center chennai as it values for all patients.",
      name: "tbs delivery004",
      title: "Patient",
    },
    {
      quote:
        "This is not a review but my thanks notes to Sudha Hospital. We have been struggling for almost 4 years for this miracle. Last November 2022 we came to Sudha Hospital from the day one Doctors, Nurses, Admin team, Pharmacy team and Lab technician gave their immense service and support to make this miracle happen. Special thanks to Dr. Shyla, Dr. Nairuti and Dr. Laksmi who are extremely friendly and positive throughout our treatment. I Highly recommend Sudha Hospital. Thank you all for this wonderful moment in our life. May God bless Sudha Hospital and their Staffs with happiness and prosperity.",
      name: "Sachin Gavaskar Dev",
      title: "Patient",
    },
    {
      quote:
        "Good treatment and best ivf treatment for sudha hospital chennai brnach",
      name: "Baskar Baskar",
      title: "Patient",
    },
    {
      quote:
        "I am on cloud nine writing this review. Sudha Fertility center is THE BEST in Chennai hands down. Doctors and Nurses give their 200% to make this miracle happen. Special thanks to Dr. Shyla, Dr. Nairuti and Dr. Laksmi who are extremely friendly and positive throughout the process. Shout out to all Nurses and Admin staff for their immense services may God bless them and their families. HIGHLY RECOMMENDED for those who are waiting for this miracle to happen. Thank you so much Sudha Hospital.❤️🥰😘😘😘.....",
      name: "SINDHU BAIRAVI",
      title: "Patient",
    },
    {
      quote:
        "I been here from 3 months receptionist and nurse and doctors are very kind we started treatment IFB still now it's very good service and very nice ambience the attenders of pharmacy the very present 💝🎁💝 ",
      name: "Ak Ak",
      title: "Patient",
    },
    {
      quote:
        "Good afternoon man and sir Ian taking treatment for sudha hospital Chennai now I am having so many struggle for many hospital Ian coming to this centre of positive vibes and friendly carrying for each and everyone thanks to very doctor DR. Lakshmi DR. Shyla DR. Nairuti and admin and counsellor and reception staff and staff nurse very carrying and friendly thanks to Sudha hospital Chennai very much",
      name: "Ramesh R",
      title: "Patient",
    },
    {
      quote:
        "Hi everyone my self is sevathri iam taking treatment for sudha hospital chennai married 4 years iam got ivf treatment now iam pregnant thanks to sudha hospital chennai thanks to DR. Dhanabayam and Dr.pradeepa mam iam really thank u DR.lakshmi and Dr.shyla DR.nairuti mam and every staff nurse and admin and counsellor and lab and reception staff and each and everyone carrying friendly andtakecare for each and everyone thanks to sudha hospital chennai very hearly good ivf treatment and in chennai",
      name: "Desappan M",
      title: "Patient",
    },
    {
      quote:
        "Well experienced doctors and staffs. neat and clean. Best fertility centre in Vellore. Highly recommend .",
      name: "Saravanan Neelakandan",
      title: "Patient",
    },
    {
      quote:
        "Hai I'm monisha here I like to share my review and opinion about sudha fertility centre , Chennai. Staff and doctor are so kind and reception staff treaed me like their family . Nursing staff are well trained and knowledged. Doctors explained everything about process and my health oriented things. Really got satisfied with their explanations",
      name: "MONISHA MALATHI",
      title: "Patient",
    },
    {
      quote:
        "I am feeling very happy that my wife revathi got a baby girl after 2 yrs . 2 yrs of struggle so much of depression and society talks and then we find a right path that is sudha fertility centre we came and visited the hospital and she got conceived and now I am a proud father. This is all only because of sudha hospital, excellent treatment and good atmosphere, friendly staffs on the whole it's an very good fertility centre that I can recommend to everyone..... TQ sudha for your effort and support ❤️",
      name: "Jagadeesan R",
      title: "Patient",
    },
    {
      quote:
        "My name is jaieswari ni am taking treatment in sudha hospital Chennai Last three year many hospital Iam take a treatment for baby .but last six month sudha hospital take a treatment still I am pregnant for iui . Thanks for Sudha hospital.dr.s and admin and all the staff. I am very happy the moment I suggested this hospital. Thanks for management.",
      name: "Jai P",
      title: "Patient",
    },
    {
      quote:
        "Hai, here I like to sharing my experience about Sudha fertility, Chennai express all doctors and staff are well experienced about fertility treatments. Best IVF center in Chennai. Well equipped Hospital for IVF treatment Thank you sudha",
      name: "Sudhakar Jaganathan",
      title: "Patient",
    },
    {
      quote:
        "Treatment is really good and transparent. All the doctors and hospital staff members are kind and friendly. Especially Dr. Shyla mam. The way she explains everything gives us hope. She is energetic and spreads positivity towards patients. Overall very satisfied and happy. Thanks to Sudha Hospitals for making our lives better and happier.",
      name: "Jagan",
      title: "Patient",
    },
    {
      quote:
        "Doctors and all the staffs are very caring and friendly. Doctors clearly explains the treatment process. Their words are very kind and give positive hopes. All staffs answers all our doubts clearly with patience. Treating way is excellent. Doctors does treatment for us wholeheartedly to bring a positive results and Smile on our faces. Very thankful to Sudha hospitals.",
      name: "Manju P",
      title: "Patient",
    },
    {
      quote:
        "I'm so very happy for sudha hospital Chennai branch.After long time we got positive results.Really very kind all staffs and doctors.I strongly recommend sudha hospital Chennai.",
      name: "Sathvan sathvan",
      title: "Patient",
    },
    {
      quote:
        "Sudha hospital is the best fertility center.. I have taken treatment at here. Doctors are very kind and they explained about treatment very clearly..and all other staffs gave good response and whenever I asked any doubt to them.they answered anytime with clear and proper guidance.i am very satisfied.thanks to Sudha Hospitals😊..",
      name: "yazhini rajendiran",
      title: "Patient",
    },
    {
      quote:
        "Hi this is lingesh here as I want to share my experience about sudha Fertility Centre chennai .... where I went to consult doctor for our childless problem on 2022 the staffs and the doctors are very friendly and they take in care of us very kindly and safely now after the best surgery we got pregnant in 2023 and 2024 I got a baby girl .....this is only because of sudha Fertility Centre the management and the doctors & staff tq sudha for your valuable service",
      name: "Lingesh Lee",
      title: "Patient",
    },
    {
      quote:
        "Hi mam iam taking treatment for sudha hospital Chennai good experience and taking care for me thank to sudha hospital Chennai branch",
      name: "N MEENA",
      title: "Patient",
    },
    {
      quote:
        "Good morning mam iam taking for IVF treatment for sudha hospital Chennai good results for IVF treatment and thanks to Dr.Lakshmi and Dr.shyla and Dr.Nairuti mam and admin mam dhanalakshmi and nivetha counsellor and reception staff and nurse and lab everyone are very kind answer thanks to sudha hospital Chennai IVF treatment is good and carrying doctor thanks to sudha hospital Chennai",
      name: "CHANDRAN R",
      title: "Patient",
    },
    {
      quote:
        "Hi everyone Iam to happy to share my experience in sudha hospital Chennai my name is nandhini I am taking treatment for sudha hospital for Ivf and good results Iam so happy to tell this thanks to every doctor and admin and counsellor and all staff nurse and housekeeping",
      name: "raman",
      title: "Patient",
    },
  ];

  return (
    <>
    <NotFound/>
    </>
    // <>
    //   <div className="relative w-full min-h-[850px] md:min-h-[600px] lg:min-h-[600px]">
    //     {/* Background Image */}
    //     <div
    //       className="absolute inset-0 bg-cover -top-40 bg-center"
    //       style={{
    //         backgroundImage: `url(${BgAbout.src}), linear-gradient(to bottom, rgba(23, 51, 102, 0.7), rgba(255, 255, 255, 1))`,
    //       }}
    //     />

    //     <div>
    //       <div className="relative py-10 md:py-16">
    //         <div className="container mx-auto ">
    //           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
    //             <div className="flex flex-col lg:flex-row  justify-between items-center">
    //               {/* Left Content */}
    //               <motion.div
    //                 className="text-white w-full lg:w-1/2"
    //                 initial={{ opacity: 0, x: -50 }}
    //                 animate={{ opacity: 1, x: 0 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <h2 className="text-[#FFC65C]  font-semibold uppercase">
    //                   VANAKKAM Bodinayakanur
    //                 </h2>
    //                 <h1 className=" font-bold mt-4">
    //                   Best Fertility Centre In  {" "}
    //                   <br className="hidden sm:block" />
    //                   <span className="text-[#FDCB58]">Bodinayakanur</span>
    //                 </h1>
    //                 <p className=" mt-4 text-[22px] leading-[1.6]">
    //                   Supporting Your Parenthood Journey with Expertise and Care</p>
    //                 <Button
    //                   styleClass="mt-6"
    //                   text="Connect with WhatsApp"
    //                   link="https://wa.me/917670076006?text=Hi,%20Can%20I%20get%20more%20info%20on%20this?"
    //                   icon={<IoMdArrowForward />}
    //                 />
    //               </motion.div>

    //               {/* Right Content - Form */}
    //               <BranchForm />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="absolute -bottom-80 lg:-bottom-64 w-full">
    //       <InfiniteMovingCardsDemo reviews={chennai} />
    //     </div>
    //     <div
    //       className="absolute bottom-0 w-full h-36"
    //       style={{
    //         background:
    //           "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
    //       }}
    //     ></div>
    //   </div>

    //   <div className="container mx-auto mt-72 lg:mt-60">
    //     <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">
    //       <div className="w-full lg:w-2/3">
    //         <div className="w-full pe-5">
    //           {/* Navbar */}
    //           <Navbar sections={sections} />

    //           {/* Sections */}
    //           <ScrollMotion>
    //             <section id="about" className="  pt-2">
    //               <div
    //                 className="flex flex-col lg:flex-row gap-8"
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <h2 className="text-[#173366] text-[24px] mb-2  font-semibold">
    //                     About
    //                   </h2>

    //                   <p className=" mt-3 text-gray-600">
    //                     Located in the heart of Bodinayakanur, Sudha Fertility Centre brings world-class fertility care closer to families in the region. Known as the best fertility hospital in Bodinayakanur, we combine advanced reproductive technology with personalized, compassionate care to help every couple take confident steps toward parenthood.
    //                   </p>
    //                   <p className=" mt-3 text-gray-600">
    //                     Sudha Fertility Centre was inaugurated in 2025 in Bodinayakanur, expanding our mission to make high-quality fertility treatments accessible to aspiring parents in tier-2 and tier-3 regions. Since our launch, we have become a trusted choice for couples in and around Bodinayakanur, delivering consistent success rates and heartfelt care.
    //                   </p>





    //                 </div>

    //                 <div className="w-full lg:w-1/2 mt-5 sm-hidden">
    //                   <Image
    //                     src={SudhaAbout}
    //                     alt="Ambattur"
    //                     className="w-full object-cover rounded-xl"
    //                   />
    //                 </div>


    //               </div>

    //               <div className="mt-3">


    //                 <h2 className="text-[#173366] text-[24px] mt-3 font-semibold ">
    //                   Best Treatments Offered in Bodinayakanur:
    //                 </h2>
    //                 <p className="mt-3 text-md text-gray-600 ">
    //                   We provide the most comprehensive fertility care in Bodinayakanur, backed by cutting-edge techniques and a skilled medical team. Each treatment is carefully planned to suit your individual health needs and fertility goals. Whether you're just starting your journey or seeking advanced interventions, we offer the right solutions in a safe, supportive environment.
    //                 </p>
    //                 <p className="mt-3 text-md text-gray-600 ">
    //                   We are committed to ensuring affordability without compromising on quality, making us the best IVF centre in Bodinayakanur for couples seeking both trust and transparency.
    //                 </p>
    //               </div>

    //               <motion.div
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <p className="mt-3 mb-2 text-md text-gray-600">
    //                   As the leading fertility hospital in Bodinayakanur, we specialise in the following treatments,
    //                 </p>
    //                 <ul className="text-md text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
    //                   <li>Normal Delivery - Natural Labour for Mothers </li>
    //                   <li>IVF - In Vitro Fertilization </li>
    //                   <li>IUI - Intrauterine Insemination  </li>
    //                   <li>ICSI - Intracytoplasmic Sperm Injection   </li>
    //                   <li>
    //                     IMSI - Intracytoplasmic Morphologically Selected Sperm Injection
    //                   </li>
    //                   <li>TESE - Testicular Sperm Extraction </li>
    //                   <li>PESA - Percutaneous Epididymal Sperm Aspiration </li>
    //                   <li>LAH - Laser Assisted Hatching </li>
    //                   <li>
    //                     Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood Cell Derivative)
    //                   </li>
    //                   <li>FET - Frozen Embryo Transfer </li>
    //                   <li>ENDOMETRIUM PRP - Platelet-Rich Plasma </li>
    //                 </ul>
    //                 <p className="mt-3  text-gray-600">
    //                   and other gynae-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS, as well as other fertility preservation processes are performed by the best fertility doctors in Bodinayakanur.   </p>
    //                 <div className="w-full lg:w-1/2 mt-5 hidden sm-block">
    //                   <Image
    //                     src={SudhaAbout}
    //                     alt="Ambattur"
    //                     className="w-full object-cover rounded-xl"
    //                   />
    //                 </div>

    //                 <h2 className="  text-[24px] text-[#173366] font-semibold mt-5">
    //                   Why Sudha Fertility Centre is the Best Fertility Hospital in Bodinayakanur?
    //                 </h2>
    //                 <p className="text-gray-600 mt-3">
    //                   With years of expertise and a strong reputation across South India, Sudha Fertility Centre stands out in Bodinayakanur for its ethical practices, proven success rates, and unwavering commitment to patient well-being.


    //                 </p>
    //                 <ul className="text-md text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
    //                   <li>Proven Track Record: Thousands of successful pregnancies across our centres. </li>
    //                   <li>Affordable Excellence: World-class treatments at transparent and affordable costs. </li>
    //                   <li>Patient-Centric Approach: Personalized care plans designed for each couple.   </li>
    //                   <li>Advanced Technology: Cutting-edge labs and diagnostic tools for high success rates.    </li>
    //                   <li>
    //                     Expert Team: Fertility experts, embryologists, and nurses with decades of combined experience
    //                   </li>
    //                   <li>Emotional Support: Counselling and guidance at every stage of the treatment. </li>

    //                 </ul>


    //               </motion.div>

    //               <hr className="mt-5" />
    //             </section>
    //           </ScrollMotion>

    //           <ScrollMotion>
    //             <section id="facilities">
    //               <motion.div
    //                 className="flex flex-col lg:flex-row gap-8 mt-5 "
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <h2 className="text-[24px] text-[#173366] font-semibold">
    //                     Facilities
    //                   </h2>
    //                   <p className="text-md text-gray-600 mt-2">
    //                     Sudha Fertility Centre in Bodinayakanur is well-equipped with advanced medical technology and modern infrastructure, making it the best fertility hospital in Bodinayakanur for couples seeking expert care. Recognized as the best IVF centre in Bodinayakanur, our facility offers a calm, patient-friendly environment with high clinical standards.
    //                   </p>
    //                   <ul className="text-md text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
    //                     <li>Fully-equipped Diagnostic Services   </li>
    //                     <li>World-class IVF Laboratory </li>
    //                     <li>State-of-the-art Operation Theatres</li>
    //                     <li>Supporting Medical Staff  </li>
    //                     <li>Cost-Efficient Procedures   </li>
    //                     <li>Round-the-clock Pharmacy </li>
    //                     <li>24*7 Medical Care </li>


    //                   </ul>
    //                 </div>
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <ImageSlider images={Ambattur.Facilities.Facilitiesimg} className="rounded-xl" />

    //                   {/* <Image src={Facilities} alt="Facilities" className="w-full h-full object-cover" /> */}
    //                 </div>



    //               </motion.div>

    //               <hr className="mt-5 border-gray-300" />

    //             </section>
    //           </ScrollMotion>

    //           <ScrollMotion>
    //             <section id="specialists">
    //               <motion.div
    //                 className="flex flex-wrap lg:flex-nowrap gap-8 mt-5"
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <h2 className="mb-3 text-[24px] text-[#173366] font-semibold leading-[1.4]">
    //                     Fertility Specialist in   <br /> Bodinayakanur
    //                   </h2>
    //                   <h3 className="text-[20px] font-semibold mt-2 leading-[1.4]">
    //                     Chief Expert of Sudha Fertility Centre in Bodinayakanur
    //                   </h3>
    //                    <h4 className="text-[18px] text-[#173366] font-semibold mt-3">
    //                     Dr.S.Pradeepa Sudhakar.,
    //                   </h4>
    //                   <p className="text-md text-[#000000] mt-3">
    //                    DGO, DNB (OG), MNAMS, FICOG Senior Consultant IVF & ART Specialist 
    //                   </p>
    //                   {/* <p className="text-[#000000] mt-3">
    //                     Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS)
    //                   </p> */}
    //                   <p className="text-[#000000] mt-3">
    //                     Vice President - Sudha Hospitals Pvt. Ltd.
    //                   </p>
    //                   <p className=" text-gray-600 mt-3 ">
    //                     Dr. S. Pradeepa is known for her clinical brilliance and expertise in fertility-enhancing procedures and advanced reproductive scientific techniques. With a strong focus on patient care and consistently high success rates, she has helped thousands of couples realize their dream of parenthood.
    //                   </p>
    //                   <div className="sm-block hidden">
    //                     <p className="text-md  text-gray-600 mt-3">
    //                       As the Vice President of Sudha Fertility Centre, she has spearheaded the strategic growth of the organization, resulting in the successful establishment of over 40 branches within just five years. Alongside her medical excellence, Dr. Pradeepa is also recognized for her compassionate counselling services that support and guide patients through every stage of their fertility journey.
    //                     </p>
    //                     <h3 className="text-[20px] font-semibold mt-4">Awards & Achievements:</h3>
    //                     <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
    //                       <li>
    //                         Member of the American Society for Reproductive Medicine (ASRM)
    //                       </li>
    //                       <li>Member of ESHRE (European Society of Human Reproduction & Embryology) </li>
    //                       <li>Lifetime Member of ISAR (Indian Society for Assisted Reproduction)</li>
    //                       <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India </li>
    //                       <li>Faculty Member, International Federation of Fertility Societies </li>

    //                     </ul>
    //                   </div>

    //                 </div>
    //                 <div className="w-full lg:w-1/2 mt-5">
    //                   <Image
    //                     src={Pradeepa}
    //                     alt="Pradeepa"
    //                     className="w-full h-auto rounded-xl"
    //                   />
    //                 </div>
    //               </motion.div>
    //               <motion.div className="sm-hidden">
    //                 <p className="text-md  text-gray-600 mt-3">
    //                   As the Vice President of Sudha Fertility Centre, she has spearheaded the strategic growth of the organization, resulting in the successful establishment of over 40 branches within just five years. Alongside her medical excellence, Dr. Pradeepa is also recognized for her compassionate counselling services that support and guide patients through every stage of their fertility journey.
    //                 </p>
    //                 <h3 className="text-[20px] font-semibold mt-4">Awards & Achievements:</h3>
    //                 <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
    //                   <li>
    //                     Member of the American Society for Reproductive Medicine (ASRM)
    //                   </li>
    //                   <li>Member of ESHRE (European Society of Human Reproduction & Embryology) </li>
    //                   <li>Lifetime Member of ISAR (Indian Society for Assisted Reproduction)</li>
    //                   <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India </li>
    //                   <li>Faculty Member, International Federation of Fertility Societies </li>

    //                 </ul>
    //               </motion.div>


    //               {/* <motion.div
    //                 className="flex flex-col-reverse lg:flex-row gap-8 mt-8 "
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <div className="w-full lg:w-1/2">
    //                   <Image
    //                     src={Shanmugavalli}
    //                     alt="Shanmugavalli"
    //                     className="w-full h-auto rounded-xl"
    //                   />
    //                 </div>
    //                 <div className="w-full lg:w-1/2">
                      
    //                   <h4 className="text-[#173366] font-semibold mt-3 ">
    //                     Dr. S. Shanmugavalli
    //                   </h4>
    //                   <p className="text-md text-[#000000] mt-3">
    //                     MBBS, MD, DNB, MNAMS, FMAS
    //                   </p>
    //                   <p className="text-[#000000] mt-3">
    //                     Fellow in Reproductive Medicine
    //                     Fertility Consultant
    //                   </p>
    //                   <p className="text-md text-gray-600 mt-3">
    //                     Dr. S. Shanmugavalli is a Fertility Consultant at Sudha Fertility Centre, bringing a wealth of knowledge and clinical excellence in reproductive medicine. With advanced qualifications including DNB, MNAMS, FMAS, and a Fellowship in Reproductive Medicine, she specializes in treating complex fertility issues with a patient-focused and evidence-based approach. Her dedication to helping couples conceive has made her a trusted expert in the field of infertility and assisted reproduction.
    //                   </p>

    //                 </div>

    //               </motion.div> */}



    //               <hr className="mt-5 border-gray-300" />
    //             </section>
    //           </ScrollMotion>

    //           <ScrollMotion>
    //             <section id="gallery  mt-5">
    //               <h2 className="text-[#173366] text-[24px] mt-5 font-semibold">
    //                 Gallery
    //               </h2>
    //               <motion.div
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <ImageGrid images={Bodinayakanur.gallery} />
    //               </motion.div>

    //               <hr className="mt-4 border-gray-300" />
    //             </section>
    //           </ScrollMotion>

    //           <ScrollMotion>
    //             <section id="location">
    //               <motion.div
    //                 className="flex flex-col lg:flex-row gap-8 mt-5 bg-[#F0F5FF] p-5 rounded-lg"
    //                 initial={{ opacity: 0 }}
    //                 animate={{ opacity: 1 }}
    //                 transition={{ duration: 0.5 }}
    //               >
    //                 <div className="w-full lg:w-1/2  ">
    //                   <h3 className="text-[#173366]   font-semibold">
    //                     Location
    //                   </h3>
    //                   <h4 className=" font-semibold mt-2">
    //                     Book Your Free Appointment
    //                   </h4>
    //                   <p className=" text-gray-600 mt-3">
    //                     Start your parenthood journey.
    //                   </p>

    //                   <div className=" rounded-lg space-y-6 mt-5">
    //                     {/* Phone Section */}
    //                     <div className="flex items-center lg:space-x-4 sm:space-x-1 space-x-1">
    //                       <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full">
    //                         <IoCallOutline className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
    //                       </div>
    //                       <div>
    //                         <p className="font-semibold text-gray-500">
    //                           CALL
    //                         </p>
    //                         <p className="font-semibold">
    //                           <Link href="tel:7670076006">+91 76-7007-6006</Link>
    //                         </p>
    //                       </div>
    //                     </div>

    //                     <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
    //                       <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full flex items-start justify-start shadow-md">
    //                         <CiLocationOn className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
    //                       </div>
    //                       <div>
    //                         <p className="font-semibold text-gray-500">
    //                           ADDRESS
    //                         </p>
    //                         <p className="font-semibold">
    //                           C/o Keerthi Sree Hospital, Bus Stand, R.i Office Rd, south Side Bodinayakanur, Tamil Nadu-625513.
    //                         </p>
    //                         <Link href="" >
    //                           <button className="button-all mt-4  md:mx-0 md:mr-auto flex items-center gap-2">
    //                             <p>Get Directions</p>
    //                             <MdLocationOn size={22} />
    //                           </button>
    //                         </Link>
    //                       </div>
    //                     </div>

    //                     <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
    //                       <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full">
    //                         <AiTwotoneMail className="text-xl text-black size-3 sm:size-3 xl:size-4 lg:size-4" />
    //                       </div>
    //                       <div>
    //                         <p className="font-semibold text-gray-500">
    //                           EMAIL US
    //                         </p>
    //                         <p className="font-semibold">
    //                           <Link href="mailto:care@sudhahopitals.com">care@sudhahospitals.com</Link>
    //                         </p>
    //                       </div>
    //                     </div>

    //                     {/* Social Media Section */}
    //                     {/* <div>
    //                       <div className="flex items-center mb-2">
    //                         <div className="w-[20px] border-t border-2 border-black ml-2"></div>
    //                         <p className="p-1 text-sm sm:text-base md:text-lg font-bold">
    //                           Connect with us:
    //                         </p>
    //                       </div>
    //                       <div className="flex space-x-4">
    //                         <Link
    //                           href="https://www.facebook.com/sudhafertilitycentre"
    //                           target="_blank"
    //                         >
    //                           <FaFacebook className="text-4xl  text-gray-600 bg-white p-2 rounded-full" />
    //                         </Link>
    //                         <Link
    //                           href="https://www.youtube.com/@sudhafertilitycentre"
    //                           target="_blank"
    //                         >
    //                           <FaYoutube className="text-4xl text-gray-600 bg-white p-2 rounded-full" />
    //                         </Link>
    //                         <Link
    //                           href="https://instagram.com/sudhafertilitycentre/"
    //                           target="_blank"
    //                         >
    //                           <FaInstagram className="text-4xl text-gray-600 bg-white p-2 rounded-full" />
    //                         </Link>
    //                       </div>
    //                     </div> */}
    //                   </div>
    //                 </div>
    //                 <div className="w-full lg:w-1/2 ">
    //                   <div className=" rounded-lg shadow-md max-w-sm mx-auto">
    //                     <div className="relative">
    //                       <Image
    //                         src={Hospital}
    //                         alt="Building"
    //                         className="rounded-lg w-full"
    //                         layout="responsive" // Ensures the image is responsive
    //                         width={700} // Set a default width
    //                         height={500} // Set a default height
    //                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 700px" // Define sizes for different breakpoints
    //                       />
    //                       {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-xs flex justify-around items-center p-2 rounded-b-lg">
    //                         <div className="flex items-center space-x-1">
    //                           <FaWalking />
    //                           <span>3D Walk Through</span>
    //                         </div>
    //                         <div className="flex items-center space-x-1">
    //                           <FaMapMarkerAlt />
    //                           <span>Get Direction</span>
    //                         </div>
    //                         <div className="flex items-center space-x-1">
    //                           <FaShareAlt />
    //                           <span>Share</span>
    //                         </div>
    //                       </div> */}
    //                     </div>
    //                   </div>
    //                 </div>
    //               </motion.div>
    //             </section>
    //           </ScrollMotion>
    //         </div>
    //       </div>
    //       <div className="w-full lg:w-1/3">
    //         <div className="max-w-md mx-auto  bg-white shadow-lg rounded-lg sticky top-[145px]">
    //           <AppointmentForm />
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="container mx-auto">
    //     <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
    //       <section>
    //         <h2 className=" font-semibold text-center mb-6">
    //           Frequently Asked Questions
    //         </h2>
    //         {Bodinayakanur.faqs.slice(0, visibleCount).map((faq, index) => (
    //           <FAQItem
    //             key={index}
    //             question={faq.question}
    //             answer={faq.answer}
    //             isOpen={openIndex === index}
    //             toggle={() => toggleFAQ(index)}
    //           />
    //         ))}
    //         {Bodinayakanur.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
    //           <div className="text-center mt-16">
    //             <button
    //               className="button-all mx-auto"
    //               onClick={toggleViewMore} // Updated onClick handler
    //             >
    //               {showAll ? (
    //                 <div className="flex gap-3 items-center">
    //                   View Less <IoMdArrowBack />
    //                 </div>
    //               ) : (
    //                 <div className="flex gap-3 items-center">
    //                   View More <IoMdArrowForward />
    //                 </div>
    //               )}
    //             </button>
    //           </div>
    //         )}
    //       </section>
    //     </div>
    //   </div>

    //   <section>
    //     {/* <div className="container mx-auto">
    //         <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
    //     <MarqueeComponent
    //       items={Bodinayakanur.gallery}
    //       direction="left"
    //       speed="fast"
    //       className="custom-class"
    //     />
    //     <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
    //       <h3 className=" font-semibold text-center ">
    //         Childless Couples to Happy Parents
    //       </h3>
    //       <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
    //     </div>
    //     <MarqueeComponent
    //       items={Bodinayakanur.gallery}
    //       direction="right"
    //       speed="fast"
    //       className="custom-class"
    //     />
    //     {/* </div>
    //       </div> */}
    //   </section>
    // </>
  );
}

export default BodinayakanurPage;
