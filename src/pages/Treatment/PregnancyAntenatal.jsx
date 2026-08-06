"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/Pregnancy/Banner.webp";
import About from "@/assets/Treatments/Pregnancy/About.webp";
import Microscope from "@/assets/Treatments/IVF/microscope.webp";
import WhyChoose from "@/assets/Treatments/IVF/WhyChoose.webp";
import ChooseIVF from "@/assets/Treatments/IVF/ChooseIVF.webp";
import Tick from "@/assets/Treatments/IVF/Tick.svg";
import Facilities from "@/assets/Treatments/IVF/Facilities.webp";
import PrepareIVF from "@/assets/Treatments/IVF/PrepareIVF.webp";
import Button from "@/components/button/button";
import Image from "next/image";
import FAQItem from "@/components/accordion";
import SubBanner from "@/assets/contact-us/SubBanner.webp";
import { Ambattur } from "@/middleware/imagesroute";
import Insta from "@/assets/Home/insta.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import x from "@/assets/Home/x.svg";
import fb from "@/assets/Home/fb.svg";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import ContactForm from "@/components/contact/contactForm";


const FAQ = [
  {
    question: "When should I start my antenatal visits?",
    answer:
      "It is recommended to start antenatal visits as soon as you confirm your pregnancy, ideally around 6-8 weeks. Early visits help monitor the health of both mother and baby and address any potential concerns right away. At Sudha Fertility Centre, the best fertility centre in India, we guide you through every step of your pregnancy journey, ensuring you receive the best care and support.",
  },
  {
    question: "What supplements should I take during pregnancy?",
    answer:
      "Pregnant women commonly need folic acid, iron, and calcium supplements. It's important to consult your healthcare provider for personalised recommendations. At Sudha Fertility Centre, the best fertility centre in India, we guide expectant mothers on the right supplements and care for a healthy pregnancy.",
  },
  {
    question:
      "Does Sudha Fertility Centre provide pregnancy services and antenatal care?",
    answer:
      "Yes, at Sudha Fertility Centre, we provide all pregnancy services and antenatal care from the beginning to delivery. As the best fertility centre in India, we offer comprehensive pregnancy services, including antenatal care, to ensure a healthy pregnancy and safe delivery.",
  },
  {
    question: "Why should I consider a hospital for pregnancy care?",
    answer:
      "A hospital offers specialised care and access to expert doctors, advanced medical equipment, and a safe environment for both mother and baby. With regular monitoring, prenatal screenings, and emergency support, hospitals ensure any complications are addressed promptly. At Sudha Fertility Centre, the best fertility centre in India, we provide comprehensive pregnancy care, from conception to delivery, with personalised attention and expert guidance every step of the way.",
  },
  {
    question: "What is postpartum care and why is it important?",
    answer:
      "Postpartum care supports a mother’s recovery after childbirth, addressing physical and emotional needs. Sudha Fertility Centre, the best fertility centre in India, provides essential postpartum services to nurture the health of mother and baby.",
  },
  {
    question: "How do I know when I'm in labor?",
    answer:
      "Signs of labor include regular, intense contractions, changes in vaginal discharge, and the breaking of water. If you experience these, contact your healthcare provider. At Sudha Fertility Centre, the best fertility centre in India, we provide support and guidance throughout your pregnancy journey.",
  },
  {
    question: "What are the benefits of normal delivery?",
    answer:
      "Normal delivery offers quicker recovery, less risk of infections, and supports the baby’s development. It also contributes to better long-term health for the mother. At Sudha Fertility Centre, the best fertility centre in India, we guide you toward the best possible delivery experience.",
  },
  {
    question: "Is C-section safe?",
    answer:
      "C-section is generally safe when performed by experienced doctors. At Sudha Fertility Centre, the best fertility centre in India, we prioritise your safety and well-being, offering expert care and guidance throughout the delivery process.",
  },
  {
    question: "Can I have a normal delivery in the future after a C-section?",
    answer:
      "Yes, many women can have a normal delivery after a C-section, depending on factors like the reason for the previous C-section, the type of incision, and the condition of the uterus. This is known as a Vaginal Birth After Cesarean (VBAC). At Sudha Fertility Centre, the best fertility centre in India, we assess your circumstances and guide you toward the safest and best delivery option for your health and future pregnancies.",
  },
  {
    question: "How can I confirm that I'm pregnant?",
    answer:
      "You can confirm pregnancy at home with a pregnancy test kit. Upon receiving a positive result visit your gynecologist. An ultrasound can provide further confirmation. At Sudha Fertility Centre, the best fertility centre in India, we offer comprehensive support and guidance for your pregnancy journey.",
  },
  {
    question: "What are the first signs of pregnancy?",
    answer:
      "The first signs of pregnancy may include missed periods, nausea, fatigue, frequent urination, and breast tenderness. Some women also experience light spotting or cramping. At Sudha Fertility Centre, the best fertility centre in India, we provide expert care and support throughout your pregnancy journey.",
  },
  {
    question: "How can I prepare for labor and delivery?",
    answer:
      "To prepare for labor and delivery, consider attending childbirth classes, creating a birth plan, practicing relaxation techniques, and ensuring you have all necessary items packed for the hospital. It’s also important to stay healthy and active during pregnancy. At Sudha Fertility Centre, the best fertility centre in India, we guide and support you throughout your pregnancy for safe and smooth delivery.",
  },
];

