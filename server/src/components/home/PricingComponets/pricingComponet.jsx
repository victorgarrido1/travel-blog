import React, { useState } from 'react';
import PricingPlan from './pricingPlan';

const PricingComponent = ({ pricingPlans }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [agents, setAgents] = useState(1);

  const toggleSubscriptionTerm = () => {
    setIsAnnual(!isAnnual);
  };

  const handleAgentsChange = (event) => {
    setAgents(event.target.value);
  };

  return (
    <div className="container mx-auto p-6">
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
            className="border rounded p-2 w-16"
            min="1"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingPlan key={index} plan={plan} isAnnual={isAnnual} agents={agents} />
        ))}
      </div>
    </div>
  );
};

export default PricingComponent;
