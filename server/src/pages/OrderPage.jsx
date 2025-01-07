import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MobilePage = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h1 className="text-3xl font-bold text-center mb-8">Mobile Page Content</h1>
      <p className="text-lg text-center">This is the mobile version of the page!</p>
    </div>
  );
};

export default MobilePage;
