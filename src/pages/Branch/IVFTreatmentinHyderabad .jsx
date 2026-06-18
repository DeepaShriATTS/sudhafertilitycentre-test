"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/hyderabad/hyderabad_about.webp";
import { motion } from "framer-motion";
import Hospital from "@/assets/branch/hyderabad/Hyderabad.webp";
import ImageGrid from "@/components/imagegrid";
import Buttonbottm from "@/components/button";
import { MdLocationOn } from "react-icons/md";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { AiTwotoneMail } from "react-icons/ai";
import FAQItem from "@/components/accordion";
import AppointmentForm from "@/components/appointmentForm";
import { MarqueeComponent } from "@/components/marqueeSlider";
import {
  Ambattur,
  Hyderabad,
  IVFTreatmentHyderabadfaq,
} from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function IVFTreatmentHyderabad() {
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
      setVisibleCount(IVFTreatmentHyderabadfaq.faqs.length); // Show all FAQs
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

  const tabledata = [
    {
      agegroup: "Under 35",
      clinicalpregnancyrate: "Up to 85%",
      recommendation: "Highest success — ideal window",
    },
    {
      agegroup: "35 – 37",
      clinicalpregnancyrate: "60 – 70%",
      recommendation: "Good outcomes with tailored protocol",
    },
    {
      agegroup: "38 – 40",
      clinicalpregnancyrate: "45 – 55%",
      recommendation: "PGT recommended for embryo selection",
    },
    {
      agegroup: "40 – 42",
      clinicalpregnancyrate: "30 – 40%",
      recommendation: "Donor egg IVF may be discussed",
    },
    {
      agegroup: "Above 42",
      clinicalpregnancyrate: "20 – 30%",
      recommendation: "Donor egg IVF significantly improves odds",
    },
  ];

  const hyderabadReview = [
    {
      quote:
        "be specific about positive experiences with the staff, highlight their attentiveness and care, mention the cleanliness of the facility, praise efficient procedures, and express gratitude for the overall quality of treatment while also mentioning any specific doctors or nurses who stood out",
      name: "Anil Sagili (Vijju009)",
      title: "Patient",
    },
    {
      quote:
        "Sudha fertility Hospital in Banjara hills Hyderabad offers effective and affordable fertility treatments. The Doctors use advanced techniques and provide the best care, The success rate is high. So very thank full.!",
      name: "S RAJ films",
      title: "Patient",
    },
    {
      quote: `I am very happy with the service and guidance from Dr.Akhila ma'am and her sub ordinates . Also so helpful from complete Admin team also. Especially Anuradha from Admin team and Spandana ( Sr nurse )
  My heart full thanks once again to Dr.ma'am and sudha hospital.
  I definitely recommend this hospital and Dr Akhila to my known ones.
  Overall completely satisfied and recommend this hospital.
  I request Hospital to help so many people to fulfill  their life time wish & to complete parent wood.`,
      name: "Lalitha Botta",
      title: "Patient",
    },
    {
      quote: `We are  so thankful to sudha fertility hospital Banjara hills
  Because we going to be parents and Dr ma'am diagnosis and treatment care was so good and nurses staff and infront office department recieving coordination so good friendly hospitality management system every nice .I suggest sudha fertility hospital.
  One and only one solution for those who having fertility problem solution is sudha fertility hospital .`,
      name: "Salla Pandu",
      title: "Patient",
    },
    {
      quote: `Sudha fertility center in Banjara hills provides amazing care. From consultation to treatment, everything was handled professionally. Highly recommend this IVF centre in Banjara hills.`,
      name: "Pallavi Thummunuri",
      title: "Patient",
    },
    {
      quote: `We are so happy because of we got upt positive
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
      quote: `Sudha fertility Banjara hills Hyderabad have given best effective treatment and affordable treatment Doctors use advance techniques and best care good success rate and finally my cousin sister is happy so thankful to sudha fertility`,
      name: "SRINATH GUPTHA",
      title: "Patient",
    },
    {
      quote:
        "Dr. Akhila ma'am are very experienced, and the treatment process is smooth. I highly recommend this IVF hospital in Banjara hills Hyderabad for anyone facing fertility issues",
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
      quote: `Thank you Dr. Akhila mam and Samatha mam for our Positive results. Treatment and caring all positive here.
  We are very happy.`,
      name: "phani kumar",
      title: "Patient",
    },
    {
      quote: `Im so happy to visit Sudha Fertility hospital...
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
      quote: `We had an outstanding experience at Sudha Hospital. Dr. Akhila left a lasting impression and was pivotal throughout our journey. In our experience, very few doctors match her level of integrity, care, expertise, and professionalism. She consistently prioritizes her patients and their needs. Dr. Akhila took the time to explain each step of the treatment process in detail, ensuring we fully understood our options and what to expect. Her clear communication and patience were invaluable. She possesses a remarkable ability to empathize with her patients, showing genuine compassion and a commitment to achieving the best possible outcomes.
  
  The facilities and labs are modern and well-maintained. I would like to highlight Spandana, Madhavi, Lakshmi, and Saritha for their exceptional and personalized care. I also appreciate Priyanka and Rajeswari for their excellent coordination of our visits. Mathin Garu is very cordial and regularly checked on us & ensured we had the unparalleled experience. Overall, the team at Sudha Fertility Hospital is fantastic and works seamlessly together.
  
  We wholeheartedly recommend Sudha Fertility Hospital to anyone seeking fertility treatment. A special thank you to Dr. Akhila for making a significant difference in our journey.`,
      name: "naveen kumar",
      title: "Patient",
    },
    {
      quote: `GoodI really happy to sharewith  experience  to sudha hospital HYDERABAD ...  Staffs  guidance and warm welcome is good. Time keeping is well.
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
      quote: `It was a great experience with Sudha Hospital especially with Swapna Naik mam.
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
                    <h1 className="font-bold mt-4">
                      Best IVF Treatment in Hyderabad{" "}
                      <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">
                        Personalised Care at Sudha Fertility Centre
                      </span>
                    </h1>

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
          <InfiniteMovingCardsDemo reviews={hyderabadReview} />
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
              {/* <Navbar sections={sections} /> */}

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
                      <h2 className="text-[#173366] mb-3  font-semibold">
                        Introduction
                      </h2>
                      <p className="mt-3  text-gray-600">
                        For couples in Hyderabad who have been trying to
                        conceive without success, IVF — In Vitro Fertilization —
                        can be the turning point that changes everything. At
                        Sudha Fertility Centre, Hyderabad, we have helped
                        thousands of couples achieve their dream of parenthood
                        through advanced, evidence-based IVF treatment that is
                        personalised to each couple's unique medical needs. With
                        40+ years of fertility expertise, 85% IVF success rates,
                        and over 60,000 IVF babies delivered across our network,
                        we are one of the most trusted IVF centres in Hyderabad.
                        Book your FREE consultation today and take the first
                        step.
                      </p>
                      <h2 className="text-[#173366] mb-3  font-semibold">
                        What is IVF Treatment?
                      </h2>
                      <p className="mt-3  text-gray-600">
                        IVF (In Vitro Fertilisation) is an assisted reproductive
                        technology (ART) in which eggs are retrieved from the
                        woman's ovaries, fertilised with sperm in a specialised
                        laboratory, and the resulting embryo is carefully
                        transferred into the uterus to establish pregnancy. IVF
                        is today one of the most successful fertility treatments
                        available, with modern techniques significantly
                        improving success rates compared to earlier decades. At
                        Sudha Fertility Centre in Hyderabad, every IVF cycle is
                        planned using the latest reproductive science and
                        monitored by experienced embryologists in our Class A
                        IVF laboratory.
                      </p>
                      <h2 className="text-[#173366] mb-3  font-semibold">
                        Who Needs IVF Treatment in Hyderabad?
                      </h2>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Sudha Fertility Centre Hyderabad"
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
                      IVF is recommended when other fertility treatments have
                      not succeeded or when specific medical conditions affect
                      natural conception. Our fertility specialists in Hyderabad
                      recommend IVF for:
                    </p>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>
                        Blocked or damaged fallopian tubes preventing natural
                        egg travel
                      </li>
                      <li>
                        Low sperm count or poor sperm motility (male factor
                        infertility)
                      </li>
                      <li>PMOS (PCOS) / PCOD affecting ovulation and egg quality</li>
                      <li>Endometriosis causing adhesions or ovarian damage</li>
                      <li>
                        Unexplained infertility — where no clear cause is
                        identified
                      </li>
                      <li>
                        Recurrent pregnancy loss or multiple failed IUI cycles
                      </li>
                      <li>
                        Advanced maternal age (35+ years) with diminishing
                        ovarian reserve
                      </li>
                      <li>
                        Genetic conditions requiring pre-implantation genetic
                        testing (PGT)
                      </li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      Not sure if IVF is right for you? Our specialists offer a
                      FREE fertility evaluation at our Hyderabad centre to
                      assess your individual situation and recommend the most
                      suitable path forward.
                    </p>

                    <h2 className="text-[#173366] mb-3 mt-2 font-semibold">
                      IVF Treatment Process at Sudha Fertility Centre — Step by
                      Step
                    </h2>
                    <p className="text-gray-600 mt-3">
                      Our IVF protocol at Hyderabad follows a carefully
                      structured, 6-step process:
                    </p>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>
                        Step 1 — Fertility Evaluation & Consultation
                        Comprehensive hormonal tests (AMH, FSH, LH), semen
                        analysis, ultrasound scan and a detailed consultation
                        with our IVF specialist to personalise your treatment
                        plan.
                      </li>
                      <li>
                        Step 2 — Ovarian Stimulation Hormonal injections over
                        8–12 days stimulate your ovaries to produce multiple
                        mature eggs. Progress is monitored through regular
                        ultrasound scans and blood tests at our Hyderabad
                        centre.
                      </li>
                      <li>
                        Step 3 — Egg Retrieval (OPU) Under light anaesthesia,
                        our surgeon retrieves mature eggs from the ovarian
                        follicles using a thin ultrasound-guided needle. The
                        procedure takes approximately 20 minutes. You return
                        home the same day.
                      </li>
                      <li>
                        Step 4 — Fertilisation in the Lab Retrieved eggs are
                        fertilised with the partner's (or donor's) sperm in our
                        state-of-the-art embryology laboratory. In cases of male
                        factor infertility, ICSI — where a single sperm is
                        injected directly into each egg — is performed to
                        maximise fertilisation rates.
                      </li>
                      <li>
                        Step 5 — Embryo Culture & Selection Fertilised embryos
                        are cultured for 3–5 days in our IVF lab under carefully
                        controlled conditions. Our embryologists grade each
                        embryo at day 3 and day 5 (blastocyst stage) and select
                        the highest-quality embryo for transfer.
                      </li>
                      <li>
                        Step 6 — Embryo Transfer & Pregnancy Confirmation The
                        selected embryo is gently placed into the uterus using a
                        thin catheter in a simple, painless procedure that takes
                        around 10 minutes. A pregnancy blood test (beta-hCG) is
                        performed 14 days later to confirm conception. Surplus
                        good-quality embryos are vitrified (frozen) for future
                        use at no additional culture cost.
                      </li>
                    </ul>

                    <h2 className="text-[#173366] mb-3  font-semibold">
                      Why Choose Sudha Fertility Centre for IVF in Hyderabad?
                    </h2>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>
                        85% IVF Success Rate — Among the highest in Hyderabad,
                        backed by consistent clinical outcomes across thousands
                        of cycles
                      </li>
                      <li>
                        40+ Years of Fertility Excellence — Sudha Fertility
                        Centre has been a pioneer in fertility care since 1984,
                        building four decades of reproductive medicine
                        expertise.
                      </li>
                      <li>
                        60,000+ IVF Babies Delivered — A testament to our
                        expertise and the trust of families across South India,
                        Bangladesh, and Sri Lanka.
                      </li>
                      <li>
                        Expert IVF Specialists — Dr. V. Pranitha Reshmi MBBS,
                        DGO, DNB, ICOG, FMAS (360+ ICSI cycles, 600+ IUI
                        procedures, ICOG Fellowship 12 years of experience)lead
                        our dedicated Hyderabad team.
                      </li>
                      <li>
                        Class A IVF Laboratory — Our advanced embryology lab
                        operates in a fully controlled environment — optimal air
                        quality, temperature, and humidity — for the best
                        possible embryo development outcomes
                      </li>
                      <li>
                        Personalised Treatment Plans — No two patients are
                        treated the same. Every IVF protocol is individually
                        customised to your specific diagnosis, age, ovarian
                        reserve, and fertility profile.
                      </li>
                      <li>
                        Transparent Pricing — Clear, upfront IVF cost structure
                        with no hidden charges. Affordable EMI options
                        available. Full written cost estimate provided before
                        your cycle begins.
                      </li>
                    </ul>
                    <h2 className="text-[#173366] mb-3  font-semibold">
                      IVF Success Rates at Sudha Fertility Centre Hyderabad
                    </h2>
                    <p className="text-gray-600 mt-3">
                      Our IVF success rates are consistently among the best in
                      Hyderabad. Here is a guide to expected success rates by
                      age group:
                    </p>
                    <div className="overflow-x-auto p-4">
                      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                        {/* Header */}
                        <thead className="bg-blue-900 text-white">
                          <tr>
                            <th className="text-left px-4 py-3 font-semibold">
                              Age Group
                            </th>
                            <th className="text-left px-4 py-3 font-semibold">
                              Clinical Pregnancy Rate
                            </th>
                            <th className="text-left px-4 py-3 font-semibold">
                              Recommendation
                            </th>
                          </tr>
                        </thead>

                        {/* Body */}
                        <tbody className="text-gray-700">
                          {tabledata.map((item) => (
                            <tr className="bg-blue-100">
                              <td className="px-4 py-3">{item.agegroup}</td>
                              <td className="px-4 py-3 font-semibold text-green-700">
                                {item.clinicalpregnancyrate}
                              </td>
                              <td className="px-4 py-3">
                                {item.recommendation}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <h2 className="text-[#173366] mb-3  font-semibold">
                      Our IVF Specialists in Hyderabad
                    </h2>
                    <p className="text-gray-600 mt-3">
                      Dr.S.Pradeepa Sudhakar., — DGO, DNB (OG), MNAMS, FICOG Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS). Dr. Pradeepa is a leading IVF specialist with memberships in ASRM, ESHRE, ISAR, FOGSI, and the International Federation of Fertility Societies (IFFS). She has overseen the establishment of 40+ Sudha Fertility branches across South India and brings unmatched clinical expertise and leadership to our Hyderabad team. 
                    </p>
                    <p className="text-gray-600 mt-3">
                      Dr. V. Pranitha Reshmi — MBBS, DGO, DNB, ICOG, FMAS. Dr. Pranitha is a dedicated Fertility Consultant at <Link href="/fertility-centre-in-banjara-hills" className="text-[#033ab1]">Sudha Fertility Centre, Banjara Hills</Link>, Hyderabad with 12 years of experience in women's health and reproductive care. Her areas of expertise include fertility evaluations, IVF, IUI, PMOS (PCOS) management, and minimally invasive procedures. She is known for her compassionate approach, clear communication, and personalised treatment plans — consistently earning high patient satisfaction at our Hyderabad centre. 
                    </p>
                    <div>
                      <h2 className="text-[#173366] mb-3  font-semibold">
                     IVF Treatment Cost in Hyderabad
                    </h2>
                    <p className="text-gray-600 mt-3">
                      IVF treatment costs in Hyderabad range from approximately ₹1.5 lakhs to ₹3.5 lakhs per cycle, depending on the protocol required and any additional procedures such as <Link href="/intracytoplasmic-sperm-injection" className="text-[#033ab1]">ICSI</Link>, PGT, or embryo freezing. Sudha Fertility Centre provides a full written cost estimate after your initial consultation — with no hidden charges. For a complete breakdown of all treatment costs, visit our dedicated <Link href="/ivf-cost-in-hyderabad" className="text-[#033ab1]">IVF Cost in Hyderabad page</Link>. 
                    </p>
                    </div>
                  </motion.div>


                  <motion.div>
                                        <h2 className="text-[#173366] mb-3  font-semibold">
                     IVF Patient Success Stories from Hyderabad
                    </h2>
                    <p className="text-gray-600 mt-3">
                     "After 8 years of trying and multiple failed attempts elsewhere, Sudha Fertility Centre gave us our miracle. Dr. Pranitha explained every step clearly and the team was with us throughout. Today we are proud parents of healthy twins." — Sravanthi K., Hyderabad 
                    </p>
                    <p className="text-gray-600 mt-3">
                      "We were hesitant after so many disappointments, but the compassion and expertise at Sudha Banjara Hills changed everything. Our first IVF cycle at Sudha was successful. We cannot thank Dr. Pranitha and the entire Sudha team enough." — Priya & Ravi, Jubilee Hills, Hyderabad 
                    </p>
                    <p className="text-gray-600 mt-3">
                      "Transparent, honest, and genuinely caring — Sudha Fertility Centre is everything you hope for when going through IVF." — Lakshmi M., Banjara Hills 
                    </p>


                 
  
                  </motion.div>



                  <hr className="mt-4" />
                </section>
              </ScrollMotion>
              <ScrollMotion>
                <section id="gallery">
                  <h3 className="text-[#173366] mt-4 font-semibold">Gallery</h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={IVFTreatmentHyderabadfaq.gallery} />
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
                      <h3 className="text-[#173366] font-semibold">Location</h3>
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
                            <p className="font-semibold text-gray-500">CALL</p>
                            <p className="font-semibold">+91 76-7007-6006</p>
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
                              D.No. 8-2-335/2 A/T, Green Valley Road, No 5,
                              Banjara Hills, Hyderabad, Telangana - 500034.
                            </p>
                            <Link href="https://maps.app.goo.gl/1j6HjWA7kSvZW7LNA">
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
            {IVFTreatmentHyderabadfaq.faqs
              .slice(0, visibleCount)
              .map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  toggle={() => toggleFAQ(index)}
                />
              ))}
            {IVFTreatmentHyderabadfaq.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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

            <h2 className="text-[#173366] mb-3 mt-4 font-semibold">
              Book Your Free IVF Consultation in Hyderabad
            </h2>
            <p className="text-gray-600 mt-3">
             Ready to begin your IVF journey? Sudha Fertility Centre's Hyderabad team is here to guide you — from your first consultation through every step of treatment and beyond. <Link href="/contact-us" className="text-[#033ab1]">Book your FREE consultation</Link> today by calling +91 76-7007-6006 or filling in our online appointment form. Our Hyderabad centre is located at <Link href="/fertility-centre-in-banjara-hills" className="text-[#033ab1]">Banjara Hills</Link> and is open Monday to Saturday, 9 AM to 6 PM. 
            </p>
          </section>
        </div>
      </div>

      <section>
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={IVFTreatmentHyderabadfaq.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm
            text="Watch on Youtube"
            link="https://www.youtube.com/@sudhafertilitycentre"
          />
        </div>
        {/* <MarqueeComponent
          items={IVFTreatmentHyderabadfaq.gallery}
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

export default IVFTreatmentHyderabad;
