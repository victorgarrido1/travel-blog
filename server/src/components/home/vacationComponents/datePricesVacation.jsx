import React from "react";

const AvailableDates = () => {
  const datePrices = [
    {
      period: "Through 6/20/24",
      nights: 5,
      airport: "LAX",
      price: "Call for Price",
    },
    {
      period: "7/1/24 - 10/31/24",
      nights: 5,
      airport: "LAX",
      price: "From $5,309*",
    },
    {
      period: "11/1/24 - 12/19/24",
      nights: 5,
      airport: "LAX",
      price: "From $3,419*",
    },
    {
      period: "12/20/24 - 1/3/25",
      nights: 5,
      airport: "LAX",
      price: "Call for Price",
    },
    {
      period: "1/4/24 - 1/25/25",
      nights: 5,
      airport: "LAX",
      price: "From $3,542*",
    },
  ];

  return (
    <div className="p-6 bg-neutral-200 dark:bg-neutral-800 shadow-md rounded-lg my-6">
      <h2 className="text-2xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
        Available Dates & Prices
      </h2>
      <table className="w-full border-collapse border border-gray-200 dark:border-gray-600">
        <thead>
          <tr className="bg-blue-600 dark:bg-blue-900 text-white dark:text-gray-100">
            <th className="p-4 border border-gray-300 dark:border-gray-700">
              Period
            </th>
            <th className="p-4 border border-gray-300 dark:border-gray-700">
              Nights
            </th>
            <th className="p-4 border border-gray-300 dark:border-gray-700">
              Airport
            </th>
            <th className="p-4 border border-gray-300 dark:border-gray-700">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {datePrices.map((item, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0
                  ? "bg-gray-50 dark:bg-gray-700"
                  : "bg-gray-100 dark:bg-gray-800"
              }`}
            >
              <td className="p-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                {item.period}
              </td>
              <td className="p-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                {item.nights}
              </td>
              <td className="p-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                {item.airport}
              </td>
              <td className="p-4 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100">
                {/* Check if the price contains the word 'From' */}
                {item.price.includes("From") ? (
                  <>
                    {/* Display 'From' in a smaller, grayer text above the price */}
                    <span className="block text-sm text-gray-600 dark:text-gray-300">
                      From
                    </span>
                    {/* Display the price without the 'From' part */}
                    {/* The following code renders the price value when it includes 'From' in its string. 
    - 'replace("From", "")' removes the 'From' text from the price string.
    - 'trim()' removes any leading or trailing whitespace that may remain after the replacement.
  */}
                    {/* To understand this, in victors terms.. it searches, if it has the FROM text, it can be left, with the question mark, if there is no FROM, then it essentially will leave it blank */}

                    <span className="block text-2xl text-blue-600 dark:text-blue-400">
                      {item.price.replace("From", "").trim()}
                    </span>
                  </>
                ) : (
                  /* If 'From' is not included, just display the price directly */
                  <span className="block text-2xl text-blue-600 dark:text-blue-400">
                    {item.price}
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="text-xs text-gray-700 dark:text-gray-300 mt-4">
        Please note that Air Tahiti Nui offers service on select days of the
        week. Other room categories and lengths of stay are available. The
        vacation shown is based on availability. The price and inclusions will
        vary based on the selected travel dates.
      </p>
      <div className="rep-6">
 
        <div className="flex justify-end items-center">
          {/* Button for mobile devices */}
          <button className="flex md:hidden justify-center items-center space-x-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded">
            <i className="fa-solid fa-phone text-xl text-red-600 dark:text-red-500"></i>
            <span
              className="text-xl text-white py-2 px-2"
              aria-label="Call to book phone number"
            >
              Call to Book 1-866-922-7925
            </span>
          </button>
          {/* Text link for larger screens */}
          <div className="hidden md:flex items-center space-x-2 py-3 px-1">
            <i className="fa-solid fa-phone text-xl text-red-600 dark:text-red-500"></i>
            <a
              href="tel:1-866-922-7925"
              className="text-xl text-blue-600 dark:text-blue-400"
              aria-label="Call to book phone number"
            >
              Call to Book: 1-866-922-7925
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableDates;
