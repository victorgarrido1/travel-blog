import React from "react";
import { Helmet } from 'react-helmet';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ExtraAccordion from "../components/home/vacationComponents/extraAccoridon";
import FlightAccordion from "../components/home/vacationComponents/flightAccordidon";
import Tahiti from "../components/home/vacationComponents/tahitiNuiAccordion";
import AccommodationCard from "../components/home/vacationComponents/vacationAccommodations";
import AvailableDates from "../components/home/vacationComponents/datePricesVacation";
import TermsConditions from "../components/home/vacationComponents/termsConditionsAccordion";

const VacationPackages = () => {
  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-4xl mx-auto shadow-md">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@400..800&family=Lora:wght@400;700&display=swap" rel="stylesheet" />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">Vacation Packages</h1>
<p className="mb-6 text-sm text-gray-600 dark:text-gray-400 text-center">
  Explore our exclusive vacation packages curated just for you.
</p>


      <form className="space-y-4">
        <div className="flex flex-wrap space-x-4">
          <div className="flex-1">
            <label htmlFor="destination" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Destination *
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Airport, City or Zip Code"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-wrap space-x-4">
          <div className="flex-1">
            <label htmlFor="departure" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Departure *
            </label>
            <input
              type="date"
              id="departure"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="return" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Return *
            </label>
            <input
              type="date"
              id="return"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>
        </div>

        <div className="flex flex-wrap space-x-4">
          <div className="flex-1">
            <label htmlFor="rooms" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Rooms
            </label>
            <select
              id="rooms"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Adults (19+)
            </label>
            <select
              id="adults"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex-1">
            <label htmlFor="children" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Children (0-18)
            </label>
            <select
              id="children"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap space-x-4">
          <div className="flex-1">
            <label htmlFor="flying-from" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Flying From *
            </label>
            <input
              type="text"
              id="flying-from"
              placeholder="Enter departure airport"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="class" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Class
            </label>
            <select
              id="class"
              className="w-full mt-1 p-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
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

      {/* Small divider here */}
      <div className="w-full h-px bg-gray-300 dark:bg-gray-600 my-4"></div>

      {/* Breadcrumb Component */}
      <div className="breadcrumb p-4 flex space-x-2 text-sm text-gray-600 dark:text-gray-400 md:flex hidden">
        <a href="/" className="text-blue-500 hover:underline">Home</a>
        <span>/</span>
        <a href="/packages" className="text-blue-500 hover:underline">Packages</a>
        <span>/</span>
        <span className="text-gray-400 dark:text-gray-500">Vacation Packages</span>
      </div>

    <div className="w-full h-px bg-gray-300 dark:bg-gray-600 my-4"></div>
      {/* New H1 Below Breadcrumb */}
      <h1 className="text-2xl font-bold mt-4 text-gray-700 dark:text-gray-300 text-center">
        Set away your worries and let Travel Lit Lounge be your destination 🌸
      </h1>

      <div className="flex flex-col md:flex-row">
        <div className="w-full bg-neutral-300 dark:bg-neutral-800 font-bold py-2 px-4 rounded-md">
          <h2 className="text-black dark:text-white">6 Nights Airfare from $3,412 Per Person*</h2>
          <ul className="check text-sm text-black dark:text-white">
            <li><i className="fa-solid fa-circle-check text-green-500"></i> Daily Buffet Breakfast</li>
            <li><i className="fa-solid fa-circle-check text-green-500"></i> Exclusive Member Benefits</li>
          </ul>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Check Price & Availability
          </button>
        </div>
        <div className="max-w-xs mx-auto p-4 bg-gray-100 dark:bg-gray-700 rounded-lg mt-4 md:mt-0">
          <img
            src="" // Add an appropriate image source
            alt="vacation placeholder"
            className="w-full h-auto object-cover rounded-md"
          />
        </div>
      </div>

      <div className="mt-8 py-6 px-4 bg-blue-100 dark:bg-blue-900 rounded-lg max-w-4xl mx-auto shadow-lg">
        <h2 className="font-lora text-xl text-gray-800 dark:text-white text-center">Secluded Sanctuary in Bora Bora</h2>
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          The legendary island of Bora Bora offers unsurpassed beauty and scenic adventure. Two pristine white-sand beaches provide the perfect backdrop for the ultimate island escape. Our traditional bungalow suites are situated either on the beach or over the lagoon, allowing guests to seamlessly blend with the stunning natural landscape.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-justify">
          Vacation Package Details
        </p>
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
          <AccommodationCard />
        </div>
        <AvailableDates />
        <TermsConditions />
      </div>
  <p data-test="vpPackageID" className="disclaimer disclaimer-secondary mb-4 p-2">
    <strong>Package ID: TABOBELMOANA201802309</strong>
  </p>
    </div>
  );
};

export default VacationPackages;
