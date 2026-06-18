"use client"
import Image from 'next/image';
import React from 'react';
import Founder from "@/assets/Home/Founder.webp";
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Link from 'next/link';

const ProfileButton = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="inline-flex items-center bg-[#173366] rounded-full px-3 py-2 max-w-xs bottom-0 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={'https://www.youtube.com/watch?v=E6aWzjaivps&t=3s'} target="_blank" rel="noopener noreferrer" >
      <div className="flex items-center gap-3 relative">
        <motion.div 
          className="w-12 h-12 rounded-full overflow-hidden relative"
          animate={{
            x: isHovered ? '370%' : '0%'
          }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={Founder} 
            alt="Founder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Play className="w-6 h-6 text-white" fill="white" />
          </div>
        </motion.div>
        <motion.div 
          className="text-white"
          animate={{
            x: isHovered ? '-32%' : '0%'
          }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="font-semibold text-lg">Dr.S. Dhanabagyam</h4>
          <p className="text-sm text-gray-300">Founder</p>
        </motion.div>
      </div>
      </Link>
    </div>
  );
};

export default ProfileButton;