function PregnancyAntenatal() {
  const [visibleCount, setVisibleCount] = useState(5);
  const [faqIndex, setFaqIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const toggleFAQ = (index) => {
    setFaqIndex(faqIndex === index ? null : index);
  };
  const toggleViewMore = () => {
    if (showAll) {
      setVisibleCount(5); // Reset to initial count when showing less
      setShowAll(false); // Properly toggle state
    } else {
      setVisibleCount(FAQ.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };

  return (
    <>
      {/* Banner */}
      <div className="relative ">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-75"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-28 ">
            <div className="text-white text-center px-4 font-outfit mt-10">
              <h1 className="font-outfit font-semibold ">

                Pregnancy and Antenatal Care
              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
              Every pregnancy is unique, and so is our care for you
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About pregnancy-and-antenatal-care */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">

          <div className="main flex flex-col md:flex-row-reverse mt-4">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image src={About} alt="About IUI" className="rounded-2xl" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="title ">
                  <h2 className="font-outfit font-semibold ">
                    Personalized Antenatal Care
                  </h2>
                </div>

                <div className="description">
                  <p className="flex mx-auto mt-3 text-gray-600">
                    Antenatal care is vital for a healthy parenthood journey, especially for couples who have undergone fertility treatments. Being the best maternity hospital in Tamil Nadu, Sudha Fertility Centre understands the joy and anticipation of parenthood. Our expert team is here to guide you in every step of your journey.
                  </p>
                  <p className="flex mx-auto mt-3 text-gray-600">
                    Pregnancy is a special and unique experience for every woman. We
                    understand your emotions and provide you with the personalised
                    antenatal care of each mother-to-be. We make sure you enjoy your
                    motherhood and have a healthy pregnancy with the best pregnancy
                    care by the top gynecologists in India. It’s important to have
                    regular health check-ups, ultrasound scans, and detailed
                    monitoring of your baby’s growth and development.
                  </p>
                  <p className="mt-3 text-gray-600">
                    You need antenatal care right from the moment your pregnancy is
                    confirmed. We as the best pregnancy hospital in Tamil Nadu provide
                    you with the right care and education on what to expect in the
                    coming months. Our gynecologists will guide you in managing
                    morning sickness and provide nutritional guidance to stay healthy
                    and active safely. We also assist in planning for labour and
                    delivery, so you feel confident and well-prepared.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Nutrition and Lifestyle Guidance */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              Nutrition and Lifestyle Guidance
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
              Proper nutrition and physical activities are important for a
              healthy pregnancy and normal delivery. Our nutritionists will
              provide you with personalised dietary plans to ensure you and your
              baby receive all the essential nutrients for growth. We also
              address common concerns, such as managing cravings and avoiding
              foods that may pose risks. Additionally, we provide lifestyle
              guidance, including safe exercises to maintain your physical
              health and techniques to manage stress effectively.
            </p>
          </div>
        </div>
      </div>

      {/* High-Risk Pregnancy Care */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              High Risk Pregnancy Care
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
              For a few women pregnancy may include high risk due to underlying
              health conditions or complications. Our specialists at Sudha
              Fertility Centre provide expert care and closely monitor
              pregnancies with advanced diagnostic tools. We provide continuous
              support to manage risks and ensure the best outcomes for both
              mother and baby.
            </p>
          </div>
        </div>
      </div>

      {/* Emotional and Psychological Support */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              Emotional and Psychological Support
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
              Pregnancy is a journey filled with both joy and challenges. We’re
              here to support not just your physical health, but also your
              emotional and psychological well-being. Our dedicated counselors
              and support groups are ready to guide you through the emotional
              complexities of pregnancy, ensuring you feel cared for and
              understood.
            </p>
          </div>
        </div>
      </div>

      {/* Preparing for a Healthy Delivery */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold">
              Preparing for a Healthy Delivery
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
              Throughout your pregnancy journey, we are committed to preparing
              you for a safe and healthy delivery. Our obstetricians explore
              various birthing options with you and create a birth plan focused
              on the health and safety of you and your baby.
            </p>
            <p className="flex mx-auto mt-3 text-gray-600">
              At Sudha Fertility Centre, recognised as the best maternity
              hospital in Tamil Nadu, we offer compassionate and comprehensive
              antenatal care. Our commitment is to make your pregnancy journey
              as smooth and joyful as possible, ensuring a memorable and
              positive experience as you get ready to welcome your baby.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[70px] md:mt-[100px]">
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

            <div className="relative h-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 mt-12">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="font-outfit font-semibold  text-white">
                  Welcome Your Baby into Your Home
                </h2>
              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                <Button title="Book Your Free Appointment" link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[70px] md:mt-[100px] ">
        <section>
          <div className=" max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
            <h2 className="font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {FAQ.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={faqIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {FAQ.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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
          </div>
        </section>
      </div>

      {/* contact us  */}

      <div className="mt-[70px] md:mt-[100px]" id="contactus">
        <ContactForm />
      </div>

      {/* MarqueeComponent */}
      <section className="mt-[70px] md:mt-[100px] mb-[70px] md:mb-[100px]">
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex md:flex-row  flex-col justify-center gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
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
      </section>
    </>
  );
}

export default PregnancyAntenatal;
