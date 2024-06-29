// Importing necessary modules and components from React, axios, and other libraries
import React, { useEffect, useState } from "react";
import axios from "axios"; // For making HTTP requests
import Spinner from "../components/spinner"; // A spinner component for loading state
import { Link } from "react-router-dom"; // For navigation links
import { AiOutlineEdit } from "react-icons/ai"; // Edit icon from react-icons library
import { BsInfoCircle } from "react-icons/bs"; // Info circle icon from react-icons library
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md"; // Add and Delete icons from react-icons library
import LocationTable from "../components/home/locationTable"; // Component to display locations in a table format
import LocationCard from "../components/home/locationCard"; // Component to display locations in a card format
import Footer from "../components/home/footer"; // to put in the bottom (:

const Home = () => {
  // State for storing locations data
  const [locations, setLocations] = useState([]);
  // State for loading indicator
  const [loading, setLoading] = useState(false);
  // State for toggling between table and card view
  const [showType, setShowType] = useState("table");

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Set loading to true while data is being fetched
    setLoading(true);
    // Make a GET request to fetch locations data
    axios
      .get("http://localhost:5554/travel")
      .then((response) => {
        // Set the locations data in state
        setLocations(response.data.data);
        // Set loading to false after data is fetched
        setLoading(false);
      })
      .catch((error) => {
        // Log any errors that occur during data fetching
        console.error("Error fetching locations:", error);
        // Set loading to false if an error occurs
        setLoading(false);
      });
  }, []); // Empty dependency array means this useEffect runs once when component mounts

  return (
    <div className="p-4">
      {/* Buttons for toggling between table and card views */}
      <div className="flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      {/* Header and Add New Location button */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-8">Locations List</h1>
        {/* Link to create a new location */}
        <Link to="/travel/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {/* Conditional rendering: Show spinner if loading, else show either table or card view */}
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <LocationTable locations={locations} />
      ) : (
        <LocationCard locations={locations} />
      )}
    </div>
  );
};

// Export the Home component as the default export
export default Home;
