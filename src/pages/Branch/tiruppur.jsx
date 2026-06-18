"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/Tiruppur/tiruppur_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/Tiruppur/Tiruppur.webp";
import Divyalakshmi from "@/assets/branch/Tiruppur/divya-lakshmi.webp";
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
import { Ambattur, Tiruppur } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function TiruppurPage() {
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
      setVisibleCount(Tiruppur.faqs.length); // Show all FAQs
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


  const tiruppur = [
    {
      quote:
        "Sudha hospitals is a very good perfect place to take treatments.and here the staffs are handling us very friendly so it was very comfortable place to take treatment.Doctors will explain everything clearly and guided me very well.",
      name: "Sangeetha B",
      title: "Patient",
    },
    {
      quote:
        "Treatment is very good and kind hearted staffs and doctors .all are very responsible persons.... I'm sure 100% success..I really recommended sudha hospital",
      name: "sathya sudhagarf15",
      title: "Patient",
    },
    {
      quote:
        "Good fertility centre in Tiruppur.Good consultation.friendly doctor.atmosphere was very good.feeling well.thank uu sudha hospital",
      name: "Kaviya Mani",
      title: "Patient",
    },
    {
      quote:
        "The Great Thank you For The one of the best IVF Centres in Tirupur And Thank you Dr.Mohanapriya mam & A.O Mam explained everything to me in a very clear manner. they was also kind and friendly. All of the staff was great..Wonderful experience with ( Sudha Fertility and women care centre tirupur ⭐⭐⭐⭐⭐) And Once Again Thanks Sudha Team Tirupur.",
      name: "GOKULAKANNAN. G",
      title: "Patient",
    },
    {
      quote:
        "Dr MohanaPriya Madam is the most empathetic doctor I have come across. She intently listens and help in the best possible manner. She has been a pure blessing. The team their is absolutely brilliant. Big shout out to all the patient coordinators and nurses.",
      name: "Sumit Kumar",
      title: "Patient",
    },
    {
      quote:
        "We had a very great experience with sudha fertility centre Tirupur. Special thanks to Dr. Mohana Priya Mam for guiding us through out the journey and motivating us. Also special thanks to Rajlaxmi mam and all the nursing staff for their valuable guidance and support. Thank you team Sudha fertility centre for all the good work and helping us.",
      name: "Shalini Singh",
      title: "Patient",
    },
    {
      quote:
        "We approached sudha Hospital for infertility. This work is very clear and explains one thing to everyone who can see it.dr.mohanapriya madam is leading in tha right way.a new kind of hope in medical laboratories store blood samples in a very simple way.will be at home.thank you sudha Hospital 😍😍😇",
      name: "Ganapathi Pillaiyar",
      title: "Patient",
    },
    {
      quote:
        "Tiruppur sudha hospital is the best fertility hospital in tiruppur.Today we got pregnancy positive here.thank you for your services. Dr.mohanapriya mam good consultation very clear and low cast treatment thank you everyone",
      name: "Mani Mani",
      title: "Patient",
    },
    {
      quote:
        "Tirupur sudha hospital is the best IVF centre in Tiruppur area.Very good consultation DR.Mohanapriya mam.peaceful atmosphere very caring staffs.Clear treatment details.So be thankful for their service 😊",
      name: "Shakthi Sha",
      title: "Patient",
    },
    {
      quote:
        "I visited so many fertility centers for 3 years, I couldn't conceive tried IUI 2 times then visited Sudha Fertility Centre Tiruppur. The consultant and Staff Nurse are to be kind and explained all the protocols and procedures.The hospital ambiance was neat and clean. I would like to suggest this as one of the best fertility centers in Tiruppur ☺️",
      name: "kirthiga vijaya",
      title: "Patient",
    },
    {
      quote:
        "This hospital only having fully advanced IVF lab in Tiruppur district. All staffs and doctor was very friendly manner. Counsellor explanation was very good and she give more tips to do and not to do.",
      name: "Ramya ramya",
      title: "Patient",
    },
    {
      quote:
        "Sudha Hospitals one of the finest located in Tirupur prime area is easily accessible by all ways . Tirupur Branch headed with Ao. Mam and Doctor  Mohana Priya Mam very well understands and takes care about each person in fullfilling their much needed requirements. The staffs are also very Friendly and maintain a hygiene atmosphere. They too have laboratory for Tests and scan which are done at an affordable price . This Place can be prominently referred to any person for their wellness.",
      name: "visakan vijay",
      title: "Patient",
    },
    {
      quote:
        "Tiruppur sudha hospital is one of the best fertility hospital in Tiruppur city.Dr.Mohanapriya mam very good and kind consultation.staff response is very good.Treatment is totally satisfied.so many patients got  positive results here.",
      name: "Amutha Muthu",
      title: "Patient",
    },
    {
      quote:
        "Our overall experience is good. Dr. Mohana Priya mam have listened to me without judgment and explained things in a way that made sense. Mam's personalized approach and genuine care made a huge difference.I felt like I was in good hands. The staff was super friendly,welcoming. Nursing Staff is excellent, dedicated and highly professional. Counselling section by admin mam was eye opener and the place had a great vibe. I can't thank you enough for the excellent care you have provided, I really appreciate how reliable you are.The environment is clean and tidy.facilites like laboratory and scan are available inside the primises Big thanks to Dr. Mohana Priya mam and the awesome team at Sudha  Hospital!",
      name: "Lekha",
      title: "Patient",
    },
    {
      quote:
        "Best fertility treatment in Tiruppur. Low cast treatment. Good consultataion.we would be thankful for best and right treatment advice for us. .love the way of approach. Thankyou",
      name: "Naga Cutes",
      title: "Patient",
    },
    {
      quote:
        "Today we are visiting sudha fertility centre through free camp.Very useful for us .free scan free semen analysis free consultation.Dr.mohanapriya mam good consultation 🥰.staffs behave awesome  Wonderful experience for us .we saw today many positive patients it's give hope for us",
      name: "Nagasarathi Nagasarathi",
      title: "Patient",
    },
    {
      quote:
        "First of all I like to tell that really I luv sudha fertility hospital . And I thank to doctor mohanapriiya mam she is a god for us . We visited so many hospital but we are fail . Finally we became parenthood . Again thank you cost is very affordable compare to any other hospital .thank to Ao mam and all staffs who guided us with love 🙏🙏🙏🙏🙏🎊🎊🎊",
      name: "ANURAG PATHAK",
      title: "Patient",
    },
    {
      quote:
        "Hi all. We are a couple of Chandrasekar krishnaveni. I would like to thank this Sudha hospital. We followed our treatment in another hospital but accidently they suggested Dr.Mohana priya mam for our further treatment. After came to Priya mam we feel more positive and we got more confidence through his advice. We tried baby for last 3 years but it doesn't work and also my wife has a irregular periods,but in sudha hospital we tried 3 months normal treatment for Egg growth and follicular study, now we are pregnant🤰. Hospital staff also so kind and very very special thanks to Dr. Mohana priya Mam. NOTE:We did not tried IUI and IVF.",
      name: "CHANDRU K",
      title: "Patient",
    },
    {
      quote:
        "I'm Dhanapal we had an excellent experience sudha fertility centre tiruppur  Nursing staff and even non medical staffs are very humble and i appreciate their efforts telling us everthing in detail. The ambience was very much fresh and clean and gave us positive vibes.The organisation and staffs working there treated patients with respect and dignity . I would highly recommmend sundha gertility centre tiruppur ir for further treatments",
      name: "Dhanapal Dhanapal",
      title: "Patient",
    },
    {
      quote:
        "I am Mr.Vignesh, me and my wife was taking infertility treatment in sudha Fertility center, tirupur. Very knowledgeable Doctor and staffs are working in that hospital. They clarification all my doubt regarding my treatment. Very clean and good infrastructure. They having full equiped IVF lab setup.",
      name: "Vignesh Sadhasivam",
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
                      VANAKKAM Tiruppur
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Tiruppur</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Guiding you towards parenthood with trusted fertility solutions.
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
          <InfiniteMovingCardsDemo reviews={tiruppur} />
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

                      <p className="text-gray-600 mt-3">
                        In 2022, Sudha Fertility Centre extended its expert fertility services to Tiruppur, offering personalised care and compassionate support to every patient. Known as the best fertility hospital in Tiruppur, we are dedicated to helping you achieve your dream of parenthood. Our experienced team is here to guide and support you every step of the way.
                      </p>
                      <h3 className="text-[#173366] mt-3 font-semibold">
                        World-class Fertility Treatments in Tiruppur:
                      </h3>
                      <p className="text-gray-600 mt-3">
                        At Sudha Fertility Centre, we deliver world-class fertility treatments in Tiruppur, offering compassionate care and personalised solutions.
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
                    <p className="text-gray-600 mt-3">
                      Our highly experienced fertility specialists use the latest medical advancements to address infertility challenges, ensuring you are supported every step of your parenthood journey. We are committed to turning your dreams of starting or growing your family into a beautiful reality.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-gray-600">
                      As the best IVF centre in Tiruppur, Sudha Fertility Centre specialises in the following treatments,
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
                    <p className="text-gray-600 mt-3">
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Tiruppur.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Tiruppur?
                    </h3>
                    <p className="text-gray-600 mt-3">
                      The journey to parenthood can be a challenging one, but with our dedicated fertility specialists, we strive to bring joy and fulfilment. Our centre has become a place where families find solutions, strength, and a community that turns their longing into the beautiful gift of life.
                    </p>
                    <p className="text-gray-600 mt-3">
                      At Sudha Fertility Centre in Tiruppur, every hopeful couple who steps into our centre is met with heartfelt care and commitment. We are deeply moved each time we see dreams come to life, whether it's young newlyweds starting a new chapter or older couples who never gave up on their hope for a child.
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
                      <p className="text-gray-600 mt-3">
                        Sudha Fertility Centre stands out as the best fertility centre dedicated to turning your dream of becoming a parent into reality. Our world-class treatments, grounded in scientific research, ensure an exceptional journey to parenthood.
                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>Personalised Treatment Plans </li>
                        <li>Comprehensive Diagnostic Services </li>
                        <li>24/7 Functional Labs and Pharmacy </li>
                        <li>State-of-the-art Operation Theatres</li>
                        <li>Dedicated Clinicians and Support Staff </li>
                        <li>Cost-efficient Procedures </li>
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
                        in Tiruppur
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Tiruppur
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
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={Divyalakshmi}
                        alt="Divyalakshmi"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold">
                        Our Fertility Specialist in Tiruppur
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. Divyalakshmi
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS., MS(OG)
                      </p>
                      <p className="text-[#000000] mt-3">
                        Fertility Consultant / Gynaecologist

                      </p>
                      <p className="text-gray-600 mt-3">
                        Dr. Divyalakshmi is a committed Fertility Consultant and Gynaecologist at Sudha Fertility Centre, with a focus on diagnosing and treating fertility concerns in women. She brings clinical precision and a compassionate approach to every case, ensuring personalized care for each couple. With a strong background in Obstetrics and Gynaecology, Dr. Divyalakshmi is dedicated to helping patients achieve successful outcomes on their fertility journey.
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
                    <ImageGrid images={Tiruppur.gallery} />
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
                              97/54, JG Nagar, 2nd Street, Maruthachalapuram Main Road, Tiruppur, Tamil Nadu - 641602.
                            </p>
                            <Link href="https://maps.app.goo.gl/PNEyJ7JycaDXbXMQ8">
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
            {Tiruppur.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Tiruppur.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Tiruppur.gallery}
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
          items={Tiruppur.gallery}
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

export default TiruppurPage;
