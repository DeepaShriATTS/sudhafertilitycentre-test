"use client";
import Button from "@/components/button";
import React, { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import Vitro from "@/assets/Treatments/Vitro.svg";
import Link from "next/link";
import Female from "@/assets/Treatments/Female.svg";
import Male from "@/assets/Treatments/Male.svg";
import Assisted_Reproduction from "@/assets/Treatments/Assisted-Reproduction.svg";
import PCOS from "@/assets/Treatments/PCOS.svg";
import Pregnancy from "@/assets/Treatments/Pregnancy.svg";
import Laparoscopy from "@/assets/Treatments/Laparoscopy.svg";
import Laser_Assisted from "@/assets/Treatments/Laser-Assisted.svg";
import Blastocyst from "@/assets/Treatments/Blastocyst.svg";
import Hysteroscopy from "@/assets/Treatments/Hysteroscopy.svg";
import Intrauterine from "@/assets/Treatments/Intrauterine.svg";
import Intracytoplasmic from "@/assets/Treatments/Intracytoplasmic.svg";
import Image from "next/image";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur } from "@/middleware/imagesroute";
import { motion } from "framer-motion";
import Script from "next/script";
export default function Thankyou() {

  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead");
    } else {
      console.warn("Facebook Pixel is not loaded yet.");
    }
  }, []);
  return (
    <div>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s) {
              if(f.fbq) return; n=f.fbq=function() { n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments) };
              if(!f._fbq) f._fbq=n; n.push=n; n.loaded=!0; n.version='2.0';
              n.queue=[]; t=b.createElement(e); t.async=!0;
              t.src=v; s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window, document,'script','https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', 'YOUR_PIXEL_ID');
            fbq('track', 'PageView');
          `,
        }}
      />
      <Script id="facebook-track-lead" strategy="afterInteractive">
        {`
          if (typeof fbq === 'function') {
            fbq('track', 'Lead');
          } else {
            console.warn("Facebook Pixel is not loaded yet.");
          }
        `}
      </Script>

      <div className="container mx-auto md:mt-[80px] mt-[70px] ">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-center font-semibold">
            Thank you for Completing the Form We Appreciate your Details
          </h1>
          <div className="max-w-3xl mx-auto text-center px-4 py-6 sm:px-6 lg:px-8">
            <p>
              Our submission is being reviewed. We will respond within 15 Mins
              to discuss your treatment enquiry. Thank you for your patience.
            </p>
          </div>
          <div className="flex justify-center">
            <Button text="Back to Home" icon={<FaArrowRight />} link="/" />
          </div>
        </div>
      </div>

      {/* Baby's smile in every hopeless home marks our proudest milestone.*/}
      <div className="lg:mt-[100px] mt-[70px] ">
        <div className=" container mx-auto ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="title text-center">
              <h3 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
                Baby's smile in every hopeless home marks our proudest milestone.
                <span className="lg:block"> Our Achievements</span>
              </h3>
            </div>

            <div>
              <div className="tiles grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 xl:px-16 mt-9">
                <div className="tiles-1 border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg font-outfit ">
                  <div className="main-tail flex items-center justify-center">
                    <div className="content">
                      <div className="title">
                        <h4 className="text-[36px] font-bold text-[#173366] text-center">
                          3.5L+
                        </h4>
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
                        <h4 className="text-[36px] font-bold text-center text-[#173366]">
                          1L+
                        </h4>
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
                        <h4 className="text-[36px] font-bold text-center text-[#173366]">
                          35k+
                        </h4>
                      </div>
                      <div className="des">
                        <p className="text-gray-600 text-center">IUI Babies</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tiles-1  border border-[#E7E7E7] pt-6 pb-6 pl-4 pr-4 rounded-lg ">
                  <div className="main-tail flex items-center justify-center">
                    <div className="content text-cente">
                      <div className="title">
                        <h4 className="text-[36px] font-bold text-center text-[#173366]">
                          60k+
                        </h4>
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
      </div>

      <div className="container mx-auto relative h-full md:mt-[100px] mt-[70px]">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="title text-center ">
            <h3 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              With World-Class Treatments Parenthood Dreams Comes To Life In
              <span className="lg:block">Sudha Fertility Centre </span>
            </h3>

            <p className="max-w-5xl text-gray-600 flex mx-auto mt-5 justify-center text-center ">
              We help you achieve your parenthood dreams with world-class
              fertility treatments tailored to your needs. Your parenthood dream
              is in the safest hands, trust the journey, happiness is steps away
              from you.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-11 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]
 relative"
          >
            {/* First Row */}
            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Vitro}
                  className="w-14 h-14 object-contain"
                  alt="Vitro"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  In Vitro Fertilization
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/in-vitro-fertilization"}>
                  <button className="text-[#173366] flex font-semibold items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Intrauterine}
                  className="w-14 h-14 object-contain"
                  alt="immediate assistance"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Intrauterine Insemination
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/intrauterine-insemination"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative  border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Intracytoplasmic}
                  className="w-14 h-14 object-contain"
                  alt="Intracytoplasmic"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Intracytoplasmic Sperm Injection
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/intracytoplasmic-sperm-injection"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Row */}
            <div className="py-16 relative border-r  last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Hysteroscopy}
                  className="w-14 h-14 object-contain"
                  alt="Hysteroscopy "
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Hysteroscopy
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/hysteroscopy"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r  last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Blastocyst}
                  className="w-14 h-14 object-contain"
                  alt="Blastocyst Culture And Transter"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Blastocyst Culture And Transter{" "}
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/blastocyst-culture-and-transfer"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Laser_Assisted}
                  className="w-14 h-14 object-contain"
                  alt="Laser-Assisted Hatching"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Laser-Assisted Hatching
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/laser-assisted-hatching"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* third Row  */}
            <div className="py-16 relative border-r border-b lg:border-b-0 last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Laparoscopy}
                  className="w-14 h-14 object-contain"
                  alt="Laparoscopy "
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Laparoscopy{" "}
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/laparoscopy"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b-0 last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Pregnancy}
                  className="w-14 h-14 object-contain"
                  alt="Pregnancy and Antenatal Care"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Pregnancy and Antenatal Care
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/pregnancy-and-antenatal-care"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative  border-b lg:border-b-0 last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={PCOS}
                  className="w-14 h-14 object-contain"
                  alt="PCOS & PCOD "
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  PCOS & PCOD
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/pcos-and-pdoc"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* fourth Row  */}
            <div className="py-16 relative border-r border-b lg:border-b-0 last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Assisted_Reproduction}
                  className="w-14 h-14 object-contain"
                  alt="Assisted Reproduction"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  ART Treatments
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/assisted-reproductive-technology"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b-0 last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Male}
                  className="w-14 h-14 object-contain"
                  alt="Male Infertility"
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Male Infertility
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/male-infertility"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b-0 last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Female}
                  className="w-14 h-14 object-contain"
                  alt="Female Infertility "
                />
              </div>
              <div className="title">
                <h3 className="text-xl font-semibold text-center">
                  Female Infertility
                </h3>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/female-infertility"}>
                  <button className="text-[#173366] font-semibold flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MarqueeComponent */}
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
          <Button text="Watch on Youtube " />
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
