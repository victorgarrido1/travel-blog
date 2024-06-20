import React, { useState } from "react";

const Tahiti = ({ title = "Air Tahiti Nui Includes", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full bg-neutral-200 dark:bg-neutral-800 p-10 rounded-lg overflow-hidden shadow-md">
      <button
        className="bg-transparent font-bold text-gray-800 dark:text-gray-100 flex justify-between items-center w-full transition duration-300 ease-in-out"
        onClick={toggleListVisibility}
      >
        {title}
        <i
          className={`fa-solid transition-transform duration-300 ease-in-out ${
            isVisible ? "fa-arrow-up" : "fa-arrow-down"
          } text-gray-800 dark:text-gray-100`}
        ></i>
      </button>
      {isVisible && (
        <div
          style={{
            maxHeight: isVisible ? "1000px" : "0",
            transition: "max-height 0.4s ease-in-out",
          }}
          className="overflow-hidden"
        >
          <ul className="text-gray-800 dark:text-gray-100 mt-5 space-y-3">
            <li className="flex items-center">
              <i className="fa-solid fa-circle-check mr-2 text-green-500"></i>
              All-inclusive round-trip airfare on Air Tahiti Nui includes one free checked bag, inflight entertainment, a choice of meals and alcoholic beverages, a pillow, a blanket, and an amenity kit at every seat, at no additional cost.
            </li>
            {children && <li>{children}</li>}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Tahiti;
