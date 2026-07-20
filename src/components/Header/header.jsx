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
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useNotFound } from "@/context/NotFoundContext";
import {
  useFloating,
  flip,
  shift,
  offset,
  autoUpdate,
  size as floatingSize,
  useHover,
  useFocus,
  useDismiss,
  useInteractions,
  safePolygon,
} from "@floating-ui/react";

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
  {
    title: "Branches",
    states: [
      {
        name: "Tamil Nadu",
        branches: [
          { item: "Ambattur", link: "/fertility-centre-in-ambattur", hreflang: "en-in" },
          { item: "Chennai", link: "/fertility-centre-in-chennai" },
          { item: "Coimbatore", link: "/fertility-centre-in-coimbatore" },
          { item: "Dindigul", link: "/fertility-centre-in-dindigul" },
          { item: "Erode", link: "/fertility-centre-in-erode" },
          { item: "Kallakurichi", link: "/fertility-centre-in-kallakurichi" },
          { item: "Krishnagiri", link: "/fertility-centre-in-krishnagiri" },
          { item: "Madurai", link: "/fertility-centre-in-madurai" },
          { item: "Manapparai", link: "/fertility-centre-in-manapparai" },
          { item: "Nagercoil", link: "/fertility-centre-in-nagercoil" },
          { item: "Ramanathapuram", link: "/fertility-centre-in-ramanathapuram" },
          { item: "Salem", link: "/fertility-centre-in-salem" },
          { item: "Sivangangai", link: "/fertility-centre-in-sivagangai" },
          { item: "Thanjavur", link: "/fertility-centre-in-thanjavur" },
          { item: "Thoothukudi", link: "/fertility-centre-in-thoothukudi" },
          { item: "Theni", link: "/fertility-centre-in-theni" },
          { item: "Tirunelveli", link: "/fertility-centre-in-tirunelveli" },
          { item: "Tiruppur", link: "/fertility-centre-in-tiruppur" },
          { item: "Trichy ", link: "/fertility-centre-in-trichy " },
          { item: "Tiruvannamalai", link: "/fertility-centre-in-tiruvannamalai" },
          { item: "Vellore", link: "/fertility-centre-in-vellore" },
          { item: "Paramakudi", link: "/fertility-centre-in-paramakudi" },
          { item: "Viluppuram", link: "/fertility-centre-in-viluppuram" },
          { item: "Tindivanam", link: "/fertility-centre-in-tindivanam" },
          { item: "Tirupathur", link: "/fertility-centre-in-tirupathur" },
        ],
      },
      {
        name: "Andhra Pradesh",
        branches: [
          { item: "Chilakaluripet", link: "/fertility-centre-in-chilakaluripet" },
          { item: "Ongole ", link: "/fertility-centre-in-ongole" },
          { item: "Vijayawada ", link: "/fertility-centre-in-vijayawada" },
          { item: "Nellore", link: "/fertility-centre-in-nellore" },
        ],
      },
      {
        name: "Karnataka",
        branches: [{ item: "Bangalore ", link: "/fertility-centre-in-bangalore" }],
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
  { item: "Blog", link: "https://sudhafertilitycentre.com/blog/" },
  { item: "Contact Us", link: "/contact-us" },
];

export const branches = [
  { title: "Ambattur", link: "fertility-centre-in-ambattur", mapsLink: "https://maps.app.goo.gl/uM1mFNbeJvbYeLXY7" },
  { title: "Attapur", link: "fertility-centre-in-attapur", mapsLink: "https://maps.app.goo.gl/kCN9frsx9Ma8d6A89" },
  { title: "Bangalore", link: "fertility-centre-in-bangalore", mapsLink: "https://maps.app.goo.gl/1Ncdrbka7Ua9Ax8T9" },
  { title: "Chennai", link: "fertility-centre-in-chennai", mapsLink: "https://maps.app.goo.gl/UpkkHrKcbUe1B5Ez9" },
  { title: "Chilakaluripet", link: "fertility-centre-in-chilakaluripet", mapsLink: "https://maps.app.goo.gl/8zeUm6TGz7egrCJ96" },
  { title: "Coimbatore", link: "fertility-centre-in-coimbatore", mapsLink: "https://maps.app.goo.gl/tk26i3ZCqKy5tvgZ8" },
  { title: "Erode", link: "fertility-centre-in-erode", mapsLink: "https://maps.app.goo.gl/25HVE7mZdQ5U1Z6F6" },
  { title: "Dindigul", link: "fertility-centre-in-dindigul", mapsLink: "https://maps.app.goo.gl/fZ8shcWhwnXGZDeJ6" },
  { title: "Hanamkonda", link: "fertility-centre-in-hanamkonda", mapsLink: "https://maps.app.goo.gl/xDisk6tufXdoqzxL7" },
  { title: "Hyderabad", link: "fertility-centre-in-hyderabad", mapsLink: "https://maps.app.goo.gl/HkU6U4pm4V9Ry8gX6" },
  { title: "Krishnagiri", link: "fertility-centre-in-krishnagiri", mapsLink: "https://maps.app.goo.gl/AFhZgdDtcZKJVvcT8" },
  { title: "Madurai", link: "fertility-centre-in-madurai", mapsLink: "https://maps.app.goo.gl/2KNqTNT3D7vSdsrAA" },
  { title: "Nagercoil", link: "fertility-centre-in-nagercoil", mapsLink: "https://maps.app.goo.gl/q1uZKWHDhL4QsEYs6" },
  { title: "Ongole", link: "fertility-centre-in-ongole", mapsLink: "https://maps.app.goo.gl/GZzvWM3RoAN9tBZA8" },
  { title: "Pondicherry", link: "fertility-centre-in-pondicherry", mapsLink: "https://maps.app.goo.gl/jb5DRZmTN5j35YUAA" },
  { title: "Ramanathapuram", link: "fertility-centre-in-ramanathapuram", mapsLink: "https://maps.app.goo.gl/B4i7qWWrpRDwLT9e8" },
  { title: "Salem", link: "fertility-centre-in-salem", mapsLink: "https://maps.app.goo.gl/DhH1ssMcYmhfrLfA7" },
  { title: "Tiruvannamalai", link: "fertility-centre-in-tiruvannamalai", mapsLink: "https://maps.app.goo.gl/sSRbqRwYA9eoocoC6" },
  { title: "Trichy", link: "fertility-centre-in-trichy", mapsLink: "https://maps.app.goo.gl/LtKvMB5paEZekmxPA" },
  { title: "Thanjavur", link: "fertility-centre-in-thanjavur", mapsLink: "https://maps.app.goo.gl/nY94QAuTsCJq8qaD6" },
  { title: "Tiruppur", link: "fertility-centre-in-tiruppur", mapsLink: "https://maps.app.goo.gl/871MuLRMYPysaYbj6" },
  { title: "Theni", link: "fertility-centre-in-theni", mapsLink: "https://maps.app.goo.gl/wQfuXdXibDm3NEQP7" },
  { title: "Tirunelveli", link: "fertility-centre-in-tirunelveli", mapsLink: "https://maps.app.goo.gl/HUYbXbThSM4urLWSA" },
  { title: "Vellore", link: "fertility-centre-in-vellore", mapsLink: "https://maps.app.goo.gl/x3auhVG89QFREzXT8" },
  { title: "Vijayawada", link: "fertility-centre-in-vijayawada", mapsLink: "https://maps.app.goo.gl/Kar7sb7ZvQkQEwYr5" },
  { title: "Paramakudi", link: "fertility-centre-in-paramakudi", mapsLink: "https://share.google/tC4DtJRrUXxwoxcLs" },
  { title: "Tirupathur", link: "fertility-centre-in-tirupathur", mapsLink: "https://share.google/O7iKqwZMUZByQm9qG" },
  { title: "Tindivanam", link: "fertility-centre-in-tindivanam", mapsLink: "https://share.google/w8fxjpydGnMH3r4qZ" },
  { title: "Nellore", link: "fertility-centre-in-nellore", mapsLink: "https://share.google/g01PmAeLKM2Q5sJpW" },
  { title: "Viluppuram", link: "fertility-centre-in-viluppuram", mapsLink: "https://share.google/RtBPwq6Srm0vycAhE" },
];

/* ─────────────────────────────────────────────────────────────────────────
   StateRow
   One row inside the "Branches" panel (e.g. "Tamil Nadu"). Owns its own
   Floating UI instance for the secondary city flyout, so each row flips
   independently based on how much room is actually left of/right of it —
   no hard-coded left-full / right-full needed anywhere.
   ───────────────────────────────────────────────────────────────────────── */
function StateRow({ state }) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: "right-start",
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(4),
      flip({ fallbackPlacements: ["left-start"] }),
      shift({ padding: 8 }),
      floatingSize({
        apply({ availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(160, Math.min(384, availableHeight - 8))}px`,
          });
        },
        padding: 8,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  // safePolygon keeps the menu open while the cursor travels diagonally
  // through the gap between the trigger and the flyout — a plain
  // onMouseEnter/onMouseLeave pair closes the menu the instant the pointer
  // crosses that gap, which is what was causing the premature close.
  const hover = useHover(context, {
    handleClose: safePolygon({ buffer: 6 }),
    delay: { open: 0, close: 120 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
  ]);

  if (state.name === "Pondicherry") {
    return (
      <div className="px-4 py-2 text-[15px] hover:text-[#FFC65C] cursor-pointer flex justify-between items-center">
        <Link
          href={"/fertility-centre-in-pondicherry"}
          className="px-4 py-2 hover:text-[#FFC65C] cursor-pointer"
        >
          {state.name}
        </Link>
      </div>
    );
  }

  return (
    <div
      ref={refs.setReference}
      className="relative"
      {...getReferenceProps()}
    >
      <div
        tabIndex={0}
        className="px-4 py-2 hover:text-[#FFC65C] cursor-pointer flex justify-between items-center rounded-md outline-none"
      >
        <p className="px-4 py-2 hover:text-[#FFC65C] cursor-pointer">{state.name}</p>
        {state.branches.length > 0 && <IoIosArrowDown className="text-gray-500" />}
      </div>

      {open && state.branches.length > 0 && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-[14px] overflow-y-auto overflow-x-hidden z-10"
        >
          {state.branches.map((branch, branchIndex) => (
            <Link href={branch.link} key={branchIndex}>
              <div className="px-4 py-2 text-[15px] hover:text-[#FFC65C] cursor-pointer">
                {branch.item}
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────
   NavDropdown
   Wraps a single top-level nav item (Treatments / Branches) and owns the
   Floating UI instance for its own panel. Falls back below-left instead of
   below-right if the panel would otherwise overflow the viewport.
   ───────────────────────────────────────────────────────────────────────── */
function NavDropdown({ item }) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open,
    onOpenChange: setOpen,
    middleware: [offset(8), flip(), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    handleClose: safePolygon({ buffer: 6 }),
    delay: { open: 0, close: 120 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
  ]);

  const hasPanel =
    (item.dropdownItems && item.dropdownItems.length > 0) ||
    (item.states && item.states.length > 0);

  return (
    <li className="relative">
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        tabIndex={0}
        className={`flex items-center gap-1 cursor-pointer transition-colors duration-200 py-1 outline-none ${
          open ? "text-[#FFC65C]" : "hover:text-[#FFC65C]"
        }`}
      >
        {typeof item.item === "string" ? (
          <Link href={item.link}>{item.item}</Link>
        ) : (
          item.title
        )}
        {hasPanel && (
          <IoIosArrowDown
            className={`transition-transform duration-300 ${
              open ? "rotate-180 text-[#FFC65C]" : ""
            }`}
          />
        )}
      </div>

      {/* Treatments panel */}
      {item.title === "Treatments" && open && (
        <motion.div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          className="font-medium bg-white text-gray-800 py-4 px-6 min-w-[720px] shadow-lg rounded-[14px] z-10"
        >
          <div className="grid grid-cols-2 gap-x-8 gap-y-2">
            {item.dropdownItems.map((dropdownItem, dropIndex) => (
              <Link href={dropdownItem.link} key={dropIndex}>
                <div className="px-2 py-1 text-[15px] hover:text-[#FFC65C] cursor-pointer">
                  {dropdownItem.item ? dropdownItem.item : "Unknown Item"}
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}

      {/* Branches panel (states -> cities cascade) */}
      {item.title === "Branches" && item.states && open && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
          className="font-medium bg-white text-gray-800 py-2 min-w-[200px] shadow-lg rounded-[14px] z-10"
        >
          {item.states.map((state) => (
            <StateRow key={state.name} state={state} />
          ))}
        </div>
      )}
    </li>
  );
}

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeState, setActiveState] = useState(null); // mobile only now
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navbarColor, setNavbarColor] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  const handleFindUs = () => {
    const currentBranch = branches.find((branch) => pathname.includes(branch.link));
    if (currentBranch) {
      window.open(currentBranch.mapsLink, "_blank");
    } else {
      alert("Branch location not found!");
    }
  };

  const isBranchPage = branches.some((branch) => pathname.includes(branch.link));

  const handleStateClick = (index) => {
    setActiveState(activeState === index ? null : index);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setNavbarColor(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const handleDropdownClick = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const { isNotFound } = useNotFound();

  return (
    <>
      <header
        className={`w-full lg:py-2 font-outfit z-30 fixed top-0 left-0 transition-all duration-300 backdrop-blur-md ${
          pathname === "/" ? "site-header-gradient" : "bg-white/70"
        }`}
      >
        <div className="w-full" id="header">
          <div className="w-full px-4 sm:px-6 lg:px-8 h-full">
            <div>
              <div className="mx-auto">
                <div className="flex items-center justify-between w-full h-16 lg:h-20">
                  {/* Logo */}
                  <div className="w-28 sm:w-32 lg:w-44 flex items-center">
                    <Link href={"/"} className="flex items-center">
                      <Image src={Logodark} alt="Sudha-Logo" className="w-full h-auto" />
                    </Link>
                  </div>

                  <div className="flex items-center gap-3 lg:hidden">
                    <div className="flex items-center">
                      {isBranchPage ? (
                        <div
                          className="flex items-center group cursor-pointer"
                          onClick={handleFindUs}
                        >
                          <IoLocationSharp
                            size={20}
                            className={`group-hover:text-[#FFC65C] "text-[#173366]"`}
                          />
                          <span
                            className={`ml-1 text-sm font-medium group-hover:text-[#FFC65C] ${
                              isNotFound
                                ? "text-[#173366]"
                                : pathname === "/thank-you"
                                ? "text-[#173366]"
                                : navbarColor
                                ? "text-[#173366]"
                                : "text-white"
                            }`}
                          >
                            Find us
                          </span>
                        </div>
                      ) : (
                        <a href="tel:7670076006" className="flex items-center">
                          <div className="px-3 py-1.5 flex items-center justify-center gap-2 rounded-full bg-[#FFC65C] text-[#000]">
                            <span className="ring-pulse">
                              <IoCall />
                            </span>
                            <p className="md:block hidden">Request a call</p>
                          </div>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={toggleMobileMenu}
                      aria-label="Toggle mobile menu"
                      className={`flex items-center justify-center p-2 hover:text-[#FFC65C] transition-colors duration-200 text-[#173366]`}
                    >
                      <Menu size={28} aria-hidden="true" />
                    </button>
                  </div>

                  <div className="w-full hidden lg:flex items-center">
                    <div className="flex-1 flex flex-col my-2">
                      <div className="flex items-center justify-end gap-4 py-2.5">
                        {isBranchPage && (
                          <button
                            onClick={handleFindUs}
                            className="flex items-center gap-1.5 text-sm font-medium text-[#173366] hover:text-[#FFC65C] transition-colors duration-200"
                          >
                            <IoLocationSharp size={15} />
                            Find us
                          </button>
                        )}

                        <Link
                          href="tel:7670076006"
                          className="flex items-center gap-2 text-sm font-medium text-[#173366] hover:text-[#FFC65C] transition-colors duration-200"
                        >
                          <span className="ring-pulse">
                            <BsFillTelephoneInboundFill size={13} />
                          </span>
                          +91 76-7007-6006
                        </Link>
                        <Link
                          href="/#contact-now"
                          className="text-sm font-medium text-[#173366] hover:text-[#FFC65C] transition-colors duration-200"
                        >
                          Book Appointment
                        </Link>

                        <button
                          onClick={() => setIsModalOpen(true)}
                          className="text-sm font-semibold px-4 py-1.5 rounded-full bg-[#FFC65C] text-[#0f2347] hover:bg-[#f0b84a] transition-all duration-200 shadow-sm md:hidden block"
                        >
                          <div className="flex items-center gap-2">
                            <IoCall />
                            <div className="md:block hidden"> Request A Call </div>
                          </div>
                        </button>
                      </div>

                      <div>
                        <div className="py-3">
                          <div>
                            <ul className="flex gap-6 2xl:gap-9 font-medium justify-end text-sm text-[#173366]">
                              {mainNavItems.map((item, index) => (
                                <NavDropdown key={index} item={item} />
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {isModalOpen && (
                      <RequestCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className="relative">
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto pb-9"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
            >
              <div className="container mx-auto py-6">
                <div className="flex justify-between px-4">
                  <div className="w-40">
                    <Link href={"/"}>
                      <Image src={DarkLogo} alt="Sudha-Logo" className="w-full h-auto top-2" />
                    </Link>
                  </div>
                  <div className="flex">
                    <button onClick={toggleMobileMenu} className="text-gray-600 p-2">
                      <IoClose size={24} />
                    </button>
                  </div>
                </div>

                <nav className="mt-3 px-4">
                  {mainNavItems.map((item, index) => (
                    <div key={index} className="border-b border-gray-200">
                      {typeof item.item === "string" ? (
                        <Link
                          href={item.link}
                          className="block py-4 text-gray-800 hover:text-[#FFC65C] text-lg"
                          onClick={toggleMobileMenu}
                        >
                          {item.item}
                        </Link>
                      ) : (
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
                                      <span className="font-semibold text-gray-800">{state.name}</span>
                                    )}
                                    {state.branches.length > 0 && (
                                      <IoIosArrowDown
                                        className={`transition-transform duration-200 ${
                                          activeState === stateIndex ? "rotate-180" : ""
                                        }`}
                                      />
                                    )}
                                  </button>

                                  {activeState === stateIndex && (
                                    <ul className="list-disc ml-4">
                                      {state.branches.map((branch, branchIndex) => (
                                        <Link href={branch.link} key={branchIndex} onClick={toggleMobileMenu}>
                                          <li className="py-1 text-gray-600 hover:text-[#FFC65C]">
                                            {branch.item}
                                          </li>
                                        </Link>
                                      ))}
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

                <div className="relative">
                  <div className="mt-8 gap-0 w-full fixed bottom-0 left-0 flex shadow-[0_-4px_20px_rgba(23,51,102,0.12)]">
                    <Link
                      href="/#contact-now"
                      onClick={toggleMobileMenu}
                      className="w-full py-4 text-center bg-[#173366] text-white font-semibold text-sm border-r border-white/20 hover:bg-[#1e4080] transition-colors"
                    >
                      Book Appointment
                    </Link>
                    <button
                      className="w-full py-4 font-semibold text-sm bg-[#FFC65C] text-[#0f2347] hover:bg-[#f0b84a] transition-colors"
                      onClick={() => setIsModalOpen(true)}
                    >
                      Request A Call
                    </button>
                  </div>
                </div>
                <RequestCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>


    </>
  );
}

export default Navbar;