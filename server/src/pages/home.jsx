import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../componets/spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import LocationTable from "../componets/home/locationTable";
import LocationCard from "../componets/home/locationCard";

const Home = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

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
      <div className="flex justify-between items-center">
        <h1 className="text-2xl my-8">Locations List</h1>
        <Link to="/travel/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        showType === "table" ? (
          <LocationTable locations={locations} />
        ) : (
          <LocationCard locations={locations} />
        )
      )}
    </div>
  );
};

export default Home;
