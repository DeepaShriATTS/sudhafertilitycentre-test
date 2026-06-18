"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/dindigul/dindigul_about.webp";
import { motion } from "framer-motion";
import Hospital from "@/assets/branch/dindigul/Dindigul.webp";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Nadiya from "@/assets/branch/dindigul/Nadiya.webp";
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
import { Ambattur, Dindigul } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function DindigulPage() {
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
      setVisibleCount(Dindigul.faqs.length); // Show all FAQs
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


  const DindigulReview = [
    {
      quote:
        `Sudha fertility centre dindigul
  Dr Nadiya mam gave us very clear treatment explanation.Each and every staffs is friendly and gave a homely atmosphere
  thank you doctor`,
      name: "Mmuthu Samy",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre dindigul
  Care and service provided by managment and nurse gave us hope and good experience. We are happy with the service
  herevand doctor consultation is very good. Best fertility centre in dindigul area`,
      name: "Chinna Chinna",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre dindigul
  Hai
  Dr.nadiya man gave ud very clear treatment explanation .each and every staffs friendly and gave us a homely atmosphere.
  Thanks doctor., sister and management.
  Thankyou all team`,
      name: "Kparapu Akaruppiya",
      title: "Patient",
    },
    {
      quote:
        `advice on timely manner. Doctors are so kind and supportive to us, Always a smiling and caring response. After
  consulting with doctor our doubts are sorted out and gave us more confidence towards treatment and we are happy with
  service from nurses there. Overall good IVF Treatment in Dindigul location & Best Fertility centre in Dindigul.. 👍😍`,
      name: "Subha Manivel",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre dindigul branch
  Such a friendly doctors and staffs .we just visit hospital without any hesitation and we can ask clarify our doubts
  whenever we need`,
      name: "sathik siyafa",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre dindigul
  Best fertility centre doctor consultation is very good caring staff`,
      name: "Nithya Ayyanar",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre dindigul branch is doing good service in fertility treatment and I'm happy with the doctor
  consultation and staffs there.,they gave us more positive thoughts....Best Fertility centre for fertility
  treatment...♥️♥️♥️`,
      name: "Nanda Gopal",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre dindigul is doing their best in fertility care. Will follow the patiens regularly and treat us
  like a family member.
  Thank you for the wonderful explanation and good care`,
      name: "SEKAR SHANU",
      title: "Patient",
    },
    {
      quote:
        `Hai
  Dindigul sudha fertility centre Dindigul we consulted with doctor here who gave us hope towards treatment here .we are
  happy with that service provided by nurese .best fertility centre in dondigul`,
      name: "Jeyasharmi Jeyasharmi",
      title: "Patient",
    },
    {
      quote:
        `Best fertility in Dindigul
  Doctor consult was 👍 good
  We are happy with service with op staff`,
      name: "Ssweet Rakku",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility center Dindigul
  Best fertility center Dr consultation was very good caring we are happy with service provided by staff & doctors here ,
  the doubts I have in treatment were cleared with the videos shown in hospital`,
      name: "Shenbaga Priya",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre dindigul branch doing goodd servoce in fertility treatment and i am happy with tha doctor
  consultation and staff there gave uss moree positive thougjts`,
      name: "Raj Prem",
      title: "Patient",
    },
    {
      quote:
        `We are happy with the service provided by staffs & doctors here. Best fertility centre around dindigul area., the
  doubts i have in treatment were cleared with the videos shown in hospital.`,
      name: "Thangam Thangam",
      title: "Patient",
    },
    {
      quote:
        `Best fertility centre in Dindigul branch doctor consultation is good we are with services from po staff`,
      name: "ramyaa sri",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre in dindigul
  Dr. Nadiya mam consulting was very good staffs is good counsiling in positive thoughts`,
      name: "Ranjith San",
      title: "Patient",
    },
    {
      quote:
        `I recently had the privilege of receiving care at this hospital for my friend and I cannot speak highly enough of my
  experience. From the moment I arrived, I was impressed by the cleanliness and organization of the facility.
  The staff, from the nurses to the doctors, demonstrated exceptional professionalism and expertise.Not only were they
  highly skilled in their medical practices, but they also showed genuine compassion and empathy towards me and my family
  during our time there.
  Every step of the way, they communicated clearly and effectively, ensuring that we understood the treatment plan and
  felt supported.Moreover, I was impressed by the hospital's commitment to patient safety, with rigorous infection control
  measures in place and a focus on maintaining a safe environment for all patients.Overall, my experience at this hospital
  exceeded my expectations. I am grateful to the entire staff for their exceptional care and would highly recommend this
  hospital to anyone in need of medical treatment.`,
      name: "lekshmi gopinath",
      title: "Patient",
    },
    {
      quote:
        `Best fertility center
  Best doctor, and doctor consultation was very good and caring staff`,
      name: "Vyeerar Abdulla",
      title: "Patient",
    },
    {
      quote:
        `We are very happy with the service provided by the staff's here plus after consulting with doctor our doubts are sorted
  out and gave us more confidence towards our treatment. Best fertility centre in dindugal location. `,
      name: "santhosh suresh",
      title: "Patient",
    },
    {
      quote:
        `The doctor and the staffs were very knowledgeable and friendly with us... Thanks to Doctor and management and the whole team.we are very happy with the service provided by the staffs here plus after consulting with doctor our doubts are sorted out and gave us more confidence towards our treatment..
  Best fertility centre in dindigul location.`,
      name: "Abinaya",
      title: "Patient",
    },
    {
      quote:
        `Sudha fertility centre Dindigul
  Hai sudha fertility centre Dindigul branch dr Nadiya mam gave us very treatment explanation. Each and every staffs is friendly and gave us a homely atmosphere.thanks to doctor , sister and management
  Thankyou all team`,
      name: "Anu Abi",
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
                      VANAKKAM Dindigul
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Dindigul</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Guiding you through every step of your parenthood journey.
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
          <InfiniteMovingCardsDemo reviews={DindigulReview} />
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
                      <h3 className="text-[#173366] mb-2  font-semibold">
                        About
                      </h3>

                      <p className="mt-3 mb-3 text-gray-600">
                        Since 2023, Sudha Fertility Centre has been a trusted name in Dindigul, providing couples with the best fertility care and treatments. Known as the leading fertility hospital in Dindigul, we combine advanced techniques with individualized care to support your path to parenthood. With years of expertise, our dedicated doctors are passionate about helping you achieve your dream.
                      </p>

                      <h3 className="mt-4 text-[#173366] font-semibold">
                        World-class Fertility Treatments in Dindigul:
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
                  <div>
                    <p className="mt-3 mb-3 text-gray-600">
                      At Sudha Fertility Centre in Dindigul, we are proud to
                      be known as India’s best fertility hospital, with a team
                      of highly skilled fertility doctors who are committed to
                      transforming lives. Our compassionate care, cutting-edge
                      technology, and tailored fertility treatments create a
                      personalized approach that gives every couple the best
                      chance at starting their family.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-gray-600">
                      As the best IVF centre in Dindigul, Sudha Fertility Centre
                      specialises in the following treatments,
                    </p>
                    <ul className="text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>Normal Delivery - Natural Labour For Mothers</li>
                      <li>IVF - In Vitro Fertilization</li>
                      <li>IUI - Intrauterine Insemination  </li>
                      <li>ICSI - Intracytoplasmic Sperm Injection</li>
                      <li>
                        IMSI - Intracytoplasmic Morphologically Selected Sperm Injection
                      </li>
                      <li>TESE - Testicular Sperm Extraction</li>
                      <li>PESA - Percutaneous Epididymal Sperm Aspiration</li>
                      <li>LAH - Laser Assited Hatching</li>
                      <li>
                        Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood Cell Derivative)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                    </ul>
                    <p className="mt-3 mb-3 text-gray-600">
                      and other gynaec-related surgeries like C-section,
                      Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst
                      and fluid aspiration, Myomectomy, ERA, OBS as well as
                      other fertility preservation processes are performed by
                      the best fertility doctors in Dindigul.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-[#173366] font-semibold mt-5">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Dindigul?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      At Sudha Fertility Centre in Dindigul, we are passionate about helping families achieve their dream of parenthood through expert fertility care. As the leading IVF hospital in the region, we’ve assisted countless couples, from young newlyweds to older couples yearning for a child, turning their hopes into reality. Our consistent success in delivering lakhs of healthy babies across all branches is a testament to our dedication and expertise. We are proud to be recognized as Dindigul’s top fertility centre.


                    </p>
                    <p className="mt-3 text-gray-600">
                      At Sudha Fertility Centre, we are committed to providing not only the most advanced fertility treatments but also emotional support to every couple. Our team of top IVF doctors works closely with patients, offering personalized care that addresses their unique fertility needs. We understand the challenges that couples face and are here to provide guidance, reassurance, and the highest level of care. Through our patient-focused approach, we aim to help couples experience the incredible joy of parenthood, bringing their dreams to life with expert treatments and compassionate care.
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
                    <div className="w-full lg:w-1/2 mt-5 ">
                      <h3 className="text-[#173366]  font-semibold">
                        Facilities
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Being the best fertility hospital in Dindigul, we offer you quality fertility treatments with experienced fertility specialists, world-class facilities, state-of-the-art technology, expert gynecologists, and experienced lab technicians.
                      </p>
                      <ul className="text-gray-600 list-disc pl-4 leading-[2.2]">
                        <li>Accommodation for inpatients of all ages</li>
                        <li>Round-the-clock medical care </li>
                        <li>Labour wards </li>
                        <li>Fully-equipped operation theatre </li>
                        <li>Guidance and counselling for mental wellbeing </li>
                        <li>24/7 diagnostic services and laboratories </li>
                        <li>Easily accessible pharmacies</li>
                        <li>Advanced ultrasound equipment </li>
                        <li>Comprehensive reports to aid in treatments </li>
                      </ul>
                    </div>
                    <div className="w-full lg:w-1/2  mt-5 ">
                      <ImageSlider images={Ambattur.Facilities.Facilitiesimg} />
                    </div>
                  </motion.div>
                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="specialists">
                  <div
                    className="flex flex-wrap lg:flex-nowrap gap-8 mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <h3 className="text-[#173366] mb-3 font-semibold leading-[1.4]">
                        Fertility Specialists <br />
                        in Dindigul
                      </h3>
                      <h4 className="text-[20px] font-semibold mt-2 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Dindigul
                      </h4>
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
                  </div>
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
                        src={Nadiya}
                        alt="Nadiya"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold ">
                        Our Fertility Specialist in Dindigul
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. Nadiya Hameed Farooq
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS., MS(OG)
                      </p>
                      <p className="text-md text-[#000000] mt-3">
                        Fertility Consultant / OBGYN
                      </p>
                      <p className="text-md text-gray-600 mt-3">
                        Dr. Nadiya Hameed Farooq, MS in Obstetrics & Gynecology
                        from Sree Mookambika Institute of Medical Science,
                        Kanyakumari, serves as a Fertility Consultant/OBGYN at
                        Sudha Fertility Centre, Dindigul Branch. With expertise
                        in fertility treatments, including over 100 successful
                        IUI procedures, Dr. Farooq is recognized for her
                        compassionate care and personalized approach, providing
                        both medical expertise and emotional support to her
                        patients.
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
                    <ImageGrid images={Dindigul.gallery} />
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
                      <h4 className="font-semibold mt-2 ">
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
                              64/77 - A, Municipal colony, Nehruji Nagar, Dindigul, Tamil Nadu - 624001.
                            </p>
                            <Link href="https://maps.app.goo.gl/mF1fcEMt4XcDpc9F9">
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
            {Dindigul.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Dindigul.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Dindigul.gallery}
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
          items={Dindigul.gallery}
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

export default DindigulPage;
