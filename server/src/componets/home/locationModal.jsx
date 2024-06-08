import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

const LocationModal = ({ location, onClose }) => {
    console.log(location);
  return (
    <div className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center">
      onClick={onClose}
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="w-fit text-3-xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300">
          {location.name}
        </h2>
        <h4 className="my-2 text-green-500">{location._id}</h4>
        <div className="flex justify-center items-center gap-x-2">
          <p className="text-gray-700">{location.address?.city}</p>
        </div>
      </div>
      Location Model
    </div>
  );
};

export default LocationModal;
