
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";


const LocationModal = ({ location, onClose }) => {
  return (
      <div 
          className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
          onClick={onClose}
      >
          <div 
              onClick={(event) => event.stopPropagation()}
              className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
          >
              <AiOutlineClose
                  className="absolute top-4 right-4 text-3xl text-red-600 cursor-pointer"
                  onClick={onClose}
              />
              <h2 className="text-2xl font-bold my-2">
                  {location.name}
              </h2>
              <h4 className="text-lg text-green-500">
                  {location._id}
              </h4>
              <div className="flex justify-center items-center gap-x-2 mt-4">
                  <p className="text-gray-700">{location.address?.city}</p>
              </div>
              <p>You can type </p>
          </div>
      </div>
  );
};


export default LocationModal;
