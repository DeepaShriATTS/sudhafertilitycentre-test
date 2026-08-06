"use client";

import Image from "next/image";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Logo from "@/assets/logo-dark.svg";
import whatsapp from "@/assets/footer/whatsapp.svg";
import Link from "next/link";
import { MdArrowOutward, MdLocationOn } from "react-icons/md";
import phone from "@/assets/footer/phone.svg";
import fb from "@/assets/footer/fb.svg";
import Insta from "@/assets/footer/insta.svg";
import yt from "@/assets/footer/yt.svg";
import { MdEmail } from "react-icons/md";
import Button from "../button/button";

export const branches = [
  { title: "Ambattur", link: "fertility-centre-in-ambattur" },
  { title: "Attapur", link: "fertility-centre-in-attapur" },
  // { title: "Aruppukottai", link: "fertility-centre-in-aruppukottai", },
  // { title: "Bodinayakanur", link: "fertility-centre-in-bodinayakanur", },
  { title: "Bangalore", link: "fertility-centre-in-bangalore" },
  { title: "Chennai", link: "fertility-centre-in-chennai" },
  { title: "Chilakaluripet", link: "fertility-centre-in-chilakaluripet" },
  { title: "Coimbatore", link: "fertility-centre-in-coimbatore" },
  { title: "Erode", link: "fertility-centre-in-erode" },
  { title: "Dindigul", link: "fertility-centre-in-dindigul" },
  // { title: "Hosur", link: "fertility-centre-in-hosur" },
  { title: "Hyderabad", link: "fertility-centre-in-hyderabad" },
  { title: "Hanamkonda", link: "fertility-centre-in-hanamkonda" },
  // { title: "Karur", link: "fertility-centre-in-karur" },
  // { title: "Karaikudi", link: "fertility-centre-in-karaikudi" },
  // { title: "Kallakurichi", link: "fertility-centre-in-kallakurichi" },
  { title: "Krishnagiri", link: "fertility-centre-in-krishnagiri" },
  { title: "Madurai", link: "fertility-centre-in-madurai" },
  { title: "Manapparai", link: "fertility-centre-in-manapparai" },
  { title: "Nagercoil", link: "fertility-centre-in-nagercoil" },
  { title: "Ongole", link: "fertility-centre-in-ongole" },
  // { title: "Perambalur", link: "fertility-centre-in-perambalur" },
  { title: "Pondicherry", link: "fertility-centre-in-pondicherry" },
  { title: "Ramanathapuram", link: "fertility-centre-in-ramanathapuram" },
  { title: "Salem", link: "fertility-centre-in-salem" },
  // { title: "Sivangangai", link: "fertility-centre-in-sivagangai" },
  // { title: "Tenali", link: "fertility-centre-in-tenali" },
  { title: "Tiruvannamalai", link: "fertility-centre-in-tiruvannamalai" },
  { title: "Trichy", link: "fertility-centre-in-trichy" },
  { title: "Thanjavur", link: "fertility-centre-in-thanjavur" },
  { title: "Thoothukudi", link: "fertility-centre-in-thoothukudi" },
  { title: "Tiruppur", link: "fertility-centre-in-tiruppur" },
  { title: "Theni", link: "fertility-centre-in-theni" },
  { title: "Tirunelveli", link: "fertility-centre-in-tirunelveli" },
  { title: "Vellore", link: "fertility-centre-in-vellore" },
  // { title: "Vaniyambadi", link: "fertility-centre-in-vaniyambadi" },
  { title: "Vijayawada", link: "fertility-centre-in-vijayawada" },
  { title: "Paramakudi", link: "fertility-centre-in-paramakudi" },
  { title: "Viluppuram", link: "fertility-centre-in-viluppuram" },
  { title: "Nellore", link: "fertility-centre-in-nellore" },
  { title: "Tindivanam", link: "fertility-centre-in-tindivanam" },
  { title: "Tirupathur", link: "fertility-centre-in-tirupathur" },

];

