import React from 'react';
// Import the AttractionCard component for displaying individual attraction cards
import AttractionCard from '../components/locationAttractionComponents/AttractionCard';
// Import the GridContainer component for arranging AttractionCards in a grid layout
import GridContainer from '../components/locationAttractionComponents/GridContainer';
// Import the HorizontalImageBox component
import HorizontalImageBox from '../components/locationAttractionComponents/HorizonalImageBox';

// Data array for the attractions, each with id, title, location, image, and link
const locations = [
  {
    id: 1,
    title: 'The Escape Game Houston (CityCentre)',
    location: 'Memorial/Energy Corridor',
    image: '/assets/images/escape-game-1.jpg', // Replace with actual image paths
    link: '#', // Replace with actual URL
  },
  {
    id: 2,
    title: 'The Escape Game Houston (Galleria)',
    location: 'Galleria/Uptown',
    image: '/assets/images/escape-game-2.jpg', // Replace with actual image paths
    link: '#', // Replace with actual URL
  },
  {
    id: 3,
    title: '14 Pews',
    location: 'Houston Heights',
    image: '/assets/images/14-pews.jpg', // Replace with actual image paths
    link: '#', // Replace with actual URL
  },
  {
    id: 4,
    title: '810 Billiards & Bowling',
    location: 'Downtown',
    image: '/assets/images/bowling.jpg', // Replace with actual image paths
    link: '#', // Replace with actual URL
  },
  {
    id: 5,
    title: '8th Wonder Brewery + Distillery + Cannabis',
    location: 'East Downtown',
    image: '/assets/images/brewery.jpg', // Replace with actual image paths
    link: '#', // Replace with actual URL
  },
  {
    id: 6,
    title: 'Alamo Drafthouse Cinema',
    location: 'West Oaks',
    image: '/assets/images/cinema.jpg', // Replace with actual image paths
    link: '#', // Replace with actual URL
  },
  // Add more locations as needed
];

// Data for horizontal image boxes
const horizontalImages = [
  {
    id: 1,
    title: 'Things to Do',
    image: '/assets/images/things-to-do.jpg', // Replace with actual image paths
    link: '#',
  },
  {
    id: 2,
    title: 'Hotel Deals',
    image: '/assets/images/hotel-deals.jpg', // Replace with actual image paths
    link: '#',
  },
  {
    id: 3,
    title: 'Events This Weekend',
    image: '/assets/images/events-this-weekend.jpg', // Replace with actual image paths
    link: '#',
  },
];

const LocationAttractions = () => {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800">
      {/* Page title */}
      <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 p-4 mb-6">Location Attractions</h1>
      
      {/* Horizontal Image Boxes Section */}
      <div className="flex justify-between gap-4 mb-8">
        {horizontalImages.map((item) => (
          <HorizontalImageBox
            key={item.id}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>

      {/* Example attraction block with image and text sections */}
      <div className="md:flex group bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="md:flex-shrink-0 overflow-hidden">
          <img
            className="w-full h-64 object-cover md:h-full transition-transform transform duration-300 ease-in-out group-hover:scale-105"
            src="https://craftypixels.com/placeholder-image/435x287/3048bf/8f8f8f&text=Bora"
            alt="Attraction"
          />
        </div>
        {/* Text Section */}
        <div className="p-8 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">Sponsored</div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white">
            POST Houston, Your Destination for it All
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            Come see why we're a must-visit! Explore downtown Houston’s hub for culture, food,
            technology, food, concerts, and events.
          </p>
          <a
            href="https://example.com"
            className="mt-4 inline-flex items-center text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 dark:hover:text-indigo-600"
          >
            LEARN MORE
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Additional information about attractions */}
      <div className="mt-8">
        <p className="text-gray-600 dark:text-gray-300">
          Regardless of your interests, InterContinental Bora Bora Le Moana Resort offers attractions perfect for everyone.
          From the Overwater Bungalows to the beautiful Matira Beach, known for its white sand and crystal-clear waters,
          it is the ideal place for swimming and sunbathing. For a sanctuary experience, the Deep Nature Spa offers world-class
          treatments designed to relax and rejuvenate guests. The treatments incorporate indigenous ingredients and techniques.
        </p>
      </div>

      {/* Grid layout to display attraction cards */}
      <div className="flex justify-evenly items-center gap-4 mt-8 mb-8 overflow-x-auto pt-6">  
        <GridContainer>
          {locations.map((location) => (
            <AttractionCard
              key={location.id} // Unique key for each card
              image={location.image} // Image URL
              title={location.title} // Title of the attraction
              location={location.location} // Location description
              link={location.link} // Link for more information
            />
          ))}
        </GridContainer>
      </div>

    {/* Horizontal Image Boxes Section */}
    <div className="flex justify-evenly items-center gap-4 mb-8 overflow-x-auto">
        {horizontalImages.map((item) => (
          <HorizontalImageBox
            key={item.id}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default LocationAttractions;
