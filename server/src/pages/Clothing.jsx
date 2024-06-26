import React from 'react';
import './ClothingPage.css'; // Correct import for the CSS file

const ClothingPage = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-8 min-h-screen clothing-page">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-blue-900 dark:text-blue-300">Bora Bora Boutique</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">Shop the trendiest fashion and apparel from top designers</p>
      </div>
      <div className="flex flex-col items-center">
        <img 
          src="path/to/your/image.jpg"
          alt="Bora Bora Boutique"
          className="w-full max-w-md h-auto"
        />
        <h3 className="mt-4 text-xl font-semibold text-blue-900 dark:text-blue-300">Bora Boutique</h3>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-600 dark:text-gray-400">
          Discover the ultimate shopping experience in Bora Bora, where you can find the latest fashion apparel and accessories from renowned designers like Tommy Bahama, Alice + Olivia, Michael Kors, Tory Burch, and Rebecca Minkoff. Elevate your style with exquisite jewelry selections from David Yurman, Tiffany & Co., Cartier, and more! Whether you're treating yourself or searching for the perfect gift for someone special, let the boutique shops of Bora Bora be your first stop for must-have styles and timeless elegance, no matter the season. Indulge in the luxurious shopping options that make Bora Bora a fashion paradise.
        </p>
      </div>
      <hr className="border-t-2 border-gray-300 dark:border-gray-600 w-11/12 mx-auto my-5" />

    </div>
  );
};

export default ClothingPage;
