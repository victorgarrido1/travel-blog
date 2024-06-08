import { Link } from "react-router-dom";
import { MdCardTravel } from "react-icons/md";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoSquare } from "react-icons/bs";

const LocationSingleCard = ({ location }) => {
  if (!location) {
    return <div>No location data available</div>;
  }

  return (
    <div className="border-2 border-grey-500 rounded-lg px-3 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300">
        {location.name}
      </h2>
      <h4 className="my-2 text-green-500">{location._id}</h4>
      <div className="flex justify-center locations-center gap-x-2">
        <MdCardTravel className="text-red-300 text-2xl" />
        <p className="text-gray-700">{location.address?.city}</p>
      </div>
      <Link
        to={`/profile/${location.ownerId}`}
        className="flex justify-center locations-center gap-x-2"
      >
        <BiUserCircle className="text-blue-500 text-2xl" />
        <p className="text-gray-700">{location.ownerName}</p>
      </Link>
      <div className="flex justify-between locations-center gap-x-2 mt-4 p-4">
        <Link to={`/travel/details/${location._id}`}>
          <BsInfoSquare className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/travel/edit/${location._id}`}>
          <AiOutlineEdit className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
      </div>
    </div>
  );
};

export default LocationSingleCard;
