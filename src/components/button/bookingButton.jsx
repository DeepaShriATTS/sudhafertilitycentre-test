"use client";

import React from "react";
import { MdArrowOutward } from "react-icons/md";


function BookingButton({ title, link = "", icon, className }) {
  function handleClick(e) {
    e.preventDefault();

    const element = document.getElementById("contact-now");
    if (!element) return; // contact form not yet mounted — safe no-op

    const isMobile = window.innerWidth < 768;
    const headerOffset = isMobile ? 400 : 200;
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - headerOffset,
      behavior: "smooth",
    });
  }

  return (
    <button
      className={`${className} button-all`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`ml-2 transform transition-all duration-500 ${
          icon ? "" : "rotate-45"
        }`}
      >
        {icon || <MdArrowOutward />}
      </span>
    </button>
  );
}

export default BookingButton;
