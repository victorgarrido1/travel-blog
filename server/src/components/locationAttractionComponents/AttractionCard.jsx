// src/components/AttractionCard.jsx
import React from 'react';

const AttractionCard = ({ image, title, location, link }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transition-transform transform duration-300 ease-in-out hover:scale-105">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-4">
        <div className="bg-blue-500 text-white uppercase tracking-wide text-xs font-semibold mb-2 px-2 py-1 inline-block">Featured</div>
        <h2 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white">{title}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-300">{location}</p>
        <a href={link} className="mt-2 inline-block text-blue-500 hover:text-blue-700 text-sm">
          VISIT WEBSITE <span className="inline-block ml-1">&rarr;</span>
        </a>
      </div>
    </div>
  );
};

export default AttractionCard;
