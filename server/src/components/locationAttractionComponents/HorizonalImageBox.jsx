import React from "react";

// The HorizontalImageBox component accepts three props: image, title, and link
const HorizontalImageBox = ({ image, title, link }) => {
  return (
    <div
      // The main container with classes for styling and transitions
      className="relative bg-cover bg-center rounded-lg shadow-lg overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-105 w-56 h-32 m-2"
    >
      {/* Background image */}
      <div
        // Styling the background with the provided image URL
        className="w-full h-full bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Overlay */}
      <div
        // Adding a semi-transparent black overlay on top of the image
        className="absolute inset-0 bg-black opacity-50"
      ></div>
      {/* Text Overlay */}
      <div
        // Centering the text in the middle of the image box
        className="absolute inset-0 flex items-center justify-center"
      >
        {/* Link with the provided title text */}
        <a
          href={link} // Link to the provided URL
          className="text-white text-lg font-bold uppercase" // Styling the text
        >
          {title} {/* Display the provided title */}
        </a>
      </div>
    </div>
  );
};

export default HorizontalImageBox;
