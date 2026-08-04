"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoCall, IoClose, IoLocationSharp, IoArrowForward } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Logodark from "@/assets/logo-dark.svg";
import DarkLogo from "@/assets/logo-dark.svg";
import Link from "next/link";
import dynamic from "next/dynamic";
const RequestCallModal = dynamic(() => import("./modal"), { ssr: false });
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useNotFound } from "@/context/NotFoundContext";
const NavDropdown = dynamic(() => import("./NavbarDropdown"), { ssr: true });
import { mainNavItems, branches } from "./headerData";
import "./Navbar.css";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeState, setActiveState] = useState(null);
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
    const wasScrolled = { current: navbarColor };
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 80;
        if (isScrolled !== wasScrolled.current) {
          wasScrolled.current = isScrolled;
          setNavbarColor(isScrolled);
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        className={`navx-shell font-outfit ${navbarColor ? "navx-shell--scrolled" : ""}`}
      >
        {/* ── Logo chip ── */}
        <div className="navx-chip navx-chip-logo">
          <Link href={"/"} className="navx-logo-link" aria-label="Sudha Fertility Centre Homepage">
            <Image
              src={Logodark}
              alt="Sudha-Logo"
              className="w-full h-auto"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiLz48L3N2Zz4="
              placeholder="blur"
              priority
            />
          </Link>
        </div>

        {/* ── Center nav chip (desktop only) ── */}
        <nav className="navx-chip navx-chip-nav" aria-label="Primary">
          <ul className="navx-nav-list">
            {mainNavItems.map((item, index) => (
              <NavDropdown key={index} item={item} pathname={pathname} />
            ))}
          </ul>
        </nav>

        {/* ── Actions chip ── */}
        <div className="navx-chip navx-chip-actions">
          {isBranchPage ? (
            <button onClick={handleFindUs} className="navx-utility-link">
              <IoLocationSharp size={15} />
              Find us
            </button>
          ) : (
            <Link href="/#contact-now" className="navx-utility-link">
              Book Appointment
            </Link>
          )}

          <a href="tel:7670076006" className="navx-phone" aria-label="Call Sudha Fertility Centre">
            <span className="ring-pulse">
              <IoCall size={13} />
            </span>
            <strong>+91 76-7007-6006</strong>
          </a>

          <button
            onClick={() => setIsModalOpen(true)}
            aria-label="Request a call back"
            className="navx-cta-pill"
          >
            <span className="hidden sm:inline">Request a Call</span>
            <span className="sm:hidden">Call Us</span>
            <IoArrowForward className="navx-cta-arrow" size={14} />
          </button>

          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            className="navx-mobile-trigger"
          >
            <Menu size={22} aria-hidden="true" />
          </button>
        </div>

        {isModalOpen && (
          <RequestCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        )}
      </header>

      {/* Mobile Menu — CSS-only slide drawer */}
      <div
        className={`mobile-menu-drawer fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto pb-9${isMobileMenuOpen ? ' mobile-menu-drawer--open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
        {...(!isMobileMenuOpen ? { inert: isMobileMenuOpen } : {})}
      >
        <div className="container mx-auto py-6">
          <div className="navx-drawer-header px-4">
            <div className="w-40">
              <Link href={"/"}>
                <Image src={DarkLogo} alt="Sudha-Logo" className="w-full h-auto top-2" />
              </Link>
            </div>
            <button onClick={toggleMobileMenu} className="navx-drawer-close" aria-label="Close menu">
              <IoClose size={20} />
            </button>
          </div>

          <nav className="mt-3 px-4">
            {mainNavItems.map((item, index) => {
              const isActive = typeof item.item === "string" && pathname === item.link;
              return (
                <div
                  key={index}
                  className="navx-drawer-row"
                  style={{ animationDelay: `${index * 60}ms` }}
                >
                  {typeof item.item === "string" ? (
                    <Link
                      href={item.link}
                      className={`navx-drawer-link ${isActive ? "navx-drawer-link--active" : ""}`}
                      onClick={toggleMobileMenu}
                    >
                      {item.item}
                    </Link>
                  ) : (
                    <div>
                      <button
                        className="navx-drawer-link w-full"
                        onClick={() => handleDropdownClick(index)}
                      >
                        <span>{item.title}</span>
                        <IoIosArrowDown
                          className={`transition-transform duration-200 ${
                            activeDropdown === index ? "rotate-180 text-[#E8A33D]" : ""
                          }`}
                        />
                      </button>

                      {item.dropdownItems && activeDropdown === index && (
                        <div className="navx-drawer-sub">
                          {item.dropdownItems.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={subItem.link}
                              className="navx-drawer-sub-link"
                              onClick={toggleMobileMenu}
                            >
                              {subItem.item}
                            </Link>
                          ))}
                        </div>
                      )}

                        {item.states && activeDropdown === index && (
                          <div className="navx-drawer-sub">
                            {item.states.map((state, stateIndex) =>
                              state.name === "Pondicherry" ? (
                                <Link
                                  key={stateIndex}
                                  href={"/fertility-centre-in-pondicherry"}
                                  onClick={toggleMobileMenu}
                                  className="navx-drawer-state-row font-semibold"
                                >
                                  {state.name}
                                </Link>
                              ) : (
                                <div key={stateIndex}>
                                  <button
                                    className="navx-drawer-state-row w-full font-semibold"
                                    onClick={() => handleStateClick(stateIndex)}
                                  >
                                    <span>{state.name}</span>
                                    {state.branches.length > 0 && (
                                      <IoIosArrowDown
                                        size={14}
                                        className={`transition-transform duration-200 flex-shrink-0 ${activeState === stateIndex ? "rotate-180" : ""
                                          }`}
                                      />
                                    )}
                                  </button>

                                  {activeState === stateIndex && (
                                    <ul className="pb-2">
                                      {state.branches.map((branch, branchIndex) => (
                                        <Link href={branch.link} key={branchIndex} onClick={toggleMobileMenu}>
                                          <li className="navx-drawer-sub-link navx-drawer-branch-link">
                                            {branch.item}
                                          </li>
                                        </Link>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        )}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="relative">
            <div className="mt-8 gap-0 w-full fixed bottom-0 left-0 flex shadow-[0_-4px_20px_rgba(20,33,61,0.12)]">
              <Link
                href="/#contact-now"
                onClick={toggleMobileMenu}
                className="w-full py-4 text-center bg-[#14213D] text-white font-semibold text-sm border-r border-white/20 transition-colors"
              >
                Book Appointment
              </Link>
              <button
                className="w-full py-4 font-semibold text-sm bg-[#E8A33D] text-white hover:bg-[#d4922f] transition-colors"
                onClick={() => setIsModalOpen(true)}
              >
                Request A Call
              </button>
            </div>
          </div>
          {isModalOpen && <RequestCallModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />}
        </div>
      </div>
    </>
  );
}

export default Navbar;