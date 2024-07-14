import React from 'react';
import PricingComponent from '../components/PricingComponent';

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

const PricingPage = () => {
  return (
    <div>
      <PricingComponent pricingPlans={pricingPlans} />
    </div>
  );
};

export default PricingPage;
