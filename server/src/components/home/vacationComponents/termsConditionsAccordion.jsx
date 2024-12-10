import React, { useState } from "react";

const TermsConditions = ({ title = "Terms & Conditions", children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleListVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="w-full bg-neutral-200 dark:bg-neutral-800 p-10 rounded-lg overflow-hidden">
      <button
        className="bg-transparent font-bold text-gray-800 dark:text-gray-100 flex justify-between items-center w-full transition duration-300 ease-in-out"
        onClick={toggleListVisibility} // Fixed typo here
      >
        {title}
        <i
          className={`fa-solid transition-transform duration-300 ease-in-out ${isVisible ? "fa-arrow-up" : "fa-arrow-down"
            }`}
        ></i>
      </button>
      <div
        style={{
          maxHeight: isVisible ? "1000px" : "0", // Adjust the max height according to the content
          transition: "max-height 0.4s ease-in-out", // Added missing 's' for seconds
        }}
        className="overflow-hidden"
      >
        <hr className="border-t border-gray-300 dark:border-gray-600 w-11/12 mx-auto my-5" />

        <ul className="text-gray-800 dark:text-gray-100 mt-5 space-y-3">
          {children || (
            <>
              <li>
                <p className="text-sm">
                  Travel Lit Lounge recommends purchasing travel insurance as an
                  affordable way to protect your travel investment. Click on
                  "Travel Insurance" below to view complete insurance
                  information. Unless otherwise stated, prices are per person,
                  in U.S. dollars, and based on double occupancy. Prices are
                  subject to change due to airfare and flight availability
                  and/or currency fluctuation. Fees for checked baggage may
                  apply and vary by airline. For complete information, please
                  visit the airline's website.
                </p>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default TermsConditions;