import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BackButton from "../componets/backbutton";
import Spinner from "../componets/spinner"; // Assuming Spinner is a custom component
import { useSnackbar } from 'notistack';

const CreateLocation = () => {
  const [name, setName] = useState ("");
  const [locationName, setLocationName] = useState("");
  const [summary, setSummary] = useState("");
  const [userNotes, setUserNotes] = useState("");
  const [locationType, setLocationType] = useState("");
  const [spaceRoomInfo, setSpaceRoomInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  

  const handleSaveLocation = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const data = {
        name,
      locationName,
      summary,
      userNotes,
      locationType, // please ensure this is added
      spaceRoomInfo,
    };

    setLoading(true);
    axios
      .post("http://localhost:5554/travel/add", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Location Created Successfully ", {variant: 'Success' });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar('Error', { variant: 'Error' });
        console.error(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Location</h1>
      {loading && <Spinner />} {/* Show spinner if loading */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <form onSubmit={handleSaveLocation}>
        <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">ONLY Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Location Name</label>
            
            <input
              type="text"
              value={locationName}
              onChange={(e) => setLocationName(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Summary</label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">User Notes</label>
            <textarea
              value={userNotes}
              onChange={(e) => setUserNotes(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">
              Type Of Location
            </label>
            <textarea
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Space Room Info</label>
            <input
              type="text"
              value={spaceRoomInfo}
              onChange={(e) => setSpaceRoomInfo(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          

          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded"
          >
            Save Location
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateLocation;
