"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoCall, IoClose, IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import Logo from "@/assets/logo.svg";
import Logodark from "@/assets/logo-dark.svg";
import Bar from "@/assets/Navbar/bar.svg";
import DarkLogo from "@/assets/logo-dark.svg";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import RequestCallModal from "./modal";
import whatsapp from "@/assets/floatIcons/whatsapp.svg";
import call from "@/assets/floatIcons/Call.svg";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useNotFound } from "@/context/NotFoundContext";

const topNavItems = ["Helpline No: +91 76-7007-6006", "Book Appointment"];

const mainNavItems = [
  { item: "Home", link: "/" },
  { item: "About Us", link: "/about-us" },
  {
    title: "Treatments",
    link: "treatment",
    dropdownItems: [
      {
        item: (
          <p>
            In Vitro Fertilization{" "}
            <span className="font-semibold">( IVF )</span>{" "}
          </p>
        ),
        link: "/in-vitro-fertilization",
      },
      {
        item: (
          <p>
            Intrauterine Insemination{" "}
            <span className="font-semibold">( IUI )</span>{" "}
          </p>
        ),
        link: "/intrauterine-insemination",
      },
      {
        item: (
          <p>
            Intracytoplasmic Sperm Injection{" "}
            <span className="font-semibold">(ICSI)</span>{" "}
          </p>
        ),
        link: "/intracytoplasmic-sperm-injection",
      },
      { item: "Hysteroscopy", link: "/hysteroscopy" },
      {
        item: "Blastocyst Culture And Transfer",
        link: "/blastocyst-culture-and-transfer",
      },
      {
        item: (
          <p>
            Laser Assisted Hatching{" "}
            <span className="font-semibold">( LAH ) </span>{" "}
          </p>
        ),
        link: "/laser-assisted-hatching",
      },
      { item: "Laparoscopy", link: "/laparoscopy" },
      {
        item: (
          <p>
            Assisted Reproductive Technology{" "}
            <span className="font-semibold">( ART ) </span>{" "}
          </p>
        ),
        link: "/assisted-reproductive-technology",
      },
      {
        item: "Pregnancy & Antenatal Care",
        link: "/pregnancy-and-antenatal-care",
      },
      { item: "PCOS & PCOD", link: "/pcos-and-pcod" },
      { item: "Female-Infertility", link: "/female-infertility" },
      { item: "Male-Infertility", link: "/male-infertility" },
    ],
  },
  // "Blogs",
  {
    title: "Branches",
    states: [
      {
        name: "Tamil Nadu",
        branches: [
          { item: "Ambattur", link: "/fertility-centre-in-ambattur", hreflang:"en-in" },
          // { item: "Aruppukottai", link: "/fertility-centre-in-aruppukottai", hreflang:"en-in" },

          
          // { item: "Bodinayakanur", link: "fertility-centre-in-bodinayakanur", hreflang:"en-in" },
          { item: "Chennai", link: "/fertility-centre-in-chennai" },
          
          { item: "Coimbatore", link: "/fertility-centre-in-coimbatore" },
          { item: "Dindigul", link: "/fertility-centre-in-dindigul" },
          { item: "Erode", link: "/fertility-centre-in-erode" },
          // { item: "Hosur", link: "/fertility-centre-in-hosur" },
          // { item: "Karur", link: "/fertility-centre-in-karur" },
          // { item: "Karaikudi", link: "/fertility-centre-in-karaikudi" },
          // { item: "Kallakurichi", link: "/fertility-centre-in-kallakurichi" },

          { item: "Krishnagiri", link: "/fertility-centre-in-krishnagiri" },
          { item: "Madurai", link: "/fertility-centre-in-madurai" },
          { item: "Manapparai", link: "/fertility-centre-in-manapparai" },

          { item: "Nagercoil", link: "/fertility-centre-in-nagercoil" },
          // { item: "Perambalur", link: "/fertility-centre-in-perambalur" },

          {
            item: "Ramanathapuram",
            link: "/fertility-centre-in-ramanathapuram",
          },
          { item: "Salem", link: "/fertility-centre-in-salem" },
          // { item: "Sivangangai", link: "/fertility-centre-in-sivagangai" },

          { item: "Thanjavur", link: "/fertility-centre-in-thanjavur" },
          { item: "Thoothukudi", link: "/fertility-centre-in-thoothukudi" },
          { item: "Theni", link: "/fertility-centre-in-theni" },
          { item: "Tirunelveli", link: "/fertility-centre-in-tirunelveli" },
          { item: "Tiruppur", link: "/fertility-centre-in-tiruppur" },
          { item: "Trichy ", link: "/fertility-centre-in-trichy " },
          {
            item: "Tiruvannamalai",
            link: "/fertility-centre-in-tiruvannamalai",
          },
          { item: "Vellore", link: "/fertility-centre-in-vellore" },
          // { item: "Vaniyambadi", link: "/fertility-centre-in-vaniyambadi" },
          {
            item:"Paramakudi",
            link:"/fertility-centre-in-paramakudi",
          },
          {
            item:"Viluppuram",
            link:"/fertility-centre-in-viluppuram",
          },
          {
            item:"Tindivanam",
            link:"/fertility-centre-in-tindivanam",
          },
          {
            item:"Tirupathur",
            link:"/fertility-centre-in-tirupathur",
          }
         

        ],
      },
      {
        name: "Andhra Pradesh",
        branches: [
          { item: "Chilakaluripet", link: "/fertility-centre-in-chilakaluripet" },
          { item: "Ongole ", link: "/fertility-centre-in-ongole" },
          { item: "Vijayawada ", link: "/fertility-centre-in-vijayawada" },
          {
            item:"Nellore",
            link:"/fertility-centre-in-nellore",
          },
          // { item: "Tenali ", link: "/fertility-centre-in-tenali" },
          
        ],
      },
      {
        name: "Karnataka",
        branches: [
          { item: "Bangalore ", link: "/fertility-centre-in-bangalore" },
        ],
      },
      {
        name: "Pondicherry",
        link: "/fertility-centre-in-pondicherry",
        branches: [],
      },
      {
        name: "Telangana",
        branches: [
          { item: "Attapur", link: "/fertility-centre-in-attapur" },
          { item: "Hanamkonda", link: "/fertility-centre-in-hanamkonda" },
          { item: "Hyderabad ", link: "/fertility-centre-in-hyderabad" },
          
        ],
      },
    ],
  },
{ item: "Blog", link: "/blog/" },
  //Blogs
  // {
  //   title: "Resource",
  //   resource: [
  //     {
  //       name: "Blog",
  //       link: "/",
  //       branches: [],
  //     },
  //     {
  //       name: "Calculator",
  //       branches: [
  //         {
  //           item: "Pregnancy Calculator ",
  //           link: "/free-online-pregnancy-calculator",
  //         },
  //         { item: "Ovulation Calculator", link: "/free-ovulation-calculator" },
  //         {
  //           item: "Period Calculator",
  //           link: "/free-menstrual-cycle-calculator",
  //         },
  //         {
  //           item: "Pregnancy Conception Calculator",
  //           link: "/free-conception-calculator",
  //         },
  //       ],
  //     },
  //   ],
  // },

  { item: "Contact Us", link: "/contact-us" },
];

