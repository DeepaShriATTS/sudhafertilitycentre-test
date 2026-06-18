"use client";

import { cn, cns } from "@/lib/utility";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const MarqueeComponent = ({
  items,
  direction = "right",
  speed = "fast",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"; // Adjusted durations
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
    ref={containerRef}
    className={cns(
      "scroller relative z-20 w-full overflow-hidden",
      className
    )}
  >
    <ul
      ref={scrollerRef}
      className={cns(
        "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
        start && "animate-scroll",
        pauseOnHover && "hover:[animation-play-state:paused]"
      )}
    >
      {items.map((item, idx) => (
        <li
          className=" max-w-full relative rounded-2xl flex-shrink-0 md:w-[350px]" // Reduced width
          key={`${item.name}-${idx}`} // Ensure unique key
        >
          <blockquote>
            <Image
              src={item}
              alt="gallery"
              className="rounded-[16px] responsive-image"
              layout="responsive"
              width={250} // Reduced image width
              height={200} // Reduced image height
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 250px" // Adjusted sizes
            />
          </blockquote>
        </li>
      ))}
    </ul>
  </div>
  
  );
};