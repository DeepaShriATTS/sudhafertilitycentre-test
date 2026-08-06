"use client";
import React, { useState } from "react";
import Banner from "@/assets/book-appointment.webp";
import Button from "@/components/button/button";
import Image from "next/image";
import Link from "next/link";
import Thumbnail from "@/assets/book-appointment/thumbnail.webp";
import Playbtn from "@/assets/book-appointment/playbtn.svg";
import { IoArrowBackSharp, IoArrowForwardOutline } from "react-icons/io5";
import { motion, time } from "framer-motion";
import BookAppointmentcommon from "@/components/contact/BookAppointmentcommon";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur } from "@/middleware/imagesroute";

import Buttonbottm from "@/components/button";
import Slider from "@/components/slider/slider";
const testimonials = [
  {
    name: "Tejaswini",
    text: `I'm very glad to share my wonderful journey with sudha hospital. I got conceived just in 2 cycles. Staff members are very polite and friendly. The guidance and treatment given by Akhila mam was too good. I definitely recommend this hospital to the couple who was expecting to have kids. I was really happy for myself for choosing the right and best hospital for my pregnancy journey.`,
    // image: ProfileImage,
  },

  {
    name: "Musa Siddaiah",
    text: `Hi... Everyone I'm very happy to inform you that we got positive...
We have search so many hospital visited but we didn't come through our dream but last and final we visited sudha fertility center and dr. Akhila ma'am listen our past medical history and treatment stared with small medication with in span of time we got positive thank you so much to sudha fertility...And a special thanks to DR. Akhila ma'am and her team...`,
    // image: ProfileImage,
  },
  {
    name: "Salla Pandu",
    text: `We are so thankful to sudha fertility hospital Banjara hills
Because we going to be parents and Dr Akhila ma'am diagnosis and treatment care was so good and nurses staff and infront office department recieving coordination so good friendly hospitality management system every nice .I suggest sudha fertility hospital.
One and only one solution for those who having fertility problem solution is sudha fertility hospital .`,
    // image: ProfileImage,
  },
  // Add more testimonials as needed
];


const slideContent = [

  {
    title: "Thirumayam",
    date: "Date:",
    time: "Time:",
    venue: "Venue:",
    month: "June ",
    dateyear: "07-2025,",
    day: "Saturday",
    address: "RSP Hospital,  3/3741, Akhilkarai Street, Kamarajar Salai,Thirumayam, Pudukkottai - 622 507",
    morning: "Morning",
    afternoon: "Evening",
    timesec: "8:00 AM",
    etimesec: "4:00 PM",
    content: "to",

  },

  {
    title: "Thuthikulam",
    date: "Date:",
    time: "Time:",
    venue: "Venue:",
    month: "June ",
    dateyear: "08-2025,",
    day: "Saturday",
    address: "Nalan Speciality Hospital, 1/131 (2) Namakkal Main Road, Thuthikulam, Namakkal- 637 404",
    morning: "Morning",
    afternoon: "Evening",
    timesec: "8:00 AM",
    etimesec: "4:00 PM",
    content: "to",

  },

  {
    title: "Vaniyambadi",
    date: "Date:",
    time: "Time:",
    venue: "Venue:",
    month: "June ",
    dateyear: "08-2025,",
    day: "Saturday",
    address: "Sudha Fertility Centre, C/o David Multispeciality Hospital 277/1, Jamaat Road. Noorulapatti, Vaniyambadi, Thirupattur - 635 751",
    morning: "Morning",
    afternoon: "Evening",
    timesec: "8:00 AM",
    etimesec: "4:00 PM",
    content: "to",

  },


  {
    title: "Nagapattinam",
    date: "Date:",
    time: "Time:",
    venue: "Venue:",
    month: "June ",
    dateyear: "15-2025,",
    day: "Sunday",
    address: "Sri Venkateswara Hospital 620, Kothankulam Kheelkarai. Opposite Nellukkadai Sri Mariamman Temple,Nagapattinam - 611001.",
    morning: "Morning",
    afternoon: "Evening",
    timesec: "8:00 AM",
    etimesec: "4:00 PM",
    content: "to",

  },

  // { title:"Hosur",
  //   date:"Date:", 
  //   time:"Time:", 
  //   venue:"Venue:",
  //   month:"June ",
  //   dateyear:"15-2025,",
  //   day:"Sunday",
  //   address:"C/o Dr. Pavi Women's Health and Fertility Centre, 100 Feet Road, Behind Velankanni School, Tali Road, New ASTC Hatco,Hosur -635 109.",
  //    morning:"Morning",
  //   afternoon:"Evening",
  //   timesec:"8:00 AM",
  //   etimesec:"4:00 PM",
  //   content:"to",

  // },




];

