import React from 'react';


const SmallContentCard = ({ title, description, category, image, link }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover transition-transform transform duration-300 ease-in-out hover:scale-105" />
      <div className="p-4">
        <div className="text-xs text-blue-500 uppercase tracking-wider mb-2">{category}</div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        <a href={link} className="text-blue-500 font-semibold hover:text-blue-300">READ MORE</a>
      </div>
    </div>
  );
};

export default SmallContentCard;
