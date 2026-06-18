"use client"
import Button from "@/components/button/button";
import React, { useState } from "react";
import Banner from "@/assets/Treatments/PcosAndPdoc/Banner.webp";
import About from "@/assets/Treatments/PcosAndPdoc/About.webp";
import subAbout from "@/assets/Treatments/PcosAndPdoc/SubAbout.webp";
import Symptoms from "@/assets/Treatments/PcosAndPdoc/Symptoms.webp";
import Diagnosis from "@/assets/Treatments/PcosAndPdoc/Diagnosis.webp";
import Treatment from "@/assets/Treatments/PcosAndPdoc/Treatment.webp";
import SYNDROME from "@/assets/Treatments/PcosAndPdoc/SYNDROME.webp";
import Disease from "@/assets/Treatments/PcosAndPdoc/Disease.webp";
import WhyChoose from "@/assets/Treatments/IVF/WhyChoose.webp";
import Image from "next/image";
import Tick from "@/assets/Treatments/IVF/Tick.svg";
import FAQItem from "@/components/accordion";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MarqueeComponent } from "@/components/marqueeSlider";
import ContactForm from "@/components/contact/contactForm";
import { Ambattur } from "@/middleware/imagesroute";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FAQ = [
  {
    question: "Does hormonal imbalance affect PMOS(PCOS)/PCOD?",
    answer: "Yes, hormonal imbalance is a key factor in conditions like PMOS(PCOS) or PCOD. In PMOS(PCOS)/PCOD, an imbalance of hormones such as insulin, estrogen, and progesterone can lead to irregular menstrual cycles, ovulation issues, and other symptoms. At Sudha Fertility Centre, we offer specialised care to manage hormonal imbalances and help women with PMOS(PCOS)/PCOD achieve their fertility goals.",
  },
  {
    question: "What is Polyendocrine Metabolic Ovarian Syndrome (Polycystic Ovarian Syndrome)?",
    answer: "Polyendocrine Metabolic Ovarian Syndrome (PMOS i.e. Polycystic Ovarian Syndrome (PCOS)) is a condition where the ovaries produce excess male hormones, affecting the menstrual cycle and ovulation. Sudha Fertility Centre, the best fertility centre in India, provides effective treatments for treating PMOS(PCOS) with the best fertility specialists in India.",
  },
  {
    question: "Does PMOS(PCOS)/PCOD affect female fertility?",
    answer: "Yes, PMOS(PCOS)/PCOD can lead to infertility by disrupting the menstrual cycle and ovulation, making it more difficult to conceive. However, with proper treatment and management, many women with PMOS(PCOS)/PCOD can achieve pregnancy. At Sudha Fertility Centre, we provide tailored treatment options to help manage PMOS(PCOS)/PCOD and enhance fertility.",
  },
  {
    question: "Can PMOS(PCOS) be cured?",
    answer: "PMOS(PCOS) can be effectively managed with lifestyle changes and medical treatments. Managing symptoms like irregular periods, hormonal imbalances, and infertility is possible through medication, weight management, and other therapies. As the best fertility centre, Sudha Fertility Centre offers personalised treatment plans to help manage PMOS(PCOS) and improve fertility outcomes, enabling women to live healthier, more balanced lives.",
  },
  {
    question: "How to cure PMOS(PCOS) permanently?",
    answer: "There is no permanent cure for PMOS(PCOS), but symptoms can be managed with lifestyle changes and medical treatments. Weight management, a balanced diet, exercise, and medications can help control symptoms and improve fertility. At Sudha Fertility Centre, we offer personalised care to manage PMOS(PCOS) effectively.",
  },
  {
    question: "Do irregular or heavy menstrual periods mean PMOS(PCOS)/PCOD?",
    answer: "Irregular or heavy menstrual periods don’t mean PMOS(PCOS)/PCOD, but for some women, it might be a symptom of PMOS(PCOS)/PCOD. Other factors like stress, thyroid imbalances, or other hormonal issues can also cause similar symptoms. As the best fertility centre in India, Sudha Fertility Centre offers diagnostic tests to confirm PMOS(PCOS) and treat them with personalised care.",
  },
  {
    question: "Which medical test confirms PMOS(PCOS)/PCOD?",
    answer: "A pelvic ultrasound, blood tests for hormone levels, and a physical exam help confirm PMOS(PCOS)/PCOD. Sudha Fertility Centre, the best fertility centre in India, provides thorough diagnostic services to accurately diagnose PMOS(PCOS).",
  },
  {
    question: "Is PMOS(PCOS)/PCOD a serious problem?",
    answer: "PMOS(PCOS)/PCOD can be a serious condition if left unmanaged, as it can lead to complications like infertility, diabetes, heart disease, and endometrial cancer. However, with early diagnosis and proper management, most women can lead healthy lives. As the best fertility centre in India, Sudha Fertility Centre offers personalised treatment plans to manage PMOS(PCOS)/PCOD and improve overall health and fertility.",
  },
  {
    question: "Can I have PMOS(PCOS) with regular periods?",
    answer: "Yes, it is possible to have PMOS(PCOS) (Polycystic Ovary Syndrome) even with regular periods. PMOS(PCOS) symptoms can vary widely, and some women may experience regular cycles while still having other signs like ovarian cysts, hormonal imbalances, or difficulty conceiving. If you suspect you have PMOS(PCOS), consult a fertility specialist at Sudha Fertility Centre, the best fertility centre in India, for an accurate diagnosis and appropriate treatment.",
  },
  {
    question: "What is the best age to get pregnant with PMOS(PCOS)?",
    answer: "The best age to get pregnant with PMOS(PCOS) (Polycystic Ovary Syndrome) is typically in your 20s or early 30s, as fertility tends to decline with age. However, many women with PMOS(PCOS) can conceive successfully at any age with the right treatment and care. If you're struggling with infertility due to PMOS(PCOS), consult with a specialist at Sudha Fertility Centre, the best fertility centre in India, for personalised guidance and treatment options to enhance your chances of pregnancy.",
  },
  {
    question: "Can I conceive with PMOS(PCOS)?",
    answer: "Yes, many women with PMOS(PCOS) can conceive with the right treatment and care. While PMOS(PCOS) can affect ovulation and make conception more challenging, various treatments, including medication, lifestyle changes, and assisted reproductive techniques, can help improve fertility. At Sudha Fertility Centre, the best fertility centre in India, we provide personalised care and effective solutions to help women with PMOS(PCOS) achieve their pregnancy goals.",
  },
  {
    question: "Can pregnancy with PMOS(PCOS) affect the baby?",
    answer: "With the right care and treatment, women with PMOS(PCOS) (Polycystic Ovary Syndrome) can have a healthy pregnancy and baby. While PMOS(PCOS) may increase the risk of certain complications like gestational diabetes or preeclampsia, these risks can be managed effectively with regular monitoring and medical support. At Sudha Fertility Centre, the best fertility centre in India, we provide personalised care to ensure the best outcomes for both mother and baby.",
  },
];
function PcosAndPdoc() {
  const Causes = [
    "Irregular menstrual cycle",
    "Absence of menstruation",
    "Weight gain",
    "Acne",
    "Excessive hair growth",
    "Heavy menstrual bleeding",
    "Skin darkening",
    "Hair loss",
    "Excess insulin production",
    "Excess androgen production",
    "Heredity condition",

  ];

  const SYNDROMEData = [
    "Heart diseases",
    "Miscarriage",
    "Gestational diabetes",
    "Preeclampsia",
    "Preterm birth",
    "Newborn in NICU",
    "Stillbirth",
    "Need of C-section",
  ];

  const DiseaseData = [
    "Difficulty getting pregnant",
    "Swelling in ovaries",
    "Male-pattern hair loss",
    "Abdominal weight gain",
    "Irregular menstrual cycle",
    "Infertility",
  ];

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
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-28 ">
            <div className="text-white text-center px-4 font-outfit mt-10">
              <h1 className="font-outfit font-semibold">
                Comprehensive treatments for PMOS(PCOS)/PCOD.

              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
                Let us Help you Overcome the Challenges of PMOS(PCOS)/PCOD
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Polycystic Ovarian Syndrome (PMOS(PCOS)): */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">



          <h2 className="font-semibold text-center lg:block mb-7">
            Understanding PMOS(PCOS)/PCOD
          </h2>
          <div className="main flex flex-col-reverse items-center md:flex-row mt-6">

            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={About} alt="About IUI" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4 ">
              <div>
                <div className="Title">

                  <h2 className=" font-semibold hidden lg:block">
                    Polyendocrine Metabolic Ovarian Syndrome (PMOS i.e. Polycystic Ovarian Syndrome (PCOS)):
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    PMOS(PCOS) is a medical condition in which the woman’s body
                    produces a high number of male hormones (androgen). This
                    affects the menstrual cycle, it may be irregular, last for a
                    long number of days, or may not menstruate for a long time.
                    PMOS(PCOS) affects an estimated 8 - 13% of reproductive-aged
                    women.
                  </p>
                </div>
                <div className="mt-5">
                  <Button title="Get a Free Consultation" link="#contactus"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  Polycystic Ovarian Disease (PCOD): */}
      <div className="container mx-auto relative h-full mt-[130px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pb-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold flex justify-center text-center mt-14 lg:hidden">
            Polycystic Ovarian Disease (PCOD):
          </h2>
          <div className="main flex flex-col md:flex-row">
            <div className="flex-1 px-4">
              <div>
                <div className="Title">
                  <h2 className=" font-semibold hidden lg:block">
                    Polycystic Ovarian Disease (PCOD):
                  </h2>
                </div>
                <div className="Accordian mt-4">
                  <p className="text-gray-600">
                    PCOD is a condition in which ovaries release immature or
                    partially mature eggs, which may develop as cysts in
                    ovaries. This is caused by hormonal imbalance, and also
                    genetics could be a cause. One-third of all menstruating
                    women are affected by PCOD around the globe.
                  </p>
                  <p className="text-gray-600 mt-3">
                    Both PMOS(PCOS) and PCOD can affect women’s fertility, leaving it
                    untreated may increase the chances of risk in conception.
                    It’s important to understand the symptoms and treat them in
                    the earlier stages. Women can develop this condition at any
                    age after puberty, but most of them find out they have this
                    condition in their mid-20s and 30s.
                  </p>

                  <p className="text-gray-600 mt-3">
                    In the initial stages of these conditions, it is easy to
                    treat them, leaving them undiagnosed and untreated can
                    increase the complications of
                  </p>

                  <ul className="text-gray-600 text-[18px] space-y-2 list-inside list-disc mt-3">
                    <li>cyst formation </li>
                    <li>high blood pressure</li>
                    <li>diabetes, obesity</li>
                    <li>Even cancers in the uterus.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 flex items-center justify-center mt-6 md:mt-0">
              <div className="w-full h-full flex justify-center">
                <div className="relative w-full h-64 md:h-52 lg:h-96">
                  <Image
                    src={subAbout}
                    alt="IVF in Sudha Fertility Centre"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="description rounded-lg p-2  mt-2">
            <p className="text-gray-600">
              Most of the women with PMOS(PCOS) and PCOD problems face difficulty in
              getting pregnant
            </p>

            <p className="text-gray-600 mt-2">
              Sudha Fertility Centre provides the best PCOD or PMOS(PCOS) treatment in
              India, with the best fertility experts in India. As the best
              fertility centre in India, we stand with you and help you overcome
              the challenges of PMOS(PCOS)/PCOD
            </p>
          </div>
        </div>
      </div>

      {/* Why Choose Sudha For PMOS(PCOS) & PCOD Treatments? */}

      <div className="container mx-auto mt-[70px] md:mt-[100px] relative h-full bg-[#F0F5FF]">
        <div className="max-w-7xl mx-auto px-4 pt-[40px] pb-[40px] sm:px-6 lg:px-8 h-full">
          <div className="Title lg:hidden text-center">
            <h2 className=" font-semibold">

              Why Choose Sudha For PMOS(PCOS) & PCOD Treatments
            </h2>
          </div>
          <div className="main flex flex-col-reverse md:flex-row">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96 mt-4">
                  <Image src={WhyChoose} alt="About IUI" className="rounded-lg" />
                </div>
              </div>
            </div>

            <div className="flex-1 flex items-center px-4">
              <div>
                <div className="Title hidden lg:block">
                  <h2 className=" font-semibold">
                    Why Choose Sudha For PMOS(PCOS) & PCOD Treatments
                  </h2>
                </div>
                <div className="description mt-4 text-gray-600">
                  <p>
                    As the best fertility centre in India, Sudha Fertility
                    Centre provides exceptional treatments for PMOS(PCOS)/PCOD in
                    India with the best fertility experts. Our doctors examine
                    you thoroughly and provide you with the right treatments. We
                    help you nurture your reproductive health in the hands of
                    expertise.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className=" font-semibold flex justify-center text-center mb-5">
            Symptoms and Treatment
          </h2>
          <div className="main flex flex-col-reverse justify-center  items-center lg:flex-row mt-6">
            <div className="flex-1  items-center px-4">
              <div className="title">
                <h2 className="font-semibold text-start ">
                Causes & Symptoms

                </h2>
              </div>
              <div className="flex flex-col-reverse justify-center items-center lg:flex-row">
                {/* Do's Section */}
                <div className="do flex-1 justify-center items-center">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4 ">
                      {Causes.slice(0, 6).map((item, index) => (
                        <div key={index} className="flex items-start lg:gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 ms-8 flex-1">
                      {Causes.slice(6).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-auto">
                  <Image src={Symptoms} alt="About IUI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full  mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <div className="main flex flex-col-reverse items-center lg:flex-row">
            <div className="flex-1 lg:px-12 py-3   flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-64 md:h-80 lg:h-96">
                  <Image src={Diagnosis} alt="Diagnosis" />
                </div>
              </div>
            </div>

            <div className="flex-1  items-center px-4  ">
              <div className="title">
                <h2 className="font-semibold ms-2">Diagnosis:</h2>
              </div>
              <div className="flex flex-col ">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Medical history review (menstrual irregularities,
                          weight gain, acne, hirsutism)
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Transvaginal ultrasound to check for ovarian cysts.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Blood tests to assess hormone levels (androgens,
                          insulin, LH/FSH ratio).
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Physical examination for symptoms like excess hair
                          growth or skin changes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <div className="main flex flex-col items-center lg:flex-row">
            <div className="flex-1  items-center px-4  ">
              <div className="title mt-4">
                <h2 className="font-semibold ms-2">Treatment:</h2>
              </div>
              <div className="flex flex-col ">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex">
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          A balanced diet and regular exercise to manage insulin
                          resistance and weight.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Birth control pills, Metformin, anti-androgens, and
                          ovulation stimulants.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Ovulation induction with fertility drugs or IVF for
                          unresponsive cases.
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Ovarian drilling to restore ovulation in some cases
                        </p>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-6 h-6">
                          <Image src={Tick} alt="Tick" />
                        </div>
                        <p className="text-gray-600 flex-1 pt-0.5">
                          Therapy or support groups to manage emotional
                          challenges
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3   flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full h-auto">
                  <Image src={Treatment} alt="Diagnosis" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 pt-10 sm:px-6 lg:px-8 h-full">
          <h2 className="font-semibold text-center ">
            How Does PMOS(PCOS) & PCOD Affect Women’s Health?
          </h2>
          <div className="main flex flex-col-reverse items-center lg:flex-row py-7 mt-8">
            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image src={SYNDROME} alt="About IUI" />
                </div>
              </div>
            </div>

            <div className="flex-1  items-center px-4">
              <div className="title">
                <h2 className="font-semibold ">PMOS(PCOS)</h2>
              </div>
              <div className="flex flex-col-reverse  lg:flex-row">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex flex-wrap">
                    <div className="space-y-4">
                      {SYNDROMEData.slice(0, 4).map((item, index) => (
                        <div key={index} className="flex items-start lg:gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 ms-8 flex-1">
                      {SYNDROMEData.slice(4).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 h-6">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
          <div className="main flex flex-col-reverse items-center lg:flex-row ">
            <div className="flex-1  items-center px-4">
              <div className="title">
                <h2 className=" font-semibold ">PCOD</h2>
              </div>
              <div className="flex flex-col-reverse  lg:flex-row">
                {/* Do's Section */}
                <div className="do flex-1">
                  <div className="heading"></div>
                  <div className="pt-6 flex items-center">
                    <div className="space-y-4">
                      {DiseaseData.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex items-start lg:gap-4">
                          <div className="flex-shrink-0 w-6 ">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-4 ms-8 flex-1">
                      {DiseaseData.slice(3).map((item, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-6 ">
                            <Image src={Tick} alt="Tick" />
                          </div>
                          <p className="text-gray-600 flex-1 pt-0.5">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Vertical Divider */}
              </div>
            </div>

            <div className="flex-1 lg:px-12 py-3  flex items-center justify-center">
              <div className="w-full h-full flex justify-center items-center">
                <div className="relative w-full ">
                  <Image src={Disease} alt="About IUI" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* FAQ  */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px] mb-[70px] md:mb-[100px]">
        <div className="max-w-5xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
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
          <h3 className="font-semibold text-center ">
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

export default PcosAndPdoc;
