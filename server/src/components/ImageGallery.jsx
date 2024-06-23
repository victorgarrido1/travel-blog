// client/src/components/ImageGallery.jsx

import React from 'react';
import useFirebaseStorage from '../hooks/useFireBaseStorage';

const ImageGallery = ({ storagePath }) => {
  const files = useFirebaseStorage(storagePath); // Use the custom hook

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {files.map((file, index) => (
        <div key={index} className="p-4">
          <img
            src={file.url}
            alt={`Storage item ${index}`}
            className="w-full h-auto object-cover rounded-lg shadow-md"
          />
          <p className="text-sm text-gray-500">Path: {file.path}</p> {/* Display file path */}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
