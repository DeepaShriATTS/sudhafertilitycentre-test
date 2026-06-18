"use client";
import Button from "@/components/button/button";
import { InfiniteMovingCardsDemo } from "@/components/review_Card/reviewCard";
import React, { useState } from "react";
import SubBanner from "@/assets/contact-us/SubBanner.webp";
import Tab1 from "../assets/international/Visa.webp";
import Tab2 from "../assets/international/Transportation.webp";
import Tab3 from "../assets/international/Accommodation.webp";
import Tab4 from "../assets/international/Payment.webp";
import Tab5 from "../assets/international/languageservices.webp";
import Icon1 from "@/assets/Home/tab1.svg";
import Icon2 from "@/assets/Home/tab2.svg";
import Icon3 from "@/assets/Home/tab3.svg";
import Icon4 from "@/assets/Home/tab4.svg";
import Icon5 from "@/assets/Home/tab5.svg";
import FAQItem from "@/components/accordion";
import Image from "next/image";
import fb from "@/assets/Home/fb.svg";
import x from "@/assets/Home/x.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import Insta from "@/assets/Home/insta.svg";
import BookingButton from "@/components/button/bookingButton";
import VideoThumbnail from "@/assets/international/VideoThumbnail.png";
import MetricsTabs from "@/components/ui/internationaltab";
import { AnimatePresence, motion } from "framer-motion";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur } from "@/middleware/imagesroute";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/contact/contactForm";
import Link from "next/link";
import Buttonbottm from "@/components/button";
import { MdArrowOutward } from "react-icons/md";

const testimonials = [
  {
    name: "Dmitry & Yelena Petrov",
    text: "I traveled all the way from Russia to India for fertility treatment, and choosing Sudha Fertility Centre in Erode was the best decision. The doctors here are highly skilled and provided me with world-class care. They explained every step of my IVF journey in detail and ensured I was comfortable throughout. Despite my initial concern about language barriers, it was never an issue as they had excellent interpreters to assist me throughout the process. The cutting-edge facilities and compassionate staff made me feel at home. After struggling for years, I am now expecting, all thanks to this Best Fertility Centre in Erode! I highly recommend this IVF Hospital in Erode for couples looking for expert fertility care. Definitely the top Fertility Hospital in Erode!",
    // image: ProfileImage,
  },

  {
    name: "Henry & Charlotte Hawthorne",
    text: "Fertility treatments in the UK were beyond our budget, so we decided to explore options in India. After researching, we chose the Sudha Fertility Centre in Chennai, and it was the best decision ever! The treatment costs here are affordable compared to Western countries, yet the quality is outstanding. The doctors and medical staff provided exceptional care, and the process was smooth. What made it even better was the hassle-free experience—the clinic assisted us with the visa process and transportation, making our journey so easy. I am thrilled to share that I conceived successfully after my first IVF cycle! If you're looking for a Fertility Hospital in Chennai that offers effective treatments at reasonable costs, this is the place! Truly the Best Fertility Centre in Chennai with top-notch care and high success rates!",
    // image: ProfileImage,
  },
  {
    name: "Sagar & Purnima Tamang",
    text: "We flew from Nepal to Sudha Fertility Centre in Coimbatore after hearing about their high success rates, and it was a life-changing experience. At first, we were scared as we didn’t know anyone, and nobody could help us here, but the intermediate persons assisted us all the way, making everything smooth and stress-free. They welcomed us with such warm care. The center is equipped with the most advanced reproductive technology, and the doctors are pioneers in fertility treatments. Despite multiple failed IVF attempts in Nepal, I finally conceived here! The personalized approach, expert guidance, and state-of-the-art techniques make this the Best Fertility Centre in Coimbatore. They were also incredibly helpful in providing accommodation and ensuring a comfortable stay during our treatment. If you're searching for a reliable IVF Centre in Coimbatore, this is the right place. Their expertise in assisted reproduction makes them the top IVF Hospital in Coimbatore. Highly recommended!",
    // image: ProfileImage,
  },
  // Add more testimonials as needed
];