export const branches = [
  {
    title: "Ambattur",
    link: "fertility-centre-in-ambattur",
    mapsLink: "https://maps.app.goo.gl/uM1mFNbeJvbYeLXY7",
  },
  {
    title: "Attapur",
    link: "fertility-centre-in-attapur",
    mapsLink: "https://maps.app.goo.gl/kCN9frsx9Ma8d6A89",
  },
  {
    title: "Bangalore",
    link: "fertility-centre-in-bangalore",
    mapsLink: "https://maps.app.goo.gl/1Ncdrbka7Ua9Ax8T9",
  },
  {
    title: "Chennai",
    link: "fertility-centre-in-chennai",
    mapsLink: "https://maps.app.goo.gl/UpkkHrKcbUe1B5Ez9",
  },
    {
    title: "Chilakaluripet",
    link: "fertility-centre-in-chilakaluripet",
    mapsLink: "https://maps.app.goo.gl/8zeUm6TGz7egrCJ96",
  },
  {
    title: "Coimbatore",
    link: "fertility-centre-in-coimbatore",
    mapsLink: "https://maps.app.goo.gl/tk26i3ZCqKy5tvgZ8",
  },
 
  {
    title: "Erode",
    link: "fertility-centre-in-erode",
    mapsLink: "https://maps.app.goo.gl/25HVE7mZdQ5U1Z6F6",
  },
  {
    title: "Dindigul",
    link: "fertility-centre-in-dindigul",
    mapsLink: "https://maps.app.goo.gl/fZ8shcWhwnXGZDeJ6",
  },
  {
    title: "Hanamkonda",
    link: "fertility-centre-in-hanamkonda",
    mapsLink: "https://maps.app.goo.gl/xDisk6tufXdoqzxL7",
  },
  // {
  //   title: "Hosur",
  //   link: "fertility-centre-in-hosur",
  //   mapsLink: "https://maps.app.goo.gl/KXiPBYQ1t5Eqa5447",
  // },
  {
    title: "Hyderabad",
    link: "fertility-centre-in-hyderabad",
    mapsLink: "https://maps.app.goo.gl/HkU6U4pm4V9Ry8gX6",
  },
  // {
  //   title: "Karur",
  //   link: "fertility-centre-in-karur",
  //   mapsLink: "https://maps.app.goo.gl/PgRAgh1S9pxPyFQd6",
  // },
  // {
  //   title: "Karaikudi",
  //   link: "fertility-centre-in-karaikudi",
  //   mapsLink: "https://maps.app.goo.gl/DKpmahvw2cm3cEAc7",
  // },
  {
    title: "Krishnagiri",
    link: "fertility-centre-in-krishnagiri",
    mapsLink: "https://maps.app.goo.gl/AFhZgdDtcZKJVvcT8",
  },
  {
    title: "Madurai",
    link: "fertility-centre-in-madurai",
    mapsLink: "https://maps.app.goo.gl/2KNqTNT3D7vSdsrAA",
  },
  {
    title: "Nagercoil",
    link: "fertility-centre-in-nagercoil",
    mapsLink: "https://maps.app.goo.gl/q1uZKWHDhL4QsEYs6",
  },
  {
    title: "Ongole",
    link: "fertility-centre-in-ongole",
    mapsLink: "https://maps.app.goo.gl/GZzvWM3RoAN9tBZA8",
  },

  {
    title: "Pondicherry",
    link: "fertility-centre-in-pondicherry",
    mapsLink: "https://maps.app.goo.gl/jb5DRZmTN5j35YUAA",
  },
  {
    title: "Ramanathapuram",
    link: "fertility-centre-in-ramanathapuram",
    mapsLink: "https://maps.app.goo.gl/B4i7qWWrpRDwLT9e8",
  },
  {
    title: "Salem",
    link: "fertility-centre-in-salem",
    mapsLink: "https://maps.app.goo.gl/DhH1ssMcYmhfrLfA7",
  },
  // {
  //   title: "Tenali",
  //   link: "fertility-centre-in-tenali",
  //   mapsLink: "https://maps.app.goo.gl/w27JKa7Vzywvx5cy9",
  // },
  {
    title: "Tiruvannamalai",
    link: "fertility-centre-in-tiruvannamalai",
    mapsLink: "https://maps.app.goo.gl/sSRbqRwYA9eoocoC6",
  },
  {
    title: "Trichy",
    link: "fertility-centre-in-trichy",
    mapsLink: "https://maps.app.goo.gl/LtKvMB5paEZekmxPA",
  },
  {
    title: "Thanjavur",
    link: "fertility-centre-in-thanjavur",
    mapsLink: "https://maps.app.goo.gl/nY94QAuTsCJq8qaD6",
  },
  {
    title: "Tiruppur",
    link: "fertility-centre-in-tiruppur",
    mapsLink: "https://maps.app.goo.gl/871MuLRMYPysaYbj6",
  },
  {
    title: "Theni",
    link: "fertility-centre-in-theni",
    mapsLink: "https://maps.app.goo.gl/wQfuXdXibDm3NEQP7",
  },
  {
    title: "Tirunelveli",
    link: "fertility-centre-in-tirunelveli",
    mapsLink: "https://maps.app.goo.gl/HUYbXbThSM4urLWSA",
  },
  {
    title: "Vellore",
    link: "fertility-centre-in-vellore",
    mapsLink: "https://maps.app.goo.gl/x3auhVG89QFREzXT8",
  },
  {
    title: "Vijayawada",
    link: "fertility-centre-in-vijayawada",
    mapsLink: "https://maps.app.goo.gl/Kar7sb7ZvQkQEwYr5",
  },
  {
    title: "Paramakudi",
    link: "fertility-centre-in-paramakudi",
    mapsLink: "https://share.google/tC4DtJRrUXxwoxcLs",
  },
  {
    title: "Tirupathur",
    link: "fertility-centre-in-tirupathur",
    mapsLink: "https://share.google/O7iKqwZMUZByQm9qG",
  },
  {
    title: "Tindivanam",
    link: "fertility-centre-in-tindivanam",
    mapsLink: "https://share.google/w8fxjpydGnMH3r4qZ",
  },
  {
    title: "Nellore",
    link: "fertility-centre-in-nellore",
    mapsLink: "https://share.google/g01PmAeLKM2Q5sJpW",
  },
  {
    title: "Viluppuram",
    link: "fertility-centre-in-viluppuram",
    mapsLink: "https://share.google/RtBPwq6Srm0vycAhE",
  },
];

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeState, setActiveState] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState(false);
  // State for mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname(); // Get the current page path

  // Function to handle the "Find Us" button click and open the Google Maps link
  const handleFindUs = () => {
    const currentBranch = branches.find((branch) =>
      pathname.includes(branch.link)
    ); // Find the branch from the URL
    if (currentBranch) {
      window.open(currentBranch.mapsLink, "_blank"); // Open the corresponding Google Maps link in a new tab
    } else {
      alert("Branch location not found!");
    }
  };

  // Check if the current page is a branch page (based on the branch link)
  const isBranchPage = branches.some((branch) =>
    pathname.includes(branch.link)
  );

  const handleStateClick = (index) => {
    setActiveState(activeState === index ? null : index); // Toggle state visibility
  };

  // Handle scroll event to update the navbar color
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      if (window.scrollY > 80) {
        setNavbarColor(true);
      } else {
        setNavbarColor(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
    setActiveState(null);
  };

  const handleStateHover = (stateName) => {
    setActiveState(stateName);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };
  const { isNotFound } = useNotFound();

  return (
    <header
      className={`w-full  text-white font-outfit z-30 sticky top-0 ${
        navbarColor ? "bg-[#fff] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto" id="header">
        <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          {/* Top Navigation Bar */}
          <div className=" ">
            <div className="mx-auto">
              <div className="flex items-center justify-between w-full">
                {/* <div className="flex items-center justify-between w-full lg:w-screen"> */}
                {/* Logo */}
                <div className="w-32 lg:w-44 md:pr-4 lg:pr-4">
                  <Link href={"/"}>
                    <Image
                      src={
                        isNotFound
                          ? Logodark // If on the 404 page, show Logodark
                          : pathname === "/thank-you"
                          ? Logodark // If on Thank You page, show Logodark
                          : navbarColor
                          ? Logodark
                          : Logo // Otherwise, follow navbarColor logic
                      }
                      alt="Sudha-Logo"
                      className="w-full p-4 md:p-0 lg:p-0 h-auto top-2"
                    />
                  </Link>
                </div>

                <div className="flex gap-3">
                  {/* Mobile Find Us */}
                  <div className="block lg:hidden">
                    {isBranchPage == true ? (
                      <div
                        className="flex items-center group cursor-pointer p-2 sm:p-3 md:p-4 lg:p-5"
                        onClick={handleFindUs}
                      >
                        <IoLocationSharp
                          size={20} /* Smaller size for mobile */
                          className={` group-hover:text-[#FFC65C] sm:size-25 ${
                            isNotFound
                              ? "text-[#173366]" // If on the 404 page, show Logodark
                              : pathname === "/thank-you"
                              ? "text-[#173366]"
                              : navbarColor
                              ? "text-[#173366]"
                              : "text-[#ffff]"
                          }`}
                        />
                        <span
                          className={`ml-1 text-md ${
                            isNotFound
                              ? "text-[#173366]" // If on the 404 page, show Logodark
                              : pathname === "/thank-you"
                              ? "text-[#173366]"
                              : navbarColor
                              ? "text-[#173366]"
                              : "text-[#ffff]"
                          } sm:text-md font-medium group-hover:text-[#FFC65C]`}
                        >
                          Find us
                        </span>
                      </div>
                    ) : (
                      <>
                        <a href="tel:7670076006">
                          <div className="pl-3 pt-1 pr-3 pb-1 flex items-center justify-center gap-2 rounded-full bg-[#FFC65C] text-[#000]">
                            <IoCall />
                            <p>Request a call</p>
                          </div>
                        </a>
                      </>
                    )}
                  </div>

                  {/* Mobile Hamburger */}
                  <div
                    className={`lg:hidden  ${
                      isNotFound
                        ? "text-[#173366]" // If on the 404 page, show Logodark
                        : pathname === "/thank-you"
                        ? "text-[#173366]"
                        : navbarColor
                        ? "text-[#173366]"
                        : "bg-transparent"
                    }`}
                  >
                    <button onClick={toggleMobileMenu}>
                      {/* <Image src={Bar} alt="Bar" className="w-[30px]" /> */}
                      <Menu size={28} />
                    </button>
                  </div>
                </div>
                {/* </div> */}

                <div className="w-full hidden lg:block">
                  {/* Top Nav Container */}
                  <div className="py-5 flex items-center border-[#999999] border-b-2">
                    <div className="xl:ml-5 ">
                      {isBranchPage && (
                        <div
                          className="flex items-center group cursor-pointer"
                          onClick={handleFindUs}
                        >
                          <IoLocationSharp
                            size={25}
                            className={`group-hover:text-[#FFC65C] ${
                              isNotFound
                          ? "text-[#173366]" // If on the 404 page, show Logodark
                          :pathname === "/thank-you"
                                ? "text-[#173366]"
                                : navbarColor
                                ? "text-[#173366]"
                                : "text-[#ffff]"
                            }`}
                          />
                          <span
                            className={`ml-1 text-md ${
                              isNotFound
                          ? "text-[#173366]" // If on the 404 page, show Logodark
                          :pathname === "/thank-you"
                                ? "text-[#173366]"
                                : navbarColor
                                ? "text-[#173366]"
                                : "text-[#ffff]"
                            } sm:text-md font-medium group-hover:text-[#FFC65C]`}
                          >
                            Find us
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 flex justify-end items-center hidden lg:flex ">
                      {/* Right Navigation Items */}
                      <div className="flex items-center">
                        <ul
                          className={`flex gap-9 font-medium ${
                            isNotFound
                          ? "text-[#173366]" // If on the 404 page, show Logodark
                          :pathname === "/thank-you"
                              ? "text-[#173366]"
                              : navbarColor
                              ? "text-[#173366]"
                              : "text-[#fff]"
                          }`}
                        >
                          <li>
                            Helpline No :
                            <Link
                              href="tel:7670076006"
                              className="hover:text-[#FFC65C] transition-colors duration-300 text-md cursor-pointer"
                            >
                              &nbsp;&nbsp;  +91 76-7007-6006
                            </Link>
                          </li>
                          {topNavItems.map((item, index) => (
                            <li
                              key={index}
                              className="hover:text-[#FFC65C] transition-colors duration-300 text-md cursor-pointer"
                            >
                              {item === "Book Appointment" && (
                                <Link
                                  href={"/#contact-now"}
                                  // onClick={(e) => handleClick(e, "contact-now")}
                                >
                                  {item}
                                </Link>
                              )}
                            </li>
                          ))}
                          <li
                            className="flex items-center gap-2 group cursor-pointer"
                            onClick={() => setIsModalOpen(true)}
                          >
                            <BsFillTelephoneInboundFill
                              size={18}
                              className="group-hover:text-[#FFC65C]"
                            />
                            <span className="group-hover:text-[#FFC65C] font-medium transition-colors duration-300 text-md">
                              Request A Call
                            </span>
                          </li>
                        </ul>
                        <RequestCallModal
                          isOpen={isModalOpen}
                          onClose={() => setIsModalOpen(false)}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Main Navigation Bar for Larger Screens */}
                  <div className="container mx-auto ">
                    <div className="pb-4 pt-4 hidden lg:block">
                      <div className="">
                        <ul
                          className={`container flex gap-8 2xl:gap-12 font-medium justify-end ${
                            isNotFound
                          ? "text-[#173366]" // If on the 404 page, show Logodark
                          :pathname === "/thank-you"
                              ? "text-[#173366]"
                              : navbarColor
                              ? "text-[#173366]"
                              : "text-[#fff]"
                          }`}
                        >
                          {mainNavItems.map((item, index) => (
                            <li
                              key={index}
                              className="relative"
                              onMouseEnter={() => handleMouseEnter(index)}
                              onMouseLeave={handleMouseLeave}
                            >
                              <div
                                className={`hover:text-[#FFC65C] xl:ps-8 transition-colors duration-300 cursor-pointer text-md flex items-center gap-1
    ${activeDropdown === index ? "text-[#FFC65C]" : ""}`}
                              >
                                {typeof item.item === "string" ? (
                                  <Link href={item.link}>{item.item}</Link>
                                ) : (
                                  item.title
                                )}

                                {/* Check for dropdownItems and states being present and correct */}
                                {(typeof item.dropdownItems === "object" &&
                                  item.dropdownItems !== null) ||
                                (typeof item.states === "object" &&
                                  item.states !== null) ||
                                (typeof item.resource === "object" &&
                                  item.states !== null) ? (
                                  <IoIosArrowDown
                                    className={`transition-transform duration-300 ${
                                      activeDropdown === index
                                        ? "rotate-180 text-[#FFC65C]"
                                        : ""
                                    }`}
                                  />
                                ) : null}
                              </div>

                              {/* Dropdown for Treatments */}
                              {item.title === "Treatments" &&
                                activeDropdown === index && (
                                  <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{
                                      duration: 0.2,
                                      ease: "easeInOut",
                                    }}
                                    className="absolute top-full font-medium left-[-208px] bg-white text-gray-800 py-4 px-6 min-w-[720px] shadow-lg rounded-[14px]"
                                  >
                                    <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                                      {item.dropdownItems.map(
                                        (dropdownItem, dropIndex) => (
                                          <Link
                                            href={dropdownItem.link}
                                            key={dropIndex}
                                          >
                                            <div className="px-2 py-1 text-[15px] hover:text-[#FFC65C] cursor-pointer">
                                              {dropdownItem.item
                                                ? dropdownItem.item
                                                : "Unknown Item"}
                                            </div>
                                          </Link>
                                        )
                                      )}
                                    </div>
                                  </motion.div>
                                )}

                              {/* Dropdown for States and Branches */}

                              {item.title === "Branches" &&
                                item.states &&
                                activeDropdown === index && (
                                  <div className="absolute top-full font-medium left-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-[14px]">
                                    {item.states.map((state) => (
                                      <div
                                        key={state.name}
                                        className="relative group"
                                        onMouseEnter={() =>
                                          handleStateHover(state.name)
                                        }
                                        onMouseLeave={() =>
                                          handleStateHover(null)
                                        }
                                      >
                                        {state.name === "Pondicherry" ? (
                                          <div className="px-4 py-2 text-[15px]  hover:text-[#FFC65C] cursor-pointer flex justify-between items-center">
                                            <Link
                                              href={
                                                "/fertility-centre-in-pondicherry"
                                              }
                                              className="px-4 py-2  hover:text-[#FFC65C] cursor-pointer"
                                            >
                                              {state.name}
                                            </Link>
                                          </div>
                                        ) : (
                                          <div className="px-4 py-2  hover:text-[#FFC65C] cursor-pointer flex justify-between items-center rounded-md">
                                            <p className="px-4 py-2  hover:text-[#FFC65C] cursor-pointer">
                                              {state.name}
                                            </p>
                                            {state.branches.length > 0 && (
                                              <IoIosArrowDown className="text-gray-500" />
                                            )}
                                          </div>
                                        )}

                                        {/* Secondary dropdown for branches */}
                                        {activeState === state.name &&
                                          state.branches.length > 0 && (
                                            <div className="absolute left-full top-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-[14px] -ml-1 max-h-96 overflow-x-hidden ">
                                              {state.branches.map(
                                                (branch, branchIndex) => (
                                                  <Link
                                                    href={branch.link}
                                                    key={branchIndex}
                                                  >
                                                    <div
                                                      key={branchIndex}
                                                      className="px-4 py-2 text-[15px]  hover:text-[#FFC65C] cursor-pointer"
                                                    >
                                                      {branch.item}
                                                    </div>
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                )}

                              {/* //Resource */}
                              {item.title === "Resource" &&
                                item.resource &&
                                activeDropdown === index && (
                                  <div className="absolute top-full left-0 font-medium bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-[14px]">
                                    {item.resource.map((state) => (
                                      <div
                                        key={state.name}
                                        className="relative group"
                                        onMouseEnter={() =>
                                          handleStateHover(state.name)
                                        }
                                        onMouseLeave={() =>
                                          handleStateHover(null)
                                        }
                                      >
                                        {console.log("resource",state)}
                                        {state.name === "Blog" ? (
                                          <div className="px-4 py-2  hover:text-[#FFC65C] cursor-pointer flex justify-between items-center">
                                            <Link
                                              href={
                                                "https://sudhafertilitycentre.com/blog/"
                                              }
                                              className="px-4 py-2  hover:text-[#FFC65C] cursor-pointer"
                                            >
                                              {state.name}
                                            </Link>
                                          </div>
                                        ) : (
                                          <div className="px-4 py-2 hover:text-[#FFC65C] cursor-pointer flex justify-between items-center rounded-md">
                                            <p className="px-4 py-2 hover:text-[#FFC65C] cursor-pointer">
                                              {state.name}
                                            </p>
                                            {state.branches.length > 0 && (
                                              <IoIosArrowDown className="text-gray-500" />
                                            )}
                                          </div>
                                        )}

                                        {/* Secondary dropdown for branches */}
                                        {activeState === state.name &&
                                          state.branches.length > 0 && (
                                            <div className="absolute left-full top-0 bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-[14px] -ml-1 max-h-96 overflow-x-hidden ">
                                              {state.branches.map(
                                                (branch, branchIndex) => (
                                                  <Link
                                                    href={branch.link}
                                                    key={branchIndex}
                                                  >
                                                    <div
                                                      key={branchIndex}
                                                      className="px-4 py-2  hover:text-[#FFC65C] cursor-pointer"
                                                    >
                                                      {branch.item}
                                                    </div>
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          )}
                                      </div>
                                    ))}
                                  </div>
                                )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <hr className="h-px mt-2 mx-6 text-white bg-gray-200 border-0 dark:bg-gray-700"/> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="relative">
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto pb-9"
              initial={{ opacity: 0, x: 20 }} // Start with opacity 0 and translateX
              animate={{ opacity: 1, x: 0 }} // Fade in and move to normal position
              exit={{ opacity: 0, x: -20 }} // Fade out and move to the left
              transition={{ duration: 0.4 }} // Duration for the animation
            >
              <div className="container mx-auto py-6">
                <div className="flex justify-between px-4">
                  <div className="w-40">
                    <Link href={"/"}>
                      <Image
                        src={DarkLogo}
                        alt="Sudha-Logo"
                        className="w-full h-auto top-2"
                      />
                    </Link>
                  </div>
                  {/* Close Button */}
                  <div className="flex">
                    <button
                      onClick={toggleMobileMenu}
                      className="text-gray-600 p-2"
                    >
                      <IoClose size={24} />
                    </button>
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="mt-3 px-4">
                  {mainNavItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                      {/* Render simple string items (e.g., "Home", "About Us", "Blogs", etc.) */}
                      {typeof item.item === "string" ? (
                        <Link
                          href={item.link}
                          className="block py-4 text-gray-800 hover:text-[#FFC65C] text-lg"
                          onClick={toggleMobileMenu}
                        >
                          {item.item}
                        </Link>
                      ) : (
                        // Render items with a title and dropdown (Treatments and Branches)
                        <div>
                          <button
                            className="w-full py-4 flex justify-between items-center text-gray-800"
                            onClick={() => handleDropdownClick(index)}
                          >
                            <span className="text-lg">{item.title}</span>
                            <IoIosArrowDown
                              className={`transition-transform duration-200 ${
                                activeDropdown === index ? "rotate-180" : ""
                              }`}
                            />
                          </button>

                          {/* Render Treatments dropdown */}
                          {item.dropdownItems && activeDropdown === index && (
                            <div className="bg-gray-50 px-4 py-2">
                              {item.dropdownItems.map((subItem, subIndex) => (
                                <Link
                                  key={subIndex}
                                  href={subItem.link}
                                  className="block py-2 font-medium text-gray-600 hover:text-[#FFC65C]"
                                  onClick={toggleMobileMenu}
                                >
                                  {subItem.item}
                                </Link>
                              ))}
                            </div>
                          )}

                          {/* Render Branches dropdown */}
                          {item.states && activeDropdown === index && (
                            <div className="bg-gray-50 px-4 py-2">
                              {item.states.map((state, stateIndex) => (
                                <div key={stateIndex}>
                                  <button
                                    className="w-full py-4 font-medium flex justify-between items-center text-gray-800"
                                    onClick={() => handleStateClick(stateIndex)}
                                  >
                                    {state.name == "Pondicherry" ? (
                                      <Link
                                        className="font-semibold text-gray-800"
                                        href={"/fertility-centre-in-pondicherry"}
                                        onClick={toggleMobileMenu}
                                      >
                                        {state.name}
                                      </Link>
                                    ) : (
                                      <span className="font-semibold text-gray-800">
                                        {state.name}
                                      </span>
                                    )}
                                    {state.branches.length > 0 && (
                                      <IoIosArrowDown
                                        className={`transition-transform duration-200 ${
                                          activeState === stateIndex
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    )}
                                  </button>

                                  {/* Render branches of the selected state */}
                                  {activeState === stateIndex && (
                                    <ul className="list-disc ml-4">
                                      {state.branches.map(
                                        (branch, branchIndex) => (
                                          <Link
                                            href={branch.link}
                                            key={branchIndex}
                                            onClick={toggleMobileMenu}
                                          >
                                            <li className="py-1 text-gray-600 hover:text-[#FFC65C]">
                                              {branch.item}
                                            </li>
                                          </Link>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}

                          {/* Render resource dropdown */}
                          {item.resource && activeDropdown === index && (
                            <div className="bg-gray-50 px-4 py-2">
                              {item.resource.map((state, stateIndex) => (
                                <div key={stateIndex}>
                                  <button
                                    className="w-full py-4 font-medium flex justify-between items-center text-gray-800"
                                    onClick={() => handleStateClick(stateIndex)}
                                  >
                                    {state.name == "Blog" ? (
                                      <Link
                                        className="font-semibold text-gray-800"
                                        href={"https://sudhafertilitycentre.com/blog/"}
                                        onClick={toggleMobileMenu}
                                      >
                                        {state.name}
                                      </Link>
                                    ) : (
                                      <span className="font-semibold text-gray-800">
                                        {state.name}
                                      </span>
                                    )}
                                    {state.branches.length > 0 && (
                                      <IoIosArrowDown
                                        className={`transition-transform duration-200 ${
                                          activeState === stateIndex
                                            ? "rotate-180"
                                            : ""
                                        }`}
                                      />
                                    )}
                                  </button>

                                  {/* Render branches of the selected state */}
                                  {activeState === stateIndex && (
                                    <ul className="list-disc ml-4">
                                      {state.branches.map(
                                        (branch, branchIndex) => (
                                          <Link
                                            href={branch.link}
                                            key={branchIndex}
                                            onClick={toggleMobileMenu}
                                          >
                                            <li className="py-1 text-gray-600 hover:text-[#FFC65C]">
                                              {branch.item}
                                            </li>
                                          </Link>
                                        )
                                      )}
                                    </ul>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Action Buttons */}
                <div className="relative">
                  <div className="mt-8 gap-2 w-full fixed bottom-0 left-0 flex bg-[#173366]">
                    <button className="w-full py-3 border-r text-white font-medium">
                      Book Appointment
                    </button>
                    <button
                      className="w-full py-3 font-medium"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Request A Call
                    </button>
                  </div>
                </div>
                <RequestCallModal
                  isOpen={isModalOpen}
                  onClose={() => setIsModalOpen(false)}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {!isMobileMenuOpen && (
        <>
          <ul className="fixed md:top-60 top-80 -right-7 flex flex-col space-y-5 z-40 ">
            <li>
              <a
                href="https://wa.me/7670076006"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-28 h-14   rounded-full  hover:scale-105 transition-transform"
              >
                <Image src={whatsapp} alt="whatsapp" width={80} height={80} />
              </a>
            </li>

            {/* Phone Call Button */}
            <li>
              <a
                href="tel:7670076006"
                className="flex items-center justify-center w-28 h-14   rounded-full  hover:scale-105 transition-transform"
              >
                <Image src={call} alt="Phone" width={80} height={80} />
              </a>
            </li>
          </ul>
        </>
      )}
    </header>
  );
}

// lestn

export default Navbar;
