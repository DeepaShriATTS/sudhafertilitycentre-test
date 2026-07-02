"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
const Modals = dynamic(() => import("./Modal"));
import { FaArrowRight } from "react-icons/fa";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header");
      const footer = document.getElementById("footer");

      const headerHeight = header?.offsetHeight || 0;
      const footerTop = footer?.getBoundingClientRect().top || window.innerHeight;
      const windowHeight = window.innerHeight;
      const scrolledY = window.scrollY;

      const showButton = scrolledY > headerHeight + 400;
      const hideButton = footerTop < windowHeight;

      setIsVisible(showButton && !hideButton);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-opacity duration-300 w-full z-40 block lg:hidden ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 pointer-events-none translate-y-5"
          }`}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="button-all mx-auto"
        >
          Take your free step toward parenthood<FaArrowRight />
        </button>
      </div>

      {isOpen && <Modals isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}
