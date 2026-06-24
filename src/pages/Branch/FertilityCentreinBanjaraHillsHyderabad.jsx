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
import { FertilityCentreinBanjaraHillsHyderabadfaq } from "@/middleware/imagesroute";
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

function FertilityCentreinBanjaraHillsHyderabad() {
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
      setVisibleCount(FertilityCentreinBanjaraHillsHyderabadfaq.faqs.length); // Show all FAQs
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

  const ivfCostComparison = [
    {
      city: <p>Hyderabad </p>,
      ivfBasicCycle: "₹₹1.5L – ₹2.0L ",
      ivficsi: <p>₹1.8L – ₹2.5L</p>,
      notes: <p>Competitive pricing + Sudha's 85% success rate</p>,
    },
    {
      city: <p>Mumbai</p>,
      ivfBasicCycle: "₹2.0L – ₹3.0L ",
      ivficsi: <p>₹2.5L – ₹3.5L</p>,
      notes: <p>Higher cost due to city premium</p>,
    },
    {
      city: <p>Delhi / Gurgaon </p>,
      ivfBasicCycle: "₹1.8L – ₹2.8L",
      ivficsi: <p>₹2.2L – ₹3.2L </p>,
      notes: <p>Similar range to Hyderabad </p>,
    },
    {
      city: <p>Chennai </p>,
      ivfBasicCycle: "₹1.5L – ₹2.2L ",
      ivficsi: <p>₹1.8L – ₹2.8L </p>,
      notes: <p>Similar to Hyderabad </p>,
    },
    {
      city: <p>Bengaluru</p>,
      ivfBasicCycle: "₹1.8L – ₹2.5L",
      ivficsi: <p>₹2.0L – ₹3.0L </p>,
      notes: <p>Slightly higher</p>,
    },
  ];

  const ivfaddoncosts = [
    {
      AddOnProcedure: (
        <Link href="/icsi-treatment-in-hyderabad" className="text-[#033ab1]">
          ICSI (Intracytoplasmic Sperm Injection){" "}
        </Link>
      ),
      AdditionalCost: "₹30,000 – ₹50,000",
      WhenRecommended: (
        <p>
          <Link href="/male-infertility" className="text-[#033ab1]">
            Male factor infertility
          </Link>
          , poor past fertilisation{" "}
        </p>
      ),
    },
    {
      AddOnProcedure: "PGT-A (Preimplantation Genetic Testing)  ",
      AdditionalCost: "₹60,000 – ₹1,00,000 ",
      WhenRecommended:
        "Women 37+, recurrent miscarriage, repeated IVF failure ",
    },
    {
      AddOnProcedure: "Embryo Vitrification (Freezing) ",
      AdditionalCost: "₹20,000 – ₹30,000 ",
      WhenRecommended: "Freeze-all cycles, surplus embryos ",
    },
    {
      AddOnProcedure: "ERA (Endometrial Receptivity Analysis) ",
      AdditionalCost: "₹25,000 – ₹40,000  ",
      WhenRecommended: "Recurrent implantation failure ",
    },
    {
      AddOnProcedure: "Sperm DNA Fragmentation Test ",
      AdditionalCost: "₹3,000 – ₹6,000 ",
      WhenRecommended:
        "Male factor, poor embryo quality, recurrent miscarriage ",
    },
    {
      AddOnProcedure: "TESE / PESA (Surgical Sperm Retrieval) ",
      AdditionalCost: "₹20,000 – ₹40,000",
      WhenRecommended: "Azoospermia — no sperm in ejaculate ",
    },
  ];
  const ivfcost = [
    {
      AgeGroup: " Under 35",
      clinicalPregnancyRate: "Up to 85%",
      notes: "Best outcomes — ideal window for IVF ",
    },
    {
      AgeGroup: "35 – 37",
      clinicalPregnancyRate: "60 – 70% ",
      notes: "Excellent outcomes with personalised protocols ",
    },
    {
      AgeGroup: "38 – 40",
      clinicalPregnancyRate: "45 – 55%",
      notes: "PGT-A recommended for chromosomal screening",
    },
    {
      AgeGroup: "Above 40 ",
      clinicalPregnancyRate: "30 – 40% ",
      notes: "Donor egg IVF achieves 65–75% — discuss with your specialist ",
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
                      Fertility Centre in Banjara Hills, Hyderabad — Expert IVF,
                      IUI & ICSI at Sudha Fertility Centre
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
                        If you are searching for a trusted fertility centre in
                        Banjara Hills, Hyderabad,{" "}
                        <Link
                          href="/fertility-centre-in-hyderabad"
                          className="text-[#033ab1]"
                        >
                          Sudha Fertility Centre
                        </Link>{" "}
                        is right here in your neighbourhood. Our Banjara Hills
                        branch is a fully equipped, state-of-the-art fertility
                        clinic staffed by experienced IVF specialists,
                        embryologists, and gynaecologists who have helped
                        hundreds of Hyderabad couples overcome infertility and
                        welcome healthy babies. Backed by Sudha Fertility
                        Centre's 40-year legacy and the experience of delivering
                        over 60,000 IVF babies across India,{" "}
                        <Link
                          href="/fertility-centre-in-hyderabad"
                          className="text-[#033ab1]"
                        >
                          our Hyderabad centre
                        </Link>{" "}
                        has rapidly become one of the city's most trusted
                        fertility clinics since opening in 2021.
                      </p>
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
                    <h2 className="text-[#173366] mb-3 mt-2 font-semibold">
                      About Our Banjara Hills Fertility Centre
                    </h2>

                    <p>
                      Sudha Fertility Centre's Banjara Hills branch is
                      conveniently located at D.No. 8-2-335/2 A/T, Green Valley
                      Road No. 5, Banjara Hills, Hyderabad, Telangana 500034 —
                      serving couples from Banjara Hills, Jubilee Hills,
                      Punjagutta, Somajiguda, Kavuri Hills, Road No. 12, and
                      surrounding areas. Our centre is equipped with:{" "}
                    </p>

                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>
                        Advanced Class A IVF Laboratory for embryo culture and
                        cryopreservation
                      </li>
                      <li>
                        Fully equipped operation theatre for egg retrieval and
                        minor procedures
                      </li>
                      <li>
                        Dedicated consultation suites for private, confidential
                        discussions
                      </li>
                      <li>Ultrasound scan rooms for cycle monitoring </li>
                      <li>On-site semen analysis and andrology services </li>
                      <li>
                        Counselling support for couples throughout their
                        treatment{" "}
                      </li>
                    </ul>

                    <p>
                      We also operate a{" "}
                      <Link
                        href="/fertility-centre-in-attapur"
                        className="text-[#033ab1]"
                      >
                        second Hyderabad branch at Attapur
                      </Link>
                      , giving patients across the city convenient access to
                      expert fertility care.{" "}
                    </p>

                    <h2 className="text-[#173366] mb-3 mt-2 font-semibold">
                      {" "}
                      Fertility Treatments at Our Banjara Hills Centre
                    </h2>

                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>
                        <b>IVF (In Vitro Fertilisation):</b> Advanced IVF with
                        personalised stimulation protocols. See our IVF
                        Treatment in Hyderabad page for full details.
                      </li>
                      <li>
                        <b>IUI (Intrauterine Insemination):</b> Gentle,
                        affordable first-line fertility treatment — 35,000+ IUI
                        babies delivered across our network.
                      </li>
                      <li>
                        <b>ICSI (Intracytoplasmic Sperm Injection):</b> Gold
                        standard treatment for male factor infertility — 80–85%
                        fertilisation rate.
                      </li>
                      <li>
                        <b>FET (Frozen Embryo Transfer):</b> Transfer of
                        previously frozen embryos in a natural or medicated
                        cycle.{" "}
                      </li>
                      <li>
                        <b>PMOS (PCOS) / PCOD Treatment:</b> Hormonal management and
                        ovulation induction for PMOS (PCOS)-related infertility.{" "}
                      </li>
                      <li>
                        <b>Male Infertility:</b> TESE, PESA, semen analysis,
                        sperm DNA fragmentation testing, and andrology
                        services.{" "}
                      </li>
                      <li>
                        <b>Laparoscopy and Hysteroscopy:</b> Minimally invasive
                        diagnostic and therapeutic surgical procedures.{" "}
                      </li>
                      <li>
                        <b>Pre-implantation Genetic Testing (PGT):</b> Embryo
                        genetic screening before transfer — recommended for
                        women 37+ and recurrent miscarriage.{" "}
                      </li>
                    </ul>

                    <h2 className="text-[#173366] mb-3 mt-2 font-semibold">
                      Our Fertility Specialists at Banjara Hills
                    </h2>

                    <p className="text-gray-600 mt-3">
                      Dr.S.Pradeepa Sudhakar — MBBS, DGO, DNB (OG), MNAMS, FICOG Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS) and Vice President of
                      Sudha Hospitals Pvt. Ltd. Dr. Pradeepa is one of India's
                      most recognised IVF specialists — a member of ASRM, ESHRE,
                      ISAR, FOGSI, and Faculty of the International Federation
                      of Fertility Societies. She provides senior clinical
                      guidance and oversight at our Hyderabad centres, ensuring
                      every patient receives world-class, evidence-based
                      fertility care{" "}
                    </p>
                    <p className="text-gray-600 mt-3">
                      Dr. V. Pranitha Reshmi — MBBS, DGO, DNB, ICOG, FMAS. Dr.
                      Pranitha is a Fertility Consultant at Sudha Fertility
                      Centre Banjara Hills with 12 years of experience in
                      women's health and reproductive care. She specialises in
                      IVF, IUI, PMOS (PCOS) management, fertility evaluations, and
                      minimally invasive procedures. Patients at our Banjara
                      Hills centre consistently highlight her compassionate
                      approach and the confidence she gives couples throughout
                      their fertility journey.{" "}
                    </p>

                    <h2 className="text-[#173366] mb-3 mt-2 font-semibold">
                      Why Couples in Banjara Hills Choose Sudha Fertility Centre
                    </h2>
                    <ul className="text-gray-600 mt-3">
                      <li>
                        <b>40-year national legacy:</b> Sudha Fertility Centre
                        has been delivering fertility care since 1995, now with
                        40+ Branches across South India, Bangladesh, and Sri
                        Lanka.{" "}
                      </li>
                      <li>
                        <b>85% IVF success rate:</b> Among the highest in
                        Hyderabad, backed by Class A lab standards and
                        personalised protocols.{" "}
                      </li>
                      <li>
                        <b>Named, experienced Hyderabad specialists:</b> Couples
                        can book directly with Dr. V. Pranitha Reshmi (12 years
                        experience) or Dr. S. Pradeepa (Vice President, Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS)) — not an anonymous clinic.{" "}
                      </li>
                      <li>
                        <b>Transparent pricing:</b> IVF cost estimate before
                        every cycle. No hidden charges. EMI options
                        available.{" "}
                      </li>
                      <li>
                        <b>Close to home:</b> Banjara Hills location means
                        minimal travel stress — important when undergoing
                        monitoring scans every 2–3 days during stimulation.{" "}
                      </li>
                      <li>
                        <b>
                          Part of South India's most trusted fertility network:
                        </b>{" "}
                        60,000+ IVF babies, 35,000+ IUI babies, 1L+ laparoscopic
                        surgeries.{" "}
                      </li>
                    </ul>

                    <h2 className="text-[#173366] mb-3 mt-2 font-semibold">
                      IVF Success Rates at Our Banjara Hills Centre
                    </h2>

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
                              Notes
                            </th>
                          </tr>
                        </thead>

                        {/* Body */}
                        <tbody className="text-gray-700">
                          {ivfcost.map((item) => (
                            <tr className="bg-blue-100">
                              <td className="px-4 py-3">{item.AgeGroup}</td>
                              <td className="px-4 py-3 font-semibold text-green-700">
                                {item.clinicalPregnancyRate}
                              </td>
                              <td className="px-4 py-3">{item.notes}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <p className="text-md text-gray-600">
                      For a personalised success probability estimate based on your age, AMH level, and diagnosis, book a FREE consultation at our Banjara Hills centre.
                    </p>

                    <h2 className="text-[#173366] mb-3 mt-2 font-semibold">
                      Areas We Serve Near Banjara Hills
                    </h2>
                    <ul className="text-md text-gray-600 list-disc pl-4 leading-[2.2]">
                      <li>
                        Jubilee Hills (3–7 minutes by car)
                      </li>
                      <li>
                        Punjagutta / Somajiguda (8–12 minutes)
                      </li>
                      <li>
                        Road No. 12, Banjara Hills (within walking distance)
                      </li>
                      <li>Kavuri Hills / Madhapur (10–15 minutes) </li>
                      <li>Gachibowli / Hitech City (15–20 minutes) </li>
                      <li>Kondapur / Nanakramguda (15–20 minutes) </li>
                      <li>Masab Tank / Mehdipatnam (10–15 minutes) </li>
                    </ul>

                    <p className="text-gray-600 mt-3">
                      Free parking is available at our centre. We are well connected by Hyderabad Metro (nearest station: Punjagutta Station, 0.8 km) and local auto/cab services.
                    </p>

                    <h2 className="text-[#173366] mb-3 mt-3  font-semibold">
                      How to Reach Our Banjara Hills Centre
                    </h2>
                    <p className="text-gray-600 mt-3"><b>Clinic Name:</b>Sudha Fertility Centre — Banjara Hills  </p>
                    <p className="text-gray-600 mt-3"><b>Address :</b>D.No. 8-2-335/2 A/T, Green Valley Road No. 5, Banjara Hills, Hyderabad, Telangana 500034 </p>
                    <p className="text-gray-600 mt-3"><b>Phone :</b>+91 76-7007-6006 </p>
                    <p className="text-gray-600 mt-3"><b>Opening Hours :</b>Monday – Saturday: 9:00 AM – 6:00 PM  |  Sunday: 9:00 AM – 1:00 PM </p>
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
                    <ImageGrid images={FertilityCentreinBanjaraHillsHyderabadfaq.gallery} />
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
              FAQs — IVF Cost in Hyderabad
            </h2>
            {FertilityCentreinBanjaraHillsHyderabadfaq.faqs
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
            {FertilityCentreinBanjaraHillsHyderabadfaq.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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

            <h3 className="text-[#173366] mb-3 mt-4 font-semibold">
              Book Your FREE Appointment at Our Banjara Hills Centre
            </h3>
            <p className="text-gray-600 mt-3">
              Your closest fertility specialist is right here in Banjara Hills. Whether you are just beginning your fertility journey or seeking a second opinion after previous treatment, <Link href="/fertility-centre-in-hyderabad" className="text-[#033ab1]">Sudha Fertility Centre</Link> is ready to support you with expertise, compassion and transparency. Call us on +91 76-7007-6006, WhatsApp us, or <Link href="/contact-us">book your FREE appointment online</Link>. Walk-in appointments are welcome subject to availability.
            </p>
          </section>
        </div>
      </div>

      <section>
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={FertilityCentreinBanjaraHillsHyderabadfaq.gallery}
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
          items={FertilityCentreinBanjaraHillsHyderabadfaq.gallery}
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

export default FertilityCentreinBanjaraHillsHyderabad;
