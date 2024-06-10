import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

// this is in charge of the main layout victor

const LocationTable = ({ locations }) => {
  return (
    <table className="w-full border-separate border-spacing-2">
      <thead>
        <tr>
          <th className="border border-slate-600 rounded-md">Index</th>
          <th className="border border-slate-600 rounded-md">Location Name</th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Location Summary 
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Space Room Info
          </th>
          <th className="border border-slate-600 rounded-md max-md:hidden">
            Operations
          </th>
        </tr>
      </thead>
      <tbody>
        {locations.map((location, index) => (
          <tr key={location._id} className="h-8">
            <td className="border border-slate-700 rounded-md text-center">
              {index + 1}
            </td>
            <td className="border border-slate-700 rounded-md text-center">
              {location.name}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {location.summary}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              {location.spaceRoomInfo}
            </td>
            <td className="border border-slate-700 rounded-md text-center max-md:hidden">
              <Link to={`/travel/edit/${location._id}`} className="mr-2">
                <AiOutlineEdit className="text-yellow-500 text-2xl" />
              </Link>
              <Link to={`/travel/details/${location._id}`} className="mr-2">
                <BsInfoCircle className="text-blue-500 text-2xl" />
              </Link>
              <Link to={`/travel/delete/${location._id}`} className="mr-2">
                <MdOutlineDelete className="text-red-500 text-2xl" />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LocationTable;
