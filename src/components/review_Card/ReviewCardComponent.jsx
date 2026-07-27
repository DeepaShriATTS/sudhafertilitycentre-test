import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function ReviewCard({ item }) {
  if (!item) return null;
  
  return (
    <div
      className="bg-white rounded-[20px] shadow-[0px_4px_30px_0px_rgba(0,0,0,0.06)] relative flex flex-col justify-between hover:shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] transition-shadow-[0px_4px_30px_0px_rgba(0,0,0,0.08)] duration-300"
      style={{
        width: "clamp(240px, 82vw, 334px)",
        height: "clamp(270px, 78vw, 334px)",
        padding: "clamp(18px, 5vw, 30px)",
      }}
    >
      {/* Rating and Google logo section */}
      <div className="flex justify-between items-center mb-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-[#FFC65C]" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <FcGoogle size={28} />
      </div>

      {/* Quote section */}
      <p className="text-sm text-gray-700 line-clamp-5 flex-grow leading-relaxed">
        {item.quote}
      </p>

      {/* Account details section */}
      <div className="flex items-center gap-2 mt-4">
        <div className="w-8 h-8 rounded-full bg-[#E8F0FE] flex items-center justify-center text-[#1A73E8] font-medium shrink-0">
          {item.name ? item.name[0] : ""}
        </div>
        <span className="text-sm font-medium truncate">{item.name}</span>
      </div>
    </div>
  );
}
