import React from "react";
import Banner from "@/assets/Policy/Banner.webp";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";
import Button from "@/components/button";
import Buttonbottm from "@/components/button";
import Buttoncomponents from "@/components/button/button";
function Periodcalculation() {
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
              <h1 className="font-outfit font-semibold ">
                Period Calculation
              </h1>
              <div className="button mt-7 flex justify-center">
                <Buttoncomponents title={"Book Your Free Appointment"} link="/contact-us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Pregnancy Calculator */}
      <div className="container mx-auto relative h-full mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              What is a Period Calculator?
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
            A period calculator is a tool that helps women predict their menstrual cycle and period using information such as the length of the menstrual cycle, the date of the last period, and the average length of the period to calculate when the next period is due.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full px-4 mt-[40px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto py-20 sm:px-6 lg:px-8 h-full bg-[#F0F5FF]">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">
              Period Calculator
            </h2>
          </div>

          <div className="flex flex-wrap mt-6 gap-6">
            {/* Myth vs Fact Section */}
            <div className="myth-fact flex-1 min-w-[300px]">
              <div className="title text-center">
                <h3 className="font-outfit font-semibold ">
                  Myth VS Fact 
                </h3>
              </div>

              <div className="mythcontent relative mt-12">
                <div className="myth absolute left-5 md:left-8 -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h4 className="text-white">Myth</h4>
                </div>
                <div className="description bg-white rounded-2xl p-5">
                  <p>
                  Period calculators can predict your start date with 100% accuracy. 
                  </p>
                </div>
              </div>

              <div className="fact relative mt-12">
                <div className="myth absolute left-5 md:left-8 -top-9 bg-[#173366] py-3 px-7 rounded-xl">
                  <h4 className="text-white">Fact</h4>
                </div>
                <div className="description bg-white rounded-2xl p-5">
                  <p>
                  They estimate based on your cycle length but may vary due to various health factors.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Section */}
            <div className="calculator flex-1 flex justify-center">
              <div className="w-full md:w-[75%] p-6 bg-white rounded-lg shadow-sm">
                <div className="space-y-6">
                  <h3 className="font-semibold  text-left">
                    Calculate Now!
                  </h3>

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
                          placeholder="MM-DD-YY"
                          className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    </div>

                    <button className="w-full px-4 py-3 rounded-full bg-[#173366] text-white transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
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
            How do You Calculate a Menstrual Cycle and Menstrual Period? 
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
            Many women get confused between the terms, “menstrual period” and “menstrual cycle”. The difference between these two is, that the menstrual period is the days you bleed. This usually lasts for 3 to 7 days and may vary for a few women.
            </p>
            <p className="flex mx-auto mt-3 text-gray-600">The menstrual cycle is the time between the first day of your period and the first day of your next period. The menstrual cycle may vary for every woman.  </p>

            <h3 className="font-semibold mt-3">Understanding The Phases Of The Menstrual Cycle </h3>
            <p className="flex mx-auto mt-3 text-gray-600">The menstrual cycle has four main phases: </p>
            <ul className="list-disc leading-[2.2] list-inside mt-3 text-gray-600">
              <li className="list-item"><span className="font-semibold text-[#000000]">Menstrual Phase:</span> The uterus sheds its lining, leading to menstrual bleeding. </li>
              <li className="list-item">
              <span className="font-semibold text-[#000000]">Follicular Phase:</span> This phase begins alongside menstruation. The pituitary gland releases follicle-stimulating hormone (FSH), which helps the ovaries develop follicles, each containing an egg. 
              </li>
              <li className="list-item"><span className="font-semibold text-[#000000]">Ovulation Phase:</span>A surge in luteinizing hormone (LH) triggers the ovary to release a mature egg.</li>
              <li className="list-item"><span className="font-semibold text-[#000000]">Luteal Phase:</span> The empty follicle forms the corpus luteum, which produces progesterone to thicken the uterine lining in preparation for pregnancy. </li>
             
            </ul>
          </div>
        </div>
      </div>

      {/* Are Online Pregnancy Calculators Accurate?  */}
      <div className="container mx-auto relative h-full mt-5">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
        
          <div className="sub mt-5">
            <h2 className="font-outfit font-semibold">
              Signs of Menstrual Period
            </h2>
            <p className="flex mx-auto mt-2 text-gray-600">
            As your period approaches, you may notice some changes in your body. These signs can vary from person to person, but common symptoms include:
            </p>
            <ul className="list-disc mt-3 leading-[2.2] list-inside text-gray-600">
              <li>
              <span className="font-semibold text-[#000000]">Abdominal cramps:</span> Mild to intense cramps in the lower abdomen.
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Bloating:</span> Feeling swollen or heavier due to water retention.
              </li>
              <li><span className="font-semibold text-[#000000]">Breast tenderness:</span> Soreness or swelling in the breasts. </li>
              <li>
              <span className="font-semibold text-[#000000]">Mood swings:</span> Irritability or sadness from hormonal shifts.
              </li>
              <li><span className="font-semibold text-[#000000]">Fatigue:</span> Increased tiredness, even with enough sleep. </li>
              <li><span className="font-semibold text-[#000000]">Headaches:</span> Hormonal changes may cause headaches. </li>
              <li><span className="font-semibold text-[#000000]">Lower back pain:</span> A dull ache in the lower back. </li>
            </ul>
          </div>

          <div className="sub mt-10">
            <h2 className="font-outfit font-semibold ">
            Causes of Delayed or Missed Periods 
            </h2>
            <ul className="list-disc mt-3 leading-[2.2] list-inside text-gray-600">
              <li>
              <span className="font-semibold text-[#000000]">Pregnancy:</span> A missed period is a common early sign of pregnancy.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Stress:</span> High-stress levels can interfere with hormone production
                and delay periods.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Polycystic ovary syndrome (PMOS (PCOS)):</span> A hormonal imbalance that can
                cause irregular periods.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Thyroid disorders:</span> Both overactive and underactive thyroids can
                impact menstruation.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Medications:</span> Certain medications, like birth control or
                antidepressants, can affect the cycle.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Perimenopause:</span> Hormonal changes leading to menopause can cause
                irregular or missed periods
              </li>
            </ul>
          </div>

          <div className="sub mt-10">
            <h2 className="font-outfit font-semibold mt-4">
            Why is Menstrual Period Important to Track? 
            </h2>
            <p className="flex mx-auto mt-3 text-gray-600">
            Tracking your menstrual period helps identify patterns in your cycle, making it easier to spot irregularities. It can also help with: 
            </p>
            <ul className="list-disc mt-3 leading-[2.2] list-inside text-gray-600">
              <li>
              <span className="font-semibold text-[#000000]">Understanding health:</span> It helps identify underlying health
                issues, such as hormonal imbalances or reproductive disorders.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Fertility awareness:</span> Tracking your cycle can help with family
                planning and identifying your most fertile days.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Managing symptoms:</span> Knowing when your period is due helps manage
                symptoms like cramps or mood swings.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Pregnancy Planning:</span> Regular tracking can help pinpoint the best
                time to conceive.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Medical insights:</span> It provides useful information for doctors if
                fertility or menstrual issues arise.{" "}
              </li>
            </ul>
          </div>

          <div className="sub mt-10 ">
            <h2 className="font-outfit font-semibold mt-4">
            What are the Benefits of Using a Period Calculator? 
            </h2>
            <ul className="list-disc mt-3 leading-[2.2] list-inside text-gray-600">
              <li>
              <span className="font-semibold text-[#000000]">Predict cycles:</span> Estimate your next period's start and end dates.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Tracks ovulation:</span> Helps identify ovulation days, aiding in
                pregnancy planning.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Manages symptoms:</span> Anticipates symptoms like cramps and mood
                swings.{" "}
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Detects irregularities:</span> Identifies cycle changes for better
                health insights.{" "}
              </li>
              <li><span className="font-semibold text-[#000000]">Convenient:</span> Easy way to track menstrual health. </li>
            </ul>
          </div>


        </div>
      </div>
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

export default Periodcalculation;
