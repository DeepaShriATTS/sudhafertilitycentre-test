"use client";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/Female/Banner.webp";
import Button from "@/components/button/button";
import { motion } from "framer-motion";
import Card from "@/components/card";
import FAQItem from "@/components/accordion";
import { Ambattur } from "@/middleware/imagesroute";
import fb from "@/assets/Home/fb.svg";
import x from "@/assets/Home/x.svg";
import Linkedin from "@/assets/Home/linkedin.svg";
import youtube from "@/assets/Home/youtube.svg";
import Insta from "@/assets/Home/insta.svg";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight, FaYoutube } from "react-icons/fa";
import { MarqueeComponent } from "@/components/marqueeSlider";
import ContactForm from "@/components/contact/contactForm";

function FemaleInfertility() {
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
      setVisibleCount(faqs.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };
  const cards = [
    {
      id: 1,
      title: "Problems In Menstruation ",
      content:
        "Menstrual problems can lead to infertility issues in women. The pituitary gland, located at the base of the brain, controls ovulation by releasing hormones called gonadotropins: follicle-stimulating hormone (FSH) and luteinizing hormone (LH). When this gland sends out irregular signals, it can lead to ovulation issues, resulting in missed or irregular periods. ",
    },

    {
      id: 2,
      title: "Problems With Ovulation ",
      content:
        "Difficulties with ovulation are commonly referred to as ovulatory disease. This is the main factor that causes female infertility, with more than 30% of infertile couples affected by it. When a woman experiences ovulation issues, she may ovulate irregularly or never. Polyendocrine Metabolic Ovarian Syndrome (Polycystic Ovarian Syndrome) is the most frequent cause of ovulation dysfunction. Ovulation is important for pregnancy as the ovary releases the eggs during the ovulation period.  ",
    },

    {
      id: 3,
      title: "Uterine Fibroids & Polyps ",
      content:
        "The uterine fibroids and polyps can stop the process of embryo implantation. Once the egg is fertilized by the sperm, it develops into an embryo. The embryo then sticks to the uterine wall and the endometrial lining produces the required nutrients and blood for the embryo to grow. In case a woman is diagnosed with fibroids or polyps, it can prevent the embryo from sticking to the uterine wall, which results in pregnancy loss and female infertility. ",
    },

    {
      id: 4,
      title: "Uterine Scarring Or Asherman Syndrome ",
      content:
        "Uterine Scarring is a very rare disorder which is also known as Asherman’s Syndrome. This problem is known to affect women who have had multiple dilations and curettage procedures (D&C). Asherman’s syndrome or Uterine Scarring can lead to complications that increase your chance of pregnancy-related problems such as placenta previa, stillbirths, and miscarriages. ",
    },

    {
      id: 5,
      title: "Endometriosis ",
      content:
        "Endometriosis can affect the regular functioning of reproductive organs, leading to infertility. The risk factors that can lead to endometriosis are family history, a late first pregnancy, an abnormal uterus, menstruation lasting for a longer time, retrograde menstrual flow, and a weakened immune system. Complications from endometriosis may impair a woman’s fertility and capability of becoming pregnant. ",
    },

    {
      id: 6,
      title: "PCOD/PMOS (PCOS) ",
      content:
        "Female patients who have been diagnosed with PCOD/PMOS (PCOS) will find that it may be very hard for them to conceive. To counter this hindrance, they must begin by regularly examining their health to prevent any health issues in the future. Patients with PMOS (PCOS) are likely to develop type 2 diabetes in the future, and those with PCOD are likely to be diagnosed with hypertension, hyperglycemia, endometrial cancer, and pregnancy complications. ",
    },
    {
      id: 7,
      title: "Cancer ",
      content:
        "Treatment for those affected by cancer is important, but it drastically affects the fertility of those who go through it. Cancer therapy would permanently cause damage to long-term health and hormone-regulating glands. This is possible even if the chemotherapy rays are not targeted at the ovaries. ",
    },
    {
      id: 8,
      title: "Primary Ovary Insufficiency (POI)  ",
      content:
        "This is a condition where a female patient’s ovaries are not able to produce healthy eggs that are required for fertilization. POI drastically affects women’s ability to become pregnant. It is very rare for women to become pregnant while experiencing a decrease in ovarian reserves.",
    },
    {
      id: 9,
      title: "Blocked Fallopian Tubes ",
      content:
        "This is another major reason why female patients may not be capable of becoming pregnant. Studies have revealed that more than 30% of infertile women have been diagnosed because they have blocked or damaged fallopian tubes. This condition is also known as tubal disease, tubal infertility, and tubal occlusion. ",
    },
    {
      id: 10,
      title: "Implantation Failure: ",
      content:
        "Implantation failure occurs when, after several IVF attempts and transferring multiple healthy embryos, implantation doesn’t succeed. This can be due to either poor embryo quality or an unreceptive endometrium, which prevents successful attachment. Identifying the cause is crucial to improving the chances of future IVF cycles. ",
    },
    {
      id: 11,
      title: "Past Ectopic Pregnancies",
      content:
        "If the female patient has already suffered an ectopic pregnancy once before, the chances of her experiencing one another time are very high. The patient must be aware of the symptoms. When a woman suffers an ectopic pregnancy, her ability to become pregnant is likely tied to the condition of her fallopian tubes.",
    },
    {
      id: 12,
      title: "Infections ",
      content:
        "If an infection or illness is left untreated, it can harm a woman’s reproductive organs and reduce her ability to conceive. Some of the infections that can lead to infertility in women are Bacterial Vaginosis and Yeast Infection, Human Papillomavirus Infection, Pelvic Inflammatory Disease (PID), Pelvic Tuberculosis, and Urinary Tract Infection (UTI). ",
    },
    {
      id: 13,
      title: "Autoimmune Disorders ",
      content:
        "If you've struggled to conceive for a long time, autoimmune disorders could be a factor. These disorders can interfere with the body’s ability to support embryo implantation. Conditions to consider include anti-sperm antibodies, thyroid issues, low ovarian reserve, Antiphospholipid Antibody Syndrome (APLAS), rheumatoid arthritis, and lupus. ",
    },
    {
      id: 14,
      title: "Failure Of An Egg To Mature Properly  ",
      content:
        "While pregnancy may seem like a straightforward experience to many, it is not so. The entire process involves a lot of challenges, some of which may result in primary or secondary infertility. The failure of an egg to mature properly may have to do with PMOS (PCOS), obesity, or a lack of particular proteins that the egg requires to mature, among many other reasons. ",
    },
    {
      id: 15,
      title: "Stress And Infertility In Women ",
      content:
        "If the female patient has already suffered an ectopic pregnancy once before, the chances of her experiencing one another time are very high. As such, the patient must be aware of the symptoms. When a woman suffers an ectopic pregnancy, her ability to become pregnant is likely tied to the condition of her fallopian tubes. ",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "What are the factors that affect female infertility? ",
      answer:
        "Factors such as age, lifestyle, hormonal issues, and reproductive health can impact female fertility. At Sudha Fertility Centre, the best fertility hospital in India, our experienced fertility doctors examine you to identify the root cause of infertility and provide you the personalised treatments. ",
    },
    {
      id: 2,
      question: "What are the common causes of female infertility? ",
      answer:
        "Common causes of female infertility include ovulation disorders, blocked fallopian tubes, endometriosis, and age. Sudha Fertility Centre, the best fertility centre in India, specialises in diagnosing and treating these conditions to help improve your chances of conception. ",
    },
    {
      id: 3,
      question: "Can female infertility be treated? ",
      answer:
        "Female infertility can be treated. The process of treatment may vary depending on the cause of infertility and how severely your fertility has been affected. At Sudha Fertility Centre, our fertility experts examine you and treat the complications with personalised care and approach.",
    },
    {
      id: 4,

      question: "Does PMOS (PCOS)/PCOD affect female infertility? ",
      answer:
        "There are high chance that PMOS (PCOS)/PCOD affects female infertility. This may affect the menstruation cycle and increase female infertility. At Sudha Fertility Centre, we provide personalised treatments by understanding the severity of PMOS (PCOS)/PCOD-related infertility and improving the chances of conception. ",
    },
    {
      id: 5,
      question: "Do hormonal imbalances cause female infertility?",
      answer:
        "Hormonal imbalances in estrogen, progesterone, thyroid hormones, and prolactin can cause female infertility. Conditions like PMOS (PCOS), and thyroid disorders can disrupt fertility. As the best fertility centre in India, our expert team at Sudha Fertility Centre diagnoses and treats hormonal issues to support fertility. ",
    },
    {
      id: 6,
      question: "Does female infertility affect natural conception? ",
      answer:
        "There are possibilities that infertility can impact natural conception depending on the severity of the infertility. Conditions like blocked fallopian tubes, PMOS (PCOS), hormonal imbalances, and endometriosis can affect natural conception. At Sudha Fertility Centre, we provide personalized treatments to address the underlying causes of infertility and improve your chances of natural conception.",
    },

    {
      id: 7,
      question: "What are the signs of infertility in teenage girls? ",
      answer:
        "Signs of infertility in teenage girls can include irregular or absent periods, excessive hair growth, severe menstrual pain, etc. It’s important to seek medical advice for early diagnosis and management. At Sudha Fertility Centre, we diagnose and perform tests to address any underlying fertility concerns and provide the best treatments. ",
    },
    {
      id: 8,
      question: "Best Hospital for female infertility treatments ",
      answer:
        "Sudha Fertility Centre, renowned as the best fertility centre in India, is highly rated for female infertility treatments, offering advanced reproductive care and a personalised approach to help you achieve your family goals. ",
    },
    {
      id: 9,
      question: "How common is female infertility? ",
      answer:
        "Female infertility is relatively common globally. It can be caused by multiple factors, including hormonal imbalances, age, ovulation disorders, blocked fallopian tubes, endometriosis, and lifestyle factors. At Sudha Fertility Centre, we offer specialised care to address the various causes of infertility and help women on their path to parenthood. ",
    },
    {
      id: 10,
      question: "How can I know if I am infertile? ",
      answer:
        "If you’ve been trying to conceive unable to get pregnant after one year of regular, unprotected intercourse, you may consider a fertility evaluation. Sudha Fertility Centre, the best fertility centre in India, provides comprehensive assessments to identify potential fertility issues. ",
    },
    {
      id: 11,
      question: "When should I consider seeking infertility treatment? ",
      answer:
        "If you’re under the age of 35 and haven’t conceived after a year of trying for conception or over 35 it’s time to seek advice from fertility specialists. At Sudha Fertility Centre, the best fertility centre in India, we diagnose the cause of infertility, provide you with the best fertility treatments, and help you in your parenthood journey. ",
    },
    {
      id: 12,
      question: "How successful is infertility treatment? ",
      answer:
        "Success rates vary by age, health, and the type of treatment undergone. At Sudha Fertility Centre, our fertility doctors provide you with individualized care and advanced treatments ensuring positive results in your parenthood journey. ",
    },
    // Add more FAQs as needed
  ];

  return (
    <>
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
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-28 ">
            <div className="max-w-5xl text-white text-center px-4 font-outfit mt-10">
              <h1 className="font-outfit font-semibold ">
                Female Infertility Treatments

              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
                Your Journey is Unique, and the Joy Awaiting you will be Worth
                Every Moment
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[70px] md:mt-[100px] ">
        <h2 className=" font-semibold flex justify-center text-center mt-5">
          Female Infertility Treatments
        </h2>
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[70px] md:mt-[100px]">
        <section>
          <div className=" max-w-5xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
            <h2 className=" font-semibold text-center mb-6">
              Frequently Asked Questions
            </h2>
            {faqs.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
            {faqs.length > 5 && ( // Ensure button is shown if there are more than 5 FAQs
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

      {/* Contact  */}
      <section className="mt-[70px] md:mt-[100px]" id="contactus">

        <ContactForm />
      </section>

      {/* <div className="container mx-auto"> */}
      <section className="mt-[70px] md:mt-[100px] mb-[70px] md:mb-[100px]">
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
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
        {/* </div>
          </div> */}
      </section>
      {/* </div> */}
    </>
  );
}

export default FemaleInfertility;