function International() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const toggleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to initial count when showing less
      setShowAll(false); // Properly toggle state
    } else {
      setVisibleCount(FAQData.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };

  const tabs = [
    {
      title: "Visa",
      label: "Visa",
      content: {
        heading: "Visa",
        description: (
          <ul className="list-disc pl-5 pr-5  text-gray-600">
            <li>
              Medical Visa or OCI card (overseas citizen of India) is compulsory
              for foreign nationals looking for medical treatment in India
            </li>
            <li>
              You must have a medical visa/OCI card for any kind of treatment
              including examinations, diagnostic tests, indoor admission of the
              patients, major operations, and interventions.
            </li>
            <li>
              Foreign nationals can only at best go for an OPD consultation with
              a nonmedical Visa.
            </li>
            <li>
              Must avoid liberal recommendations for medical visa extension.
            </li>
            <li>
              In case of emergency normal Visa can be transferred to a medical
              visa. Patients have to apply for the change at the regional FRRO
              office.
            </li>
            <li>
              Couples with Foreign nationality and OCI card holders are barred
              from seeking surrogacy in India. They can avail fertility
              treatment for themselves under a Medical Visa.
            </li>
          </ul>
        ),
        image: Tab1,
      },
      icon: Icon1,
    },
    {
      title: "Transportation ",
      label: "Transportation ",
      content: {
        heading: "Transportation ",
        description:
          "We persuade international patients to visit our center and benefit from our technology and high success rates. Complimentary airport pick-up and drop service will be provided by Sudha Fertility’s International Team. The team will also assist you with your travel while in India. ",
        image: Tab2,
      },
      icon: Icon2,
    },
    {
      title: "Accommodation ",
      label: "Accommodation ",
      content: {
        heading: "Accommodation",
        description:
          "Our international patient care team will help you find affordable, suitable, and safe accommodation for the duration of your treatment with us. You can reach out to the care team if you face any difficulties concerning your stay and we will help you make alternate arrangements. ",
        image: Tab3,
      },
      icon: Icon3,
    },
    {
      title: "Payment ",
      label: "Payment",
      content: {
        heading: "Payment",
        description: (
          <div>
            <p className="text-gray-600 mb-4  mt-2">
              You can make payments to Sudha Fertility Centre through the
              following options:
            </p>
            <ul className="list-disc pl-5 pr-5 text-gray-600">
              <li>Cash</li>
              <li>Wire Transfer</li>
              <li>Online Payment</li>
            </ul>
          </div>
        ),
        image: Tab4,
      },
      icon: Icon4,
    },
    {
      title: "Language Services ",
      label: "Language Services",
      content: {
        heading: "Language Services",
        description: (
          <div>
            <div>
              <p>
                Language will never be a barrier to achieving your dreams of
                having a child. At Sudha Fertility Centres, we offer the
                services of language interpreters to facilitate smooth
                communication between doctors and patients. Interpreters are
                available in multiple languages, including French, Spanish, and
                Russian.
              </p>
            </div>
          </div>
        ),
        image: Tab5,
      },
      icon: Icon5,
    },
  ];

  const FAQData = [
    {
      question: "What is the cost of fertility treatments in India? ",
      answer:
        "The average cost of IVF treatment in India is ₹1,20,000 to ₹2,50,000. However, the exact cost can vary based on factors like the clinic, treatment type, medications, number of cycles, and additional procedures. As a leading IVF Centre in India, Sudha Fertility Centre offers personalized care with transparent and affordable pricing. ",
    },
    {
      question: "How to choose the best IVF center in India? ",
      answer:
        "Before choosing an IVF center you have to consider the success rates, the expertise and experience of the IVF doctors, facilities, infrastructures, and the treatments they provide. As the leading and best IVF center in India, Sudha Fertility Centre provides world-class IVF treatments with the leading fertility experts in India with cutting-edge equipment. We hold a high success rate, with 1 lakh+ healthy babies delivered. ",
    },
    {
      question:
        "Which hospital provides the best fertility treatments in India?",
      answer:
        "Sudha Fertility Centre provides the best fertility treatments in India specializing in IVF treatments. With the best fertility experts in India combining world-class facilities with compassionate care, our team is dedicated to helping you in every step of your journey toward parenthood.",
    },
    {
      question:
        "How to proceed with Fertility treatments for foreigners in India?",
      answer:
        "International patients seeking fertility treatment in India can apply for a medical visa and choose their preferred hospital for treatment. At Sudha Fertility Centre, the best IVF centre in India we assist foreign patients throughout the process, from visa guidance to treatment planning.",
    },
    {
      question: "What is the duration of Fertility treatments in India?",
      answer:
        "Each fertility treatment takes a different time duration for positive results. IUI takes approximately 4 weeks but IVF takes more time approximately around 6 - 8 weeks for positive results. This timeframe is estimated as the success of each treatment may vary due to different factors like age, and the health condition of the patients. Our dedicated team at Sudha Fertility Centre offers you personalized treatments and comprehensive support ensuring each patient receives the best care and makes your dream of parenthood into reality.  ",
    },
    {
      question:
        "What are the legal requirements for fertility treatments in India? ",
      answer:
        "The patients seeking fertility treatments in India should have a medical visa or OCI card (overseas citizen of India). With a non-medical visa, foreign nationals can only go for an OPD consultation.",
    },
    {
      question:
        "Can foreigners get travel and accommodation support for fertility treatments in India ",
      answer:
        "Yes, international patients can receive assistance with travel and accommodation arrangements. Sudha Fertility Centre provides accommodation facilities for foreign patients, but the expenses are to be covered by the patient. Our team also offers guidance on travel options to ensure a smooth and hassle-free treatment journey.",
    },
    {
      question:
        "Will my partner need to be present for the entire treatment process? ",
      answer:
        "Yes, both partners must be present at Sudha Fertility Centre during the initial stage of the treatment for consultations and diagnosis. After the evaluation, the female partner will need to stay for the entire treatment process. The husband's presence will depend on the specific fertility procedure recommended.",
    },
    {
      question:
        "Are there any specific fertility treatment packages for international patients? ",
      answer:
        "Yes, Sudha Fertility Centre offers fertility treatment packages for international patients. However, the package details will be determined after a consultation with our fertility specialist, based on the patient's medical condition and treatment requirements. ",
    },
    {
      question:
        "What documents do foreigners need for fertility treatment in India?",
      answer:
        "Foreign couples seeking fertility treatment in India must provide a medical visa letter from their embassy, an original passport copy, and a marriage certificate. If available, recent fertility reports can also be submitted to assist in treatment planning. At Sudha Fertility Centre, our team will guide you through the necessary documentation and treatment process. ",
    },
    {
      question:
        "Is video consultation available for foreigners getting fertility treatments in India? ",
      answer:
        "Yes, Sudha Fertility Centre offers video consultations with our chief fertility doctor to address fertility-related concerns and explain the treatment process before patients travel to India. This helps international patients understand their options and prepare for their treatment journey in advance.",
    },
    {
      question: "Can foreigners get IVF in India? ",
      answer:
        "Yes, foreign couples can undergo IVF treatment in India. At Sudha Fertility Centre, we provide advanced IVF treatments for international patients, following all legal and medical guidelines. A valid medical visa, required documents, and compliance with Indian regulations are necessary for treatment. Our team assists with the entire process, from consultation to post-treatment care, ensuring a smooth experience.",
    },
  ];




  const international_patients = [
    {
      quote:
        "I journeyed from Russia to Sudha Fertility Centre in Erode, and it proved to be an exceptional choice. The highly skilled doctors delivered world-class treatment, and after years of struggle, I am finally expecting. Despite initial concerns, language was never an obstacle, thanks to their proficient interpreters. Undoubtedly, the Best Fertility Centre in Erode for advanced fertility care!",
      name: "Anna Petrova",
      title: "Patient",
    },
    {
      quote:
        "Treatments in the UAE were costly, so we chose Sudha Fertility Centre in Chennai. The costs here are affordable, and the quality is top-notch. The clinic assisted with the visa process, making everything smooth. Highly recommend this Fertility Hospital in Chennai!",
      name: "Ahmed Al-Mansoori",
      title: "Patient",
    },
    {
      quote:
        "We came from Kenya to Sudha Fertility Centre in Coimbatore. The advanced technology and high success rates are remarkable! The staff helped with accommodation, making our stay comfortable. The Best IVF Centre in Coimbatore for sure!",
      name: "Grace Otieno",
      title: "Patient",
    },
    {
      quote:
        "Visiting Sudha Fertility Centre in Madurai from Malaysia was a great choice. Affordable treatments and positive outcomes! The visa process was hassle-free with their support. The Best IVF Hospital in Madurai",
      name: "Li Wei Tan",
      title: "Patient",
    },
    {
      quote:
        "We flew from  to Sudha Fertility Centre in Pondicherry. The doctors' expertise and care were exceptional. Language was never a barrier, thanks to their interpreters. I finally conceived here—truly the Best Fertility Hospital in Pondicherry",
      name: "Nisha Perera",
      title: "Patient",
    },
    {
      quote:
        "We were scared coming from Nepal to Sudha Fertility Centre in Coimbatore, but the intermediate persons assisted us all the way. The advanced treatments and expert doctors made my dream come true. The top IVF Hospital in Coimbatore!",
      name: "Ramesh Shrestha",
      title: "Patient",
    },
    {
      quote:
        "Fertility treatments in the UK were prohibitively expensive, prompting us to seek alternatives at Sudha Fertility Centre in Bangalore. From the moment we arrived, the clinic exceeded our expectations with its exceptional medical care, advanced technology, and compassionate staff. The treatment was not only affordable but also highly effective, delivering remarkable results. Their well-organised transportation facilities made our journey stress-free, allowing us to focus entirely on the treatment process. I am beyond grateful for the personalised support and expertise we received. I wholeheartedly recommend this IVF Centre in Bangalore to anyone seeking world-class fertility care with outstanding success rates!",
      name: "Emily Clarke",
      title: "Patient",
    },
    {
      quote:
        "Flew from Singapore to Sudha Fertility Centre in Erode for affordable treatment. After struggling for years, I conceived in my first cycle! The Best IVF Hospital in Erode with caring staff and a great success rate!",
      name: "John Taneya",
      title: "Patient",
    },
    {
      quote:
        "Sudha Fertility Centre in Chennai offers exceptional treatments! Traveling from Oman, the visa process was so easy with their help. The doctors provided personalized care, and I’m now expecting. Truly the Best Fertility Hospital in Chennai!",
      name: "Fatima Al-Balushi",
      title: "Patient",
    },
    {
      quote:
        "Came from Sri Lanka to Sudha Fertility Centre in Madurai for their high success rate. The advanced technology and expert doctors are amazing! They provided transportation, making our visit stress-free. Best Fertility Centre in Madurai!",
      name: "Yagiya Silva",
      title: "Patient",
    },
  ];


  return (
    <>
      {/* Banner */}
      <div className="relative h-[650px] mb-40">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-cover -top-40 bg-center">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source
              src="https://ship-crm-img.s3.eu-north-1.amazonaws.com/Video_03_01.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-[#173366A1] opacity-85"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 ">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-semibold mt-3">
                Bringing world-class care closer to you.
              </h1>
              <p className="mt-3 text-[22px] leading-[1.6]">
                Benefits of Consulting in Sudha
              </p>
              <div className="mt-6 flex justify-center">
                <Link
                  href="https://wa.me/917670076006?text=Hi,%20Can%20I%20get%20more%20info%20on%20this?"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BookingButton title="Connect with WhatsApp" link="#contactus">


                  </BookingButton>

                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute  -bottom-40 w-full">
          <InfiniteMovingCardsDemo reviews={international_patients} />
        </div>
        <div
          className="absolute bottom-0 w-full h-36"
          style={{
            background:
              "linear-gradient(to top, rgba(255, 255, 255, 1), transparent)",
          }}
        ></div>
      </div>

      {/* Baby's smile in every hopeless home marks our proudest milestone. */}
      <div className="container mx-auto mt-[70] md-[100px] ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">
              Baby's smile in every hopeless home marks our proudest milestone.

            </h2>
            <h2 className="font-outfit font-semibold lg:block mt-2"> Our Achievements</h2>
          </div>

          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-[#173366] text-center">
                        3.5L+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Infertile Couples Counselled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="icon mr-4"></div>
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-center text-[#173366]">
                        1L+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Laparoscopic Surgeries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-center text-[#173366]">
                        35k+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        IUI Babies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h4 className="text-[36px] font-semibold text-center text-[#173366]">
                        60k+
                      </h4>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        IVF Babies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full  mt-[70px] md-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col md:flex-row items-start">
            {/* Text Section */}
            <div className="md:w-1/2 pl-4 pr-4">
              <h2 className=" font-semibold mb-4">Visa Process</h2>
              <p className="text-gray-600 mb-4">
                Sudha Fertility Centre welcomes international clients to avail
                themselves of the benefits of our treatment, subject to the
                fulfillment of legal obligations. As a rule, all foreign
                patients visiting a Medical Visa must register upon arrival with
                the FRRO within 14 days. We assist with all the paperwork you
                would have to get out of the way—from helping with filing forms
                to having them forwarded to the embassies—so you can have a
                stress-free experience.
              </p>
              <p className="text-gray-600 mb-4">
                {"1) "}The process begins when the patients inquire by filling
                out a form. The offices of the Fertility Center will reach out
                to you at the earliest with information about:
              </p>
              <ul className="list-disc pl-5 text-gray-600 mb-4 leading-[2.2]">
                <li>The estimated cost of undergoing procedures</li>
                <li>The approximate timeframe of treatment</li>
                <li>
                  Available accommodations and dining facilities for inpatients
                </li>

                <li>
                  Availability and estimate figures of rent for guest houses or rental houses
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 p-4">
              <div className="relative sm-hidden">
                <Image
                  src={VideoThumbnail}
                  alt="Visa Process Video"
                  className="w-full h-auto object-cover rounded-lg"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() =>
                      window.open(
                        "https://youtu.be/CKl3DrMYtdE?si=rOZ8alWeu49gL7Tq",
                        "_blank"
                      )
                    }
                    className="bg-white p-2 rounded-full shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="relative sm-block hidden">
                <Image
                  src={VideoThumbnail}
                  alt="Visa Process Video"
                  className=" h-auto object-cover rounded-lg"
                  width={600}
                  height={400}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() =>
                      window.open(
                        "https://youtu.be/CKl3DrMYtdE?si=rOZ8alWeu49gL7Tq",
                        "_blank"
                      )
                    }
                    className="bg-white p-2 rounded-full shadow-lg"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 10v4a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4 ms-4 ">
            {"2) "} Following receipt and perusal of the details given the
            patient must confirm their travel plans.
          </p>
          <ul className="list-disc pl-4 ms-4 pr-4 text-gray-600 leading-[2.2]">
            <li>
              Then, our overseas support team would send the relevant letter for the Medical Visa to the patient and the accompanying attendant.
            </li>
            <li>
              The patients can apply for their Medical Visa on
              http://boi.gov.in/content/registration-requirements-foreign-national.
            </li>
          </ul>
          <p className="text-gray-600 mb-4 ms-4 mt-4">
            {"3) "} A team representative will receive the patient and attendant upon arrival. At this time, their passports and Medical VISAs are verified to reduce the chances of any hassles upon registration at the FRRO.
          </p>

          <ul className="list-disc pl-4 ms-4 pr-4 text-gray-600 mt-2 leading-[2.2]">
            <li>
              When all the paperwork and registrations are in order, the patient
              may then begin the consultation and treatment process. If the
              treatment ends within the stipulated time, the patient may leave
              to go back to their home country.
            </li>
            <li>
              If not, the option to extend their Medical VISA is also available, which can be done upon the submission of relevant documents.
            </li>
          </ul>
        </div>
      </div>

      {/* Tab  */}
      <div className="container mx-auto  mt-[70] md-[100px] ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="tab mt-12">
            <MetricsTabs tabs={tabs} />
          </div>
        </div>
      </div>

      <div className="container mx-auto  mt-[70] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="relative min-h-[250px] rounded-lg shadow-2xl overflow-hidden"
            style={{
              backgroundImage: `url(${SubBanner.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative h-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 mt-9">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="font-outfit font-semibold mt-5 text-white">
                  Welcome Your Baby into Your Home
                </h2>
              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                <Button title="Book Your Appointment" link="#contactus" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#F7F7F7] mt-[70] md:mt-[100px]">
        <div className="container max-w-7xl mx-auto pt-5 pb-7">
          <div className=" text-center relative">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoArrowBackSharp />
              </button>
              <motion.div
                key={current}
                className="p-[25px]"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className=" font-semibold mb-4">
                  {testimonials[current].name}
                </h2>
                <p className="text-gray-600 mb-4">
                  {testimonials[current].text}
                </p>
              </motion.div>

              <button
                onClick={nextSlide}
                className="text-gray-500 hover:text-gray-700"
              >
                <IoArrowForwardOutline />
              </button>
            </div>

            <div className="flex justify-between items-center mt-4">
              <div className="flex justify-center items-center space-x-2 w-full">
                <span>{String(current + 1).padStart(2, "0")}</span>
                <div className="w-[100px] bg-gray-300 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-[#173366] h-full transition-all duration-300"
                    style={{
                      width: `${((current + 1) / testimonials.length) * 100}%`,
                    }}
                  />
                </div>
                <span>{String(testimonials.length).padStart(2, "0")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* contact  */}
      <section className="mt-[70] md:mt-[100px]" id="contactus">

        <ContactForm />
      </section>

      <div className="container mx-auto relative h-full mt-[70] md:mt-[100px]">
        <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
          <div className="content mx-auto flex-1 text-center lg:text-left">
            <h2 className="font-outfit font-semibold ">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-5">
            {FAQData.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {FAQData.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
              <div className="text-center mt-16">
                <button
                  className="button-all mx-auto"
                  onClick={toggleViewMore}
                >
                  {showAll ? (
                    <>
                      View Less <FaArrowLeft />
                    </>
                  ) : (
                    <>
                      View More <FaArrowRight />
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <section className="mt-[70] md:mt-[100px] mb-[70] md:mb-[100px]">
        {/* <div className="container mx-auto">
          <div className=" mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex md:flex-row  flex-col justify-center gap-4 items-center mt-4 mb-4">
          <h3 className=" font-bold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube " link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>

        {/* <MarqueeComponent
          items={Ambattur.gallery}
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

export default International;
