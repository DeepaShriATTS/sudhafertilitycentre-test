import React from "react";
import Banner from "@/assets/Policy/Banner.webp";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { FaYoutube } from "react-icons/fa";
import { Ambattur } from "@/middleware/imagesroute";
import Button from "@/components/button";
import Buttonbottm from "@/components/button";
import Buttoncomponents from "@/components/button/button";
function OvulationCalculator() {
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
                Ovulation Calculator
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
            What is Ovulation? 
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
            Ovulation is an important phase in a woman’s menstrual cycle when the ovaries release one or more mature eggs from the follicles. This release can lead to pregnancy if the egg is fertilized by sperm. The ovulation period is the most fertile time for conception. If a couple is planning for pregnancy, having intimacy during the ovulation period can lead to positive results for pregnancy. For a typical 28-day cycle, ovulation usually occurs between days 10 and 18, with the period lasting for four days, beginning four days before the midpoint of the cycle.
            </p>
            <p className="mt-5 text-gray-600">
            For women trying to conceive, knowing their ovulation period is essential, as fertilization can happen within 12 to 24 hours of ovulation. Since sperm can survive up to 5 days inside the uterus, having intercourse before and on the day of ovulation increases the likelihood of conception. If the egg is fertilized, it will implant in the uterus within 6 to 12 days. If fertilization does not occur, menstruation follows, expelling blood and tissue from the uterine lining. Our free ovulation calculator has been a helpful tool for many couples to start their parenthood journey at the perfect time.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto relative h-full px-4 mt-[70px] md:mt-[100px]">
        <div className="max-w-7xl mx-auto py-20 sm:px-6 lg:px-8 h-full bg-[#F0F5FF]">
          {/* Title */}
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">Ovulation Calculator</h2>
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
                  <h4 className="text-white ">Myth</h4>
                </div>

                <div className="description bg-white rounded-2xl p-4 sm:p-5 shadow-md">
                  <p className="text-sm sm:text-base">
                  The ovulation calculator works for all women, regardless of cycle variability.
                  </p>
                </div>
              </div>

              <div className="fact relative mt-10">
                <div className="myth absolute left-4 sm:left-8 -top-8 bg-[#173366] py-2 px-5 rounded-lg sm:rounded-xl">
                  <h4 className="text-white ">Fact</h4>
                </div>

                <div className="description bg-white rounded-2xl p-4 sm:p-5 shadow-md">
                  <p className="text-sm sm:text-base">
                  They are less accurate for irregular cycles, as they rely on an average cycle length. 
                  </p>
                </div>
              </div>
            </div>

            {/* Calculator Section */}
            <div className="flex-1 flex justify-center sm:justify-end">
              <div className="w-full sm:w-[75%] p-5 bg-white rounded-xl shadow-md">
                <div className="space-y-5">
                  <h2 className=" font-semibold  text-left ">
                    Calculate Now!
                  </h2>

                  <div className="space-y-4">
                    {/* Calculate By Dropdown */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">
                        Calculate by
                      </label>
                      <select className="w-full px-3 py-2 bg-white border rounded-md border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none cursor-pointer">
                        <option>Due date</option>
                      </select>
                    </div>

                    {/* Due Date Input */}
                    <div className="space-y-2">
                      <label className="text-sm text-gray-600">
                        Your Due Date
                      </label>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="title ">
            <h2 className="font-outfit font-semibold ">
            Signs of Ovulation
            </h2>
          </div>

          <div className="description">
            <p className="flex mx-auto mt-5 text-gray-600">
            Ovulation signs can differ from woman to woman, but there are some common symptoms which include: 
            </p>
            <ul className="list-disc list-inside text-gray-600 leading-[2.2] mt-3">
              <li className="list-item">Rise in body temperature </li>
              <li className="list-item">
              Cervical mucus, or vaginal discharge may appear clearer, thinner, and stretchy, like raw egg whites.
              </li>
              <li className="list-item">Breast tenderness</li>
              <li className="list-item">Bloating </li>
              <li className="list-item">Spotting </li>
              <li className="list-item">
              Mild pain in the pelvis or lower abdomen
              </li>
              <li className="list-item">
              Nausea and headaches on the day of ovulation due to changes in the levels of estrogen and progesterone
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Are Online Pregnancy Calculators Accurate?  */}
      <div className="container mx-auto relative h-full ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8 h-full">
          <div className="mt-7">
            <div className="title ">
              <h2 className="font-outfit font-semibold ">
              How to Calculate My Fertile Days? 
              </h2>
            </div>

            <div className="description">
              <p className="flex mx-auto mt-3 text-gray-600">
              To know the fertile days, our free ovulation calculator is a helpful tool to identify. This calculator will help you identify your approximate ovulation date based on your previous menstrual cycles. This calculates the probable date of your next ovulation and when you are most fertile and suitable time for conception. Every woman’s menstrual cycle is unique, so knowing your fertile days can help improve your chances of conception and pregnancy.
              </p>
            </div>
          </div>

          <div className="sub mt-7">
            <h2 className="font-outfit font-semibold mt-4">
            How to Use the Ovulation Date Calculator? 
            </h2>
            <p className="flex mx-auto mt-3 text-gray-600">
            According to the information you enter regarding your last menstrual cycle, our free ovulation calculator provides the details. So, you must enter the details like your last menstrual cycle and the length of your usual menstrual cycle.
            </p>
            <p className="flex mx-auto mt-3 text-gray-600">
            Your cycle length is the number of days between your periods, counting the first day of your period until the day before your next period starts. The average length of the menstrual cycle is around 28 days; however, it may vary for every woman. Enter the details of your last period, how long your period lasts, and the average length of your cycle. By providing all these you can get the details of your fertile days for the upcoming few months as well
              well.
            </p>
          </div>
          <div className="sub mt-7">
            <h2 className="font-outfit font-semibold  mt-4">
            What if the Menstrual Cycle is Irregular? 
            </h2>
            <p className="flex mx-auto mt-3 text-gray-600">
            For women who have an irregular menstrual cycle, it may be difficult to calculate the exact days of your ovulation based on the ovulation calculator alone. You can also check your probable ovulation days by checking the signs of ovulation. If you’re unsure about the ovulation period, talk to your general physician or gynaecologist to determine which online ovulation calculator will be helpful to track the ovulation days for irregular periods.
            </p>
          </div>

          <div className="sub mt-7">
            <h2 className="font-outfit font-semibold  mb-4">
            When is the Best Time to Conceive?
            </h2>
            <p className="flex mx-auto mt-3 text-gray-600">
            The perfect time for you to conceive is during the fertile days of your ovulation period. This time frame is from 4 to 5 days before your ovulation until the day after your ovulation occurs. Sperm can survive up to 5 days inside a woman’s body. Therefore, having intercourse at this time can increase the chances of conception.
            </p>
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

export default OvulationCalculator;
