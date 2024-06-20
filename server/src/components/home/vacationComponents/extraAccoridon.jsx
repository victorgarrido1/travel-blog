import React, { useState } from "react";

const ExtraAccordion = ({ title = "Included Extras", children }) => {
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
          {children || (
            <>
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> 
                Five nights for the price of three (reflected in price, valid for travel 11/1/24-12/19/24 and 1/4/25 - 3/31/25)
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> 
                Daily buffet breakfast
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> 
                Unlimited internet access
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> 
                Special amenity for honeymoon couples (proof of marriage within 12 months of travel date is required at check-in)
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> 
                Welcome lei greeting
              </li>
              <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-11/12 mx-auto my-5" />
              <li className="flex font-bold items-center">
                Exclusive Member Benefit: Additional free amenities
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-circle-check text-green-500 mr-2"></i> 
                Exclusive members receive an annual 2% Reward, up to $1,000 on qualified Travel Lit purchases
              </li>
              <li className="flex items-center pl-5"> 
                <i className="fa-solid fa-circle-check text-green-500 mr-2"></i>
                One resort logo T-shirt and one Tahitian pareo at InterContinental Bora Bora Le Moana Resort (per room, per stay, 3 nights or more, valid for primary cardholder)
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default ExtraAccordion;