function BookAppointment() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  return (
    <div>
      <div className="relative">
        {/* Background Image with Gradient Overlay */}
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
        {/* Content */}
        <div className="relative h-full flex flex-col">
          {/* Main Content */}
          <div className="flex-1 flex items-center justify-center mb-40 mt-28">
            <div className="text-white text-center px-4 font-outfit">

              {/* <h2 className="font-semibold mb-3 text-[#FFC65C]">
                புதுக்கோட்டையில்
              </h2> */}
              <h1 className="font-outfit font-semibold ">
                Free Fertility Consultation Camp by <br /> Sudha Fertility Centre


              </h1>

              {/* <h2 className="font-outfit font-semibold mt-3  "> மாபெரும் இலவச கருத்தரிப்பு ஆலோசனை முகாம் </h2> */}

              <div className="button mt-8 flex justify-center items-center">
                <Button
                  title={"Book Your Appointment Today "}
                  link="#contact-now"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-5xl mx-auto px-4  sm:px-6 lg:px-8">
          <h2 className="font-semibold text-md text-center">
            Baby's smile in every hopeless home marks our proudest milestone.
          </h2>
        </div>
      </div>

      <div className="container mx-auto ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div>
            <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4  mt-9">
              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-[#173366] text-center">
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

              <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="icon mr-4"></div>
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
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

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg">
                <div className="main-tail flex items-center justify-center ">
                  <div className="content">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        35k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        IUI Babies
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                <div className="main-tail flex items-center justify-center">
                  <div className="content text-cente">
                    <div className="title">
                      <h3 className="text-[36px] font-bold text-center text-[#173366]">
                        60k+
                      </h3>
                    </div>
                    <div className="des">
                      <p className="text-gray-600 text-center">
                        IVF Babies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              <h2 className="font-semibold">Cherish the Boon of Motherhood!</h2>
              <p className="mt-3">
                Sudha Fertility Centre is organizing a free medical check-up and special consultation camp for couples trying to conceive. This camp focuses on fertility-related health concerns for both men and women.
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-3">
                <li>Ovarian Cysts </li>
                <li>Uterine Disorders</li>
                <li>Uterine Fibroids</li>
                <li>Infertility Treatments</li>
              </ul>
              <p className="mt-3">
                Expert consultation for women facing infertility challenges, completely free of cost.
              </p>
            </div>
            <div className="relative w-full md:w-1/2 mb-4 md:mb-0">
              {/* <Image
                src={Thumbnail}
                alt="Story Behind Sudha Fertility Centre"
                className="w-full h-auto rounded-lg"
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.youtube.com/watch?v=fAoaLHKsQKk",
                      "_blank"
                    )
                  }
                  className=" p-2 rounded-full shadow-lg"
                >
                  <Image src={Playbtn} alt="img" />
                </button>
              </div> */}


              <iframe className="w-full h-[350px] rounded-[30px]" src="https://www.youtube.com/embed/fAoaLHKsQKk?si=Cj8TUQ8Rs-XSoTeV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>




      {/* <div className="container mx-auto md:mt-[100px] mt-[70px] ">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <h2 className="font-semibold text-md text-center">
            Upcoming Free Medical Camps at Your Nearest Places
          </h2>
          

         
        </div>
      </div>
       <Slider slides={slideContent}/> */}
      <div className="container mx-auto mt-5">
        <div className="max-2-6xl mx-auto px-4 sm:px-6 lg:px-6 mt-12 ">
          <div className="flex flex-col  justify-center items-center ">
            <Button className=""
              title={"Book Your Appointment Today "}
              link="#contact-now"
            />
          </div>

        </div>
      </div>
      <div className="container mx-auto mt-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center divide-y md:divide-y-0 md:divide-x-2 divide-solid divide-[#E7E7E7] p-4 md:p-6">
            <div className="w-full md:w-1/3 flex justify-center md:justify-end items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                Free Entry for Confirmed Appointments Only

              </h4>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-center items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                Book your Appointment Today
              </h4>
            </div>

            <div className="w-full md:w-1/3 flex justify-center md:justify-start items-center text-center p-3">
              <h4 className="font-semibold text-lg text-[#000000]">
                Pre-registration is Mandatory

              </h4>
            </div>
          </div>
          <p className="text-center">
            For More Information & Inquiries, Call our helpline {" "}
            <span className="text-[#173366] border-b-2 border-[#173366]">
              <Link href={"tel:7670076006"} className="">+91-76-7007-6006</Link>
            </span>

          </p>
        </div>
      </div>

      <section className="md:mt-[100px] mt-[70px]">
        <div className="container mx-auto ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className=" text-center relative">
              <div className="flex items-center justify-between">
                <button
                  onClick={prevSlide}
                  className="text-gray-500 hidden md:block hover:text-gray-700"
                >
                  <IoArrowBackSharp />
                </button>
                <motion.div
                  key={current}
                  className="p-[25px]"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-lg font-semibold mb-2 ">
                    {testimonials[current].name}
                  </h3>
                  <p className="text-gray-600 mb-4 mt-4">
                    {testimonials[current].text}
                  </p>
                </motion.div>

                <button
                  onClick={nextSlide}
                  className="text-gray-500 hidden md:block hover:text-gray-700"
                >
                  <IoArrowForwardOutline />
                </button>
              </div>

              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevSlide}
                  className="text-gray-500 block md:hidden hover:text-gray-700"
                >
                  <IoArrowBackSharp />
                </button>
                <div className="flex justify-center items-center space-x-2 w-full">
                  <span>{String(current + 1).padStart(2, "0")}</span>
                  <div className="md:w-[200px] w-[100px] bg-gray-300 h-1 rounded-full overflow-hidden">
                    <div
                      className="bg-[#173366] h-full transition-all duration-300"
                      style={{
                        width: `${((current + 1) / testimonials.length) * 100}%`,
                      }}
                    />
                  </div>
                  <span>{String(testimonials.length).padStart(2, "0")}</span>
                </div>
                <button
                  onClick={nextSlide}
                  className="text-gray-500 block md:hidden hover:text-gray-700"
                >
                  <IoArrowForwardOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="md:mt-[100px] mt-[70px]" id="contact-now">
        <BookAppointmentcommon />
      </section>

      <section className="mt-[70px] lg:mt-[100px] mb-[70px] lg:mb-[100px]">
        {/* <div className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex justify-center gap-4 items-center flex-wrap mt-4 mb-4">
          <h2 className="text-2xl font-bold text-center ">
            Childless Couples to Happy Parents
          </h2>
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
    </div>
  );
}

export default BookAppointment;
