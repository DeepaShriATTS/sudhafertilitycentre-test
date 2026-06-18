import { useState } from "react";

import News1 from "../assets/news/N1.webp";
import News2 from "../assets/news/N2.webp";
import News3 from "../assets/news/N3.webp";
import News4 from "../assets/news/N4.webp";
import News5 from "../assets/news/N5.webp";
import News6 from "../assets/news/N6.webp";
import Event1 from "../assets/news/E1.webp";
import Event2 from "../assets/news/E2.webp";
import Event3 from "../assets/news/E3.webp";
import Event4 from "../assets/news/E4.webp";
import Event5 from "../assets/news/E5.webp";
import Event6 from "../assets/news/E6.webp";
import Image from "next/image";

const newsData = [
  {
    id: 1,
    description:
      "Dr.S.Dhanabagyam with Dr.Gaik, Author & Writer FERTILITY & STERILITY JOURNAL in Conference on Andorolgy held at Combodia in 2015",
    image: News1,
  },
  {
    id: 2,
    description:
      "Dr.S.Dhanabagyam with Dr.BOB EDWARDS ( LONDON) Creator of First Test Tube Baby in the World & Dr.Pandiyan ( Chennai) in CMC Vellore – 2001",
    image: News2,
  },
  {
    id: 3,
    description: "First TESA – ICSI Twins",
    image: News3,
  },
  {
    id: 4,
    description:
      "Dr.S.Dhanabagyam receiving “Saathanaiyaalar” Viruthu 2003 ( Best Achievement Award 2003) At Chennai Kongu Nanbarkal Sangam",
    image: News4,
  },
  {
    id: 5,
    description:
      "55 state IMA – Best Test Tube Baby Centre Award held at Erode, 2005",
    image: News5,
  },
  {
    id: 6,
    description: "Best Woman award on Women's day 2007",
    image: News6,
  },
  // Add more items as needed
];
const EventData = [
  {
    id: 1,
    description:
      "Dr. S.Dhanabagyam presenting a topic in Vienna 2014",
    image: Event1,
  },
  {
    id: 2,
    description:
      "Dr. S.Pradeepa with legends of IVF",
    image: Event2,
  },
  {
    id: 3,
    description: "The inaugural ceremony of Erofert2018 Laparoscopic live workshop",
    image: Event3,
  },
  {
    id: 4,
    description:
      "Dr.S. Pradeepa and team ART Live Workshop from Sudha IVF Lab",
    image: Event4,
  },
  {
    id: 5,
    description:
      "Dr. S.Pradeepa in Erofert 2018 live workshop & Conference",
    image: Event5,
  },
  {
    id: 6,
    description: "Dr.S. Dhanabagyam felicitating Dr. Kamalaselvaraj with life time achievement award",
    image: Event6,
  },
  {
    id: 7,
    description: "The deligates in 3D Laparoscopic live workshop",
    image: Event6,
  },
  {
    id: 8,
    description: "The deligates in ECOT 2019 Conference",
    image: Event6,
  },
  // Add more items as needed
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("news");

  return (
    <div className=" mx-auto mt-10 ">
      {/* Tab Container */}
      <div className=" flex items-center justify-center">
        <div className="max-w-md flex items-center justify-center bg-blue-50 p-3 rounded-full shadow-md gap-8">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-6 py-2 text-sm font-medium rounded-full w-36 ${
              activeTab === "news"
                ? "bg-blue-800 text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            News
          </button>

          <button
            onClick={() => setActiveTab("events")}
            className={`px-6 py-2 text-sm font-medium rounded-full w-36 ${
              activeTab === "events"
                ? "bg-blue-800 text-white"
                : "text-black hover:bg-gray-200"
            }`}
          >
            Events
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="mt-6">
        {activeTab === "news" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {newsData.map((news) => (
                <div
                  key={news.id}
                  className="p-4 bg-white rounded-lg text-center"
                >
                  <Image
                    src={news.image}
                    alt={news.description}
                    className="rounded-md mb-3 mx-auto"
                  />
                  <p className="text-gray-600">{news.description}</p>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === "events" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
              {EventData.map((event) => (
                <div
                  key={event.id}
                  className="p-4 bg-white rounded-lg text-center"
                >
                  <Image
                    src={event.image}
                    alt={event.description}
                    className="rounded-md mb-3 mx-auto"
                  />
                  <p className="text-gray-600">{event.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
