import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Tab2024 from "../../assets/About/2024.webp";
import Tab2023 from "../../assets/About/2024.webp";
import Tab2022 from "../../assets/About/2024.webp";
import Tab2021 from "../../assets/About/2024.webp";
import Tab2020 from "../../assets/About/2024.webp";
import Tab2019 from "../../assets/About/2024.webp";
import Tab2018 from "../../assets/About/2024.webp";
import Tab2015 from "../../assets/About/2024.webp";
import Tab2011 from "../../assets/About/2024.webp";
import Tab1985 from "../../assets/About/2024.webp";
const timelineData = [
  {
    year: "1985",
    title: "",
    description: (
      <>
        1985 - The journey of Sudha Hospitals began at Erode as a humble 20-bed
        medical unit for the people.

      </>
    ),
    img: Tab1985,
  },
  {
    year: "1995",
    title: "",
    description: (
      <>
       
        1995 - The Sudha Women and Child Care Centre was launched in Erode.
      </>
    ),
    img: Tab1985,
  },
  {
    year: "2011",
    title: "",
    description:
      "2011 - Sudha Women Care and Fertility Centre was inaugurated at Coimbatore ",
    img: Tab2011,
  },
  {
    year: "2015 ",
    title: "",
    description:
      "2015 - Sudha Medical Centre was launched in Colombo, Sri Lanka. ",
    img: Tab2015,
  },
  {
    year: "2018",
    title: "",
    description:
      "2018 - Sudha Women Care and Fertility Centre was inaugurated in Salem. ",
    img: Tab2018,
  },
  {
    year: "2019",
    title: "",
    description:
      "2019 - Sudha Women Care and Fertility Centre was inaugurated in Chennai. ",
    img: Tab2019,
  },
  {
    year: "2020",
    title: "",
    description:
      "2020 - Sudha Women Care and Fertility Centre was inaugurated in Madurai and Trichy.",
    img: Tab2020,
  },
  {
    year: "2021",
    title: "",
    description:
      "2021 - Launch of many new fully equipped branches at Bangalore, Hyderabad and Theni.",
    img: Tab2021,
  },
  {
    year: "2022",
    title: "",
    description:
      "2022 - Launch of further branches at Vellore, Pondicherry, Thanjavur, Tirupur, Krishnagiri. ",
    img: Tab2022,
  },
  // {
  //   year: "2023",
  //   title: "",
  //   description:
  //     "2023 - Sudha Women Care and Fertility Centre was inaugurated at Karur, Attapur, Ambattur, Tirunelveli, Dindigul, and Vijayawada.",
  //   img: Tab2023,
  // },
  {
    year: "2024",
    title: "",
    description:
      "2024 - Sudha Woman Care and Fertility Centre was inaugurated at Thiruvannamalai, Nagercoil and Ramanathapuram. ",
    img: Tab2024,
  },
];

const TimelineTabs = () => {
  const [selectedYear, setSelectedYear] = useState("2024");
  const [scrollPosition, setScrollPosition] = useState(0);
  const timelineContainerRef = useRef(null);

  useEffect(() => {
    const timelineContainer = timelineContainerRef.current;
    if (timelineContainer) {
      const containerWidth = timelineContainer.offsetWidth;
      const scrollWidth = timelineContainer.scrollWidth;
      setScrollPosition(timelineContainer.scrollLeft);
    }
  }, [selectedYear]);

  const handleScroll = (direction) => {
    const timelineContainer = timelineContainerRef.current;
    const scrollAmount = 200;
    if (direction === "left") {
      timelineContainer.scrollLeft -= scrollAmount;
    } else {
      timelineContainer.scrollLeft += scrollAmount;
    }
    setScrollPosition(timelineContainer.scrollLeft);
  };

  const shouldShowScrollButtons = () => {
    const timelineContainer = timelineContainerRef.current;
    if (timelineContainer) {
      const containerWidth = timelineContainer.offsetWidth;
      const scrollWidth = timelineContainer.scrollWidth;
      return scrollWidth > containerWidth;
    }
    return false;
  };

  return (
    <div className="w-full relative">
      {/* Image section */}
      <div className="mb-8">
        <Image
          src={timelineData.find((item) => item.year === selectedYear).img}
          alt={timelineData.find((item) => item.year === selectedYear).title}
          className="w-full  object-cover lg:h-96"
          width={1920}
          height={1080}
        />
      </div>

      {/* Content section */}
      <div className="mt-8 text-center">
        {timelineData.find((item) => item.year === selectedYear) && (
          <div className="space-y-2">
            <h3 className="font-outfit font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-3xl">
              {timelineData.find((item) => item.year === selectedYear).title}
            </h3>
            <p className="text-gray-600">
              {
                timelineData.find((item) => item.year === selectedYear)
                  .description
              }
            </p>
          </div>
        )}
      </div>

      <div
        ref={timelineContainerRef}
        id="timeline-container"
        className="overflow-y-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:flex gap-4 py-4 px-4 max-h-[500px] scroll-smooth no-scrollbar"
      >
        {timelineData.map((item) => (
          <button
            key={item.year}
            onClick={() => setSelectedYear(item.year)}
            className={`w-full px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedYear === item.year
                ? "bg-blue-900 text-white"
                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
            }`}
          >
            {item.year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimelineTabs;