export default function Footer() {
  return (
    <footer className="container mx-auto relative h-full py-7" id="footer">
      <div className="max-w-7xl mx-auto px-6   sm:px-8 lg:px-10 h-full">
        {/* Branches Section */}
        <div>
          <h3 className="font-semibold text-blue-900 text-lg md:text-xl">
            Our Branches
          </h3>
          <div>
            <ul className="flex flex-wrap gap-4 mt-5 text-sm md:text-base text-[#000] font-medium ">
              {branches.map((item, index) => (
                <li
                  className="hover:text-[#FFC65C] transition-colors duration-300 cursor-pointer"
                  key={index}
                >
                  <Link href={item.link} key={index}>
                    {item.title} <span className="ms-3">|</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-b border-gray-300 my-6"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {/* Logo and Social Links */}
          <div className="space-y-5 order-1 sm:order-1 md:order-1 lg:order-1 text-center sm:text-left">
            <Image
              src={Logo}
              alt="Sudha Fertility Centre"
              width={180}
              className="mx-auto sm:mx-0"
            />
            <p className="text-gray-600 text-sm md:text-base">
              As a leading Fertility hospital in India, we provide world-class
              treatments with the best fertility specialists in a supportive
              environment. Let's make your dream come true and welcome your
              little one.
            </p>
            <div className="mt-4 flex sm:justify-start justify-center">
              <Link href="/contact-us">
                <button className="button-all-footer flex gap-3 ">
                  Contact Us{" "}
                  <MdArrowOutward size={18} className="rotate-45" />
                </button>
              </Link>
            </div>




            <div className="flex items-center justify-center md:justify-start mb-2">
              <div className="w-[15px] border-t border-2 border-black ml-2"></div>
              <h4 className="p-1 font-semibold text-gray-800 text-lg md:text-xl text-center sm:text-left">Connect with us</h4>
            </div>

            <div className="flex gap-2 sm:gap-4 mt-4 justify-center sm:justify-start">
              <Link
                href="https://www.youtube.com/@sudhafertilitycentre/"
                target="_blank"
              >
                <Image src={yt} alt="YouTube" />
              </Link>
              <Link
                href="https://www.instagram.com/sudhafertilitycentre/"
                target="_blank"
              >
                <Image src={Insta} alt="Instagram" />
              </Link>
              <Link
                href="https://www.facebook.com/sudhafertilitycentre/"
                target="_blank"
              >
                <Image src={fb} alt="Facebook" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="order-2 sm:order-2 md:order-2 lg:order-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-5">
              <div className="order-2 sm:order-3 md:order-2 lg:order-2 text-center sm:text-left">
                <h3 className="font-semibold text-[#173366] text-lg md:text-xl">
                  Quick Links
                </h3>
                <ul className="text-[#000]  text-sm md:text-base mt-5 space-y-5">
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/fertility-treatments">
                      Fertility Treatments
                    </Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/international-patients">
                      International Patients
                    </Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="https://sudhafertilitycentre.com/blog/success-stories/">Success Stories</Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/gallery">Gallery</Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/doctor-speaks">Doctor Speaks</Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/news-and-events">News and Events</Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/terms-condition">Terms & Conditions</Link>
                  </li>
                  <li className="hover:text-[#FFC65C] font-medium">
                    <Link href="/body-bmi-calculator">BMI Calculator</Link>
                  </li>
                </ul>
              </div>

              {/* Contact Us Section */}
              <div className="order-3 sm:order-3 md:order-3 lg:order-3 text-center sm:text-left">
                <h3 className="font-semibold text-[#173366] text-lg md:text-xl">
                  Contact Us
                </h3>



                {/* WhatsApp Link */}
                <div className="flex items-center gap-2 mt-5 justify-center sm:justify-start text-gray-700">
                  <a
                    href="https://wa.me/917670076006"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Image
                      src={whatsapp}
                      alt="whatsapp"
                      width={20}
                      height={20}
                    />
                    <span className="text-sm text-[#000] font-medium md:text-base hover:text-[#FFC65C]">
                      Chat on Whatsapp
                    </span>
                  </a>
                </div>

                {/* Phone Link */}
                <div className="flex items-center gap-2 mt-5 justify-center sm:justify-start text-gray-700">
                  <a
                    href="tel:+917670076006"
                    className="flex items-center gap-2"
                  >
                    <Image src={phone} alt="phone" width={20} height={20} />
                    <span className="text-sm text-[#000] font-medium md:text-base hover:text-[#FFC65C]">
                      +91 76-7007-6006
                    </span>
                  </a>
                </div>

                {/* Email Link */}
                <div className="flex items-center gap-2 mt-5 justify-center sm:justify-start text-gray-700">
                  <a
                    href="mailto:care@sudhahospitals.com"
                    className="flex items-center gap-2"
                  >
                    <MdEmail size={20} />
                    <span className="text-sm text-[#000] font-medium md:text-base hover:text-[#FFC65C]">
                      care@sudhahospitals.com
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-300 my-6"></div>

        {/* Footer Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm md:text-base">
          <p className="text-center">
            Copyright © 2026 sudhafertilitycentre.com. All Rights Reserved.
          </p>
          <p>
            Powered By{" "}
            <span className="text-black underline">
              <Link
                href={"https://arionmediacorp.com/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                Arion Media Corp
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
