import React from 'react';

const PricingCard = ({ plan, isAnnual, agents }) => {
  return (
    <div className="border p-4 rounded-lg text-center bg-gray-100 dark:bg-gray-700">
      <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">{plan.name}</h3>
      <p className="text-2xl font-semibold mt-2 text-gray-900 dark:text-gray-100">
        {typeof plan.annual === 'number' && typeof plan.monthly === 'number' ? 
          isAnnual ? `$${(plan.annual / agents).toFixed(2)}/year for ${agents} agent${agents > 1 ? 's' : ''}` 
          : `$${(plan.monthly * agents).toFixed(2)}/month per agent`
        : isAnnual ? plan.annual : plan.monthly}
      </p>
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">{plan.trial}</button>
      <div className="mt-4 text-left text-gray-900 dark:text-gray-100">
        {plan.features.map((feature, index) => (
          <p key={index} className="flex items-center">
            <span className="mr-2 text-green-500">&#10003;</span>
            {feature}
          </p>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
