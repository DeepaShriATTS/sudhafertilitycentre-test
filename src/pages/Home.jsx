// "use client";
// import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Script from 'next/script';
import Image from "next/image";
import Founder from "@/assets/Home/Founder.webp";
import BookPic from "@/assets/Home/BookPic.webp";
import Vitro from "@/assets/Home/Vitro.svg";
import Intrauterine from "@/assets/Home/Intrauterine.svg";
import Intracytoplasmic from "@/assets/Home/Intracytoplasmic.svg";
import Laser_Assisted from "@/assets/Home/Laser-Assisted.svg";
import Pregnancy from "@/assets/Home/Pregnancy.svg";

// import Pregnancy_Calculator from "@/assets/Home/Pregnancy-Calculator.svg";
// import Ovulation_Calculator from "@/assets/Home/Ovulation-Calculator.svg";
// import Period_Calculator from "@/assets/Home/Period-Calculator.svg";
// import Pregnancy_Conception from "@/assets/Home/Pregnancy-Conception.svg";
// import Pregnancy_DueDate from "@/assets/Home/Pregnancy-DueDate.svg";
// import FAQItem from "@/components/accordion";

import Tab1 from "@/assets/Home/tab1.webp";
import Tab2 from "@/assets/Home/tab2.webp";
import Tab3 from "@/assets/Home/tab3.webp";
import Tab4 from "@/assets/Home/tab4.webp";
import Tab5 from "@/assets/Home/tab5.webp";
import Icon1 from "@/assets/Home/tab1.svg";
import Icon2 from "@/assets/Home/tab2.svg";
import Icon3 from "@/assets/Home/tab3.svg";
import Icon4 from "@/assets/Home/tab4.svg";
import Icon5 from "@/assets/Home/tab5.svg";

import Pradeepa from "@/assets/Home/pradeepa.webp";
import Link from "next/link";
import BookingButton from "@/components/button/bookingButton";
const ProfileButton = dynamic(() => import("@/components/button/profileButton"));

import Buttonbottm from "@/components/button";
import Button from "@/components/button/button";

const FloatingButton = dynamic(() => import("@/components/FloatingButton"));
const VideoSlider = dynamic(() => import("@/components/videoCard/videoSlider"));
import BannerSlider from "@/components/bannerSlider/bannerSlider";
import { Homevideos } from "@/middleware/videosRoute";
const Faq = dynamic(() => import("./Faq"), {
  loading: () => <LoadingSpinner height="300px" />
});

import LoadingSpinner from '@/components/ui/loadingSpinner';

// Dynamic imports with same loading component
const InfiniteMovingCardsDemo = dynamic(
  () => import('@/components/review_Card/reviewCard'),
  { loading: () => <LoadingSpinner height="398px" /> }
);

const MetricsTabs = dynamic(() => import("@/components/ui/tab"), {
  loading: () => <LoadingSpinner height="200px" />
});
const VideoCard = dynamic(() => import("@/components/videoCard/videoCard"), {
  loading: () => <LoadingSpinner height="300px" />
});
const ContactForm = dynamic(() => import("@/components/contact/contactForm"), {
  loading: () => <LoadingSpinner height="400px" />
});
const GallerySlider = dynamic(() => import("@/components/videoCard/videoPlaylistSlider"), {
  loading: () => <LoadingSpinner height="300px" />
});
const JourneyCard = dynamic(() => import("@/components/JourneyCard/journeyCard"), {
  loading: () => <LoadingSpinner height="300px" />
});

const FertilityChatbot = dynamic(
  () => import('@/components/fertilityChatbot/fertilityChatbot'),
  { loading: () => <LoadingSpinner height="300px" /> }
);


