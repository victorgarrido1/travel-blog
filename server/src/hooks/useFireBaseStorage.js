// src/hooks/useFirebaseStorage.js
import { useState, useEffect } from 'react';
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from './firebaseConfig'; // Adjust path if necessary

const useFirebaseStorage = (path) => {
  const [urls, setUrls] = useState([]); // State to store image URLs

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, path); // Reference to the storage path

      try {
        const res = await listAll(listRef); // List all files at the path

        // Fetch URLs for each file
        const urlPromises = res.items.map(itemRef => getDownloadURL(itemRef));
        const urlList = await Promise.all(urlPromises);

        // Update state with URLs
        setUrls(urlList);
      } catch (error) {
        console.error('Error fetching images from Firebase Storage:', error); // Log errors
      }
    };

    fetchImages(); // Invoke fetch function on mount and path change
  }, [path]);

  return urls; // Return URLs array
};

export default useFirebaseStorage;
