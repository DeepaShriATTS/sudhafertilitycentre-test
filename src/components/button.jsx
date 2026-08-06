import React from "react";
import Link from "next/link";

const Button = ({ text, onClick, icon, type = "button", styleClass = "", link }) => {
  return link ? (
    <Link href={link} passHref>
      <button className={` ${styleClass} button-all flex items-center`}>
        {text} {icon}
      </button>
    </Link>
  ) : (
    <button className={` ${styleClass} button-all flex items-center`} type={type} onClick={onClick}>
      {text} {icon}
    </button>
  );
};

export default Button;
