import React from "react";

function Card({ title, content }) {
  return (
    <div className="p-6 bg-white rounded-xl transform border-2 border-gray-100 transition-transform duration-300 hover:scale-105">
      <h4 className=" font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-md">{content}</p>
    </div>
  );
}

export default Card;
