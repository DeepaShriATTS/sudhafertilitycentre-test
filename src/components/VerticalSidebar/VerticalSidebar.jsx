"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaChevronUp } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Link from "next/link";
import RequestCallModal from "../Header/modal";

// framer-motion removed — scroll-to-top uses CSS @keyframes instead.
// This keeps framer-motion out of the synchronous layout bundle, lowering TBT.

export default function VerticalSidebar() {
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Defer mounting to bypass SSR and protect LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 300);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!mounted) return null;

  return (
    <>
      <aside
        className="vertical-sidebar-container flex"
        role="complementary"
        aria-label="Quick Access Contacts and Navigation"
      >
        {/* Top spacer */}
        <div className="h-10" aria-hidden="true" />

        {/* Action Buttons */}
        <div className="sidebar-actions">
          {/* WhatsApp */}
          <div className="sidebar-item-group">
            <a
              href="https://wa.me/917670076006"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with us on WhatsApp"
              className="sidebar-action-btn whatsapp"
            >
              <FaWhatsapp className="sidebar-icon" />
              <span className="sidebar-pulse-ring" />
            </a>
            <span className="sidebar-tooltip">WhatsApp Us</span>
          </div>

          {/* Call */}
          <div className="sidebar-item-group">
            <a
              href="tel:+917670076006"
              aria-label="Call Helpline"
              className="sidebar-action-btn phone"
            >
              <IoCall className="sidebar-icon phone-icon-anim" />
              <span className="sidebar-pulse-ring phone-pulse" />
            </a>
            <span className="sidebar-tooltip">Call Helpline</span>
          </div>
        </div>

        {/* Scroll to Top — CSS fade-in on mount, no framer-motion */}
        <div className="sidebar-footer">
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="scroll-top-btn sidebar-scroll-top-anim"
            >
              <FaChevronUp />
            </button>
          )}
        </div>
      </aside>

      {isModalOpen && (
        <RequestCallModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
