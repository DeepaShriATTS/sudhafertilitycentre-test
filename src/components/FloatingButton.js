"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
const Modals = dynamic(() => import("./Modal"));
import { FaArrowRight } from "react-icons/fa";

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isFooterVisibleRef = useRef(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    let observer;

    if (footer) {
      observer = new IntersectionObserver(
        ([entry]) => {
          isFooterVisibleRef.current = entry.isIntersecting;
          const scrolledY = window.scrollY;
          const showButton = scrolledY > 500;
          setIsVisible(showButton && !isFooterVisibleRef.current);
        },
        { root: null, threshold: 0 }
      );
      observer.observe(footer);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolledY = window.scrollY;
          const showButton = scrolledY > 500;
          setIsVisible(showButton && !isFooterVisibleRef.current);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (observer && footer) {
        observer.unobserve(footer);
      }
      window.removeEventListener("scroll", handleScroll);
    };
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
          Schedule My Free Fertility Check<FaArrowRight />
        </button>
      </div>

      {isOpen && <Modals isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </>
  );
}

