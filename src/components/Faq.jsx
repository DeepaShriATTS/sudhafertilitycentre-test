"use client";
import React, {  useState } from "react";
import FAQItem from "@/components/accordion";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";


const FAQ = [
  {
    question: "Which is the best fertility centre in South India?",
    answer:
      "Sudha Fertility Centre is considered the best fertility centre in South India, equipped with world-class facilities, state-of-the-art technologies, the best fertility doctors in India, experienced gynecologists, and 40+ Branches across South India and Sri Lanka with a high success rate. ",
  },
  {
    question: "Which is the best fertility centre for IVF treatment?",
    answer:
      "With more than 4 decades of experience and expertise in fertility care, Sudha Fertility Centre has delivered more than 1 lakh+ healthy babies, recognizing us as the best IVF centre in India.",
  },
  {
    question: "What is the average cost of fertility treatments?",
    answer:
      "The average cost of fertility treatments varies based on the type of procedure the doctor suggests. At Sudha Fertility Centre, the best fertility hospital in India, we offer affordable and personalized fertility solutions to support your journey toward parenthood with the highest level of care.",
  },
  {
    question: "Which IVF Centre has the highest success rate in Tamil Nadu?",
    answer:
      "With more than high success rate in delivering healthy babies, Sudha Fertility Centre is known as the best IVF centre in India, equipped with the best fertility doctors in India and world-class treatments and facilities. ",
  },
  {
    question: "Which hospital has the best IVF Doctors in Tamil Nadu?",
    answer:
      "Sudha Fertility Centre, recognised as the best IVF hospital in India is well-equipped with the best IVF doctors, experienced fertility specialists, and skillful gynecologists. ",
  },
  {
    question:
      "Which Fertility Centre provides world-class fertility treatments?",
    answer:
      "Sudha Fertility Centre is considered the best fertility centre in South India, providing world-class fertility treatments with state-of-the-art technologies, the best fertility doctors in India, experienced gynecologists, and high-tech technologies. ",
  },
  {
    question: "Why choose Sudha Fertility Centre for IVF treatments?",
    answer:
      "Sudha Fertility Centre is renowned as one of the best fertility hospitals providing the best IVF treatments with state-of-the-art facilities, experienced specialists, and personalized care. We blend advanced technology with compassionate support to offer you the best chance of achieving your parenthood goals. ",
  },
  {
    question:
      "What can I expect during my first consultation with a fertility specialist?",
    answer:
      "During your first consultation, fertility specialists will review your medical history, discuss any fertility concerns, and recommend necessary tests. As the best fertility hospital in India, we focus on understanding your unique situation and will explain the best treatment options for you. At Sudha Fertility Centre, we are committed to providing compassionate care, expert guidance, and personalized treatment plans to help you achieve your parenthood dreams.",
  },
  {
    question: "Does Sudha Fertility Centre provide free fertility camps?",
    answer:
      "Yes, Sudha Fertility Centre conducts free fertility camps every month all over South India, ensuring our world-class fertility treatment is accessible to everyone. You can know the updates about our free medical camps on our social media platforms.",
  },
  {
    question: "How do you start fertility treatment at Sudha Fertility Centre?",
    answer:
      "To start fertility treatment at Sudha Fertility Centre, visit your nearest Sudha branch or book an appointment by messaging our WhatsApp or calling our helpline number 7670076006. ",
  },
  {
    question: "Is there any protocol to start a fertility treatment?",
    answer:
      "At Sudha Fertility Centre, the process begins with a thorough assessment, including medical history, physical exams, and fertility tests for both partners. Based on the results, your fertility specialist will develop a personalized treatment plan. The protocol may involve lifestyle changes, medications, or assisted reproductive technologies like IVF,  IUI, etc. Throughout the journey, we provide expert guidance, care, and support to ensure the best possible outcome.",
  },
  {
    question: "When is the right time to start fertility treatment?",
    answer:
      "It’s advisable to consult the best fertility hospital if you have been trying to conceive for over a year without success or if you have known reproductive health issues. Sudha Fertility Centre, recognized as one of the best fertility centres, offers comprehensive consultations to evaluate your fertility and discuss tailored treatment options. Our expert team provides personalized care to help you navigate your fertility journey and achieve your parenthood goals. ",
  },
];

export default function Faq() {

     const [visibleCount, setVisibleCount] = useState(7);
      const [openIndex, setOpenIndex] = useState(0);
      const [faqIndex, setFaqIndex] = useState(0);
      const [showAll, setShowAll] = useState(false);
      const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
      };
    
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

   <div className="container mx-auto mt-[70px] lg:mt-[100px] relative h-full">
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
                  isOpen={faqIndex === index}
                  toggle={() => toggleFAQ(index)}
                />
              ))}
              {FAQ.length > 7 && ( // Ensure button is shown if there are more than 7 FAQs
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

  );
}
