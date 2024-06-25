import React from "react";
import AttractionCard from "../components/locationAttractionComponents/AttractionCard";
import GridContainer from "../components/locationAttractionComponents/GridContainer";
import HorizontalImageBox from "../components/locationAttractionComponents/HorizontalImageBox";
import TrendingContent from "../components/locationAttractionComponents/TrendingContent";
import useFirebaseStorage from "../hooks/useFireBaseStorage";

// Titles for the last three images to be displayed in a separate section
const HorizontalTitleImages = ["Things to Do", "Events This Weekend", "Free Things to Do"];

const GridContainerTitles = [
  "Popular Attractions",
  "Hidden Gems",
  "Must-See Landmarks",
  "Top-Rated Activities"
];

// Mapping image URLs to custom names
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

// Default names array
const defaultNames = [
  "Beautiful Bora Beach",
  "Stunning Sunset",
  "Crystal Clear Waters",
  "Luxurious Resort",
  "Tropical Paradise",
  "Serene Nature"
];

// Default locations array with travel agency information
const defaultLocations = [
  "Bora Adventures (Travel Lit Provided)",
  "Bora Adventures (Travel Lit Provided)",
  "Bora Adventures (Travel Lit Provided)",
  "Bora Adventures (Travel Lit Provided)",
  "Bora Adventures (Travel Lit Provided)"
];

const LocationAttractions = () => {
  // Hook to fetch images from Firebase Storage for the "Bora Travel" directory
  const firebaseImages = useFirebaseStorage("Bora Travel");

  // Get the last three images from the fetched images and format them with titles and links
  const lastThreeFirebaseImages = firebaseImages.slice(-3).map((url, index) => {
    const imagePath = decodeURIComponent(url.split("/").pop().split("?")[0]); // Decode the image path to get the filename
    const imageName = HorizontalTitleImages[index] || `Image ${index + 1}`; // Assign a title from the HorizontalTitleImages array

    return {
      id: index + 1, // Unique ID for each image
      title: imageName, // Title for the image
      image: url, // URL of the image
      link: "#", // Placeholder link
    };
  });

  // Slice the firebaseImages to get only the first six images
  const firstSixFirebaseImages = firebaseImages.slice(0, 6);

  // Divide the six images into two groups of three images each
  const firstThreeImages = firstSixFirebaseImages.slice(0, 3);
  const nextThreeImages = firstSixFirebaseImages.slice(3, 6);

  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-800">
      {/* Main title for the page */}
      <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-300 p-4 mb-6">
        Location Attractions
      </h1>

      {/* Featured attraction section */}
      <div className="md:flex group bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex-shrink-0 overflow-hidden">
          <img
            className="w-full h-64 object-cover md:h-full transition-transform transform duration-300 ease-in-out group-hover:scale-105"
            src="https://craftypixels.com/placeholder-image/435x287/3048bf/8f8f8f&text=Bora"
            alt="Attraction" // Placeholder image and text
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

      {/* Description section */}
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

      {/* Grid container for attraction cards */}
      {GridContainerTitles.slice(0, 2).map((title, gridIndex) => {
        const imagesToShow = gridIndex === 0 ? firstThreeImages : nextThreeImages;
        return (
          <div className="mt-8" key={gridIndex}>
            <GridContainer title={title}>
              {imagesToShow.map((url, index) => {
                const imagePath = decodeURIComponent(url.split("/").pop().split("?")[0]);
                const defaultIndex = gridIndex * 3 + index; // Calculate the correct index for the defaultNames array
                const imageName = imageNameMapping[imagePath] || defaultNames[defaultIndex] || `Default Image ${defaultIndex + 1}`; // Use the default name from array
                const location = defaultLocations[defaultIndex] || `Default Location ${defaultIndex + 1}`; // Use the default location from array

                return (
                  <AttractionCard
                    key={index} // Unique key for each card
                    image={url} // URL for the image
                    title={imageName} // Title for the card
                    location={location} // Location for the card
                    link="#" // Placeholder link
                  />
                );
              })}
            </GridContainer>
          </div>
        );
      })}

      {/* Separate Section for Last Three Images */}
      <div className="mt-8 flex justify-between gap-4 mb-8">
        {lastThreeFirebaseImages.map((item) => (
          <HorizontalImageBox
            key={item.id} // Unique key for each image box
            image={item.image} // Image URL
            title={item.title} // Title for the image
            link={item.link} // Link for the image
          />
        ))}
      </div>

      {/* Trending Content Section */}
      <TrendingContent />
    </div>
  );
};

export default LocationAttractions;