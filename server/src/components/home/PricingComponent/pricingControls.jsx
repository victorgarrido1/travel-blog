import React from 'react';

const PricingControls = ({ isAnnual, toggleSubscriptionTerm, agents, handleAgentsChange }) => {
  return (
    <div className="flex justify-center mb-6">
      <div className="flex items-center space-x-4">
        <span>Subscription term</span>
        <button
          onClick={toggleSubscriptionTerm}
          className={`px-4 py-2 rounded-full ${isAnnual ? 'bg-green-500' : 'bg-gray-300'}`}
        >
          {isAnnual ? 'Annual' : 'Monthly'}
        </button>
        <span className="text-green-500">Save with annual</span>
      </div>
      <div className="ml-10 flex items-center space-x-4">
        <span>Number of agents</span>
        <input
          type="number"
          value={agents}
          onChange={handleAgentsChange}
          className="border rounded p-2 w-16 bg-white dark:bg-gray-800 text-black dark:text-white"
          min="1"
        />
      </div>
    </div>
  );
};

export default PricingControls;
