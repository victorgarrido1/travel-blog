import React from "react";

const VacationPackages = () => {
  return (
    <div
    className="p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto" // Updated width
    data-default
      tab="vacation-packages"
      data-hook="tab-switch"
    >
      <h1 className="text-2xl font-bold mb-4">Vacation Packages</h1>
      <p className="mb-6 text-sm">
        Explore our exclusive vacation packages curated just for you.
      </p>

      <form className="space-y-4">
        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="destination"
              className="block text-sm font-medium text-gray-700"
            >
              Destination *
            </label>
            <input
              type="text"
              id="destination"
              placeholder="Airport, City or Zip Code"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="departure"
              className="block text-sm font-medium text-gray-700"
            >
              Departure*
            </label>
            <input
              type="date"
              id="departure"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex-1">
            <label
              htmlFor="return"
              className="block text-sm font-medium text-gray-700"
            >
              Return *
            </label>
            <input
              type="date"
              id="return"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="flex-1">
            <label
              htmlFor="rooms"
              className="block text-sm font-medium text-gray-700"
            >
              Rooms
            </label>
            <select
              id="rooms"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="adults"
              className="block text-sm font-medium text-gray-700"
            >
              Adults (19+)
            </label>
            <select
              id="adults"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="flex-1">
            <label
              htmlFor="children"
              className="block text-sm font-medium text-gray-700"
            >
              Children (0-18)
            </label>
            <select
              id="children"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
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
              className="block text-sm font-medium text-gray-700"
            >
              Flying From*
            </label>
            <input
              type="text"
              id="flying-from"
              placeholder="Enter departure airport"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="class"
              className="block text-sm font-medium text-gray-700"
            >
              Class
            </label>
            <select
              id="class"
              className="w-full mt-1 p-2 border border-gray-300 rounded-md"
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
    </div>
  );
};

export default VacationPackages;