import React, { useState } from 'react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [agents, setAgents] = useState(1);

  const toggleSubscriptionTerm = () => {
    setIsAnnual(!isAnnual);
  };

  const handleAgentsChange = (event) => {
    setAgents(event.target.value);
  };

  const pricingPlans = [
    {
      name: "Suite Team",
      monthly: 55,
      annual: 660,
      features: ["Ticketing system", "Email, chat, voice, social messaging, and more", "Help center", "AI agents"],
      trial: "Free trial",
    },
    {
      name: "Suite Growth",
      monthly: 89,
      annual: 1068,
      features: ["Ticketing system", "Email, chat, voice, social messaging, and more", "Help center", "AI agents"],
      trial: "Free trial",
    },
    {
      name: "Suite Professional",
      monthly: 115,
      annual: 1380,
      features: ["Ticketing system", "Email, chat, voice, social messaging, and more", "Help center", "AI agents"],
      trial: "Free trial",
    },
    {
      name: "Suite Enterprise",
      monthly: "Contact us",
      annual: "Contact us",
      features: ["Ticketing system", "Email, chat, voice, social messaging, and more", "Help center", "AI agents"],
      trial: "Talk to Sales",
    },
  ];

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
          <div key={index} className="border p-4 rounded-lg text-center">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="text-2xl font-semibold mt-2">
              {isAnnual ? `$${plan.annual * agents}/year for ${agents} agent${agents > 1 ? 's' : ''}` : `$${plan.monthly * agents}/month per agent`}
            </p>
            <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded">{plan.trial}</button>
            <div className="mt-4 text-left">
              {plan.features.map((feature, index) => (
                <p key={index} className="flex items-center">
                  <span className="mr-2 text-green-500">&#10003;</span>
                  {feature}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
