// client/src/components/ImageGallery.jsx

import React from 'react';
import useFirebaseStorage from '../hooks/useFireBaseStorage';

const imageNameMapping = {
    'Bora Travel/bora_01.jpg': 'Beautiful Bora Beach',
    'Bora Travel/bora_02.jpg': 'Stunning Sunset',
    'Bora Travel/bora_03.webp': 'Crystal Clear Waters',
    'Bora Travel/bora_04.jpg': 'Luxurious Resort',
    'Bora Travel/bora_05.jpg': 'Tropical Paradise',
    'Bora Travel/bora_06.jpg': 'Serene Nature',
    // Add more mappings here
  };
  
  const ImageGallery = ({ storagePath }) => {
    const files = useFirebaseStorage(storagePath); // Use the custom hook
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {files.map((file, index) => {
          const fileName = file.split('/').pop(); // Extract the file name from the URL
          const imagePath = `Bora Travel/${fileName}`; // Construct the key
          const imageName = imageNameMapping[imagePath] || `Image ${index + 1}`; // Use custom name or default
  
          return (
            <div key={index} className="p-4">
              <img
                src={file}
                alt={imageName}
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
              <p className="text-sm text-gray-500">{imageName}</p> {/* Display custom name */}
            </div>
          );
        })}
      </div>
    );
  };
  
  export default ImageGallery;