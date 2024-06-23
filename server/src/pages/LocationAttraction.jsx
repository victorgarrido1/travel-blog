// client/src/components/LocationAttractions.jsx
import React from "react";
import AttractionCard from "../components/locationAttractionComponents/AttractionCard";
import GridContainer from "../components/locationAttractionComponents/GridContainer";
import HorizontalImageBox from "../components/locationAttractionComponents/HorizonalImageBox";
import useFirebaseStorage from "../hooks/useFireBaseStorage";

const locations = [
  {
    id: 1,
    title: "The Escape Game Houston (CityCentre)",
    location: "Memorial/Energy Corridor",
    image: "/assets/images/escape-game-1.jpg",
    link: "#",
  },
  // Other static location data...
];

const horizontalImages = [
  {
    id: 1,
    title: "Things to Do",
    image: "/assets/images/things-to-do.jpg",
    link: "#",
  },
  // Other static horizontal image data...
];

// Mapping image URLs to custom names
const imageNameMapping = {
  "Bora Travel/bora_01.jpg": "Beautiful Bora Beach",
  "Bora Travel/bora_02.jpg": "Stunning Sunset",
  "Bora Travel/bora_03.webp": "Crystal Clear Waters",
  "Bora Travel/bora_04.jpg": "Luxurious Resort",
  "Bora Travel/bora_05.jpg": "Tropical Paradise",
  "Bora Travel/bora_06.jpg": "Serene Nature",
  "Bora Travel/bora_people_01.jpg": "XXXX1",
  "Bora Travel/bora_people_02.jpg": "XX2",
  "Bora Travel/bora_people_03.jpg": "XXXHIHI",

  // Add more mappings as needed
};




const LocationAttractions = () => {
  // Use the custom hook to fetch images from Firebase Storage
  const firebaseImages = useFirebaseStorage("Bora Travel");

  //define the paths for the "THINGS TO DO images"

  const thingsToDoImagePaths = [
    'bora_people_01.jpg',
    'bora_people_02.jpg',
    'bora_people_03.jpg'
  ]




  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800">
      <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 p-4 mb-6">
        Location Attractions
      </h1>


      <div className="md:flex group bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex-shrink-0 overflow-hidden">
          <img
            className="w-full h-64 object-cover md:h-full transition-transform transform duration-300 ease-in-out group-hover:scale-105"
            src="https://craftypixels.com/placeholder-image/435x287/3048bf/8f8f8f&text=Bora"
            alt="Attraction"
          />
        </div>
        <div className="p-8 flex flex-col justify-center">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-4">
            Sponsored
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black dark:text-white">
            POST Houston, Your Destination for it All
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            Come see why we're a must-visit! Explore downtown Houston’s hub for
            culture, food, technology, food, concerts, and events.
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h14m-7-7l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-gray-600 dark:text-gray-300">
          Regardless of your interests, InterContinental Bora Bora Le Moana
          Resort offers attractions perfect for everyone. From the Overwater
          Bungalows to the beautiful Matira Beach, known for its white sand and
          crystal-clear waters, it is the ideal place for swimming and
          sunbathing. For a sanctuary experience, the Deep Nature Spa offers
          world-class treatments designed to relax and rejuvenate guests. The
          treatments incorporate indigenous ingredients and techniques.
        </p>
      </div>

      {/* Grid layout to display fetched images as attraction cards */}
      <div className="mt-8">
        <GridContainer>
          {firebaseImages.map((url, index) => {
            const imagePath = decodeURIComponent(
              url.split("/").pop().split("?")[0]
            );
            const imageName =
              imageNameMapping[imagePath] || `Image ${index + 1}`;

            return (
              <AttractionCard
                key={index} // Unique key for each card
                image={url} // Image URL fetched from Firebase
                title={imageName} // Use custom name
                location="Bora Travel" // Placeholder location
                link="#" // Placeholder link
              />
            );
          })}
        </GridContainer>


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


      </div>
    </div>
  );
};

export default LocationAttractions;