function Home() {
  

  const testimonials = [
    {
      image: Founder,
      text: "The journey of Sudha Fertility Centre started with an empathetic mission to help couples achieve their dream of parenthood. The vision of Dr. S. Dhanabagyam, the founder, was shaped by a heart-wrenching and life-changing experience. While performing a postmortem on a woman who had tragically taken her own life due to the immense societal pressure of not having children, Dr. Dhanabagyam was profoundly moved. This sorrowful event sparked her determination to make a difference in the lives of couples facing infertility. It led her to establish the Sudha Fertility Centre.Dr. S. Pradeepa, Vice President of Sudha Fertility Centre, has been an integral part of the IVF team that achieved the remarkable milestone of delivering 26 IVF babies in a single day. Her dedication and expertise have been instrumental in expanding Sudha Fertility Centre, leading to the establishment of multiple branches across Tamil Nadu. She has actively organized prestigious medical conferences, including CME Coimbatore (2013) and the 3rd International Live 3D Laparoscopic Workshop, Erode (2014). She was also part of the organizing committee for INFERTICON 2016 and served as Organizing Secretary for FETOCARE 2016, focusing on infertility, fetal medicine, and high-risk pregnancy.",
      author: "- Mrs Nagalakshi & Mr Anjineyalu.",
    },
    {
      image: Pradeepa,
      text: "Dr. S. Pradeepa, Vice President of Sudha Fertility Centre, has been an integral part of the IVF team that achieved the remarkable milestone of delivering 26 IVF babies in a single day. Her dedication and expertise have been instrumental in expanding Sudha Fertility Centre, leading to the establishment of multiple branches across Tamil Nadu. She has actively organized prestigious medical conferences, including CME Coimbatore (2013) and the 3rd International Live 3D Laparoscopic Workshop, Erode (2014). She was also part of the organizing committee for INFERTICON 2016 and served as Organizing Secretary for FETOCARE 2016, focusing on infertility, fetal medicine, and high-risk pregnancy.",
      author: "- Mrs Priya & Mr Ramesh.",
    },
  ];

  const tabs = [
    {
      title: "40+ Years Of Excellence",
      label: "40+ Years Of Excellence",
      content: {
        heading: "40+ Years Of Excellence",
        description:
          "Sudha Fertility Centre is known as an icon in fertility care with more than 4 decades of excellence in making lakhs of parents' dreams into reality. With experienced Fertility specialists, we offer you the best treatments personalized according to your needs and medical history. With 40+ Branches across Tamil Nadu, we ensure that expert fertility care is accessible to all, giving you the support and guidance you need on your parenthood journey",
        image: Tab1,
      },
      icon: Icon4,
    },
    {
      title: "Affordable Treatment Cost",
      label: "Affordable Treatment Cost",
      content: {
        heading: "Affordable Treatment Cost",
        description:
          "At Sudha Fertility Centre, we believe that fertility care should be both affordable and of the highest quality. We conduct free medical camps every month to make sure quality treatment reaches everyone. Free consultation and tests are provided at every camp. With affordable treatment costs, we make sure that your dream of parenthood is within reach. Every camp has helped countless people achieve their dreams easily with trusted experts. We cherish and support every parenthood journey. ",
        image: Tab2,
      },
      icon: Icon2,
    },

    {
      title: "Trusted by 1Lakh + Families",
      label: "Trusted by 1Lakh + Families",
      content: {
        heading: "Trusted by 1Lakh + Families",
        description:
          "Sudha Fertility Centre has earned the trust of lakhs of families as South India's best fertility centre. We are happy and blessed to witness the parenthood stories of lakhs of parents. Each review and video we receive always remember our motto of helping couples in their parenthood journey. We are driven by the mission to help couples experience the happiness of parenthood, and dedicated to making it happen. We ensure every couple who visits us receives the best care and starts their journey of parenthood.",
        image: Tab3,
      },
      icon: Icon3,
    },
    {
      title: "High Success Rate",
      label: "High Success Rate ",
      content: {
        heading: "High Success Rate",
        description:
          "As the leading fertility hospital in South India, Sudha Fertility Centre serves as a beacon of hope and brings happiness. With the best fertility doctors and world-class fertility treatments, Sudha Fertility Centre has a record of high success rate in helping parents achieve the dream of parenthood. With delivering lakhs of healthy babies, we are identified as a renowned IVF hospital in South India offering personalized solutions and treatments for couples trying for pregnancy. From young couples to older couples, we stand with them in every step of their parenthood journey.",
        image: Tab4,
      },
      icon: Icon1,
    },
    {
      title: "150+ Fertility Specialists",
      label: "150+ Fertility Specialists",
      content: {
        heading: "150+ Fertility Specialists",
        description:
          "With a team of hundreds of experienced fertility experts, Sudha Fertility Centre offers comprehensive and specialized treatments tailored to your needs. Under the guidance of the fertility experts, Dr. S. Dhanabagyam and Dr. S. Pradeepa, our skilled IVF specialists and IUI doctors are dedicated to helping you through every step of your parenthood journey. Supported by the expertise and care of our fertility specialists, lakhs of happy parents have successfully welcomed healthy, beautiful babies into their families. ",
        image: Tab5,
      },
      icon: Icon5,
    },
  ];

  const reviews = [
    {
      quote:
        "Sudha Fertility Hospital la advanced treatment nala en akka ku 8 years struggle apram pregnancy achu! Doctors super supportive, treatment process smooth. IVF Centre nu yaarayavadhu ketta, Sudha IVF Hospital than nambagamanadhu nu recommend pannuven!",
      name: "Durga",
      title: "Patient",
    },
    {
      quote:
        "We were struggling with infertility for 6 years and had lost all hope. A friend suggested Sudha Fertility Centre, and we decided to give it a try. From the very first consultation, the doctors were kind, supportive, and extremely knowledgeable. They guided us through every step, making sure we were comfortable. After our first IVF attempt, I got pregnant! We are forever grateful to this amazing team. If you are looking for the Best Fertility Centre, this is the place!",
      name: "Gokul Krishnan",
      title: "Patient",
    },
    {
      quote:
        "One of my close friends had been trying to conceive for years. They went to Sudha IVF Centre, and the treatment worked wonders for them. Now, they are happy parents to a beautiful baby. The success rates here are excellent, and the doctors are highly professional. If you need fertility treatment, this is the right place!",
      name: "SHAmjaD",
      title: "Patient",
    },
    {
      quote:
        "I recommended Sudha Fertility Centre to my brother and sister-in-law for IVF treatment. Their experience at the hospital was truly wonderful. With the right guidance and constant support, they underwent IVF treatment, and today, they are happy parents. Their words say it all Best Fertility Centre!",
      name: "Karthik k.s",
      title: "Patient",
    },
    {
      quote:
        "Sudha hospital is the best in all. Dr.Pradeepa Madam gives utmost care for each and everyone. They are very professional in their approach. The best thing I like about this hospital is that, they do a thorough investigation and understand the real reason for fertility issues and provide the right treatment. They take all precautions to ensure healthy pregnancy and will be there with us in every step until the mother and baby are safe back at home. I am thankful that I visited Sudha Fertility Centre. I have been recommending this hospital to all in my known circle of family and friends, who are in need of fertility care and will continue to do so.",
      name: "Sirish kumar",
      title: "Patient",
    },
    {
      quote:
        "Very good response and treatment given by Dr Pratheeba mam and Hospital service also nice. Car parking facility rest room and all very good. We are Waiting for positive result.",
      name: "Spganesh Kumar",
      title: "Patient",
    },
    {
      quote:
        "I am very happy to taking treatment sudha hospital and following the procedure. We got a positive result. Very Good services doctors and sisters. Thank you doctor pradeepa and deepika mam.  Thank you",
      name: "Radhakrishnan sala",
      title: "Patient",
    },
    {
      quote:
        "My sister came for infertility treatment and married for 5 years.. We came to sudha hospitals last year and start our treatment as soon as earlier and their cooperation and explanation, I'm inspired. We start with full of hope and at the end of i am enjoying my motherhood. Thanks to sudha hospitals, doctors (Dr.Pardeepa mam, Dr. Vanitha mam and Dr. Deepika) who gave treatment, employees, reception staffs.",
      name: "Thenmozhi S",
      title: "Patient",
    },
    {
      quote:
        "Very good facility with 24x7 emergency care for children. Never seen such a clean facility. Doctors are providing attention to details.",
      name: "Piranesh V",
      title: "Patient",
    },
    {
      quote:
        "We came to Sudha hospitals for treatment,we had a very good approach from the doctors,staff nurses and all those staffs from the institutions..we are very much from the institution..",
      name: "Ezhil Manikandan",
      title: "Patient",
    },
    {
      quote:
        "Good service. Dr. Dhanabhagiyam  has given great support and  mam need to live long to make others life meaningful, and staff support is also great.  Assistant doctors support was good and even in night shift support was good. Nurses taken care very good care and guided well. Thanks to all sudha hospital team",
      name: "Padma Naban",
      title: "Patient",
    },
    {
      quote:
        "Really happy and completely heavenly feel what I have to say… it’s dream come true for us…7 years wait and finally it has come… the doctors and sister starting from the reception we never felt like an outsider… hospitality was so great and sisters were so humble to us… whenever we have doubts over the diet or medicines we can call them at any point of time…",
      name: "Krish Kumar",
      title: "Patient",
    },
    {
      quote:
        "I got a very wonderfull experance from here because Dr. Dhanabagyam mam and her staff's also provided us with very good support and care. Excellent medical team and medicine's are available here.So thank you very much to Dr. Dhanabagyam mam ( MD), Asst. Docters, sisters etc. and all supportive staffs....",
      name: "liji arumughan",
      title: "Patient",
    },
    {
      quote:
        "One the Best IVF hospital. We got a girl baby. Special thanks to Dr.Dhanabhagyam mam, All nurses and staffs (lab & medical ) are special carrying during our IVF journey. My IVF journey started on Jul 2023 and a little princess born on Jun 2024. My dream comes true once again thank you so much Dr.DB mam for your lovely wishes and blessings to my daughter.",
      name: "Nandhi pandi",
      title: "Patient",
    },
    {
      quote:
        "We have approached sudha hospital for the normal pregnancy check up. We cannot thank you enough Dr.Dhanabagyam mam, other doctors and staffs for providing the greatest support and guidance throughout the pregnancy journey.Every checkup they are doing  the scan and monitor the baby's growth closely. It helps us to know about the present situation and overcome challenges if there are any .Especially the crew have taken the proper follow up for the normal delivery. During labour  nurses and doctors were very supportive and guided in the right direction.. without them normal delivery would haven't possible.Receptionist , lab assistance and other staffs were  cooperative , always approachable and responds to queries properly.We recommend this hospital for both normal and test tube . Definitely u will feel the difference and get confidence.",
      name: "siva ranjani",
      title: "Patient",
    },
    {
      quote:
        "After 15 years I'm pregnant I'm so happy to share this thank you so much for Dr. Dhanabagyam mam and sudha hospital team",
      name: "Kani",
      title: "Patient",
    },
    {
      quote:
        "My name mythili seenivasan  after 6 years of marriage life I didn't conceive because  pcod problems my brother in law suggested me sudha hospital and their welfare so we decided to proceed to the hospital and asked for treatment to get positive results the hospital provided excellent care for me with high skilled doctors",
      name: "Mythili Murugasamy",
      title: "Patient",
    },
    {
      quote:
        "This the the new building of Sudha hospital. It's the hospital branch of Sudha fertility and IVF clinics. I believe they have done a good job with the designs and setup of the hospital. The staff at the reception were helpful And we're very proactive to show us around the new hospital and answer our questions. They have parking facility ",
      name: "Sagar Karvande",
      title: "Patient",
    },
    {
      quote:
        "We have 4 years struggle in our fertility issue but after we came to sudha hospital nice treatment given to my wife now she is pregnant thanks a lot to sudha hospital",
      name: "S.Tamil Selvan",
      title: "Patient",
    },
  ];

 

  return (
    <>


      <Script
        type="application/ld+json"
        id="organization-jsonld"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Sudha Fertility Centre",
            "url": "https://sudhafertilitycentre.com/",
            "logo": "https://sudhafertilitycentre.com/_next/static/media/logo-dark.5cc85d6e.svg",
            "description": "Sudha Fertility Centre is one of India's leading fertility hospitals, offering advanced IVF, IUI, ICSI, egg freezing, and fertility testing services across multiple locations in India.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-76 7007 6006",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Tamil", "Telugu"]
            },
            "sameAs": [
              "https://www.facebook.com/sudhafertilitycentre",
              "https://www.instagram.com/sudhafertilitycentre/",
              "https://www.youtube.com/@sudhafertilitycentre/",
              "https://www.linkedin.com/company/sudha-fertility-centre"
            ],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "15000"
            },
            "founder": {
              "@type": "Person",
              "name": "Dr. S. Dhanabagyam"
            },
            "foundingDate": "1995",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "151, Perundurai Road, Edayankattuvalasu",
              "addressLocality": "Erode",
              "addressRegion": "Tamil Nadu",
              "postalCode": "638001",
              "addressCountry": "IN"
            }
          }),
        }}
      />


      <FloatingButton />
      {/* Banner */}
      <div className="relative w-full -mt-[150px]">
        {/* Slider — no extra overlay, BannerSlider handles its own gradient */}
        <div className="banner-slider-wrap w-full">
          <BannerSlider />
        </div>

        {/* Review cards — overlap the bottom of the slider on all screen sizes */}
        <div className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-24 pb-4">
          <InfiniteMovingCardsDemo reviews={reviews} />
        </div>

        {/* White fade from reviews into page body */}
        <div
          className="pointer-events-none absolute bottom-0 left-0 w-full h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(255,255,255,1) 0%, transparent 100%)",
          }}
        ></div>
      </div>


      <section className="relative">
        {/* Baby's smile in every hopeless home marks our proudest milestone.*/}
        <div className="mt-5 sm:mt-3 lg:mt-5">
          <div className=" container mx-auto ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="title text-center">
                <h1 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                  Baby's smile in every hopeless home marks our proudest milestone.
                </h1>
                <h2 className="font-outfit font-semibold lg:block mt-2 text-xl"> Our Achievements</h2>
              </div>

              <div>
                <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
                  <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                    <div className="main-tail flex items-center justify-center">
                      <div className="content">
                        <div className="title">
                          <h3 className="text-[36px] font-semibold text-[#173366] text-center">
                            3.5L+
                          </h3>
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
                          <h3 className="text-[36px] font-semibold text-center text-[#173366]">
                            1L+
                          </h3>
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
                          <h3 className="text-[36px] font-semibold text-center text-[#173366]">
                            35k+
                          </h3>
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
                          <h3 className="text-[36px] font-semibold text-center text-[#173366]">
                            60k+
                          </h3>
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

              {/* <div className="main  flex flex-col lg:flex-row mt-[70px] lg:mt-[100px] ">
            
                <div className="image order-2 lg:order-1 w-full lg:w-1/2 mt-4">
                  <motion.div
                    key={index} // Key change triggers animation
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Image
                      src={testimonials[index].image}
                      alt="Founder"
                      className="rounded-xl "
                    />
                  </motion.div>
                </div>

               
                <div className="description order-1 lg:order-2 w-full lg:w-1/2 mt-4 px-3 lg:mt-0 relative flex items-center">
                 
                  <div className="content font-outfit px-0 xl:px-4 lg:px-4 flex">
                    <div>
                      <h2 className="font-semibold ">Our Vision for Parenthood</h2>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-gray-600 mt-2"
                      >
                        The journey of Sudha Fertility Centre began with a heartfelt mission to help couples fulfil their dream of parenthood. Inspired by the deep emotional struggles faced by women due to infertility-related stigma, Dr. S. Dhanabagyam, the founder, was determined to create a space where hope and healing could thrive. Her compassion and commitment led to the birth of Sudha Fertility Centre. Dr. S. Pradeepa, Vice President of Sudha Fertility Centre, has been a strong pillar of support, and together they have achieved the remarkable milestone of delivering 26 IVF babies in a single day. Their dedication and shared vision have driven the growth of the centre, leading to multiple branches across South India and Sri Lanka.
                      </motion.p>
                      <div className="flex justify-start text-[#173366] mt-5">
                      <Button title={"Learn More"} link="/about-us" />
                        
                      </div>
                    </div>
                  </div>
                 
                </div>
              </div> */}

            </div>
          </div>
        </div>

        <section className="hidden md:block sticky top-[500px] right-0 z-[22]">
          <div className="absolute right-0 flex top-[-100px]  flex-col space-y-3">
            <ProfileButton />
          </div>
        </section>

        <section>
          {/* Advanced Fertility Treatments at Sudha Fertility Centre */}
          <div className="mt-[70px] lg:mt-[100px]">
            <div className="container mx-auto ">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="title text-center">
                  <h2 className="font-outfit font-semibold ">
                    Advanced and Expert medical treatment
                    <span className="lg:block">for your parenthood dream</span>
                  </h2>

                  <p className="max-w-5xl flex mx-auto mt-5 text-gray-600">
                    Start your parenthood journey with India’s leading fertility
                    specialists. With decades of expertise and world-class
                    treatments, we provide personalized care that supports your
                    dreams and guides you through every step of the way.
                  </p>
                </div>

                <div>
                  <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5   gap-6  mt-9">
                    <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-2xl font-outfit hover:bg-[#EBF2FE] cursor-pointer">
                      <Link href={"/in-vitro-fertilization"}>
                        <div className="main-tail flex items-center justify-center">
                          <div className="content">
                            <div className="image flex justify-center">
                              <Image src={Vitro} alt="In Vitro Fertilization" />
                            </div>
                            <div className="des mt-4 ">
                              <p className="text-[#000] font-semibold text-center">
                                In Vitro Fertilization
                              </p>

                              <p className="text-[#000] text-center mt-2 font-semibold">
                                ( IVF )
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                      <Link href={"/intrauterine-insemination"}>
                        <div className="main-tail flex items-center justify-center">
                          <div className="content">
                            <div className="title">
                              <div className="image flex justify-center">
                                <Image
                                  src={Intrauterine}
                                  alt=" Intrauterine Insemination "
                                />
                              </div>
                            </div>
                            <div className="des mt-4 ">
                              <p className="text-[#000] font-semibold text-center">
                                Intrauterine Insemination
                              </p>
                              <p className="text-[#000] text-center mt-2 font-semibold">
                                ( IUI )
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                      <Link href={"/intracytoplasmic-sperm-injection"}>
                        <div className="main-tail flex items-center justify-center ">
                          <div className="content">
                            <div className="title">
                              <div className="image flex justify-center">
                                <Image
                                  src={Intracytoplasmic}
                                  alt="Intracytoplasmic Sperm Injection"
                                />
                              </div>
                            </div>
                            <div className="des mt-4">
                              <p className="text-[#000] font-semibold text-center">
                                Intracytoplasmic Sperm Injection
                              </p>
                              <p className="text-[#000] text-center mt-2 font-semibold">
                                ( ICSI )
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                      <Link href={"/pcos-and-pdoc"}>
                        <div className="main-tail flex items-center justify-center">
                          <div className="content text-cente">
                            <div className="title">
                              <div className="image flex justify-center">
                                <Image src={Laser_Assisted} alt="pcos-and-pdoc" />
                              </div>
                            </div>
                            <div className="des mt-4">
                              <p className="text-[#000] font-semibold text-center">
                                PMOS (PCOS)/PCOD
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-2xl hover:bg-[#EBF2FE] cursor-pointer">
                      <Link href={"/pregnancy-and-antenatal-care"}>
                        <div className="main-tail flex items-center justify-center">
                          <div className="content text-center">
                            <div className="title">
                              <div className="image flex justify-center">
                                <Image
                                  src={Pregnancy}
                                  alt="Pregnancy and Antenatal Care"
                                />
                              </div>
                            </div>
                            <div className="des mt-4">
                              <p className="text-[#000] font-semibold text-center">
                                Pregnancy and Antenatal Care
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>

                    <div className="tiles-1 flex items-center justify-center">
                      <div className="main-tailflex items-center justify-center ">
                        <div className="content  flex justify-center items-center ">
                          <div className="title">
                            <div className="button flex items-center justify-center lg:hidden">
                              <Button title={"View More"} link="/fertility-treatments" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="button hidden lg:flex justify-center mt-8">
                    <Button title={"View All Treatments"} link="/fertility-treatments" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Makes Sudha Fertility Centre  the Best Choice */}
        <div className="mt-[70px] lg:mt-[100px]">
          <div className="container mx-auto ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="title text-center">
                <h2 className="font-outfit font-semibold sm-hidden">
                  The reasons Sudha Fertility feels like Home for Motherhood
                </h2>
                <h2 className="font-outfit font-semibold sm-block hidden">
                  The reasons Sudha Fertility feels like Home for Motherhood
                </h2>
              </div>
              <div className="tab mt-12">
                <MetricsTabs tabs={tabs} />
              </div>
            </div>
          </div>
        </div>


        {/* Fill your home with tiny footsteps and celebrate the quiet joy of parenthood. */}
        <section >
        <div className="container mx-auto mt-[70px] lg:mt-[100px]">
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ">
            <div className="shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)]">
              {/* Section Container */}
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-0 lg:space-y-0 lg:space-x-8">
                <div className="content flex-1 text-center px-4 py-11 lg:py-0 sm:px-6 lg:px-8 lg:text-left  order-1 lg:order-1">
                  <h2 className="font-outfit font-semibold ">
                  Fill your home with tiny footsteps and celebrate the quiet joy of parenthood.
                  </h2>
                </div>

                {/* Image */}
                <div className="flex flex-col items-center space-y-2 lg:space-y-0 lg:items-start order-3 lg:order-2">
                  <div className="image">
                    <Image
                      src={BookPic}
                      alt="Parenting Guide Book"
                      className="max-w-full"
                    />
                  </div>
                </div>

                {/* Booking Button */}
                <div className="button px-4 sm:px-4 lg:px-8 order-2 lg:order-3">
                  <BookingButton title={"Take your free step toward parenthood"} />
                </div>
              </div>

              <div className="relative w-full">
                <div className="absolute bottom-0 left-0 w-full h-2 bg-yellow-400"></div>
                <div className="absolute bottom-0 right-0 w-1/3 h-2 bg-[#173366]"></div>
              </div>
            </div>

          </div>
        </div> </section>

         <section className="mt-[70px] lg:mt-[100px]">
         <div className="container mx-auto  relative h-full">
          <div className="max-w-full mx-auto px-4  sm:px-6 lg:px-8 h-full">
            <div className="content mx-auto flex-1 text-center lg:text-left">
              <h2 className="font-outfit font-semibold flex justify-center text-[#e3a008]">
                Journey of IVF Process
              </h2>
            </div>
            <div className="mt-2">
              <JourneyCard/>
            </div>
          </div>
        </div>
          
         </section>



        {/* Make Pregnancy Planning Simple and Confident with Our Calculator Tools */}
        <div className="container mx-auto mt-[70px] lg:mt-[100px]">
          <div className="max-w-7xl mx-auto px-3 py-12 sm:px-6 lg:px-8">
            <div className="main-box">
              {/* <div className="flex flex-col lg:flex-row p-4 lg:pb-0 lg:p-7 border rounded-3xl"> */}
              {/* Left Section */}
              <div className="max-w-5xl px-3 flex-1 mx-auto">
                <div className="content h-auto  flex flex-col justify-center items-center text-center">
                  <h2 className="font-outfit font-semibold ">
                    Our Specialties
                  </h2>
                  {/* <p className="text-gray-600 mt-5">
                  Planning your pregnancy should feel empowering not overwhelming. Use our calculator tools to track your fertility cycle and plan for conception at the optimal time. Make your journey to parenthood stress-free.
                  </p> */}
                </div>
              </div>

              {/* Right Section */}
              <div className="h-[] w-px self-stretch bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400"></div>

              <div className="mt-4">
                <VideoSlider />
               
               
                {/* <div className=" grid  grid-cols-2 md:grid-cols-4 lg:grid-cols-4 md:gap-8  gap-5">
                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)] p-5 cursor-pointer ">
                    <div className="title mb-3">
                      <Image
                        src={Pregnancy_Calculator}
                        alt="Pregnancy Calculator"
                        className="mx-auto"
                      />
                    </div>

                    <div className="des">
                      <p className="text-[#000] font-semibold">
                        Pregnancy Calculator
                      </p>
                      <div className="button mt-5 flex justify-center lg:justify-center">
                        <Link
                          href={"/free-online-pregnancy-calculator"}
                          className="text-[#173366] flex gap-2 items-center font-semibold hover:text-[#FFC65C]"
                        >
                          Check Now 
                          <IoMdArrowForward />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)] p-5 cursor-pointer ">
                    <div className="title mb-3">
                      <Image
                        src={Ovulation_Calculator}
                        alt="Ovulation Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#000] pt-5 font-semibold">
                        Ovulation Calculator
                      </p>
                      <div className="button mt-5 flex justify-center lg:justify-center">
                        <Link
                          href={"/free-ovulation-calculator"}
                          className="text-[#173366] flex gap-2 items-center font-semibold hover:text-[#FFC65C]"
                        >
                          Check Now
                          <IoMdArrowForward />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-1 flex flex-col items-center justify-center text-center hover:bg-[#EBF2FE] rounded-2xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)] p-5 cursor-pointer ">
                    <div className="title mb-3">
                      <Image
                        src={Period_Calculator}
                        alt="Period Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#000] pt-5 font-semibold">
                        Period Calculator
                      </p>
                      <div className="button mt-5 flex justify-center lg:justify-center">
                        <Link
                          href={"/free-menstrual-cycle-calculator"}
                          className="text-[#173366] flex gap-2 items-center font-semibold hover:text-[#FFC65C]"
                        >
                          Check Now
                          <IoMdArrowForward />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="tiles-1 flex flex-col items-center justify-center text-center px-3 hover:bg-[#EBF2FE] rounded-2xl shadow-[0px_0px_30px_0px_rgba(0,0,0,0.06)] p-5 cursor-pointer ">
                    <div className="title mb-3">
                      <Image
                        src={Pregnancy_Conception}
                        alt="Pregnancy Conception Calculator"
                        className="mx-auto"
                      />
                    </div>
                    <div className="des">
                      <p className="text-[#000] font-semibold">
                        Pregnancy Conception <br /> Calculator
                      </p>
                      <div className="button mt-6 flex justify-center lg:justify-center">
                        <Link
                          href={"/free-conception-calculator"}
                          className="text-[#173366] flex gap-2 items-center font-semibold hover:text-[#FFC65C]"
                        >
                          Check Now
                          <IoMdArrowForward />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>

        {/* VIdeo section  */}
        <div className="bg-[#EBF2FE] mt-[70px] lg:mt-[100px]">
          <div className="container mx-auto ">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
              <div className="title text-center max-w-4xl mx-auto">
                <h2 className="font-outfit font-semibold ">
                  From empty hearts to carrying tiny ones in their arms: 
                  <br/>
                  The beautiful stories of our happy families.

                </h2>

                <p className="text-gray-600 text-center mt-4">
                  Behind every testimonial is a journey filled with hope, trust, and perseverance. Hearing this happiness is what drives us. All the wait, tears, and prayers have been answered. Listen to the happy stories of the couples welcoming their love of life.
                </p>
              </div>
              <div className="tab mt-12">
                <VideoCard tabs={tabs} />
              </div>
            </div>
          </div>
        </div>

        {/* Turning Dreams into Reality: Witness the Joy of Parenthood  with Sudha Fertility Centre. */}
        <div className="bg-[#DDE9FD] hidden">
          <div className="container mx-auto relative h-full">
            <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
              <div className="title text-center">
                <h3 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                 From empty hearts to carrying tiny ones in their arms: 
                  <span className="lg:block">
                    {" "}
                    The beautiful stories of our happy families.
                  </span>
                </h3>

                <p className="max-w-5xl flex mx-auto mt-5 text-[#353535]">
                  Behind every testimonial is a journey filled with hope, trust,
                  and perseverance. Hearing this happiness is what drives us.
                  All the tears, years, fears and prayers have been answered.
                  Listen to the happy stories of the couples welcoming their
                  love of life
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Faq */}
        <Faq />
      
        <div className="mt-[70px] lg:mt-[100px]">
          <ContactForm />
        </div>
      </section>
      {/* MarqueeComponent */}
      <section className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px] mx-3">
        
        <GallerySlider items={Homevideos} />
           <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
          <h3 className=" font-bold text-center ">
            Childless Couples to Happy Parents
          </h3>
          <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
        </div>
       
      </section>


      <section className="mt-[70px] lg:mt-[100px] ">
        <FertilityChatbot />
      </section>
    </>
  );
}

export default Home;
