import React from "react";
import "./hero-banner-slider.css";
import HeroBannerActiveSlider from "./HeroBannerActiveSlider";

// Renders the modernized hero section with high-end asymmetric layout
export default function HeroBannerSlider() {
  return (
    <section className="hero-banner-slider">
      <HeroBannerActiveSlider />
    </section>
  );
}