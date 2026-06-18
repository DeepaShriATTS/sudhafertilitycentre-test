"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utility"; // or replace with your own logic
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { IoCall, IoLocationSharp } from "react-icons/io5";

const BranchTabs = ({ tabs }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedContent = tabs[selectedTab].content;

  const renderCard = (content) => (
    <div
      className="p-6 bg-white rounded-3xl shadow-sm border border-gray-200 flex flex-col justify-between"
      key={content.heading || content.name}
    >
      <div>
        <h3 className="text-[#173366] font-semibold text-lg">
          {content.branchLink ? (
            <Link href={content.branchLink}>
              {content.heading || content.name}
            </Link>
          ) : (
            content.heading || content.name
          )}
        </h3>
        <p className="text-gray-600 mt-2 text-sm">
          {content.description || content.address}
        </p>
      </div>

      {/* Actions */}
      <div className="mt-4 flex justify-between items-center text-sm">
        <Link
          href={content.link}
          className="text-blue-900 hover:underline flex items-center gap-1 font-semibold"
        >
          <IoLocationSharp /> Get Direction{" "}
         
        </Link>
        <a
          href={`tel:+91${content.phone}` }
          className="text-blue-900 hover:underline flex items-center gap-1 font-semibold"
        >
          <IoCall className="text-xl  size-4 sm:size-3 xl:size-4 lg:size-4" />
          +91 {content.phone}
        
        </a>
      </div>
    </div>
  );

  return (
    <div className="relative xl:bg-[#EBF2FE] rounded-2xl">
      <div className="max-w-7xl mx-auto p-2 xl:p-6 font-outfit">
        {/* Tabs */}
        <div className="flex flex-col lg:w-[75%]  md:flex-row justify-center overflow-x-auto no-scrollbar p-3 xl:pt-3 lg:pb-3 pb-7 pt-7 mb-8 bg-[#EBF2FE] xl:bg-white rounded-xl xl:rounded-full gap-2 mx-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(index)}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 lg:gap-3 group whitespace-nowrap",
                index === selectedTab
                  ? "bg-[#173366] text-white"
                  : "text-[#000] hover:bg-[#173366] hover:text-white"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="bg-[#EBF2FE] xl:bg-transparent rounded-3xl p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedContent.children?.length > 0
              ? selectedContent.children.map((child, idx) => renderCard(child))
              : renderCard(selectedContent)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchTabs;
