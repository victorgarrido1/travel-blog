import React, { useState } from "react";

const Tahiti = ({ title = "Air Tahiti Nui Includes", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsVisible(!isVisible); // Toggle list visibility state
  };

  return (
    <div className="w-full bg-neutral-200 p-10 rounded-lg overflow-hidden">
      <button
        className="bg-transparent font-bold text-gray-800 dark:text-light-text flex justify-between items-center w-full transition duration-300 ease-in-out"
        onClick={toggleListVisibility}
      >
        {title}
        <i
          className={`fa-solid transition-transform duration-300 ease-in-out ${
            isVisible ? "fa-arrow-up" : "fa-arrow-down"
          }`}
        ></i>
      </button>
      {isVisible && ( // Conditionally render this section based on isVisible
        <div
          style={{
            maxHeight: isVisible ? "1000px" : "0",
            transition: "max-height 0.4s ease-in-out", // Added 's' to the duration value
          }}
          className="overflow-hidden"
        >
          <ul className="text-gray-800 dark:text-light-text mt-5 space-y-3">
            <li className="flex items-center">
              <i className="fa-solid mr-2"></i>
              All-inclusive round-trip airfare on Air Tahiti Nui includes one free checked bag, inflight entertainment, a choice of meals and alcoholic beverages, a pillow, a blanket, and an amenity kit at every seat, at no additional cost.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tahiti;