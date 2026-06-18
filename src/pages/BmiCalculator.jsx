"use client";
import React from 'react'
import BMICalculators from '@/components/BMICalculator';
import Banner from "@/assets/Treatments/IVF/Banner.webp";
import Button from "@/components/button/button";

function BmiCalculator() {
  return (
    <div className='mb-10'>

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
              <h1 className="font-outfit font-semibold ">
              Body BMI Calculator
               
              </h1>
              {/* <p className=" mt-4 text-[22px] leading-[1.6] ">
              Prepare to Welcome your Little Miracle
              </p> */}
              <div className="button mt-7 flex justify-center">
                <Button title={"Book Your Free Appointment"} link="#contactus"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-10'>
        <BMICalculators />
      </div>
    </div>
  )
}

export default BmiCalculator
