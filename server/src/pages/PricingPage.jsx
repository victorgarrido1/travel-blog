import React, { useState } from 'react';
import PricingCard from '../components/home/PricingComponent/pricingCard';
import PricingControls from '../components/home/PricingComponent/pricingControls';
import '../components/home/PricingComponent/PricingPage.css';

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
      name: "Beachfront Villa",
      monthly: 500,
      annual: 6000,
      features: ["Ocean view", "Private beach access", "Complimentary breakfast", "Free Wi-Fi"],
      trial: "Book Now",
    },
    {
      name: "Overwater Bungalow",
      monthly: 750,
      annual: 9000,
      features: ["Direct lagoon access", "Glass floor panel", "Private terrace", "Free Wi-Fi"],
      trial: "Book Now",
    },
    {
      name: "Luxury Suite",
      monthly: 1000,
      annual: 12000,
      features: ["Private pool", "Butler service", "All-inclusive dining", "Free Wi-Fi"],
      trial: "Book Now",
    },
    {
      name: "Presidential Suite",
      monthly: "Contact us",
      annual: "Contact us",
      features: ["Private island", "Helicopter transfer", "Personal chef", "Free Wi-Fi"],
      trial: "Contact Us",
    },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-50 dark:bg-gray-800 rounded-lg text-center">
      <h1 style={{ fontFamily: 'Roboto, sans-serif', fontSize: '2rem', marginBottom: '1rem' }}>
        Bora Bora International Travel Resort Plans
      </h1>
      <p style={{ fontFamily: 'Roboto, sans-serif', marginBottom: '1rem' }}>
        Experience the ultimate luxury and comfort at Bora Bora International Travel Resort.
        Choose the perfect plan that suits your needs and enjoy exclusive features and services.
      </p>
      <PricingControls
        isAnnual={isAnnual}
        toggleSubscriptionTerm={toggleSubscriptionTerm}
        agents={agents}
        handleAgentsChange={handleAgentsChange}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            plan={plan}
            isAnnual={isAnnual}
            agents={agents}
            className={`border-r border-gray-300 dark:border-gray-600 ${index === pricingPlans.length - 1 ? 'border-r-0' : ''}`} // Add vertical border to all but the last card
          />
        ))}
      </div>
      <button
        className="w-full mt-8 py-2 bg-green-500 text-white font-bold rounded"
        style={{ fontFamily: 'Roboto, sans-serif' }}
      >
        See All Features
      </button>
    </div>
  );
};

export default PricingPage;
