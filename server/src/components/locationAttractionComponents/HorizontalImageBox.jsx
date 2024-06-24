import React from "react";

// The HorizontalImageBox component accepts three props: image, title, and link
const HorizontalImageBox = ({ image, title, link }) => {
  return (
    <div
      className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-105 w-56 h-32 m-2"
    >
      {/* Background image */}
      <div
        className="w-full h-full bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      {/* Text Overlay */}
      <div
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Link with the provided title text */}
        <a
          href={link} // Link to the provided URL
          className="text-white text-lg font-bold uppercase"
        >
          {title}
        </a>
      </div>
    </div>
  );
};

export default HorizontalImageBox;
