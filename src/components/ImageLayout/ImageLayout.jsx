"use cleint";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";


import one from "@/assets/Gallery/1.webp";
import two from "@/assets/Gallery/2.webp";
import three from "@/assets/Gallery/3.webp";
import four from "@/assets/Gallery/4.webp";
import five from "@/assets/Gallery/5.webp";
import six from "@/assets/Gallery/6.webp";
import seven from "@/assets/Gallery/7.webp";
import eight from "@/assets/Gallery/8.webp";
import nine from "@/assets/Gallery/9.webp";
import ten from "@/assets/Gallery/10.webp";
import eleven from "@/assets/Gallery/11.webp";
import twelve from "@/assets/Gallery/12.webp";


const images = [
  { src: one, alt: "Image 1", height: 200 },
  { src: nine, alt: "Image 2", height: 300 },
  { src: three, alt: "Image 3", height: 250 },
  { src: seven, alt: "Image 4", height: 350 },
  { src: four, alt: "Image 5", height: 220 },
  { src: eight, alt: "Image 6", height: 280 },
  { src: six, alt: "Image 7", height: 320 },
  { src: nine, alt: "Image 8", height: 270 },
  { src: ten, alt: "Image 9", height: 260 },
  { src: eleven, alt: "Image 10", height: 290 },
  { src: twelve, alt: "Image 11", height: 330 },
  { src: two, alt: "Image 12", height: 240 },
];



const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

 function ImageLayout() {
  return (
<div className="grid grid-cols-2 md:grid-cols-4 gap-2 p-4 auto-rows-[10px] place-items-start">
  {images.map((img, index) => (
    <motion.div
      key={index}
      variants={imageVariants}
      initial="hidden"
      animate="visible"
      className="rounded-lg overflow-hidden flex"
      style={{ gridRowEnd: `span ${Math.floor(img.height / 13)}` }}
    >
      <Image
        className="rounded-lg object-contain w-full max-h-full "
        src={img.src}
        alt={img.alt}
        width={300}
        height={img.height}
      />
    </motion.div>
  ))}
</div>

  );
}
export default ImageLayout;
