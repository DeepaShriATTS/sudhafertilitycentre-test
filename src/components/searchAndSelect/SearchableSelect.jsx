import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Search, X } from "lucide-react";

export default function SearchableSelect({
  options = [],
  value = "",
  onChange,
  placeholder = "Select an option",
  labelKey = "label",
  valueKey = "value",
  error = "",
  theme = "light", // "light" | "dark"
  className = "",
  align = "bottom",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset search query when dropdown closes
  useEffect(() => {
    if (!isOpen) {
      setSearchQuery("");
    }
  }, [isOpen]);

  // Find the selected option's display label
  const selectedOption = options.find((opt) => String(opt[valueKey]) === String(value));
  const displayLabel = selectedOption ? selectedOption[labelKey] : "";

  // Filter options based on search query
  const filteredOptions = options.filter((opt) => {
    const label = opt[labelKey] ? String(opt[labelKey]).toLowerCase() : "";
    return label.includes(searchQuery.toLowerCase());
  });

  const handleSelect = (opt) => {
    onChange(opt[valueKey]);
    setIsOpen(false);
  };

  const triggerClasses = theme === "dark"
    ? `w-full flex items-center justify-between px-3 py-3 bg-[#8894af]/80 text-white rounded-xl cursor-pointer transition-all duration-200 outline-none ${
        error ? "ring-2 ring-red-500" : "focus-within:ring-2 focus-within:ring-blue-500"
      }`
    : `w-full flex items-center justify-between px-3 h-10 bg-white border rounded-lg cursor-pointer transition-all duration-200 outline-none ${
        error 
          ? "border-[#EB3C3C] bg-[#FFF9F9]" 
          : isOpen 
            ? "border-[#1C315E] ring-1 ring-[#1C315E]" 
            : "border-[#B1B2B3] hover:border-neutral-400 focus-within:border-[#1C315E] focus-within:ring-1 focus-within:ring-[#1C315E]"
      }`;

  const textClasses = theme === "dark"
    ? `text-[15px] truncate ${displayLabel ? "text-white" : "text-white/70"}`
    : `text-sm truncate ${displayLabel ? "text-neutral-800" : "text-neutral-400"}`;

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Trigger Button/Input */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={triggerClasses}
      >
        <span className={textClasses}>
          {displayLabel || placeholder}
        </span>
        <div className="flex items-center gap-1">
          {value && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onChange("");
              }}
              className={`p-0.5 rounded-full transition-colors ${
                theme === "dark" ? "text-white/60 hover:bg-white/10 hover:text-white" : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
              }`}
            >
              <X size={14} />
            </button>
          )}
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              theme === "dark" ? "text-white/70" : "text-gray-400"
            } ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className={`absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-hidden flex flex-col ${
          align === "top" ? "bottom-full mb-1" : "mt-1"
        }`}>
          {/* Search Input Bar */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-gray-100 bg-gray-50">
            <Search size={16} className="text-gray-400 shrink-0" />
            <input
              type="text"
              placeholder="Search location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-black outline-none border-none placeholder-gray-400 p-0 focus:ring-0 focus:outline-none"
              onClick={(e) => e.stopPropagation()}
              autoFocus
            />
          </div>

          {/* Options List */}
          <div className="overflow-y-auto flex-1 max-h-48 text-black">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((opt, index) => {
                const isSelected = String(opt[valueKey]) === String(value);
                return (
                  <div
                    key={index}
                    onClick={() => handleSelect(opt)}
                    className={`px-4 py-2.5 text-sm cursor-pointer hover:bg-blue-50 transition-colors flex items-center justify-between ${
                      isSelected ? "bg-blue-50 font-medium text-blue-600" : "text-gray-700"
                    }`}
                  >
                    <span>{opt[labelKey]}</span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No matching locations found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
