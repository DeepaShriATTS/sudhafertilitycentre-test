"use client";
import React from "react";
import Banner from "@/assets/contact-us/Banner.webp";

import Image from "next/image";

import WriteToUs from "@/assets/contact-us/WriteToUs.svg";

import ChatSupport from "@/assets/contact-us/ChatSupport.svg";
import Donor from "@/assets/contact-us/Donor.svg";
import SubBanner from "@/assets/contact-us/SubBanner.webp";
import BookingButton from "@/components/button/bookingButton";

import ContactAppointmentForm from "@/components/contact/contactappointment";
import dynamic from "next/dynamic";
import { Homevideos } from "@/middleware/videosRoute";
import { VideoSkeletonRow } from "@/components/loaders/VideoCardSkeleton";


const GallerySlider = dynamic(
  () => import('@/components/videoCard/videoPlaylistSlider'),
  { loading: () => <VideoSkeletonRow count={3} /> }
);


function ContactUs() {
  return (
    <>
      {/* Banner  */}
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
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

        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-16">
            <div className="text-white text-center px-4 font-outfit">
              <h1 className="font-outfit font-semibold ">
                You're just a step away from<br /> your parenthood
              </h1>
              {/* <h3 className="font-outfit font-semibold">
              Your Journey Starts Here!
              </h3> */}
            </div>
          </div>
        </div>
      </div>

      {/* Baby's smile in every hopeless home marks our proudest milestone. */}

      <div className="container mx-auto  mt-[70] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">
              Baby's smile in every hopeless home marks our proudest milestone.

            </h2>
            <h2 className="font-outfit font-semibold mt-2 ">

              Our Achievements
            </h2>

          </div>

          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-semibold text-[#173366] text-center">
                        3.5L+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Infertile Couples Counselled
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1 border border-[#E7E7E7] p-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="icon mr-4"></div>
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-semibold text-center text-[#173366]">
                        1L+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        Laparoscopic Surgeries
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-semibold text-center text-[#173366]">
                        35k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">IUI Babies</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] p-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h3 className="text-[36px] font-semibold text-center text-[#173366]">
                        60k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">IVF Babies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact  */}

      <section className=" mt-[70] md:mt-[100px]">

        <ContactAppointmentForm />
      </section>

      {/* For immediate assistance */}

      <div className="container mx-auto relative h-full mt-[70] md:mt-[100px]">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="title text-center ">
            <h2 className="font-outfit font-semibold ">
              For Prompt Medical Support
              <span className="lg:block mt-2"> Sudha Fertility Centre</span>
            </h2>

            <p className="mt-2 text-gray-600">
              Your Journey to parenthood is just a few steps away!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 shadow-xl relative">
            {/* First Row */}
            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={WriteToUs}
                  className="w-14 h-14 object-contain"
                  alt="immediate assistance"
                />
              </div>
              <div className="title">
                <h4 className="text-center font-semibold">For More Details and Queries  </h4>
              </div>
              {/* <div className="des mt-3 =">
                <p className="text-center font-medium ">care@sudhahospitals.com</p>
              </div> */}
              <div className="des mt-3">
                <p className="text-center">
                  <span className="block"><a className="text-[#173366] font-medium underline decoration-2" href="mailto:care@sudhahospitals.com" target="_blank">care@sudhahospitals.com</a></span>
                </p>
              </div>
            </div>

            <div className="py-16 relative border-r  last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={ChatSupport}
                  className="w-14 h-14 object-contain"
                  alt="Chat Support"
                />
              </div>
              <div className="title">
                <h4 className="text-center font-semibold">For Chat Support</h4>
              </div>
              <div className="des mt-3">
                <p className="text-center">

                  <span className="block"><a className="text-[#173366] font-medium underline decoration-2" href="https://wa.me/917670076006?text=Hi,%20Can%20I%20get%20more%20info%20on%20this?" target="_blank">Chat now</a></span>
                </p>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Donor}
                  className="w-14 h-14 object-contain"
                  alt="For Donor Related Queries"
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">
                  For Donor Related Queries
                </h4>
              </div>
              {/* <div className="des mt-3">
                <p className="text-center font-medium">+91 76-7007-6006</p>
              </div> */}
              <div className="des mt-3">
                <p className="text-center">
                  <span className="block"><a className="text-[#173366] font-medium underline decoration-2" href="tel:+917670076006" target="_blank">+91 76-7007-6006</a></span>
                </p>
              </div>
            </div>

            {/* Second Row */}





          </div>
        </div>
      </div>

      {/* Welcome Your Baby into Your Home */}
      <div className="container mx-auto mt-[70] md:mt-[100px]">
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

            <div className="relative h-full flex flex-col lg:flex-row items-center justify-between p-8 lg:p-12 mt-9">
              <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start text-center lg:text-left mb-6 lg:mb-0">
                <h2 className="font-outfit font-semibold text-white mt-5">
                  Welcome Your Baby into Your Home
                </h2>
              </div>
              <div className="w-full lg:w-auto flex justify-center lg:justify-end items-center">
                <BookingButton title=" Schedule My Free Fertility Check" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="mt-[70] md:mt-[100px] mb-[70] md:mb-[100px]">
       <GallerySlider items={Homevideos} />
        
      </section>
    </>
  );
}

export default ContactUs;
