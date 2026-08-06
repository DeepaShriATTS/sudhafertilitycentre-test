import React, { useState } from "react";
import Kandaswamy from "@/assets/About/kandaswamy.webp";
import Dhanabagyam from "@/assets/About/dhanabagyam.webp";
import Sudhakar from "@/assets/About/sudhakar.webp";
import Pradeepa from "@/assets/About/pradeepa.webp";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const managementData = [
  {
    id: 1,
    name: "Dr. Kandaswamy",
    role: "Chairman, Sudha Hospitals Pvt ltd",
    course: "MD., DTCD., MIL (Preventive Cardiology) ",
    description: "",
    image: Kandaswamy,
    website:""
  },
  {
    id: 2,
    name: "Dr. S. Dhanabagyam ",
    role: "President, Sudha Hospitals Pvt ltd ",
    course: "MD, O&G, ART ",
    description:
      "",
    image: Dhanabagyam,
    website:""
  },
  {
    id: 3,
    name: "Dr. Sudhakar",
    role: "Managing Director, Sudha Hospitals Pvt ltd ",
    course: "MD., DNB (Cardiology) ",
    description:"",
    image: Sudhakar,
    website:"https://dr-sudhakar.com/"
  },

  {
    id: 4,
    name: "Dr.S.Pradeepa Sudhakar.,",
    role: "Vice President, Sudha Hospitals Pvt ltd",
    course: "DGO, DNB (OG), MNAMS, FICOG Senior Consultant IVF & ART Specialist ",
    description:"",
    image: Pradeepa,
    website: "https://drpradeepa.com/",
  },
];

const ManagementCards = () => {


  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 mt-[40px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {managementData.map((member) => (
          <div
            key={member.id}
            className="bg-white rounded-lg overflow-hidden transform transition-all duration-300 "
          >
            <div className="group">
              <div className="relative w-full aspect-square mb-3 sm:mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="rounded-lg object-cover w-full"
                  
                />
              </div>
              <div className="space-y-2 pt-3 pb-3 pr-3">
                <h3 className="font-outfit font-semibold text-base sm:text-lg line-clamp-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                  {member.role}
                </p>
                <p className="text-sm sm:text-base text-gray-600 line-clamp-2">
                  {member.course}
                </p>
                {member.website && (
                  <div className="  transition-opacity duration-300">
                    <Link
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-semibold flex gap-2 text-blue-900 hover:underline"
                    >
                      Connect with Us <MdArrowOutward size={18} className="rotate-45" />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
};

export default ManagementCards;
