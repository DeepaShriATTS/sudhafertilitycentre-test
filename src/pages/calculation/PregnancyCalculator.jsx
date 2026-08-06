import React from "react";
import Banner from "@/assets/Policy/Banner.webp";
import Button from "@/components/button/button";
import { Ambattur } from "@/middleware/imagesroute";

import { MarqueeComponent } from "@/components/marqueeSlider";
import Buttonbottm from "@/components/button";
function PregnancyCalculator() {
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
              <h1 className="font-outfit font-semibold">
                Pregnancy Calculator
              </h1>
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="/contact-us" />
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
              Pregnancy Calculator
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
              A pregnancy calculator, or due date calculator, helps expecting parents track key pregnancy milestones. It estimates the due date, monitors each stage, and highlights important moments like the baby’s first heartbeat or ultrasound. By entering details like the last menstrual period (LMP) and cycle length, parents can map out their pregnancy timeline.
            </p>
            <p className="mt-3 text-gray-600">
              Pregnancy is the period when a baby grows inside the mother’s uterus, typically lasting about 40 weeks from the start of the last menstrual period or 38 weeks from conception. During the first OB-GYN visit, doctors estimate the due date using a sonogram and LMP.
            </p>
            <p className="mt-3 text-gray-600">
              A week-by-week pregnancy calculator helps parents stay informed about their baby’s growth and prepare for each trimester. Some may prefer a month-by-month calculator for easier tracking.
            </p>
          </div>
        </div>
      </div>


      <div className="container mx-auto relative h-full px-4 mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8 h-full bg-[#F0F5FF] rounded-lg">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold">
              Pregnancy Calculator
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row mt-6 gap-8">
            {/* Myth VS Fact Section */}
            <div className="flex-1">
              <div className="title text-center">
                <h2 className="font-outfit font-semibold text-xl sm:text-2xl md:text-3xl lg:text-2xl">
                  Myth VS Fact
                </h2>
              </div>

              <div className="mythcontent relative mt-10">
                <div className="myth absolute left-4 sm:left-8 -top-8 bg-[#173366] py-2 px-5 rounded-lg sm:rounded-xl">
                  <h4 className="text-white">Myth</h4>
                </div>

                <div className="description bg-white rounded-2xl p-4 sm:p-5 shadow-md">
                  <p className="">
                    Pregnancy calculators can determine the exact date of conception.
                  </p>
                </div>
              </div>

              <div className="fact relative mt-10">
                <div className="myth absolute left-4 sm:left-8 -top-8 bg-[#173366] py-2 px-5 rounded-lg sm:rounded-xl">
                  <h4 className="text-white ">Fact</h4>
                </div>

                <div className="description bg-white rounded-2xl p-4 sm:p-5 shadow-md">
                  <p className="text-sm sm:text-base">
                    They estimate conception based on your last period but can't pinpoint the exact date due to ovulation and sperm survival variations.
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Section */}
            <div className="flex-1 flex justify-center sm:justify-end">
              <div className="w-full sm:w-[75%] p-5 bg-white rounded-xl shadow-md">
                <div className="space-y-5">
                  <h3 className=" font-semibold  text-left ">
                    Calculate Now!
                  </h3>

                  <div className="space-y-4">
                    {/* Calculate By Dropdown */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Calculate by</label>
                      <select className="w-full px-3 py-2 bg-white border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                        <option>Due date</option>
                      </select>
                    </div>

                    {/* Due Date Input */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">Your Due Date</label>
                      <input
                        type="date"
                        className="w-full px-3 py-2 border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    {/* Calculate Button */}
                    <button className="button-all mx-auto">
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
              How to Use Pregnancy Calculator:
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              A pregnancy calculator helps the expecting parents estimate their due date and track the pregnancy's progress.
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-[2.2] mt-3">
              <li className="list-item"><span className="font-semibold text-[#000000]"> Choose a Pregnancy Calculator :</span> There are many online and mobile pregnancy calculators. Pick one that suits your needs.  </li>
              <li className="list-item">
                <span className="font-semibold text-[#000000]"> Enter Your Last Menstrual Period (LMP):</span> Most calculators use the first day of your last period as the starting point.
              </li>
              <li className="list-item"><span className="font-semibold text-[#000000]"> Provide Your Average Cycle Length :</span>A typical cycle lasts 28 days, but yours may be shorter or longer. Enter the correct number for better accuracy. </li>
              <li className="list-item"><span className="font-semibold text-[#000000]"> Additional Information:</span> If any additional information is asked such as your age or whether it’s your first pregnancy provide the required input. </li>
              <li className="list-item"><span className="font-semibold text-[#000000]"> Calculate:</span> After entering the required information click, “Calculate” to receive the estimated due date.  </li>

            </ul>





            <p className="mt-3 text-gray-600">
              The calculator will estimate your due date by adding 280 days (40 weeks) to your LMP. Use the estimated due date to schedule prenatal visits, prepare for each trimester, and track important pregnancy moments. The due date suggested by a pregnancy calculator is just an estimate, it does not give you an accurate due date.
            </p>
            <p className="mt-3 text-grey-600">
              <span className="font-semibold">
                Note:
              </span> The interface of each pregnancy calculator may vary.
            </p>
          </div>
        </div>
      </div>

      {/* How Are Trimesters Calculated? */}
      <div className="container mx-auto relative h-full  ">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
              How are Trimesters Calculated?
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
              Pregnancy is divided into three trimesters, each marking different stages of the baby’s growth:
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-[2.2] mt-3">
              <li className="list-item"><span className="font-semibold text-[#000000]"> First Trimester (Weeks 1-12):</span> The baby’s heart, brain, limbs, and other organs begin to form.  </li>
              <li className="list-item">
                <span className="font-semibold text-[#000000]"> Second Trimester (Weeks 13-28):</span> The baby continues to grow, and
                movements become noticeable.
              </li>
              <li className="list-item"><span className="font-semibold text-[#000000]"> Third Trimester (Weeks 29-40):</span>The baby’s organs mature, and the mother’s body prepares for childbirth. </li>
             

            </ul>
            
            
            <p className="mt-3 text-gray-600">
            Pregnancy calculators, including the IVF week-by-week calculator, help expectant mothers track their baby’s development throughout each trimester. These tools provide detailed insights into growth and changes at every stage.
            </p>
          </div>
        </div>
      </div>

      {/* Are Online Pregnancy Calculators Accurate?  */}
      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
            Are Online Pregnancy Calculators Accurate?
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
            Online pregnancy calculators give a general idea of the pregnancy timeline, but the dates are only estimates. Since most women don’t know their exact conception date, these tools provide an approximate due date. 
            </p>
            <p className="flex mx-auto mt-5 text-gray-600">
            While calculators are convenient, a doctor’s evaluation is more accurate. Ultrasounds can help adjust the due date based on the baby’s size and other factors. Labor may happen one to two weeks before or after the estimated due date, so it’s best to use calculators as a guide rather than a certainty.
            </p>
          </div>

          <div className="sub mt-8">
            <h2 className="font-outfit font-semibold  mt-4">
            Planning For Pregnancy: 
            </h2>
            <p className="flex mx-auto mt-2 text-gray-600">
            Calculating pregnancy is simple, but preparing for it takes careful planning. Here’s how to get ready:
            </p>

            <ul className="text-gray-600 leading-[2.2] space-y-2 mt-3 ms-4 list-disc">
              <li>
              <span className="font-semibold text-[#000000]">Preconception Check-up:</span> Visit a doctor to check for any health issues and ensure your body is ready for pregnancy. 
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Healthy Lifestyle:</span> Eat a balanced diet, exercise regularly, and avoid harmful substances to improve overall health. 
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Tracking Ovulation:</span> Understanding your ovulation cycle helps time intercourse for conception. A week-by-week pregnancy calculator can help track ovulation and fertile days. 
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Pregnancy Detection:  */}
      <div className="container mx-auto relative h-full mb-[70px] md:mb-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
            Pregnancy Detection: 
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-3 text-gray-600">
            Early pregnancy detection is important for timely prenatal care. Home tests are the most common and detect the hormone HCG in urine. If you think you're pregnant, visit your doctor for confirmation. Blood tests and ultrasounds are more accurate, providing detailed information about the health of both the mother and the baby, including the gestational age.
            </p>
          </div>

          <div className="sub">
            <h2 className="font-outfit font-semibold mt-8">
            Pregnancy Management:
            </h2>
            <p className="flex mx-auto mt-2 text-gray-600">
            Pregnancy management involves regular doctor visits, monitoring health, and addressing any complications. Key aspects include:
            </p>

            <ul className="text-gray-600 leading-[2.2] space-y-2 mt-3 ms-5 list-disc">
              <li>
              <span className="font-semibold text-[#000000]">Prenatal Vitamins:</span> These are crucial for fetal development, with folic acid being the most important.
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Monitoring:</span> Regular checks on the baby’s growth and the mother’s health are essential, as complications can arise unexpectedly. 
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Lifestyle Adjustments: </span> This includes avoiding certain foods, reducing stress, and getting enough rest, among other changes.
              </li>
            </ul>
          </div>

          <div className="sub mt-4">
            <h2 className="font-outfit font-semibold mt-8">
            Health and Nutrition Tips During Pregnancy
            </h2>
            <p className="flex mx-auto mt-3 text-gray-600">
            Good health and nutrition are crucial for both the mother and the baby. Here are some important tips: 
            </p>

            <ul className="text-gray-600 leading-[2.2] space-y-2 mt-3 ms-5 list-disc">
              <li><span className="font-semibold text-[#000000]">Balanced Diet:</span> Include a variety of nutrients such as proteins, carbohydrates, fats, vitamins, and minerals.</li>
              <li>
              <span className="font-semibold text-[#000000]">Hydration:</span> Drink plenty of water to stay well hydrated. 
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Avoid Certain Foods:</span> Stay away from raw or undercooked foods, unpasteurized dairy, and excess caffeine. 
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Regular Exercise:</span> Light to moderate activities like brisk walking or swimming are recommended. 
              </li>
              <li>
              <span className="font-semibold text-[#000000]">Adequate Rest:</span> Get enough sleep and rest to meet the body's increased needs. 
              </li>
            </ul>
          </div>

          <p className="flex mx-auto mt-3 text-gray-600">
          Whether using a general pregnancy week calculator or an IVF pregnancy calculator, both provide helpful insights into the pregnancy journey. However, seeing a healthcare professional ensures accurate tracking and care. Effective planning, proper pregnancy management, and good health and nutrition give the best start to the baby. 
          </p>
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

export default PregnancyCalculator;
