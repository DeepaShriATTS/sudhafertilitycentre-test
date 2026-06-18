"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/Thanjavur/thanjavur_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/branch/Thanjavur/Thanjavur.webp";
import pugalselvi from "@/assets/branch/Thanjavur/pugalselvi.webp";
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
import { Ambattur, Thanjavur } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";

function ThanjavurPage() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to initial count when showing less
      setShowAll(false); // Properly toggle state
    } else {
      setVisibleCount(Thanjavur.faqs.length); // Show all FAQs
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



  const ThanjavurReview = [
    {
      quote:
        `I'm happy to share my experience here. I cannot express enough how grateful I am to have found sudha fertility center. From the moment my partner and I walked in, the entire team made us feel welcomed and supported. The nursing staff and doctor, and pharmacy staff is incredibly knowledgeable, compassionate, and genuinely caring. They took the time to listen to our concerns, answer all our questions, and walk us through every step of the process
  And now we having twin baby in our  hand and best ivf center in Thanjavur. Thank-you`,
      name: "Surya Moorthi",
      title: "Patient",
    },
    {
      quote:
        "The doctor are very experience and the treatment process is very smooth. I highly recommend this ivf hospital in thanjavur for any one facing fertility issues",
      name: "Annatradetnj M",
      title: "Patient",
    },
    {
      quote:
        "Best Fertility Centre in Thanjavur I struggled with infertility for years, but this place gave me hope. The doctors explained everything clearly, and the staff was very kind mathumitha . Now, I am pregnant, and I am forever grateful to this IVF Hospital in Thanjavur .",
      name: "Madhu Mitha",
      title: "Patient",
    },
    {
      quote:
        "They used the latest fertility treatment, in sudha IVF hospital thanjavur very happy with treatment thanks for Dr and Staff",
      name: "Barani Kumar",
      title: "Patient",
    },
    {
      quote:
        "Best IVF centre in Thanjavur, Aslo best doctor for IVF treatment and also. Experienced staffs & quality treatment",
      name: "Jaya Prasath k",
      title: "Patient",
    },
    {
      quote:
        "First i thank god for My cute Girl baby's i like to thank doctor  Pugal selvi mam in reception there approach is good and they cleanly explained what we have do to, staff are very polite and kindly attend the patient. Counselling is the best.. Thanks to sudha hospital Thanjavur....",
      name: "M. AkasH",
      title: "Patient",
    },
    {
      quote:
        "Awesome Experience in Sudha fertility Centre Thanjavur. They Charging Very Affordable cost for IVF treatment. Our Success Rate Was High. Thanks to Sudha Hospital thanjavur...",
      name: "Noor impax Trades",
      title: "Patient",
    },
    {
      quote:
        "Best  IVF center in delta  area Sudha hospital thanjavur   cost  wise afortable  and then  Doctor madam Counselor explain about the procedure very clearly, They arrange VC with Dr.Pradeepa Madam.",
      name: "sakthichandrasekar1997",
      title: "Patient",
    },
    {
      quote:
        "After So many Confusion we have came to Sudha Hospital Thanjavur Branch, Doctor explain about the procedure very clearly, Best fertility center in Thanjavur, Affordable IVF Center in TV Tanjavur, Staffs are Very Friendly....",
      name: "Dinesh R",
      title: "Patient",
    },
    {
      quote:
        "Sudha Fertility center is one of the Best IVF center in thanjavur , compare to other Hospital cost effective, Very good staffs, we have taking treatment here for past 6 Months, With the Help of God and Sudha Hospital Doctors, Today we got positve results for My Sister.",
      name: "Mohamed Jasim M",
      title: "Patient",
    },
    {
      quote:
        "Best IVF center  in Thanjavur  cost wise  very affordable.   And then dr , pugal selvi. Mam  explain very clearly   and counseling was ver  good  thank s to sudha team",
      name: "Manjula s",
      title: "Patient",
    },
    {
      quote:
        "Best IVF center in Thanjavur. I came here with lots of doubts and fear.But Dr.Pugal selvi mam explained everything clearly.All Staffs are very kind and caring all the time. Cost wise I recommend this hospital Compare to other than. In happy minded we are expecting a baby soon.",
      name: "Jennieflora Jenni",
      title: "Patient",
    },
    {
      quote:
        "One of the best IVF Center in Thanjavur,  Staffs r very frindly and good Knowledged persons, DR. PUGAL SELVI madam explain very clearly about to Procedure and we got Positive result. Thanks to sudha hospital team......",
      name: "Manishiya K",
      title: "Patient",
    },
    {
      quote:
        "Best IVF center  in Thanjavur sudha hospital  staffs and Dr .pugal selvi Mam explain very clearly   abt treatment we are taking treatment  now I m very happy eni egalukum oru kulanthai",
      name: "Devika",
      title: "Patient",
    },
    {
      quote:
        "Its very gud Hospital nd gud facilities health care. The stfs care all good nd friendly. Now we r blessed wid Boy baby.Thanks to Dr.Pugal Madam nd Staffs Hema, Krishna,Aarthi Madam,nd Gayu, Subhash.. And Thanks to SUDHA HOSPITAL Thanjavur...",
      name: "HARIHARAN ANNAMALAI",
      title: "Patient",
    },
    {
      quote:
        "One of the Best IVF Center In Thanjavur, Doctor Madam explan me about the procedure very Clearly, Op Nurse are Very Friendly....",
      name: "Vignesh Raj",
      title: "Patient",
    },
    {
      quote:
        `we got  married 6 years back still we dont have child,  we have taken treatment in 2 hospital we did not   Get any POSITIVE  result, we came to Thanjavur Sudha hospital in the month of  november,  now we got POSITIVE  result Thank you Sudha Hospital Thanjavur.
  Spl Thanks to OP staff Hema  Krishna  and Subash for the Wonderfull  support😊`,
      name: "KRISHNAVENI K",
      title: "Patient",
    },
    {
      quote:
        "Best IVF Centre in Thanjaur.. I am takingtreatment from sudhafertility thanjai,my Wife is pregnant. I am so  happy.. THANKS TO SUDHA HOSPITAL THANJAUR",
      name: "Gayathri M",
      title: "Patient",
    },
    {
      quote:
        "Best IVF  center in delta area sudha hospital  Thanjavur,  cost wise reasonable compare to other hospital , today we got Positive Result , Thanks to Doctor madam and sudha Hospital Thanjavur.",
      name: "Jaya K",
      title: "Patient",
    },
    {
      quote:
        "We are very much happy nd satisfied for the service provided by the patient. All staffs and nurses are responsible in their work. Thanks to thanjavur sudha hospital",
      name: "tamil elakiya",
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
                      VANAKKAM Thanjavur
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Thanjavur</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                      A new chapter begins with trust and compassion.
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
        <div className="absolute -bottom-80 lg:-bottom-64 w-full">
          <InfiniteMovingCardsDemo reviews={ThanjavurReview} />
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
                  <motion.div
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
                        Sudha Fertility Centre opened its Thanjavur branch in 2022 with a mission to provide top-quality fertility care. As the leading fertility hospital in Thanjavur, we offer personalised care at every stage of your parenthood journey. Our compassionate and experienced team is dedicated to turning your dream of becoming a parent into a reality.
                      </p>
                      <h3 className="text-[#173366] mt-3 font-semibold">
                        Best Fertility Treatments in Thanjavur:
                      </h3>
                      <p className="mt-3 text-gray-600">
                        Discover exceptional fertility treatments in Thanjavur at Sudha Fertility Centre. With a team of experienced specialists and state-of-the-art technologies, we are dedicated to helping you achieve your dream of parenthood.
                      </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5 sm-hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="mt-3 mb-3 text-gray-600">
                      As the best fertility hospital in Thanjavur, Sudha Fertility Centre specialises in the following treatments,
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
                      <li>LAH -  Laser Assited Hatching </li>
                      <li>
                        Ovarian ABCD - Ovarian Rejuvenation (Autologous Blood
                        Cell Derivative)
                      </li>
                      <li>FET - Frozen Embryo Transfer</li>
                      <li>ENDOMETRIUM PRP - Platelet-Rich Plasma</li>
                    </ul>
                    <p className="mt-3 text-gray-600">
                      and other gynaec-related surgeries like C-section, Laparoscopy, Hysteroscopy, SSG, Cervical cerclage, Cyst and fluid aspiration, Myomectomy, ERA, OBS as well as other fertility preservation processes are performed by the best fertility doctors in Thanjavur.
                    </p>
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className=" text-[#173366] mt-3 font-semibold">
                      Why Sudha Fertility Centre is the Best Fertility Centre in Thanjavur?
                    </h3>
                    <p className="mt-3 text-gray-600">
                      Sudha Fertility Centre has had the privilege of guiding countless families on their path to parenthood. Every couple who enters with hope is treated with unwavering dedication, and there is no greater joy for us than seeing them hold their newborn. Our success stories in Thanjavur reflect this dedication, supporting from young couples to older couples, including those who have faced significant challenges in conceiving.
                    </p>
                    <p className="mt-3 text-gray-600">
                      Our fertility centre in Thanjavur has made a lasting impact by providing innovative and effective fertility solutions. With the expertise of top fertility specialists, we’ve helped numerous couples realise their dreams, transforming years of longing into moments of pure happiness at Sudha Fertility Centre.
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
                      <p className="mt-3 text-gray-600">
                        As the best fertility centre in Thanjavur, we provide personalised care and world-class treatments helping couples overcome their fertility challenges and enjoy the parenthood journey. We deliver excellence through scientifically proven fertility treatments, ensuring your journey is hopeful.
                      </p>
                      <ul className="text-gray-600 mt-3 list-disc pl-4 leading-[2.2]">
                        <li>Ultrasound / 4D scans </li>
                        <li>Echo Cardiogram / Treadmill </li>
                        <li>CT scan, Digital X-ray services </li>
                        <li>IVF laboratory </li>
                        <li>Pulmonology and endocrinology </li>
                        <li>
                          General surgery diabetology facilities/ general
                          medicine{" "}
                        </li>
                        <li>24/7 diagnostic services and laboratories </li>
                        <li>Dedicated labour ward for natural childbirth </li>
                        <li>Fully equipped and accessible pharmacies </li>
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
                        in Thanjavur
                      </h3>
                      <h3 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Chief Experts of Sudha Fertility Centre in Thanjavur
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
                    className="flex flex-col-reverse lg:flex-row gap-8 mt-7"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-full lg:w-1/2">
                      <Image
                        src={pugalselvi}
                        alt="pugalselvi"
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                    <div className="w-full lg:w-1/2">
                      {/* <h3 className="text-[20px] font-semibold">
                      Our Fertility Specialist in Thanjavur 
                      </h3> */}
                      <h3 className="text-[18px] text-[#173366] font-semibold mt-3">
                        Dr. Pugal Selvi
                      </h3>
                      <p className="text-md text-[#000000] mt-3">
                        MBBS, DGO, DNB
                      </p>
                      <p className="text-md text-[#000000] mt-3">
                        Fertility Consultant / Gynaecologist
                      </p>
                      <p className="text-gray-600 mt-3">
                        Dr. Pugal Selvi, DGO, DNB, is a consultant at Sudha Fertility Centre, Thanjavur Branch. With 2yr expertise in obstetrics and gynecology, she has performed numerous IVF, ICSI, and IUI procedures, providing compassionate care to over 250 patients. Dr. Selvi’s skillful execution of laparoscopic, hysteroscopic, and other procedures underscores her commitment to delivering exceptional healthcare.
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
                    <ImageGrid images={Thanjavur.gallery} />
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
                              10, Raja Nagar, New Bus Stand, Near HDFC Bank, Neelagiri Post, Thanjavur, Tamil Nadu - 613005.
                            </p>
                            <Link href="https://maps.app.goo.gl/bfKRAGHEHEjd17wy9">
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
            {Thanjavur.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Thanjavur.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Thanjavur.gallery}
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
          items={Thanjavur.gallery}
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

export default ThanjavurPage;
