import React from "react";
import "./hero-banner-slider.css";
import HeroBannerActiveSlider from "./HeroBannerActiveSlider";

export default function HeroBannerSlider() {
  return (
    <section className="hero-banner-slider">
      {/* Single thin arc — the page's one structural motif,
          standing in for a cycle. Replaces the blurred-blob canvas. */}
      <div className="hero-arc-motif" aria-hidden="true">
       
      </div>

      <HeroBannerActiveSlider />
    </section>
  );
}