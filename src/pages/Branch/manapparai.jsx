"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/madurai/madurai_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/dummy-location.webp";
import jeevitha from "@/assets/branch/madurai/jeevitha.webp";
import karthiyayini from "@/assets/branch/madurai/karthiyayini.webp";
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
import { Ambattur, Manapparai } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);

function ManapparaiPage() {
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
      setVisibleCount(Manapparai.faqs.length); // Show all FAQs
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

  const MaduraiReview = [
    {
      quote:
        "Very good hospital.. Doctors easy to approach our doubts.. clarify all doubts like family member..Ms.bharathi mam explain process and procedure properly and like a family member...staff and facilities are explain and doing very good service.. Thanks you sudha hospital..",
      name: "archana srinivasan",
      title: "Patient",
    },
    {
      quote:
        "Doctors are very easy to approach and they are always ready to clarify our doubts. Each and every staffs are explaining the treatment process before doing every procedure. So comfortable with their approach. Thank you sudha fertility team for being with us like a family member.",
      name: "Nalini Arunkumar",
      title: "Patient",
    },
    {
      quote:
        "Best IVF center in Tamilnadu & specially in Madurai Center & Multi Specialty is very good hospital. All Staffs & Doctors is Very Nice Professional Duty . All the best for Sudha Hospital Doctors & Staffs & House Keeper for best service to satisfaction IVF patients & Customers. we wish the Grateful success. Thanks",
      name: "Kanna Dhasan",
      title: "Patient",
    },
    {
      quote:
        "I already considered one hosp .I was married before 2 years but couldn't get a baby.then I treatment right now this hospital I'm pregnant. I'm feel happy my husband then my families are fully happy.thanks again sudha hospital.",
      name: "Ajees Jamani",
      title: "Patient",
    },
    {
      quote:
        "Nice experience doctors and nurses are very motivating shared lot of good things and listen everything patiently",
      name: "S D",
      title: "Patient",
    },
    {
      quote:
        "I am Uma from Sivaganga since 6 years I didn't get pregnant .one of my colleagues told  me to consult Sudha fertility centre in Madurai.so we are visiting to this hospital for lots of hope by the grace of God..We believe everything is going to fine in my pregnancy journey with Help of God",
      name: "Jemi Margaret",
      title: "Patient",
    },
    {
      quote:
        "Such a friendly doctors and staffs. We just visit hospital without any hesitation and we can ask and clarify our doubts whenever we need.",
      name: "Pandiya Rajan",
      title: "Patient",
    },
    {
      quote:
        "Few week before I'm visit sudha fertility hospital at madurai ,really Amazing service, Good staffs, neat and clean maintenance, friendly doctors,must recommend Sudha fertility hospital madurai 💯",
      name: "Ancyaruldass Ancy",
      title: "Patient",
    },
    {
      quote:
        "Heartly Thanks  to my favourite Dr.Jeevitha mam ,Dr.Karthiyayini mam & nurse sisters  for your wonderful result & your supportive positive words of my pregnancy time ....",
      name: "Gopinath Sathya",
      title: "Patient",
    },
    {
      quote:
        "Such a wonderful explanation by Dr. Jeevitha mam. Staff are also explaining the treatment process very well. Hospital environment is also very neat and clean.",
      name: "m siva",
      title: "Patient",
    },
    {
      quote:
        "I came to sudha hospital for infertility treatment... I got married 13yrs back...  Excellent service were given to me.  all staffs and doctors are very kind. I got successfully IVF treatment in first attempt itself.They are taking care of patients like a family members. Each and everyone is clarifying our doubts and explaining the procedures in step by step manner.",
      name: "revathi revathish",
      title: "Patient",
    },
    {
      quote:
        "After so many years of treatment  I came here from beginning the treatment procedure was so systematic which gave a lot of hope and I got positive in first attempt. Thanks to doctors and staffs .",
      name: "janu devi",
      title: "Patient",
    },
    {
      quote: `First I thank God for my two cute girl babies...
  I like to thank Doctors Jeevitha and Karthiyani mam.. even Sunday they worked for me and gave me two cute cuties in our family hands.. after long years am getting this happiness..so myself and my wife felt very happy..
  I wish to thank all in this hospital.
  While entering the hospital two watchmen behave like their family...
  In Reception their approach is good and they cleanly explained what we have to do..
  Clean and neat environment they are giving trust for the people who come here with problems...
  HR people explaining and giving awesome support..
  Doctors Pradeepa, Jeevitha and Karthiyani mam had a friendly and care approach to patients and guided very well. Requesting all follow their instructions and put tablets as they say...
  Buy medicine in the hospital itself because they know how the patient's problem is resolved.. outside medicine is comparatively less than the hospital..but we don't know the molecules..so for great success buy medicine in the hospital.
  Next I would like to thank the Lab technician and medical sister..
  All Nurses are great and supportive manner..
  While we admit in hospital way of approach and way of behaviour is awesome..
  I like to thank NICU nurses. Because after our child birth they are carrying thier own child..our cuties feel comfort..
  I thank the maintenance people for them only we all feel the good environment in the hospital..
  Once again Requesting all follow their instructions as they says and feel happy in this world with your cute chubbies..`,
      name: "balaji V",
      title: "Patient",
    },
    {
      quote:
        "They are providing very good treatment. Doctors are so kind and they are clarifying our doubts very clearly. Staff are taking care of us very well and treating us like their own brother and sister. Thank you all for your postive support...☺️",
      name: "MUPPI MANI",
      title: "Patient",
    },
    {
      quote: `Hai
  Madurai sudha fertility centre madurai we consulted with doctor here who gave us hope towards treatment here .we are happy with that service provided by nurese .best fertility centre in Madurai`,
      name: "Jeyasharmi",
      title: "Patient",
    },
    {
      quote:
        "Satisfaction is not a enough word to convey opinion about the doctors and staff member in sudha hospital madurai. Very very kind approach. Their treatment process was very good and they just want to provide positive results for patients after 2 yrs of treatment process now we have our angel in our hand🥰. ",
      name: "Taj nainar.",
      title: "Patient",
    },
    {
      quote:
        "I would like to thank the Doctors, Nursing Staff and the Management of Sudha Hospital, Madurai for making us the parents of two daughters. I would also, like to add that the effort put forward by the sudha hospital team during initial assessment period, treatment phase and during delivery were intangible. I specially thank the Doctors Dr. Jeevitha and Dr. Karthiyayini for their in-depth analysis on problems and friendly guidance to overcome the problems. Friendly approach of nursing staff and the supporting staff needs a special mention here. A special thank and appreciation for NICU nursing staff for their kind approach in taking care of the babies. In overall the staff of Sudha Hospital, Madurai exhibited good care and affection towards us. I would recommend others to get consulted here, as in entire treatment process they follow a high standard scientific approach and care us like a family member.",
      name: "RAJASEKAR A",
      title: "Patient",
    },
    {
      quote: `We inspired from Internet and we engaged for IVF treatment
  And experienced good approach  and humbleness
  
  Thanks for sudha hospital team`,
      name: "Mahendiran Kanagaraj",
      title: "Patient",
    },
    {
      quote:
        "Sudha fertility centre has given a new life after our 15 years of marriage life. We had gone to so many hospital but finally sudha hospital has given that lucky Day today we got positive result in pregnancy by IVF thanks to all doctors, nurshes and staffs",
      name: "Karthick Kamatchi",
      title: "Patient",
    },
    {
      quote:
        "Most best Fertility centre in Madurai. Staff are very polite and kindly attend the patient. Counselling is the best. Explanation and example are attact the people. Thankyou once again for your kindness and way of attend the patient.",
      name: "Aravind M",
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
                      VANAKKAM Manapparai
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In{" "}
                      <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Manapparai</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Turning Hope into Happiness with Expert Fertility Care
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
          <InfiniteMovingCardsDemo reviews={MaduraiReview} />
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
                    <div className="w-full lg:w-1/2 mt-5" >
                      <h3 className="text-[#173366] font-semibold">
                        About
                      </h3>

                      <p className=" mt-3  text-gray-600">
                        Sudha Fertility Centre in Manapparai is a centre of excellence dedicated to helping couples overcome infertility with confidence. Recognised as the best fertility centre in Manapparai, our branch delivers high-quality, ethical fertility care backed by a legacy of success and compassion.
                      </p>
                      <p className=" mt-3  text-gray-600">
                        Inaugurated in 2025, our Manapparai facility was established to serve families in and around the region. Since its launch, it has become a trusted name for couples seeking advanced treatments and empathetic support. Our expert team ensures that every patient receives personalised care and support.
                      </p>
                      <h3 className="mt-3 text-[#173366] font-semibold">
                        Advanced Fertility Treatments in Manapparai
                      </h3>
                      <p className="mt-3 text-gray-600">
                        At Sudha Fertility Centre in Manapparai, we offer a full spectrum of fertility treatments tailored to each couple’s unique needs. From initial diagnosis to advanced assisted reproductive techniques, every step is supported by modern technology and a team of dedicated experts.
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
                      Recognized as the best IVF hospital in Manapparai, Sudha Fertility Centre provides advanced fertility treatments with a high success rate and specializes in assisted reproductive technologies such as,
                    </p>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>Normal Delivery - Natural Labour For Mothers</li>
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
                    <p className=" text-gray-600 mt-3">
                      and other gynae-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS, as well as other fertility preservation processes are performed by the best fertility doctors in Manapparai.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Hospital in Manapparai?
                    </h3>
                    <p className="text-gray-600 mt-3">
                      With a reputation for clinical excellence and compassionate care, Sudha Fertility Centre is widely regarded as the best IVF centre in Manapparai. What sets us apart is our unwavering commitment to transparency, affordability, and customised treatment for every couple.
                    </p>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2">Advanced Reproductive Protocols:

                      </h4>
                        Treatments designed based on international fertility guidelines and constant medical updates.
                      </li>

                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2">Clear Communication:

                      </h4>
                        Every procedure, risk, cost, and timeline is explained honestly.
                      </li>


                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2"> High-End Lab Infrastructure:
                      </h4>
                        Fully equipped to handle embryo freezing, genetic testing, and advanced ART techniques.
                      </li>

                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2"> Expert Doctors:
                      </h4>
                        Led by highly qualified reproductive specialists, embryologists, and trained support staff.
                      </li>


                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2">  Minimal Waiting Time:
                      </h4>
                        Fast-track appointments and cycle planning ensure timely care.
                      </li>

                      <li className=" pt-2 leading-[1.6]"> <h4 className=" text-black font-semibold mt-3 mb-2"> Compassionate Guidance:
                      </h4>
                        Mental and emotional wellness support throughout your fertility journey.
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
                        Our centre offers a seamless blend of medical excellence and comfort, making it one of the best fertility hospitals in Manapparai. We prioritise safety, hygiene, and privacy to create a stress-free environment for our patients.
                      </p>
                      <div className="flex flex-row mt-3 ">
                        <ul className="text-md text-gray-600 list-disc mt-2 pl-4 leading-[2.2]">
                          <li>
                            Dedicated Fertility Screening Units
                          </li>
                          <li>IVF Lab with Advanced Quality Control  </li>
                          <li>Embryo Cryopreservation & Storage Units </li>
                          <li>
                            Modular Operation Theatres
                          </li>
                          <li>Full-Time Fertility Nurses & Coordinators  </li>
                          <li>
                            On-site Pharmacy Stocked with Fertility Medicines
                          </li>
                          <li>Financial Guidance & EMI Options  </li>
                          <li>24/7 Monitoring & Patient Support  </li>
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
                    <div className="w-full lg:w-1/2">
                      <h3 className="text-[#173366]  font-semibold leading-[1.4]">
                        Fertility Specialists <br />
                        in Manapparai
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Manapparai
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
                    <ImageGrid images={Manapparai.gallery} />
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
                              C/o Ieshwaryam Hospital, 220/05 Puthunantham Road, Manapparai, Tamil Nadu 621306.
                            </p>
                            <Link href="https://maps.app.goo.gl/2S83qpF2nRqjFg4c7">
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
            <h2 className="font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Manapparai.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Manapparai.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Manapparai.gallery}
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
          items={Manapparai.gallery}
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

export default ManapparaiPage;
