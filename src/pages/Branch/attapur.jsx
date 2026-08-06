"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/attapur/attapur_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Geethanjali from "@/assets/branch/attapur/Geethanjali.webp";
import Hospital from "@/assets/branch/attapur/frontarea.webp";
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import ImageGrid from "@/components/imagegrid";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";

import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import { Ambattur, Attapur } from "@/middleware/imagesroute";
import AppointmentForm from "@/components/appointmentForm";
import Navbar from "@/components/branchNav";
import ImageSlider from "@/components/imageSlider";
import { MarqueeComponent } from "@/components/marqueeSlider";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";
import { attapurVideos } from "@/middleware/videosRoute";

function AttapurPage() {
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
      setVisibleCount(Attapur.faqs.length); // Show all FAQs
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



  const AttapurReviews = [
    {
      quote:
        `I recently visited in sudha fertility centre attapur were very glad to hear that we got positive results.this is one of
  the best fertility centre in Hyderabad Thak you Dr Geethanjali mam and all staff.`,
      name: "Chaitanya Puttola",
      title: "Patient",
    },
    {
      quote:
        `I recently visited Sudha Fertility Center in Attapur, Hyderabad, and I am thrilled to share my outstanding experience.
  The best part? I got a positive result on my very first attempt! The center is equipped with state-of-the-art technology
  and the staff is incredibly supportive and professional. Dr. Geethajali Madam is an exceptional infertility specialist
  who combines expertise with a compassionate approach. She made us feel comfortable from the very beginning, and her
  knowledge gave us great confidence in the treatment plan she recommended. The entire team, including Sister Sreedevi and
  Sathish from the administrative staff, were attentive and always ready to answer all my questions.
  The center itself is clean and welcoming, which significantly eased the stress of fertility treatments. The dedication
  of the staff to providing personalized care and their willingness to go the extra mile made a huge difference in my
  journey.
  I wholeheartedly recommend Sudha Fertility Center to anyone seeking fertility treatments. Their combination of advanced
  technology, expert care, and a truly supportive environment is truly remarkable.`,
      name: "sreekanth reddy",
      title: "Patient",
    },
    {
      quote:
        `We found this fertility center in Google and we went to meet mrs Geethanjali Madam she is very polite and kind with
  patient.
  We had sad past previously and we explained everything to her so patiently she listened our story and she suggested few
  tests for both me and wife...end of the day visit we found pregnancy is positive which we can't believe..
  Big thanks to Geethanjali Madam for her support.
  And also I would like to thank sridevi who is very helpful throughout the process and her guidance was helpful.`,
      name: "Banka Sumalatha",
      title: "Patient",
    },
    {
      quote:
        `My Sincere Thanks to Dr Geetanjali Mam, We under taking treatment in Sudha hospital Attapur branch , we got positive
  result , This is the one of best fertility hospital in hyderabad , we recommend to all, staff are so good they are treat
  like home.`,
      name: "Salla Pushpalatha",
      title: "Patient",
    },
    {
      quote:
        `I am very happy to inform that I got positive results in sudha fertility center since trying 3 years tq so much dr
  Geetanjali mam and staff very helpful
  Thanku so much`,
      name: "shorab rocks",
      title: "Patient",
    },
    {
      quote:
        `After 7 years of marriage life my wife got positive at sudha fertility Dr Geetanjali mam and doctor Akhila Ayyagari is
  incredibly knowledgeable and took the time to answer all my questions. “Thank you so much for your kind words! Providing
  knowledgeable care and taking the time to address all my question.The care was outstanding all the way from start to
  finish. The support staff was very professional, pleasant and friendly especially Mr Satish and Sridevi,Would like to
  recommend sudha fertility those who are really wants to be blessed Thank you Sudha Fertility for making my dream come
  true😊`,
      name: "pradeep t",
      title: "Patient",
    },
    {
      quote:
        `This is one of the best fertility centre in Hyderabad. Thanku so much Dr geethanjali madam I never expect this much of
  happiness in my life thanks you so much mam and Sudha fertility centre and all staff member ❤️`,
      name: "Bindu jatoth",
      title: "Patient",
    },
    {
      quote:
        `🙂 Thanks to Dr Geethanjali Mam , We are under taking treatment in sudha fertility hospital Attapur branch , we got
  postive results in short period of time , Special thanks to Dr Geethanjali Mam, she has given the positive hope to us ,
  now we are happy , Thanks to sudha fertility`,
      name: "Bandakadi Narsimha",
      title: "Patient",
    },
    {
      quote:
        `We are very happy, we have come to sudha fertility hospital attapur. Got positive result in the first attempt itself.
  Thank you so much Geetanjali Madam.
  
  Regards,
  Prasanthi.`,
      name: "Gp KumaR",
      title: "Patient",
    },
    {
      quote:
        `This is the best fertility hospital in hyderabad, Thanks to Dr Geethanjalai Mam, We are under taking the treatment
  here, now we got positive result. 😇🙂`,
      name: "Bhavesh kumar",
      title: "Patient",
    },
    {
      quote:
        `I am very happy 😊😊my wife got pregnancy positive in sudha fertility centre after taking the treatment.we both are so
  happy after listening the result and achieved our dreams of becoming parents.thank u Dr geethajali mam.
  Geethajali mam took the time to throuhly explain our options and answer all of our questions,no matter how big or
  small.her depth
  Of knowledge in the field of fertility treatment is truly impressive.we Both from bottom of our heart's are very
  thankful and entire nursing staff and reception staff to help me at any time and thanks to all house keeping team to al
  as they are very caring in`,
      name: "Akhil Bhatra",
      title: "Patient",
    },
    {
      quote:
        `We are taking under treatment from sudha fertility centre- Attapure branch. We got pregnancy postive result.I am so
  happy special Thanks to Dr Geethanjali Mam,doctor guidence are good staff's are caring.This is best fertility hospital,
  Thanks to God and Dr Geethanjali Mam .🙏`,
      name: "Manasa",
      title: "Patient",
    },
    {
      quote:
        `We are undertaking treatment at the sudha fertility hospital attapur branch , we got pregnancy positive results now ,
  special thanks to Dr Geethanjali Mam`,
      name: "mohd khamaruddin",
      title: "Patient",
    },
    {
      quote:
        `We are taking under treatment from sudha fertility center attapur branch we got positive results I am so happy special
  thanks to doctor geetanjali madam this is best fertility center once again thank you so much Dr geetanjali madam`,
      name: "SONAM DHRUW",
      title: "Patient",
    },
    {
      quote:
        `Dr Geetanjali madam is very good doctor who thoroughtlyexplains alla the steps and patiently answers all queries sudha
  fertility center in attapur consists of a three members team alla of professionally and friendly tq sudha fertility
  center attapur.`,
      name: "Mohd Hussain",
      title: "Patient",
    },
    {
      quote:
        `Happy to inform , we are taking treatment under sudha fertility hospital Attapur branch, now I am getting postive
  result, Pregnancy postive, I heartfully thanks to Dr Geethanjali Mam. We are recommend for all patients to Sudha
  hospital, This is one of the best fertility hospital. Staff's are caring and treated like home.`,
      name: "Boya Sailaja",
      title: "Patient",
    },
    {
      quote:
        `We are Happy to inform you that , We are taking treatment under sudha fertility hospital- Attapur branch, now I am
  getting positive reasulte,Pregancy positive, I specially thanks to Dr Geethanjali Mam .Doctor was so friendly and had
  great result in such a short period of time.We recommended for all patients here. Thery are treating like home😊`,
      name: "Krishna Sharma",
      title: "Patient",
    },
    {
      quote:
        `We are very happy so far have visited many hospitals but we are not happy
  After sudha fertility hospitals we are very happy now we are very good ma'am thank you very much sisters and specially
  Dr geetanjali mam. All very very happy ma'am`,
      name: "Mohammed Sareem",
      title: "Patient",
    },
    {
      quote:
        `We are trying for children but no results now we are taking under treatment for sudha fertility centre attapur branch
  after met dr geetanjali mam we get positive hope.doctor are good guidence are good and staff are caring.this best
  fertility centre in attapur hyderabad.suggested for all`,
      name: "Rajashekhar Shekhar",
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
                      Swagatham ATTAPUR
                    </h2>
                    <h1 className=" font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Attapur</span>
                    </h1>
                    <p className=" mt-4 text-[22px] leading-[1.6]">

                      Making parenthood journey as joyful as it should be.
                    </p>
                    <Button styleClass="mt-6" text="Connect with WhatsApp" link="https://wa.me/917670076006?text=Hi,%20Can%20I%20get%20more%20info%20on%20this?" icon={<IoMdArrowForward />} />
                  </motion.div>

                  {/* Right Content - Form */}
                  <BranchForm />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute -bottom-80 lg:-bottom-64 w-full ">
          <InfiniteMovingCardsDemo reviews={AttapurReviews} />
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

                      <p className=" mt-3 text-gray-600">
                        Sudha Fertility Centre is recognised as the best
                        fertility hospital in Attapur as we provide all
                        infertility treatment under one roof. Our fertility
                        experts provide exceptional fertility treatments with no
                        compromise in care and quality. We assist couples facing
                        fertility challenges achieve their parenting dreams.
                      </p>
                      <h3 className="text-[#173366] mt-3
                       font-semibold">
                        Best Fertility Treatments in Attapur:
                      </h3>
                      <p className="mt-3  text-gray-600">
                        Equipped with the finest fertility doctors in India,
                        Sudha Fertility Centre is proud to be recognized as the
                        best fertility hospital in India. With the help of
                        modern technologies and the best fertility treatments,
                        we aid couples who visit us with hope and help them
                        achieve their dream of parenthood.
                      </p>
                      <p className="mt-3 mb-3 text-gray-600 hidden sm-block ">
                        As the best IVF centre in Attapur, Sudha Fertility Centre
                        specialises in the following treatments,
                      </p>
                      <ul className="  text-gray-600 list-disc pl-4 hidden leading-[2.2] sm-block">
                        <li>Normal Delivery - Natural Labour For Mothers</li>
                        <li>IVF - In vitro fertilization</li>
                        <li>IUI - Intrauterine insemination </li>
                        <li>ICSI - Intracytoplasmic Sperm Injection</li>
                        <li>
                          IMSI - Intracytoplasmic morphologically selected sperm
                          injection
                        </li>
                        <li>TESE - Testicular sperm extraction</li>
                        <li>PESA - Percutaneous Epididymal Sperm Aspiration </li>
                        <li>LAH - Laser Assited Hatching </li>
                        <li>
                          Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood
                          Cell Derivative)
                        </li>
                        <li>FET - Frozen Embryo Transfer</li>
                        <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                      </ul>
                      <p className="mt-3 text-gray-600 sm-block hidden">
                        and other gynaec-related surgeries like, C-section,
                        Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst
                        and fluid aspiration, Myomectomy, ERA, OBS as well as
                        other fertility preservation processes are performed by
                        the best fertility doctors in Attapur.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
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
                    <p className="mt-3 mb-3 text-gray-600 sm-hidden">
                      As the best IVF centre in Attapur, Sudha Fertility Centre
                      specialises in the following treatments,
                    </p>
                    <ul className="  text-gray-600 list-disc pl-4 leading-[2.2] sm-hidden">
                      <li>Normal Delivery - Natural Labour For Mothers</li>
                      <li>IVF - In vitro fertilization</li>
                      <li>IUI - Intrauterine insemination </li>
                      <li>ICSI - Intracytoplasmic Sperm Injection</li>
                      <li>
                        IMSI - Intracytoplasmic morphologically selected sperm
                        injection
                      </li>
                      <li>TESE - Testicular sperm extraction</li>
                      <li>PESA - Percutaneous Epididymal Sperm Aspiration </li>
                      <li>LAH - Laser Assited Hatching </li>
                      <li>
                        Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood
                        Cell Derivative)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                    </ul>
                    <p className="mt-3 text-gray-600 sm-hidden">
                      and other gynaec-related surgeries like, C-section,
                      Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst
                      and fluid aspiration, Myomectomy, ERA, OBS as well as
                      other fertility preservation processes are performed by
                      the best fertility doctors in Attapur.
                    </p>
                    <h3 className=" text-[#173366]  font-semibold mt-5">
                      Why Sudha Fertility Centre is the Best Fertility Centre in
                      Attapur?
                    </h3>
                    <p className="text-gray-600 mt-3">
                      At Sudha Fertility Centre in Attapur, we believe every
                      family deserves happiness and a chance to grow. Our
                      practical fertility solutions and expert care turn dreams
                      into cherished realities for countless couples. Being
                      well-equipped with highly skilled fertility doctors, we
                      ensure that we provide the best treatments.
                    </p>
                    <p className="text-gray-600 mt-3">
                      As the best IVF centre in Attapur, we understand the
                      emotion of longing and waiting. We are dedicated to
                      offering high-quality fertility treatments with highly
                      skilled IVF doctors and fertility specialists. We ensure
                      you get the best experience in every step of your
                      parenthood journey.
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
                        As the leading fertility hospital in India, Sudha
                        Fertility Centre in Attapur is equipped with a team of
                        expert fertility doctors. Our compassionate care,
                        cutting-edge technology, and tailored fertility
                        treatments create a personalized approach that gives
                        every couple the happiness of parenthood they’ve been
                        longing for.
                      </p>
                      <h3 className="text-[#173366] font-semibold mt-5">
                        World-class equipment, fully functioning{" "}
                      </h3>
                      <ul className=" text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
                        <li>Operation Theatre </li>
                        <li>Daycare wards</li>
                        <li>Labour Ward</li>
                        <li>Round the clock Pharmacy</li>
                        <li>State-of-the-art Technologies</li>
                        <li>Full-fledged diagnostics department</li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2">
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
                      <h3 className="mb-3 text-[#173366] font-semibold leading-[1.4]">
                        Fertility Specialists <br />
                        in Attapur
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-2 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Attapur
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
                        src={Geethanjali}
                        alt="Geethanjali"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold mt-2">
                        Our Fertility Specialist in Attapur
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3 ">
                        Dr. Geetanjali Bai
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS., MS(OBG)
                      </p>
                      <p className="text-[#000000] mt-3">
                        Fertility Consultant & OB /GYN
                      </p>
                      <p className="text-md text-gray-600 mt-3">
                        Dr. Geethanjali Bai, MBBS, MS in Obstetrics and
                        Gynecology (OSM), serves as a Fertility Consultant &
                        OB-GYN at Sudha Hospitals Pvt. Ltd, Attapur Branch. With
                        1.3 years of expertise in assisted reproductive
                        technologies, she has successfully performed numerous
                        ICSI, IUI, and IVF procedures. Dr. Geethanjali Bai’s
                        unwavering dedication to patient care and her
                        exceptional skills make her an invaluable asset to Sudha
                        Fertility Centre.
                      </p>
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
                    <ImageGrid images={Attapur.gallery} />
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
                            <CiLocationOn className="text-xl text-black size-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-500 uppercase">
                              Address
                            </p>
                            <p className="font-semibold">
                              Pillar Number 147, Zoi Hospitals Campus, Rambagh Colony, Attapur, Hyderabad, Telangana - 500048.
                            </p>
                            <Link href="https://maps.app.goo.gl/wXdY12ENv8XuQNsKA" >
                              <button className="button-all mt-4  md:mx-0 md:mr-auto flex items-center gap-2">
                                <p>Get Directions</p>
                                <MdLocationOn size={22} />
                              </button>
                            </Link>
                          </div>
                        </div>

                        <div className="flex items-start lg:space-x-4 sm:space-x-1 space-x-1">
                          <div className="bg-white xl:p-2 lg:p-2 p-1 rounded-full flex items-start justify-start shadow-md">
                            <AiTwotoneMail className="text-xl text-black size-4" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-500">
                              EMAIL US
                            </p>
                            <p className=" font-semibold">
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
                              {" "}
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
            {Attapur.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Attapur.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Attapur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}

          <GallerySlider items={attapurVideos} />

        <div className="flex justify-center gap-4 flex-wrap items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Attapur.gallery}
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

export default AttapurPage;
