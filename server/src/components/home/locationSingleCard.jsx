import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";
import LocationModal from './locationModal'; // Adjust the path according to your file structure

const LocationSingleCard = ({ location }) => {
  const [showModal, setShowModal] = useState(false); // Corrected setShowModel to setShowModal

  if (!location || !location.address) {
    console.error("Missing location or address:", location);
    return <div>Invalid location data</div>;
  }

  const ownerId = location._id; // Make sure this matches your actual data structure

  return (
    <div className="border-2 border-gray-500 rounded-lg px-3 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300">
        {location.name}
      </h2>
      <h4 className="my-2 text-green-500">{location._id}</h4>
      <div className="flex justify-center items-center gap-x-2">
        <p className="text-gray-700">{location.address?.city}</p>
        <BiShow
          className="text-3xl text-blue-800 hover:text-black cursor-pointer"
          onClick={() => setShowModal(true)} // Corrected onCLick to onClick and moved outside of the JSX children
        />
      </div>
      <Link
        to={`/travel/details/${location._id}`}
        className="flex justify-center items-center gap-x-2"
      >
        <BiUserCircle className="text-blue-500 text-2xl" />
        <p className="text-gray-700">{location.locationType}</p>
      </Link>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <Link to={`/travel/details/${location._id}`}>
          <BsInfoSquare className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/travel/edit/${location._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <LocationModal location={location} onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default LocationSingleCard;
