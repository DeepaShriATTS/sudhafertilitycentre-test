import whatsapp from "@/assets/floatIcons/whatsapp.svg"
import phone from "@/assets/floatIcons/phone.svg"
import Image from "next/image";
import ProfileButton from "./button/profileButton";

const FloatingIcons = () => {
  return (
    <div className="fixed top- right-5 flex flex-col space-y-3 z-40 ">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917670076006"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-20 h-14   rounded-full  hover:scale-105 transition-transform"
      >
        <Image src={whatsapp} alt="whatsapp"/>
      </a>

      {/* Phone Call Button */}
      <a
        href="tel:+917670076006"
        className="flex items-center justify-center w-20 h-14   rounded-full  hover:scale-105 transition-transform"
      >
        <Image src={phone} alt="Phone" />
      </a>
        <ProfileButton />
    </div>
  );
};

export default FloatingIcons;
