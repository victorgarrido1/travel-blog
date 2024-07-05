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
        const response = await axios.get('http://localhost:5554/book/books'); // Correct URL
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    const fetchTropicalBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5554/book/tropical-books'); // Correct URL for tropical books
        setTropicalBooks(response.data);
      } catch (error) {
        console.error('Error fetching tropical books:', error);
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
