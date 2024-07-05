import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BookSlider = ({ books, settings }) => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200 text-center">Book List</h1>
      <Slider {...settings} className="book-carousel">
        {books.map((book, index) => (
          <div 
            key={book._id} 
            className={`p-6 bg-gray-100 dark:bg-gray-800 rounded-lg mx-2 shadow-md text-center border border-gray-300 dark:border-gray-700 h-120 w-80 flex flex-col justify-between`}
          >
            <div className="p-2 rounded-sm mb-2 inline-block" style={{ backgroundColor: 'rgba(123, 137, 232, 0.5)' }}>
              <h3 className="text-lg font-semibold text-custom-blue-light">{index + 1}</h3>
            </div>
            <img src={book.cover} alt={book.title} className="w-48 h-64 object-cover mx-auto mb-4" />
            <div className="flex-grow overflow-hidden">
              <h3 className="mt-2 text-xl font-bold truncate">{book.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 truncate">{book.author}</p>
              <p className="text-gray-500 dark:text-gray-400 truncate">{book.category}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BookSlider;
