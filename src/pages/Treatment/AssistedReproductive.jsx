"use client"
import React, { useState } from "react";
import Banner from "@/assets/Treatments/Blastocyst/Banner.webp";

import Card from "@/components/card";
import Button from "@/components/button/button";
import FAQItem from "@/components/accordion";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MarqueeComponent } from "@/components/marqueeSlider";
import ContactForm from "@/components/contact/contactForm";
import { Ambattur } from "@/middleware/imagesroute";

function AssistedReproductive() {
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
      setVisibleCount(FAQ.length); // Show all FAQs
      setShowAll(true); // Properly toggle state
    }
  };
  const FAQ = [
    {
      id: 1,
      question: "What is the ART procedure for infertility?",
      answer:
        "ART (Assisted Reproductive Technology) is used to help couples in conception overcome fertility challenges. There are many types of ART treatments which is preferred by fertility specialists by examining you and your partner’s health. As the best fertility centre in India, Sudha Fertility Centre provides advanced ART treatments with the top fertility doctors in India. They examine you and provide you with the right treatment to help you achieve your parenthood dream into reality.",
    },
    {
      id: 2,
      question: "What is the benefit of assisted reproductive technology?",
      answer:
        "The benefit of ART treatments is that they help couples facing infertility to conceive using advanced techniques like IVF, IUI, ICSI, and other treatments. Couples who have faced miscarriages, failures in fertility treatments, and trying to get pregnant for years can highly benefit from ART treatments. As the best fertility centre in India, Sudha Fertility Centre provides the best ART treatments with expert care, improving the chances of pregnancy and supporting your journey to parenthood. ",
    },
    {
      id: 3,
      question: "Do ART treatments help to cure infertility? ",
      answer:
        "Yes, ART treatments can cure infertility. However, some factors such as age, health, etc. influence the possibility of curing. As the best fertility hospital in India, Sudha Fertility Centre provides advanced fertility treatments to help you overcome fertility challenges. We are here to support you in every step of your journey towards parenthood.  ",
    },

    {
      id: 4,
      question: "Do all ART procedures result in normal delivery?",
      answer:
        "There are possibilities of normal delivery for those who have undergone ART procedures. But a few factors stand as a hindrance like the age and health of the mother. Trusted as the best IVF Centre in India, Sudha Fertility Centre provides expert care and support to help ensure the best possible outcome.",
    },

    {
      id: 5,
      question: "What is the average success rate for ART?",
      answer: "The success rate of ART treatments varies depending on the type of treatment. Sudha Fertility Centre specializes in ART treatments and has a high success rate offering personalized care and advanced ART techniques to enhance your chances of conceiving.",
    },

    {
      id: 6,
      question: "Is ART costly?",
      answer: "The cost of ART can vary based on the treatments provided and the number of cycles it takes to achieve a positive pregnancy. Being the best fertility centre in India, Sudha Fertility Centre offers the best ART treatments with our best fertility specialists at affordable and transparent pricing with high-quality care, ensuring you receive the best treatment options for your fertility journey.",
    },

    {
      id: 7,
      question: "What are the types of assisted reproductive technology?",
      answer: "There are many types of ART treatments. The main types include In Vitro Fertilization (IVF), Intrauterine Insemination (IUI), Intracytoplasmic sperm injection (ICSI), and embryo freezing. At Sudha Fertility Centre, the best fertility center in India, we offer these advanced ART treatments with expert care to support you on your journey to parenthood.",
    },
    {
      id: 8,
      question: "What is the common ART procedure?",
      answer: "The most widely performed ART procedure is In Vitro Fertilization (IVF), in which the retrieved eggs and sperm are fertilized in the laboratory and the developed embryos are transferred to the uterus. With the best IVF doctors, Sudha Fertility Centre offers world-class IVF treatment and other advanced ART treatments with expert care to support your journey to parenthood.",
    },
    {
      id: 9,
      question: "Is there any age limit to undergo ART treatments? ",
      answer: "According to the Indian government’s 2021 ART act, the age limit to undergo IVF treatment is 50 years. Women up to the age of 50 are generally considered eligible for IVF procedures. However, an increase in age can affect the success rate of pregnancy. Recognized as the top fertility hospital in India, Sudha Fertility Centre provides personalised care and guidance to help determine the right approach based on age and health. ",
    },
    {
      id: 10,
      question: "Do ART procedures help to diagnose fertility problems?",
      answer: "ART procedures help in conception with advanced fertility treatments. There are other procedures like laparoscopy, hormone testing, semen analysis, transvaginal ultrasound examination, and some more procedures to diagnose fertility problems in both men and women. Sudha Fertility Centre is equipped with the best fertility doctors and high-tech technologies to diagnose fertility challenges and provide you with the best treatments to help you in your parenthood journey.",
    },
    {
      id: 11,
      question: "Are babies born through ART procedures healthy?",
      answer: "There is no association between the ART procedures and the baby’s health. It solely depends on the health of the parents. Proper care and nutrition intake can help you deliver a healthy baby. But complications like genetic factors can affect a baby’s health which can also be priorly diagnosed during the PGD process in IVF treatment. At Sudha Fertility Centre, the best fertility center in India, we provide expert care and monitor every step to ensure the best possible outcome for both mother and baby. ",
    },
    {
      id: 12,
      question: "Do other medications or treatments affect positive results in ART procedures?",
      answer: "There is a possibility that certain medications can impact the success of ART procedures. It is important to discuss your medical records and medications before starting the treatment. As the best fertility center in India, our experts in Sudha Fertility Centre provide you with personalised care and support throughout your parenthood journey. "
    }
  ];

  const cards = [
    {
      id: 1,
      title: "In Vitro Fertilization (IVF) ",
      content:
        "IVF is the most well-known and famous treatment among the assisted reproductive technology treatments. This fertility treatment is done to help the sperm fertilize the egg. The fertilized egg is implanted into the uterus by the IVF doctors to facilitate pregnancy. This process is done using the biological parent’s eggs and sperm, but a donor can be used in cases where that is not possible. ",
    },
    {
      id: 2,
      title: "Intra Uterine Insemination (IUI) ",
      content:
        "IUI involves injecting sperm into a woman’s uterus just before she ovulates. In this process, the sperm skips the part of bypassing the vagina and cervix thus increasing the chances of positive pregnancy. This treatment benefits the couple with minor fertility issues.  ",
    },
    {
      id: 3,
      title: "Pre-Implantation Genetic Diagnosis (PGD) ",
      content:
        "PGD is a testing procedure that is used to diagnose if an embryo has the same genetic disorders as those whose egg and sperm were fused to create it. A PGD is a test used to assess the growth of the embryo. Preimplantation genetic screening (PGS), on the other hand, describes methods for checking for aneuploidy in embryos from parents that are thought to have genetic chromosomes. ",
    },
    {
      id: 4,
      title: "Assisted Hatching For Embryos ",
      content:
        "This procedure is preferred for couples who experienced multiple IVF failures. These failures usually take place because, the skin of the embryo does not thin and allow it to ‘hatch’ out of it. Assisted hatching is suggested when the female patient’s IVF prognosis is very poor- this procedure would help increase the chances of pregnancy for them. ",
    },
    {
      id: 5,
      title: "Freezing or Vitrification ",
      content:
        "Freezing or vitrification is an advanced cryopreservation technique in which eggs, sperm, and embryos will be stored for later purposes. Healthy embryos, eggs, and sperm will be stored to use for the second cycle of fertility treatment if the first cycle fails.  ",
    },
    {
      id: 6,
      title: "Surgical Sperm Recovery ",
      content:
        "When male patients have a low sperm count, sperm recovery is done, surgically. Many options are available for sperm to be surgically removed- Testicular Sperm Extraction (TESE), Testicular Sperm Aspiration (TESA), Microscopic Testicular Sperm Extraction (MicroTESA) and Microscopic Epididymal Sperm Aspiration (MESA). ",
    },
    {
      id: 7,
      title: "Minimally Invasive Surgery ",
      content:
        "There may be instances where female patients may be found to have anatomical issues that make it difficult for them to conceive a child or carry a fetus. These issues include fallopian tube issues, uterine septa, endometrial polyps, and uterine fibroids. When such a diagnosis is made, there are surgical options to be considered. ",
    },
    {
      id: 8,
      title: "Fertility Preservation ",
      content:
        "This is a type of procedure used to preserve a person’s ability to have children. This is done if a couple plans for late pregnancy and decides to freeze their egg and sperm. This is also done before a medical treatment that may cause infertility such as therapies to treat cancer.",
    },
    {
      id: 9,
      title: "Endometrial Receptivity Analysis (ERA) ",
      content:
        "A small sample of a woman’s endometrial lining is taken for the Endometrial Receptivity Analysis (ERA), a genetic test that identifies the ideal day to transfer the embryo during an IVF cycle. Endometrial receptivity can be one of the causes of infertility in women who have had two or more unsuccessful embryo transfers after in vitro fertilization (IVF), performing an endometrial receptivity analysis can be immensely useful. ",
    },
    {
      id: 10,
      title: "Embryo Transfer",
      content:
        "Embryo transfer is the final stage of IVF treatments. Here, the fertilized egg is placed in the woman’s uterus. By now, it will ideally implant and cause pregnancy for the female patient. The embryo is transferred by loading it into a catheter tube and depositing it into the uterus. ",
    },
    {
      id: 11,
      title: "Ovulation Induction With Timed Intercourse ",
      content:
        "For couples who are trying to have a child, the timing of intercourse is a very important consideration. This is because fertilization only takes place in a certain period of the menstrual cycle, and in this time, the chances of a female patient becoming pregnant are higher than the others. There may be cases where the female patient may need assistance with ovulating as they may not be able to do it on their own- medication is available for these instances. ",
    },
    {
      id: 12,
      title: "Preimplantation Genetic Testing ",
      content:
        "Preimplantation genetic screening (PGS) is often referred to as preimplantation genetic testing for aneuploidy (PGT-A). This test looks for chromosomal anomalies in embryos. PGT-M, or preimplantation genetic diagnosis for monogenic illnesses, is another name for PGD. Preimplantation genetic diagnosis, or PGD, can be used to screen each embryo and identify whether it has inherited the genetic disorder from couples.",
    },
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
            <div className="text-white max-w-5xl text-center px-4 font-outfit mt-10">
              <h1 className="font-outfit font-semibold ">
                Endless Hope and Possibilities on Your Path to Parenthood with ART
              </h1>

              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-[70px] md:mt-[100px]">
        <h2 className=" font-semibold flex justify-center text-center mt-5">
          Assisted Reproductive Technology (ART) Treatments <br /> in Sudha Fertility Centre
        </h2>
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <Card key={index} title={card.title} content={card.content} />
            ))}
          </div>
        </div>
      </div>

      {/* Faq */}
      <div className="container mx-auto relative h-full  mt-[70px] md:mt-[100px]  mb-[70px] md:mb-[100px]">
        <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
          <div className="content mx-auto flex-1 text-center lg:text-left">
            <h2 className="font-outfit font-semibold flex justify-center">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-5">
            {FAQ.slice(0, visibleCount).map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
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
        </div>
      </div>
      {/* contact  */}
      <section className="mt-[70px] md:mt-[100px]" id="contactus">

        <ContactForm />
      </section>

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

export default AssistedReproductive;
