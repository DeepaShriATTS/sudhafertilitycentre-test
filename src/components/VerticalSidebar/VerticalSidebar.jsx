"use client";
import React, { useState, useEffect } from "react";
import { FaWhatsapp, FaCalendarAlt, FaChevronUp } from "react-icons/fa";
import { IoCall, IoLocationSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import RequestCallModal from "../Header/modal";

export default function VerticalSidebar() {
  const [mounted, setMounted] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();

  // Defer mounting to completely bypass SSR and protect initial page LCP
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 300); // 300ms delay to feel immediate while still deferring LCP load

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
        {/* Top spacer to center actions in space-between layout */}
        <div className="h-10" aria-hidden="true" />
      
        {/* Action Buttons Group */}
        <div className="sidebar-actions">
          {/* WhatsApp Action */}
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

          {/* Call Action */}
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

        {/* Bottom Actions (Scroll to Top) */}
        <div className="sidebar-footer">
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                onClick={scrollToTop}
                aria-label="Scroll to top"
                className="scroll-top-btn"
              >
                <FaChevronUp />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </aside>

      {/* Request Call Modal Portal */}
      {isModalOpen && (
        <RequestCallModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}
