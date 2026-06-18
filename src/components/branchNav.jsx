import React, { useEffect, useState } from "react";

function Navbar({ sections }) {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    let ticking = false; // Prevents excessive function calls

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const middleScreen = window.innerHeight / 3; // Adjusted for better accuracy

          sections.forEach((section) => {
            const element = document.getElementById(section.id);
            if (element) {
              const rect = element.getBoundingClientRect();

              if (rect.top <= middleScreen && rect.bottom >= middleScreen) {
                setActiveSection(section.id);
              }
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (e, id) => {
    e.preventDefault();
  
    // Determine the header offset based on screen width
    const isMobile = window.innerWidth < 768; // Example breakpoint for mobile
    const headerOffset = isMobile ? 400 : 200; // Adjust these values as needed
  
    const element = document.getElementById(id);
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="hidden w-full bg-white max-h-screen  z-10 md:block sticky top-[80px] md:top-[144px] lg:top-[120px] xl:top-[120px]
">
    <ul className="flex flex-wrap  gap-2 justify-between height-20 items-center md:space-x-6  font-medium border-b-2 border-gray-400">
      {sections.map((section) => (
        <li key={section.id} className="my-2 md:my-0 w-full md:w-auto text-center">
          <a
            href={`#${section.id}`}
            onClick={(e) => handleClick(e, section.id)}
            className={`hover:text-[#173366] text-nowrap smooth-scroll transition-colors duration-300 ${
              activeSection === section.id ? 'text-[#173366] font-semibold' : 'text-gray-600'
            }`}
          >
            {section.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
  );
}

export default Navbar;
