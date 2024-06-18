import React from "react";
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Ensure Font Awesome is imported
import ExtraAccordion from "../components/home/vacationComponents/extraAccoridon";
import FlightAccordion from "../components/home/vacationComponents/flightAccordidon";
import Tahiti from "../components/home/vacationComponents/tahitiNuiAccordion";
import AccommodationCard from "../components/home/vacationComponents/vacationAccommodations";


const VacationPackages = () => {
  return (
    
    <div className="p-6 bg-white dark:bg-deep-charcoal rounded-lg max-w-4xl mx-auto">
        <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&family=Lora:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">Vacation Packages</h1>
      <p className="mb-6 text-sm">
        Explore our exclusive vacation packages curated just for you.
      </p>

      <form className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200" // Label color for dark mode
              >
              Destination *
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Airport, City or Zip Code"
              className="input-placeholder w-full mt-1 p-2 border border-gray-300 dark:border-grey-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="departure"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Departure*
            </label>
            <input
              type="date"
              id="departure"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              />
          </div>

          <div className="flex-1">
            <label
              htmlFor="return"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Return *
            </label>
            <input
              type="date"
              id="return"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder dark:placeholder:-gray-500"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="rooms"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Rooms
            </label>
            <select
              id="rooms"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:gray-400 dark:placeholder:gray-500"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="adults"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Adults (19+)
            </label>
            <select
              id="adults"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:gray-400 dark:placeholder:gray-500"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="children"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Children (0-18)
            </label>
            <select
              id="children"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:gray-400 dark:placeholder:gray-500"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="flying-from"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Flying From*
            </label>
            <input
              type="text"
              id="flying-from"
              placeholder="Enter departure airport"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:gray-400 dark:placeholder:gray-500"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200"
            >
              Class
            </label>
            <select
              id="class"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder:gray-400 dark:placeholder:gray-500"
            >
              <option value="economy">Economy</option>
              <option value="business">Business</option>
              <option value="first">First Class</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md mt-6 hover:bg-blue-700 transition duration-300"
        >
          Search
        </button>
      </form>

      {/* Breadcrumb Component */}
      <div className="breadcrumb p-4 flex space-x-2 text-sm text-gray-600 md:flex hidden" id="vpBreadCrumbs">
      <a href="/" className="text-blue-500 hover:underline">Home</a>
        <span>/</span>
        <a href="/packages" className="text-blue-500 hover:underline">Packages</a>
        <span>/</span>
        <span className="text-gray-400">Vacation Packages</span>
      </div>



      {/* New H1 Below Breadcrumb */}
      <h1  style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}className="text-2xl font-bold mt-4 text-gray-700 dark:text-gray-300">
  Set away your worries and let Travel Lit Lounge be your destination 🌸

  </h1>

  <div className="flex flex-col md:flex-row">
  <div className="w-full bg-neutral-300 font-bold py-2 px-4 rounded-md">
    <h2 className="banner-info-headline push-down text-black">6 Nights Airfare from $3,412 Per Person*</h2>
    <ul className="check text-sm text-black">
      <li><i className="fa-solid fa-circle-check"></i> Daily Buffet Breakfast</li>
      <li><i className="fa-solid fa-circle-check"></i> Exclusive Member Benefits</li>
    </ul>
    <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Check Price & Availability
     </button>
  </div>
  <div className="max-w-xs mx-auto p-4 bg-gray-100 rounded-lg">
      <img
        src=""
        alt="vacation_placeholder"
        className="w-full h-auto object-cover"
      />
    </div>




  </div>
  
  <div className="mt-8 py-6 px-4 bg-blue-100 dark:bg-blue-900 rounded-lg max-w-4xl mx-auto shadow-lg">
  <h2 className="font-lora text-xl text-gray-800 dark:text-white">Secluded Sanctuary in Bora Bora
  </h2>
  <p className="text-gray-700 dark:text-gray-300">The legendary island of Bora Bora offers unsurpassed beauty and scenic adventure. Two pristine white-sand beaches provide the perfect backdrop for the ultimate island escape. Our traditional bungalow suites are situated either on the beach or over the lagoon, allowing guests to seamlessly blend with the stunning natural landscape </p>
        {/* Additional content here */}

        <p className="text-gray-700 dark:text-gray-300">Vacation Package Details</p>
        <div className="accordion-item active">
          <span role="button"></span>

        </div>
        <div className="space-y-4">
    <div className="shadow-md">
        <ExtraAccordion />
    </div>
    <div className="shadow-md">
        <FlightAccordion />
    </div>
    <div className="shadow-md">
        <Tahiti />
    </div>
<    AccommodationCard />
</div>

      </div>
    </div>


 



  );
};

export default VacationPackages;
