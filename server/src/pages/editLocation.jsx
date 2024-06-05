import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../componets/backbutton";
import Spinner from "../componets/spinner"; // Assuming Spinner is a custom component

const EditLocation = () => {
  const [name, setName] = useState(""); // Ensure this is initialized
  const [summary, setSummary] = useState(""); // Ensure this is initialized
  const [userNotes, setUserNotes] = useState(""); // Ensure this is initialized
  const [locationType, setLocationType] = useState(""); // Ensure this is initialized
  const [spaceRoomInfo, setSpaceRoomInfo] = useState(""); // Ensure this is initialized
  const { id } = useParams();
  const [address, setAddress] = useState({
    zipCode: "",
    country: "",
    state: "",
    city: "",
    street: "",
  }); // Ensure all address fields are initialized
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSaveLocation = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    const data = {
        
      name,
      summary,
      userNotes,
      locationType,
      spaceRoomInfo,
      address,
      
    };
    console.log(data);


    setLoading(true);
    axios
      .put(`http://localhost:5554/travel/${id}`, data, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error occurred, please check the console");
        console.error(err);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Location</h1>
      {loading && <Spinner />} {/* Show spinner if loading */}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <form onSubmit={handleSaveLocation}>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Location Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
            <label className="text-xl mr-4 text-gray-500">Location Type</label>
            <select
              value={locationType}
              onChange={(e) => setLocationType(e.target.value)}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            >
              <option value="">Select Location Type</option>
              <option value="City">City</option>
              <option value="Beach">Beach</option>
              <option value="Urban">Urban</option>
              <option value="Mountain">Mountain</option>
              <option value="Rural">Rural</option>
            </select>
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
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={address.zipCode}
              onChange={handleAddressChange}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Country</label>
            <input
              type="text"
              name="country"
              value={address.country}
              onChange={handleAddressChange}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">State</label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleAddressChange}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">City</label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleAddressChange}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Street</label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleAddressChange}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-sky-500 text-white px-4 py-2 rounded"
          >
            Update Location
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditLocation;