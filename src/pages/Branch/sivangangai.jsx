"use client";
import React, { useState } from "react";
import BgAbout from "@/assets/branch/ambatur/hospital.webp";
import Calendar from "@/assets/branch/ambatur/callender.svg";
import Image from "next/image";
import Button from "@/components/button";
import SudhaAbout from "@/assets/branch/Salem/salem_about.webp";
import { motion } from "framer-motion";
import Pradeepa from "@/assets/branch/ambatur/pradeepa.webp";
import Hospital from "@/assets/dummy-location.webp";
import charulatha from "@/assets/branch/Salem/charulatha.webp";
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
import { Ambattur, Sivagangai } from "@/middleware/imagesroute";
import ScrollMotion from "@/components/animation/scrollMotion";
import BranchForm from "@/components/branchForm";
// import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import NotFound from "@/app/not-found";
import { sivangangaiVideos } from "@/middleware/videosRoute";
import GallerySlider from "@/components/videoCard/videoPlaylistSlider";
import LoadingSpinner from '@/components/ui/loadingSpinner';
import dynamic from "next/dynamic";
import { SalemReview,sections } from "./salem";
// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="400px" /> }
);

function SivangangaiPage() {
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
      setVisibleCount(Sivagangai.faqs.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };

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
                      VANAKKAM Sivangangai
                    </h2>
                    <h1 className="font-bold mt-4">
                      Best Fertility Centre In <br className="hidden sm:block" />
                      <span className="text-[#FDCB58]">Sivangangai</span>
                    </h1>
                    <p className="mt-4 text-[22px] leading-[1.6]">
                     Your trusted fertility partner in Sivagangai.
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
        <div className="absolute -bottom-80 lg:-bottom-64 w-full  ">
          <InfiniteMovingCardsDemo reviews={SalemReview} />
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
                      <h3 className="text-[#173366]  font-semibold">
                        About
                      </h3>

                      <p className="mt-3 text-gray-600">
                       Sudha Fertility Centre in Sivagangai is in association with Sabari Hospital, created with one clear vision: to bring hope closer to families who have been waiting for their miracle. Here, care is not rushed or routine; it is deeply personal. Couples who walk in are welcomed into a space where their emotions are understood, their questions are answered, and their journey is respected. Our doctors don’t just prescribe treatments; they sit with families, explain possibilities, and build confidence step by step.
                      </p>


                      <p className="mt-3 text-gray-600">
                         Every plan is crafted with precision, but also with empathy, because we know parenthood is more than science; it is a dream. With advanced reproductive technologies and a team that values compassion as much as expertise, Sivagangai’s branch stands as a beacon of trust for couples who want both medical excellence and emotional reassurance.
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
                    <h3 className="text-[#173366] mt-3 font-semibold">
                      Best Fertility Treatments Offered in Sivagangai:
                    </h3>
                    <p className="mt-3 text-gray-600">
                     At Sivagangai, fertility care is explained in detail, so couples never feel lost in medical jargon. Our specialists believe that clarity builds courage, and that’s why every treatment is discussed openly, with outcomes and processes made simple to understand. Whether it’s a first step like IUI or advanced procedures like IVF and ICSI, couples are guided with patience and confidence.At Sivagangai, fertility care is explained in detail, so couples never feel lost in medical jargon. Our specialists believe that clarity builds courage, and that’s why every treatment is discussed openly, with outcomes and processes made simple to understand. Whether it’s a first step like IUI or advanced procedures like IVF and ICSI, couples are guided with patience and confidence.
                    </p>
                    <p className="mt-3 mb-3 text-gray-600">
                     Treatments are not just about success rates; they are about giving families the strength to move forward with hope. This branch ensures that couples receive complete care from fertility solutions to women’s health surgeries, all under one roof, with the assurance of experienced hands and modern technology.
                    </p>
                    <h3 className=" text-[#173366] font-semibold mt-3 mb-3">
                      Core fertility treatments include:
                    </h3>
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
                     
                    </ul>
                   
                    <div className="w-full lg:w-1/2 mt-5 sm-block hidden">
                      <Image
                        src={SudhaAbout}
                        alt="Ambattur"
                        className="w-full object-cover rounded-md"
                      />
                    </div>
                    <h3 className="text-[#173366] font-semibold mt-3">
                      Why Sudha Fertility Centre is the Best IVF Hospital in Sivagangai?
                    </h3>
                    <p className="mt-3 text-gray-600">
                    Sudha Fertility Centre in Sivagangai is chosen by families because we go beyond treatment we provide trust. Our specialists are known for their ability to simplify complex procedures, making couples feel comfortable and confident. Success rates are high, but what makes us stand out is the way we care: with transparency, affordability, and a genuine commitment to each family’s dream. Diagnosis is quick, treatments are timely, and couples are never left waiting in uncertainty. Every journey is treated as unique, and every couple is given the respect they deserve. Families choose Sudha because they feel supported at every step, and that’s why we are recognized as the best IVF hospital in Sivagangai.
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
                        Facilities:
                      </h3>
                      <p className="mt-3 text-gray-600">
                       Our Sivagangai clinic offers a peaceful, hospital-free environment where your path to parenthood is met with gentle understanding. We have crafted private, relaxed spaces where couples can connect deeply with our doctors and feel completely supported. In our clinical laboratory, safe medical standards and highly trained hands work thoughtfully to protect your dreams. We focus on smooth, organized care to give you answers quickly and minimize your stress. We ensure your family receives dedicated, professional treatment wrapped in loving care. 
                      </p>
                  
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
                        in Sivagangai
                      </h3>
                      <h4 className="text-[20px] font-semibold mt-3 leading-[1.4]">
                        Meet Dr. S. Pradeepa Sudhakar, the Chief Expert at Sudha Fertility Centre in Sivagangai and Vice President of Sudha Hospitals Pvt. Ltd.  
                      </h4>
                     <h4 className="text-[18px] text-[#173366] font-semibold mt-3">
                       Dr. S. Pradeepa Sudhakar holds qualifications in DGO, DNB (OG), MNAMS, and FICOG, and she serves as a Senior Consultant IVF and ART Specialist.  
                      </h4>
                       <p className="text-md text-[#000000] mt-3">
                       Dr. S. Pradeepa Sudhakar is renowned for her exceptional clinical skills and in-depth expertise in fertility-enhancing procedures and advanced reproductive technologies. She focuses on patient care and maintains impressive success rates, helping countless couples achieve their dream of becoming parents.  

                      </p>
                      {/* <p className="text-[#000000] mt-3">
                        Senior Consultant IVF & ART Specialist Senior Faculty FNB (Reproductive Medicine - NBEMS)
                      </p> */}
                    

                      <div className="sm-block hidden">
                        <p className="text-md  text-gray-600 mt-3">
                        As Vice President of Sudha Fertility Centre, Dr. Pradeepa has successfully led the organization’s strategic expansion, establishing over 40 branches in just five years. Her commitment to medical excellence pairs with her compassionate counselling services, which support and guide patients throughout their fertility journeys.

                        </p>
                        <h3 className="text-[20px] font-semibold mt-4">Awards & Achievements:</h3>
                        <ul className="text-gray-600 list-disc pl-4 mt-3 leading-[2.2]">
                          <li>Member of the American Society for Reproductive Medicine (ASRM)</li>
                          <li>Member of the European Society of Human Reproduction & Embryology (ESHRE)</li>
                          <li>Lifetime Member of the Indian Society for Assisted Reproduction (ISAR)</li>
                          <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India</li>
                          <li>Faculty Member, International Federation of Fertility Societies</li>

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
                        <li>Member of the American Society for Reproductive Medicine (ASRM)</li>
                        <li>Member of the European Society of Human Reproduction & Embryology (ESHRE)</li>
                        <li>Lifetime Member of the Indian Society for Assisted Reproduction (ISAR)</li>
                        <li>Lifetime Member of the Federation of Obstetrics & Gynaecology Societies of India</li>
                        <li>Faculty Member, International Federation of Fertility Societies</li>

                    </ul>
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
                    <ImageGrid images={Sivagangai.gallery} />
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
                              C/o. Sabari Maternity And Childcare Hospital, No4/106, Judge Rajasekaran Street, Theppakolam Opp, Near Aranmanaivasal Sivagangai - 630561
                            </p>
                            <Link href="">
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
            {/* <div className="max-w-2xl mx-auto p-4"> */}
            <h2 className="font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {Sivagangai.faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {Sivagangai.faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          items={Sivagangai.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />

        
        {/* <div className="flex justify-center flex-wrap gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div> */}


        <MarqueeComponent
          items={Sivagangai.gallery}
          direction="right"
          speed="fast"
          className="custom-class"
        />
        {/* </div>
          </div> */}
      </section>
    </>
  );
}

export default SivangangaiPage;
