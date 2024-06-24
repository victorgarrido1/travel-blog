import React from "react";
import AttractionCard from "../components/locationAttractionComponents/AttractionCard";
import GridContainer from "../components/locationAttractionComponents/GridContainer";
import HorizontalImageBox from "../components/locationAttractionComponents/HorizontalImageBox";
import useFirebaseStorage from "../hooks/useFireBaseStorage";

// Array of titles for the last three images
const HorizontalTitleImages = ["Things to Do", "Events This Weekend", "Free Things to Do"];

// Mapping image URLs to custom names (you can expand this as needed)
const imageNameMapping = {
  "bora_01.jpg": "Beautiful Bora Beach",
  "bora_02.jpg": "Stunning Sunset",
  "bora_03.webp": "Crystal Clear Waters",
  "bora_04.jpg": "Luxurious Resort",
  "bora_05.jpg": "Tropical Paradise",
  "bora_06.jpg": "Serene Nature",
  "bora_people_01.jpg": "Explore Adventure",
  "bora_people_02.jpg": "Local Culture",
  "bora_people_03.jpg": "Island Life",
  // Add more mappings as needed
};

const LocationAttractions = () => {
  const firebaseImages = useFirebaseStorage("Bora Travel");

  // Extract and format the last three images from Firebase
  const lastThreeFirebaseImages = firebaseImages.slice(-3).map((url, index) => {
    const imagePath = decodeURIComponent(url.split("/").pop().split("?")[0]);
    const imageName = HorizontalTitleImages[index] || `Image ${index + 1}`; // Assign titles from the HorizontalTitleImages array

    return {
      id: index + 1,
      title: imageName,
      image: url,
      link: "#",
    };
  });

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
                key={index}
                image={url}
                title={imageName}
                location="Bora Travel"
                link="#"
              />
            );
          })}
        </GridContainer>
      </div>

      {/* Separate Section for Last Three Images */}
      <div className="mt-8 flex justify-between gap-4 mb-8">
        {lastThreeFirebaseImages.map((item) => (
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
};

export default LocationAttractions;
