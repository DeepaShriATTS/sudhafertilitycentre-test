import React from "react";
import Banner from "@/assets/Treatments/Banner.webp";
import Button from "@/components/button/button";
import Image from "next/image";
import Female from "@/assets/Treatments/Female.svg";
import Male from "@/assets/Treatments/Male.svg";
import Assisted_Reproduction from "@/assets/Treatments/Assisted-Reproduction.svg";
import PCOS from "@/assets/Treatments/PCOS.svg";
import Pregnancy from "@/assets/Treatments/Pregnancy.svg";
import Laparoscopy from "@/assets/Treatments/Laparoscopy.svg";
import Laser_Assisted from "@/assets/Treatments/Laser-Assisted.svg";
import Blastocyst from "@/assets/Treatments/Blastocyst.svg";
import Hysteroscopy from "@/assets/Treatments/Hysteroscopy.svg";
import Intracytoplasmic from "@/assets/Treatments/Intracytoplasmic.svg";
import Intrauterine from "@/assets/Treatments/Intrauterine.svg";
import Vitro from "@/assets/Treatments/Vitro.svg";
import Buttonbottm from "@/components/button";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import { MarqueeComponent } from "@/components/marqueeSlider";
import { Ambattur } from "@/middleware/imagesroute";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
function Treatment() {
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
              <h1 className="font-outfit font-semibold ">
                Treatments
              </h1>
              <p className=" mt-4 text-[22px] leading-[1.6] ">
                Your Journey to Recovery Begins with Our Specialized Care
              </p>
              <div className="button mt-7 flex justify-center">
                <Button title={"Get Consultation with Our Specialists"} link="/contact-us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Baby's smile in every hopeless home marks our proudest milestone.*/}
      <div className="container mx-auto mt-8 ">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="title text-center">
            <h2 className="font-outfit font-semibold ">
              Baby's smile in every hopeless home marks our proudest milestone.

            </h2>
            <h2 className="font-outfit font-semibold lg:block mt-2"> Our Achievements</h2>
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

      {/* Advanced Fertility Treatments at Sudha Fertility Centre */}

      <div className="container mx-auto relative h-full">
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 h-full">
          <div className="title text-center ">
            <h2 className="font-outfit font-semibold ">
              With World-Class Treatments Parenthood Dreams Comes to Life in
              <span className="lg:block">Sudha Fertility Centre </span>
            </h2>

            <p className="max-w-5xl text-gray-600 flex mx-auto mt-5 justify-center text-center ">
              We help you achieve your parenthood dreams with world-class
              fertility treatments tailored to your needs. Your parenthood dream
              is in the safest hands, trust the journey, happiness is steps away
              from you.
            </p>
          </div>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 shadow-[0px_0px_30px_0px_rgba(0,0,0,0.08)]
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
                <h4 className="font-semibold text-center">In Vitro Fertilization</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/in-vitro-fertilization"}>
                  <button className="text-[#173366] font-medium flex items-center">
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
                <h4 className=" font-semibold text-center">
                  Intrauterine Insemination
                </h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/intrauterine-insemination"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Intracytoplasmic}
                  className="w-14 h-14 object-contain"
                  alt="Intracytoplasmic"
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">
                  Intracytoplasmic Sperm Injection
                </h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/intracytoplasmic-sperm-injection"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* Second Row */}
            <div className="py-16 relative border-r last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Hysteroscopy}
                  className="w-14 h-14 object-contain"
                  alt="Hysteroscopy "
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">Hysteroscopy</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/hysteroscopy"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Blastocyst}
                  className="w-14 h-14 object-contain"
                  alt="Blastocyst Culture and Transfer"
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">
                  Blastocyst Culture and Transfer{" "}
                </h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/blastocyst-culture-and-transfer"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r  last:border-r-0 border-b last:border-b-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Laser_Assisted}
                  className="w-14 h-14 object-contain"
                  alt="Laser-Assisted Hatching"
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">Laser-Assisted Hatching</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/laser-assisted-hatching"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* third Row  */}
            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Laparoscopy}
                  className="w-14 h-14 object-contain"
                  alt="Laparoscopy "
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">Laparoscopy</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/laparoscopy"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Pregnancy}
                  className="w-14 h-14 object-contain"
                  alt="Pregnancy and Antenatal Care"
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">
                  Pregnancy and Antenatal Care
                </h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/pregnancy-and-antenatal-care"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={PCOS}
                  className="w-14 h-14 object-contain"
                  alt="PCOS & PCOD "
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">PCOS & PCOD</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/pcos-and-pdoc"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            {/* fourth Row  */}
            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0 ">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Assisted_Reproduction}
                  className="w-14 h-14 object-contain"
                  alt="Assisted Reproduction"
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">ART Treatments</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/assisted-reproductive-technology"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Male}
                  className="w-14 h-14 object-contain"
                  alt="Male Infertility"
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">Male Infertility</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/male-infertility"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>

            <div className="py-16 relative border-r border-b lg:border-b last:border-r-0">
              <div className="image flex justify-center items-center mb-4">
                <Image
                  src={Female}
                  className="w-14 h-14 object-contain"
                  alt="Female Infertility "
                />
              </div>
              <div className="title">
                <h4 className="font-semibold text-center">Female Infertility</h4>
              </div>
              <div className="des mt-3 flex justify-center items-center">
                <Link href={"/female-infertility"}>
                  <button className="text-[#173366] font-medium flex items-center">
                    View More <FaArrowRight className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MarqueeComponent */}
      <section>
        {/* <div className="container mx-auto">
            <div className=" mx-auto px-4 py-12 sm:px-6 lg:px-8 h-full"> */}
        <MarqueeComponent
          items={Ambattur.gallery}
          direction="left"
          speed="fast"
          className="custom-class"
        />
        <div className="flex md:flex-row  flex-col justify-center gap-4 items-center mt-4 mb-4">
          <h3 className=" font-semibold text-center ">
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
        {/* </div>
          </div> */}
      </section>
    </>
  );
}

export default Treatment;
