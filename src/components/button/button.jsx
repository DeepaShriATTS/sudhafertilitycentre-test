import Link from 'next/link';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Button({ title, link = "", icon }) {
  return (
    <Link href={link} className="button-all inline-flex items-center justify-center">
      <span className="wave-text">
        {title.split("").map((char, index) => (
          <span key={index} className="wave-letter">
            {char}
          </span>
        ))}
      </span>
      <span className={`ml-2 transform transition-all duration-500 ${icon ? '' : 'rotate-45'}`}>
        {icon || <MdArrowOutward size={18} />}
      </span>
    </Link>
  );
}

export default Button;
