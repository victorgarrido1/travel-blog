import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ClothingPage.css";

const ClothingPage = () => {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://localhost:5554/shop/clothing");
        console.log(response.data); // Log the entire response data
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };

    fetchItems();
  }, []);

  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log("Cart:", cart);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-8 min-h-screen clothing-page">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">
          Bora Bora Boutique
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Shop the trendiest fashion and apparel from top designers
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <img
              src={item.image} // Use the image URL from the item data or a placeholder if missing
              alt={item.name} // Set the alt attribute to the item's name for accessibility
              className="w-full h-48 object-cover" // Set the image to cover the container with fixed height
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150";
              }} // Fallback image on error
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-300">
                {item.name} {/* Display the item's name */}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                ${item.price.toFixed(2)} {/* Display the item's price */}
              </p>
              <div className="flex items-center mt-2">
                <p className="text-gray-600 dark:text-gray-400 flex-grow">
                  {item.inStock ? "In Stock" : "Out of Stock"}{" "}
                  {/* Display stock status */}
                </p>
                <button
                  className={`px-3 py-1 transition ease-in duration-200 rounded-full border-2 focus:outline-none ml-4 ${
                    item.inStock
                      ? "bg-blue-500 text-white hover:bg-blue-600" // Styling for enabled button
                      : "bg-gray-400 text-gray-700 cursor-not-allowed" // Styling for disabled button
                  }`}
                  onClick={() => addToCart(item)}
                  disabled={!item.inStock} // Disable button if item is out of stock
                >
                  {item.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          </div>
          //   <p className={`text-gray-600 dark:text-gray-400 mr-4 ${item.inStock ? '' : 'text-sm'}`}>
          //   {item.inStock ? 'In Stock' : 'Out of Stock'} {/* Display stock status */}
          // </p>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 dark:text-gray-400">
          Discover the ultimate shopping experience in Bora Bora, where you can
          find the latest fashion apparel and accessories from renowned
          designers like Tommy Bahama, Alice + Olivia, Michael Kors, Tory Burch,
          and Rebecca Minkoff. Elevate your style with exquisite jewelry
          selections from David Yurman, Tiffany & Co., Cartier, and more!
          Whether you're treating yourself or searching for the perfect gift for
          someone special, let the boutique shops of Bora Bora be your first
          stop for must-have styles and timeless elegance, no matter the season.
          Indulge in the luxurious shopping options that make Bora Bora a
          fashion paradise.
        </p>
      </div>
      <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-11/12 mx-auto my-5" />
    </div>
  );
};

export default ClothingPage;
