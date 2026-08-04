import React from "react";
import Link from "next/link";

const Button = ({ text, onClick, icon, type = "button", styleClass = "", link }) => {
  return link ? (
    <Link href={link} className={` ${styleClass} button-all inline-flex items-center justify-center`}>
      {text} {icon}
    </Link>
  ) : (
    <button className={` ${styleClass} button-all flex items-center`} type={type} onClick={onClick}>
      {text} {icon}
    </button>
  );
};

export default Button;
