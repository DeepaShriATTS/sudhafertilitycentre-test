"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/ambatur/doc.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/Ramanathapuram/hospital.webp";
import keerthana from "@/assets/branch/Ramanathapuram/dr.webp";
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
import { Ambattur, Ramanathapuram } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import { ramanathapuramVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);


function RamanathapuramPage() {
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
      setVisibleCount(Ramanathapuram.faqs.length); // Show all FAQs
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

  const RamanathapuramReview = [
    {
      quote:
        "I am Akila doctors are very easy to approach and they are always ready to clarity our doubts  each and every staffs are explaining the treatment process before doing every procedure so comfortable with their approach. so I am very happy, Ramnad sudha hospital",
      name: "SHYAM SARAN",
      title: "Patient",
    },
    {
      quote:
        "I visited Dr Kalaivani in Ramanathapuram, she attended to me in a calm manner. Addressing my questions without any  hesitation. Thank you so much for ur help.",
      name: "Muhabbathnisha Seeni",
      title: "Patient",
    },
    {
      quote:
        "I have PMOS (PCOS). I have gained 8 kgs. Lost all of my hope .After doctor consultation I got hope that I can reverse the PMOS (PCOS) . counsellor and nurse personally advised me. Returning home with a lot of hope and happiness. Thankyou sudha hospital.",
      name: "Jeya Chitra",
      title: "Patient",
    },
    {
      quote:
        "Good hospital and Doctor has approached in an good manner ..she explained everything  all doubts and queries.",
      name: "Jeya Prakash",
      title: "Patient",
    },
    {
      quote:
        "I am kavalan , na ennoda sister kooda ramnad sudha hospital vanthom, Anga ellarum nalla pesunanga , doctor mam treatment pathi nalla theliva sonnanga , engaluku romba pidithirunthathu, manasuku niraiva irunthathu, I am very happy 😊😊",
      name: "Kavalan Kavalan",
      title: "Patient",
    },
    {
      quote:
        "Hi friends enakku rompa naala kolantha illa na ramnad sutha fertility la poi treatment etuthe anga ulla doctor staff ellarum nalla kavanichanga super ah treatment pannunanga ippa na pregnant ah irukken thanks 🥰",
      name: "Subakeerthika",
      title: "Patient",
    },
    {
      quote:
        "Hi friends engalukku 3 years ah baby illa enga oor ramnad Anga sutha fertility la poi treatment pathom Anga ulla doctor staff ellarum nall pathukittanga nalla treat ment pantranga athunala enakku oru nambikkai seekkaram baby porakkum nu rompave nalla treat pantraga yarukkum baby illana Anga poi treatment etuthukonga",
      name: "Saniya Annai",
      title: "Patient",
    },
    {
      quote:
        "Nice Hospital.. sudha hospital ramnad na poiruthean enakku 13 varudam kulanthai elllai na dr kalavani mam engaluk test Pani pathanga nall nabikaya solierukanga Anga Eluru nallamuraiya parthukitanga en anupavam hospital romba Nala theliva sonanga staff elurum nalamuraiyli kavanithu kondaragal sutha vuku ponom engaluk nabikai vanthathu nandrigal pala",
      name: "Vijaya Raj",
      title: "Patient",
    },
    {
      quote:
        "Yan name deivanai na einru sudha hospital ramnad senren yannai parisothitha doctor ennidam thelivaka explain pannunaka good response and positive energy thanks",
      name: "Stella Kobika",
      title: "Patient",
    },
    {
      quote: `Hi.. I am dinesh kumar from ramnad... Nan ramnad branch vanthu dr.. Kalaivani mam kita treatment parthean.. Mam nalla pesunanga.. Nalla positive vibration.. Engaluku rompa santhosama iruku.. Sisters counseling mam ellarom rompanalla pesuranga.. Nice hospital.
  Thank you so much`,
      name: "Dinesh kumar",
      title: "Patient",
    },
    {
      quote:
        "Sutha fertility ramnad la irukku Ange ponom dreat ment kkaga Anga nalla treatment pantraga enakku nambikkai irukku innum 10 months la baby porakkum nu I like this",
      name: "Preethi",
      title: "Patient",
    },
    {
      quote:
        "Nan inaki ramnad sutha hospital vanthean.... Counselor mam enkita phone panni pesunga.. appavey enaku oru positive vibration Achu... Already ivf treatment enaku failure.. Ella staffs pesuna vithavum nadathukita vithavum enaku rompa Santhosh ma irunthuchu ... Thank you sudha team",
      name: "Asharaj",
      title: "Patient",
    },
    {
      quote:
        "I am Parvathi Naanga Sutha hospitalukKu ponom postive vibrasan Vanthuchu very happya Irunthuju Namma Sister Mari Pasoranga super experience",
      name: "Vasanth Kumar",
      title: "Patient",
    },
    {
      quote:
        "I am sivasakthi, ellarum nalla pesunanga, treatment pathi theliva sonnanga,l am very happy and manusuku romba santhosama irunthathu",
      name: "siva sakthi",
      title: "Patient",
    },
    {
      quote:
        "I am pandeeswaran, Inga ellarum nalla pesunanga , treatment pathi theliva sonnanga , I am very happy",
      name: "Pandi",
      title: "Patient",
    },
    {
      quote:
        "Yes Keerthy Today I was going to Sudha Hospital with my sister for treatment. I was very nervous when he explained to me what to do and what not to do.",
      name: "Keerthi R",
      title: "Patient",
    },
    {
      quote:
        "I am keerthika nalla explain panrango so very happy super experience",
      name: "Keerthika",
      title: "Patient",
    },
    {
      quote:
        "I am lingammal, Nala pesunanga , Nala positive vibration, engaluku romantic santhosama iruk,",
      name: "Lingammal",
      title: "Patient",
    },
    {
      quote: "I am thara nalla explain panrango so very happy super experience",
      name: "Sakthi",
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
                      VANAKKAM Ramanathapuram
                    </h2>
                    <h1 className=" font-bold mt-4">
                      Best Fertility Centre In{" "}
                      <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Ramanathapuram</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      Turning parenthood hopes into beautiful realities.
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
          <InfiniteMovingCardsDemo reviews={RamanathapuramReview} />
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
                  <motion.div
                    className="flex flex-col lg:flex-row gap-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2 mt-5">
                      <h3 className="text-[#173366]  font-semibold">
                        About
                      </h3>

                      <p className="mt-3 text-gray-600">
                        IInfertility is a widespread issue that many families face, yet the impact on each family’s life is deeply personal and unique. Identifying the underlying causes and addressing them with care is a vital part of the journey. With the right resources and support, turning dreams of parenthood into reality is within reach. At our Ramanathapuram fertility hospital, our compassionate experts ensure you receive individualized care and unwavering support throughout your experience.
                      </p>
                      <h3 className="text-[#173366] mt-3 font-semibold">
                        Best Fertility Treatments in Ramanathapuram  :
                      </h3>

                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                  </motion.div>
                  <motion.div>
                    <p className="mt-3 mb-3 text-gray-600">
                      At our advanced fertility hospital in Ramanathapuram, we specialize in reproductive care using the latest IVF technologies and techniques. Our experienced professionals and cutting-edge facilities ensure you receive the highest quality treatment.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
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
                    <p className="mt-3 text-gray-600">
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Ramanathapuram.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Ramanathapuram?
                    </h3>
                    <p className=" text-gray-600 mt-3">
                      We recognize that dealing with infertility can be both emotionally and physically draining. At our Ramanathapuram fertility hospital, our compassionate experts ensure you receive individualized care and unwavering support throughout your experience. Our success story spans from young to older couples, with high success rates.
                    </p>
                    <p className="text-gray-600 mt-3">
                      Being the best fertility centre in Ramanathapuram means we are committed to your success. Let us partner with you on your journey to parenthood, making it as hopeful and fulfilling as possible. Sudha Fertility Centre in Ramanathapuram, the top fertility hospital, offers world-class facilities and cutting-edge technologies.
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
                    <div className="w-full lg:w-1/2">
                      <h3 className="text-[#173366] font-semibold mt-3">
                        Facilities
                      </h3>
                      <p className="text-gray-600 mt-3">
                        At Sudha Fertility Centre, we combine world-class technology and expert care to ensure a smooth, personalized journey into parenthood as the best fertility centre in Ramanathapuram.
                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>Fully-equipped Diagnostic Services</li>
                        <li>World-class IVF Laboratory</li>
                        <li>State-of-the-art Operation Theatres </li>
                        <li>Supporting Medical Staff </li>
                        <li>Cost Efficient Procedures </li>
                        <li>Round-the-clock Pharmacy </li>
                        <li>24*7 Medical Care </li>
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
                        in Ramanathapuram
                      </h3>
                      <h4 className="text-[20px] font-semibold mt-2 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in
                        Ramanathapuram
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
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={keerthana}
                        alt="keerthana"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold ">
                        Our Fertility Specialist in Ramanathapuram
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr .R. Kalaivani
                      </h3>
                      <p className="text-md text-[#000000] mt-2">
                        MBBS., MS(OG)
                      </p>
                      <p className="text-[#000000] mt-3">
                        Consultant OB/Gynac&Infertility
                      </p>
                      <p className="text-md text-gray-600 mt-2">
                        Dr. R. Kalaivani, MBBS, MS(OG), is a highly experienced
                        Consultant OB/GYN and Infertility Specialist at Sudha
                        Fertility Centre. With her expertise and compassionate
                        care, she provides tailored solutions to support couples
                        in their fertility journey and achieve parenthood.
                      </p>
                    </div>
                  </motion.div>

                  <hr className="mt-4 border-gray-300" />
                </section>
              </ScrollMotion>

              <ScrollMotion>
                <section id="gallery">
                  <h3 className="text-[#173366] mt-5  font-semibold">
                    Gallery
                  </h3>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ImageGrid images={Ramanathapuram.gallery} />
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
                            <p className="font-semibold text-gray-500">
                              Address
                            </p>
                            <p className="font-semibold">
                             68, Madurai - Rameswaram Highway, Ramanathapuram, Tamil Nadu 623502
                            </p>
                            <Link href="https://maps.app.goo.gl/ucTyi5L2TBeWhwPT8">
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
            {Ramanathapuram.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Ramanathapuram.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Ramanathapuram.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        /> */}

           <GallerySlider items={ramanathapuramVideos} />
        <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
        {/* <MarqueeComponent
          items={Ramanathapuram.gallery}
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

export default RamanathapuramPage;
