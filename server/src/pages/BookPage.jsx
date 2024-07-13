import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookSlider from "../components/home/booksComponents/booksSlider"; // Import the BookSlider component
import TropicalBookSlider from '../components/home/booksComponents/TropicalBookSlider'; // Import the TropicalBookSlider component

const BookPage = () => {
  const [books, setBooks] = useState([]);
  const [tropicalBooks, setTropicalBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        console.log('Fetching books...');
        const response = await axios.get('http://localhost:5554/api/book/books'); // Correct URL
        console.log('Books fetched successfully:', response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    const fetchTropicalBooks = async () => {
      try {
        console.log('Fetching tropical books...');
        const response = await axios.get('http://localhost:5554/api/tropical-book'); // Correct URL for tropical books
        console.log('Response received:', response);
        console.log('Tropical BOOK DATA:', response.data);
        console.log('Tropical books fetched successfully:', response.data);
        setTropicalBooks(response.data);
      } catch (error) {
        console.error('Error fetching tropical books:', error);

        // Detailed error logging
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          // The request was made but no response was received
          console.error('Request made but no response received:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.error('Error setting up request:', error.message);
        }
        console.error('Error config:', error.config);
      }
    };

    fetchBooks();
    fetchTropicalBooks();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  const tropicalSettings = {
    dots: true,
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  return (
    <div>
      <BookSlider books={books} settings={settings} title="Main Book List" />
      <TropicalBookSlider books={tropicalBooks} settings={tropicalSettings} title="Tropical Book List" />
    </div>
  );
};

export default BookPage;
