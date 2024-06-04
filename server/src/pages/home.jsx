import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5554/travel")
      .then((response) => {
        setLocations(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching locations:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-8">Locations List</h1>
        <Link to="locations/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <table className="w-full border-separate border-spacing-2">
            <thead>
              <tr>
                <th className="border border-slate-600 rounded-md">Index</th>
                <th className="border border-slate-600 rounded-md">Location Name</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Location Summary</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Space Room Info</th>
                <th className="border border-slate-600 rounded-md max-md:hidden">Operations</th>
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
                    <Link to={`/edit/${location._id}`} className="mr-2">
                      <AiOutlineEdit className="text-yellow-500 text-2xl" />
                    </Link>
                    <Link to={`/details/${location._id}`} className="mr-2">
                      <BsInfoCircle className="text-blue-500 text-2xl" />
                    </Link>
                    <Link to={`/delete/${location._id}`} className="mr-2">
                      <MdOutlineDelete className="text-red-500 text-2xl" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
