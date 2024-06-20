import React, { useState } from "react";

const VacationAccordion = ({ title = "Vacation Includes", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsVisible(!isVisible); // Toggle the visibility state
  };

  return (
    <div className="w-full bg-neutral-200 dark:bg-neutral-800 p-10 rounded-lg overflow-hidden shadow-md">
      <button
        className="bg-transparent font-bold text-gray-800 dark:text-gray-100 flex justify-between items-center w-full transition duration-300 ease-in-out"
        onClick={toggleListVisibility}
      >
        {title}
        <i className={`fa-solid transition-transform duration-300 ease-in-out ${isVisible ? "fa-arrow-up" : "fa-arrow-down"} text-gray-800 dark:text-gray-100`}></i>
      </button>
      <div
        style={{
          maxHeight: isVisible ? "1000px" : "0", // Adjust max height according to content
          transition: "max-height 0.4s ease-in-out",
        }}
        className="overflow-hidden"
      >
        <ul className="text-gray-800 dark:text-gray-100 mt-5 space-y-3">
          <li className="flex items-center">
            <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
            Round-trip economy class airfare from Los Angeles on Air Tahiti Nui
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
            Round-trip inter-island airfare on Air Tahiti
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
            Transportation to and from the hotel
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
            Five nights in a Lagoon-View OverWater Bungalow
          </li>
          <li className="flex items-center">
            <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
            Airfare and hotel taxes
          </li>
          {children && <li>{children}</li>}
        </ul>
      </div>
    </div>
  );
}

export default VacationAccordion;