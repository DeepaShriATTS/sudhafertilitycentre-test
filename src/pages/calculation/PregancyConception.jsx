import React from "react";
import Banner from "@/assets/Policy/Banner.webp";
import { Ambattur } from "@/middleware/imagesroute";
import { MarqueeComponent } from "@/components/marqueeSlider";
import Button from "@/components/button";
import { FaYoutube } from "react-icons/fa";
import Buttonbottm from "@/components/button";
import Buttoncomponents from "@/components/button/button";
function PregancyConception() {
  return (
    <>
      {/* Banner  */}
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center -top-28  md:-top-36"
          style={{
            backgroundImage: `url(${Banner.src})`,
            backgroundSize: "fill",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-[#173366A1] opacity-45"></div>
        </div>

        <div className="relative h-full flex flex-col">
          <div className="flex-1 flex items-center justify-center mb-40 mt-16">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-outfit font-semibold">Period calculation</h1>
              <div className="button mt-7 flex justify-center">
                <Buttoncomponents title={"Book Your Free Appointment"} link="/contact-us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Pregnancy Calculator */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
            What is the Conception Calculator? 
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
            The pregnancy conception calculator estimates the date of conception based on the last period date or ultrasound date. The date of conception is the day on which the baby is conceived. This tool will help expecting parents track milestones and due dates. Many couples find this tool valuable for planning their pregnancy journey and understanding their baby’s development timeline.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full px-4 mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8 h-full bg-[#F0F5FF]">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              Pregnancy Conception Calculator
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row mt-6 gap-4 sm:gap-8">
            {/* Myth vs Fact Section */}
            <div className="myth-fact flex-1">
              <div className="title text-center">
                <h2 className="font-outfit font-semibold text-xl sm:text-2xl md:text-3xl lg:text-2xl">
                  Myth VS Fact 
                </h2>
              </div>

              <div className="mythcontent relative mt-12">
                <div className="myth absolute left-4 sm:left-8 -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h3 className="text-white">Myth</h3>
                </div>

                <div className="description bg-white rounded-2xl p-5">
                  <p>
                  Conception calculators can pinpoint the exact moment of conception. 
                  </p>
                </div>
              </div>

              <div className="fact relative mt-12">
                <div className="myth absolute left-4 sm:left-8 -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h3 className="text-white">Fact</h3>
                </div>

                <div className="description bg-white rounded-2xl p-5">
                  <p>
                  They estimate the date based on ovulation, but the exact moment varies due to sperm survival. 
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Section */}
            <div className="calculator flex-1 flex justify-center sm:justify-end">
              <div className="w-full sm:w-[75%] p-6 bg-white rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h2 className="text-lg font-semibold text-gray-900 text-center sm:text-left">
                    Calculate Now!
                  </h2>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">
                        Calculate by
                      </label>
                      <select className="w-full px-3 py-2 bg-white border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                        <option>Due date</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">
                        Your Due Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <button className="w-full px-4 rounded-full py-3 bg-[#173366] text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                      Calculate My Expected Due Date
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How Are Trimesters Calculated? */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
            How to Calculate the Conception Date?
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
            For woman who want to figure out when their pregnancy began, this tool will be helpful.
            </p>
            <ul className="list-disc leading-[2.2] mt-3 list-inside text-gray-600">
              <li className="list-item"><span className="font-semibold text-[#000000]">Last Menstrual Period Date: </span> </li>
              <p className="ms-5">
              Conception usually happens 11 to 21 days after the start of a woman’s period, assuming a 28-day cycle. By counting from the first day of your last period, you can estimate your conception window. This helps couples figure out when pregnancy may have started, supporting family planning and prenatal care decisions.
              </p>
              <li className="list-item"><span className="font-semibold text-[#000000]">Estimated Due Date:</span></li>
              <p className="ms-5">
              To find your conception window, count back 40 weeks from your due date to get the start of your last period. Then, add 11 to 21 days to pinpoint when conception likely occurred. This method is useful for women with irregular cycles and gives a reasonable idea of when pregnancy began. 
              </p>
              <li className="list-item"><span className="font-semibold text-[#000000]">Gestational Age:</span>  </li>
              <p className="ms-5">
              Start with today’s date and subtract the number of weeks you are pregnant to find the start of your last period. Then, add 11 to 21 days to estimate your conception window. This method helps track your reproductive timeline. Keep in mind that cycles can vary slightly from these calculations.
              </p>
            </ul>
          </div>
        </div>
      </div>

      {/* Are Online Pregnancy Calculators Accurate?  */}
      <div className="container mx-auto relative h-full mt-8">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
            What Factors Affect the Accuracy of a Conception Calculator?
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
            The accuracy of a conception calculator depends largely on the regularity of a woman’s menstrual cycle. Irregular periods can make it harder to pinpoint the exact conception window. Our tool is most accurate for women with predictable monthly cycles.
            </p>
            <ul className="list-disc leading-[2.2] list-inside mt-3 text-gray-600">
              <li><span className="font-semibold text-[#000000]">Health Conditions:</span> Conditions like PMOS (PCOS) or thyroid disorders, which cause irregular cycles and anovulation, can affect the accuracy of the results.</li>
              

              <li><span className="font-semibold text-[#000000]">Lifestyle Factors:</span> High stress, poor diet, inconsistent sleep, and a sedentary lifestyle can disrupt menstrual regularity and ovulation, influencing the accuracy of the calculation. </li>
              

              <li><span className="font-semibold text-[#000000]">Hormonal Influences:</span> Medications that affect hormone levels, as well as women who have recently discontinued birth control, may experience changes in their menstrual cycle, impacting the accuracy of the conception estimate. </li>
              
              
            </ul>
          </div>

          <div className="sub mt-8">
            <h2 className="font-outfit font-semibold  ">
            Benefits of Using the Conception Calculator 
            </h2>
            <ul className="list-disc leading-[2.2] mt-3 list-inside text-gray-600">
            <li><span className="font-semibold text-[#000000]">Increased Conception Chances:</span> Timing is key for conception. The calculator helps estimate your fertile window, increasing the chances of aligning intercourse with ovulation.</li>
              

              <li><span className="font-semibold text-[#000000]">Personalized Insights:</span> The conception calculator acts as a fertility assistant, showing your most fertile days and tracking your cycle for better health insights. </li>
              

              <li><span className="font-semibold text-[#000000]">User-Friendly Interface: </span> Most calculators are simple to use, with easy-to-understand designs and no medical jargon, providing quick results. </li>

              <li><span className="font-semibold text-[#000000]">Health Awareness: </span> Tracking your menstrual cycle with the calculator reveals important health patterns, helping you take charge of your reproductive health.  </li>

              <li><span className="font-semibold text-[#000000]">Emotional Support: </span> Understanding fertility boosts confidence on the path to parenthood, offering reassurance and valuable insights.  </li>
            </ul>
          </div>


        </div>
      </div>
      <section className="mt-[70] md:mt-[100px] mb-[70px] md:mb-[100px]">
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
                <Buttonbottm text="Watch on Youtube" link="https://www.youtube.com/@sudhafertilitycentre" />
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

export default PregancyConception;
