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
import dynamic from "next/dynamic";

const BranchesDirectory = dynamic(() => import("./knowyourBranch"), {
  ssr: false,
  loading: () => (
    <div className="h-[200px] w-full animate-pulse bg-neutral-100 rounded-xl flex items-center justify-center text-sm text-neutral-400">
      Loading branches…
    </div>
  ),
});

export const branches = [
  { title: "Ambattur", link: "fertility-centre-in-ambattur", mapsLink: "https://maps.app.goo.gl/KkML4gvpF71Vvwuy7",
address:" 2nd floor, No: 119, Seven-star complex, Second Floor, Madras Thiruvallur High Rd, Ambattur, Chennai, Tamil Nadu - 600053.", 
lat: 13.1143, lng: 80.1548 },
  { title: "Attapur", link: "fertility-centre-in-attapur", mapsLink: "https://maps.app.goo.gl/wXdY12ENv8XuQNsKA", 
address:"Pillar Number 147, Zoi Hospitals Campus, Rambagh Colony, Attapur, Hyderabad, Telangana - 500048.",
lat: 17.3387, lng: 78.4181 },
  // { title: "Aruppukottai", link: "fertility-centre-in-aruppukottai", mapsLink: "" },
  // { title: "Bodinayakanur", link: "fertility-centre-in-bodinayakanur", mapsLink: "" },
  { title: "Bangalore", link: "fertility-centre-in-bangalore",
 address:" Door no. - 1534, 21st Main, 7th Cross Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka - 560102.",
 mapsLink: "https://maps.app.goo.gl/GZSDWRzyTaZgY3Le8",
 lat: 12.9716, lng: 77.5946 },
  { title: "Chennai", link: "fertility-centre-in-chennai",address:" No.940, EVR Periyar Road, Poonamalli High Road, (Opp) Old Dasprakash Hotel, Purasaiwalkkam, Chennai, Tamil Nadu  – 600084.",
 mapsLink: "https://maps.app.goo.gl/ooLkknzC2oPQDU7L9", lat: 13.0827, lng: 80.2707 },
  { title: "Chilakaluripet", link: "fertility-centre-in-chilakaluripet",address:"Sri Krishna Hospital Addaroad Centre, C/o, near National Highway 16, Chilakaluripet, Andhra Pradesh 522616", mapsLink: "https://maps.app.goo.gl/8zeUm6TGz7egrCJ96", lat: 16.0894, lng: 80.1636 },
  { title: "Coimbatore", link: "fertility-centre-in-coimbatore",address:"410, Bharathiyar Rd, Siddhapudur, New Siddhapudur, Coimbatore, Tamil Nadu - 641044.", mapsLink: "https://maps.app.goo.gl/FzY9JxNQMHxAPzzv9", lat: 11.0168, lng: 76.9558 },
  { title: "Erode", link: "fertility-centre-in-erode",address:" 151, Perundurai Rd, Edayankattuvalasu, Erode, Tamil Nadu - 638001.", mapsLink: "https://maps.app.goo.gl/qzbWafBboySy57k29", lat: 11.3410, lng: 77.7172 },
  { title: "Dindigul", link: "fertility-centre-in-dindigul",address:" 64/77 - A, Municipal colony, Nehruji Nagar, Dindigul, Tamil Nadu - 624001.", mapsLink: "https://maps.app.goo.gl/mF1fcEMt4XcDpc9F9", lat: 10.3673, lng: 77.9803 },
  // { title: "Hosur", link: "fertility-centre-in-hosur", mapsLink: "https://maps.app.goo.gl/KXiPBYQ1t5Eqa5447",address:"New ASTC Hudco, SBM Colony, Anthivadi, Appavu Nagar, Hosur, Tamil Nadu 635109"
  { title: "Hyderabad", link: "fertility-centre-in-hyderabad",address:"D.No. 8-2-335/2 A/T, Green Valley Road, No 5, Banjara Hills, Hyderabad, Telangana -  500034.", mapsLink: "https://maps.app.goo.gl/1j6HjWA7kSvZW7LNA", lat: 17.3850, lng: 78.4867 },
  { title: "Hanamkonda", link: "fertility-centre-in-hanamkonda",address:"100 Feet Rd, opposite Shyamala Gardens, Saptagiri Colony, Hanamkonda, Telangana 506370", mapsLink: "https://maps.app.goo.gl/xDisk6tufXdoqzxL7", lat: 18.0069, lng: 79.5559 },
  // { title: "Karur", link: "fertility-centre-in-karur",address:"Sri Rathna Hospital, C/O, North West Pradhakshanam Road, Near Thinnappa Theatre, Madavilagam, Karur, Tamil Nadu - 639002.", mapsLink: "https://maps.app.goo.gl/MEfR1w4Xf7M5XmNL6" },
  // { title: "Karaikudi", link: "fertility-centre-in-karaikudi",address:"Saali C/o, KMC Hospital, 42/1, Mudiyarasanar, near New Bus Stand Maruthupandiyar Nagar, Karaikudi, Tamil Nadu 630001"., mapsLink: "https://maps.app.goo.gl/DKpmahvw2cm3cEAc7" },
  { title: "Kallakurichi", link: "fertility-centre-in-kallakurichi", mapsLink: "C/O. Sri Sanjeevi Hospital, 52 B, 8/6, Durugam Rd, Kottaimedu, Kallakurichi, Tamil Nadu 606202", lat: 11.7401, lng: 78.9597 },
  { title: "Krishnagiri", link: "fertility-centre-in-krishnagiri",address:"C/O Uma Rani Hospitals, Complex No. 1/136A, Annai Sathya Nagar, Salem Rd, Near LIC Building, Krishnagiri, Tamil Nadu - 635001.", mapsLink: "https://maps.app.goo.gl/cevJko2UJAEA7iZY6", lat: 12.5186, lng: 78.2137 },
  { title: "Madurai", link: "fertility-centre-in-madurai",address:"7A, Kalpalam road, Near Meenakshi college, Goripalayam, Madurai, Tamilnadu - 625002.", mapsLink: "https://maps.app.goo.gl/2S83qpF2nRqjFg4c7", lat: 9.9252, lng: 78.1198 },
  { title: "Manapparai", link: "fertility-centre-in-manapparai",address:"C/o Ieshwaryam Hospital, 220/05 Puthunantham Road, Manapparai, Tamil Nadu 621306.", mapsLink: "https://maps.app.goo.gl/2S83qpF2nRqjFg4c7", lat: 10.6062, lng: 78.4189 },
  { title: "Nagercoil", link: "fertility-centre-in-nagercoil",address:"530, MS Rd, Vetturnimadam, Nagercoil, Tamil Nadu - 629004.", mapsLink: "https://maps.app.goo.gl/2ipMnKQrxtc8Hvca8", lat: 8.1833, lng: 77.4119 },
  { title: "Ongole", link: "fertility-centre-in-ongole",address:"G27V+QJ3 Anjani Super Speciality Hospital, C/o, Sixty Feet Rd, Satyanarayanapuram, Ongole, Andhra Pradesh 523001.", mapsLink: "https://maps.app.goo.gl/GZzvWM3RoAN9tBZA8", lat: 15.5057, lng: 80.0499 },
  // { title: "Perambalur", link: "fertility-centre-in-perambalur",address:"C/o Ramasamy Hospital, No.80A, Palakarai, Vasanth & Co Opposite, Trichy main road, Perambalur - 621 220",mapsLink: "" },
  { title: "Pondicherry", link: "fertility-centre-in-pondicherry",address:"No.21, J.K Towers, 100 Feet Rd, Ellaipillaichavady, Sathya Nagar East, Puducherry, 605013.", mapsLink: "https://maps.app.goo.gl/63ez9CyRiUTc7PDx7", lat: 11.9416, lng: 79.8083 },
  { title: "Ramanathapuram", link: "fertility-centre-in-ramanathapuram",address:"68, Madurai - Rameswaram Highway, Ramanathapuram, Tamil Nadu 623502", mapsLink: "https://maps.app.goo.gl/ucTyi5L2TBeWhwPT8", lat: 9.3639, lng: 78.8395 },
  { title: "Salem", link: "fertility-centre-in-salem",address:"No 191/9, Sarada College Main Road, Fairlands(PO), Salem - 636016", mapsLink: "https://maps.app.goo.gl/we4guYa55j7MYKYw6", lat: 11.6643, lng: 78.1460 },
  { title: "Sivangangai", link: "fertility-centre-in-sivagangai", mapsLink: "",address:"C/o. Sabari Maternity And Childcare Hospital, No4/106, Judge Rajasekaran Street, Theppakolam Opp, Near Aranmanaivasal Sivagangai - 630561", lat: 9.8433, lng: 78.4809 },
  // { title: "Tenali", link: "fertility-centre-in-tenali",address:"V Cardiac and Multi Speciality Hospital, C/o, TB Rd, Kothapet, Ramalingeswara Pet, Tenali, Andhra Pradesh 522201", mapsLink: "https://maps.app.goo.gl/w27JKa7Vzywvx5cy9" },
  { title: "Tiruvannamalai", link: "fertility-centre-in-tiruvannamalai",address:"C/O, Nalam Hospital, First Floor, 5/2A/9th Street, Maanthopu, Polur Road, Opposite Hotel Vijay Park, Tiruvannamalai, Tamil Nadu - 606601.", mapsLink: "https://maps.app.goo.gl/LUcDVC633fxJ3Ltw7", lat: 12.2253, lng: 79.0747 },
  { title: "Trichy", link: "fertility-centre-in-trichy",address:"Rangga Hotel, C/O, Williams Rd, Opposite to Femina Hotel, Cantonment, Tiruchirappalli, Tamil Nadu - 620001.", mapsLink: "https://maps.app.goo.gl/jP1sDSHqVXsXmdvK8", lat: 10.7905, lng: 78.7047 },
  { title: "Thanjavur", link: "fertility-centre-in-thanjavur",address:"10, Raja Nagar, New Bus Stand, Near HDFC Bank, Neelagiri Post, Thanjavur, Tamil Nadu - 613005.", mapsLink: "https://maps.app.goo.gl/bfKRAGHEHEjd17wy9", lat: 10.7870, lng: 79.1378 },
  { title: "Thoothukudi", link: "fertility-centre-in-thoothukudi",address:"City Center, 39/1, Thevarpuram Rd, opp. to judge quarters, Pudugramam, Thoothukudi, Tamil Nadu 628003.", mapsLink: "https://maps.app.goo.gl/EbrGpjnQPknvDP6TA", lat: 8.7642, lng: 78.1348 },
  { title: "Tiruppur", link: "fertility-centre-in-tiruppur",address:"97/54, JG Nagar, 2nd Street, Maruthachalapuram Main Road, Tiruppur, Tamil Nadu - 641602.", mapsLink: "https://maps.app.goo.gl/PNEyJ7JycaDXbXMQ8", lat: 11.1085, lng: 77.3411 },
  { title: "Theni", link: "fertility-centre-in-theni",address:" C/O Krishnammal Memorial Hospital, 293, Periyakulam Rd, Alli Nagaram, Theni, Tamil Nadu - 625531.", mapsLink: "https://maps.app.goo.gl/wknsdGskXUsFi6dZ9", lat: 10.0104, lng: 77.4768 },
  { title: "Tirunelveli", link: "fertility-centre-in-tirunelveli",address:"66-J, First Floor, Thiruvananthapuram Road West, New Bus Stand, Tirunelveli, Tamil Nadu - 627005.", mapsLink: "https://maps.app.goo.gl/XVWJPyGSvN4NWmYAA", lat: 8.7139, lng: 77.7567 },
  { title: "Vellore", link: "fertility-centre-in-vellore",address:"24, 4th East Cross Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Katpadi, Vellore, Tamil Nadu - 632006.", mapsLink: "https://maps.app.goo.gl/4LUQPQSooBNAsaaD6", lat: 12.9165, lng: 79.1325 },
  // { title: "Vaniyambadi", link: "fertility-centre-in-vaniyambadi",address:"277/1 JAMATH ROAD, 2nd St, opp. Government Hospital, Vaniyambadi, Tamil Nadu 635751", mapsLink: "" },
  { title: "Vijayawada", link: "fertility-centre-in-vijayawada",address:" Dr. No: 40-16/1-37, 1st Floor, Georgepet, Near D-Address Mall, Labbipet, Vijayawada, Andhra Pradesh - 520010.", mapsLink: "https://maps.app.goo.gl/eLWPXMvBPa4PvYgz9", lat: 16.5062, lng: 80.6480 },

  { title: "Paramakudi", link: "fertility-centre-in-paramakudi",address:"Gandhiji Main Road, near Taluk Office, SPM Colony, Attupalam, Paramakudi, Tamil Nadu 623707.", mapsLink: "https://maps.app.goo.gl/gVtpKeuCQyh1pqDe6", lat: 9.5490, lng: 78.5921 },
  { title: "Viluppuram", link: "fertility-centre-in-viluppuram",address:"Viswalingam Layout, No:1, Thiru Vi Ka Street, Viluppuram, Tamil Nadu 605602", mapsLink: "https://maps.app.goo.gl/i6YW48u2Axcqo4Zp6", lat: 11.9401, lng: 79.4861 },
  { title: "Nellore", link: "fertility-centre-in-nellore",address:"16/2/254, Swatantra Park road, Gandhinagar, Gandhinagar, Brindavan Colony, Nellore, Andhra Pradesh 524001", mapsLink: "https://maps.app.goo.gl/LLuYkzSkAr2v7M7g6", lat: 14.4426, lng: 79.9865 },
  { title: "Tindivanam", link: "fertility-centre-in-tindivanam",address:"No 55/1 B, Tindivanam-Marakkanam Rd, opp. to Fire station, Tindivanam, Tamil Nadu 604001", mapsLink: "https://maps.app.goo.gl/TWSo5z64sFzQAeCG7", lat: 12.2358, lng: 79.6521 },
  { title: "Tirupathur", link: "fertility-centre-in-tirupathur",address:"VKS Towers, Krishnagiri Road, near Hotel Hills, Tirupathur, Tamil Nadu 635601", mapsLink: "https://maps.app.goo.gl/EvUNvwnFbhmKbe9WA", lat: 12.4950, lng: 78.5678 },
];



export default function Footer() {
  return (
    <footer className="container mx-auto relative h-full py-7" id="footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 h-full">
        {/* Branches Section */}
        <div>
          <h3 className="font-semibold text-blue-900 text-lg md:text-xl">
            Our Branches
          </h3>
       
            {/* <ul className="flex flex-wrap gap-4 mt-5 text-sm md:text-base text-[#000] font-medium ">
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
            </ul> */}
            <BranchesDirectory />
        
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
