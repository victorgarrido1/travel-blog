import React from "react";

const SmallContentCard = ({ title, description, category, image, link }) => {
  return (
    <div className="relative p-4 bg-white dark:bg-gray-700 rounded-lg shadow-md transition-colors duration-300 hover:bg-blue-100 dark:hover:bg-blue-900">
      <a href={link} className="block">
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg transition-filter duration-300 hover:filter hover:brightness-75" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
          <span className="text-sm font-medium text-blue-500 dark:text-blue-300">{category}</span>
        </div>
      </a>
    </div>
  );
};

export default SmallContentCard;
