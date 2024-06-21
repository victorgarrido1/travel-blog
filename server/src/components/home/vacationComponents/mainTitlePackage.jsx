import React from 'react';

const VacationTitlePackage = ({ title = "InterContinental Bora Bora Le Moana Resort" }) => {
  return (
    <div className="bg-neutral dark:bg-gray-00 p-4">
      <h1
        className="text-6xl font-medium text-gray-800 dark:text-gray-100"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        {title}
      </h1>
    </div>
  );
};

export default VacationTitlePackage;