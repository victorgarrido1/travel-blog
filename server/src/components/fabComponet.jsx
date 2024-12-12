import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome styles

const FabComponent = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false); // State to toggle the menu

  const toggleMenu = () => {
    setShowMenu((prev) => !prev); // Toggle the menu
  };

  return (
    <div className="fixed bottom-5 right-5">
      {/* Main Button */}
      <button
        onClick={toggleMenu}
        className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-600"
      >
        <i className="fas fa-plus"></i>
      </button>

      {/* Dropdown Menu */}
      {showMenu && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-md">
          {/* Add Location */}
          <button
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/f3p7r5tfdmpzR5eH8",
                "_blank"
              )
            }
            className="flex items-center gap-2 px-4 py-2 w-full text-white bg-red-500 hover:bg-red-600 rounded-t"
          >
            <i className="fas fa-map-marker-alt"></i>
            Add Location
          </button>
          {/* Send Email */}
          <button
            onClick={() =>
              (window.location.href =
                "mailto:someone@example.com?subject=Subject&body=Body%20Text")
            }
            className="flex items-center gap-2 px-4 py-2 w-full text-white bg-blue-500 hover:bg-blue-600 rounded-b"
          >
            <i className="fas fa-envelope"></i>
            Send Email
          </button>
        </div>
      )}
    </div>
  );
};

export default FabComponent;
