import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5554/book/books');  // Correct URL
        console.log(response.data);
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  console.log('book state', books);

  return (
    <div>
      <h1>Book List</h1>
      <div className="book-list">
        {books.map((book) => (
          <div key={book._id} className="book-card">
            <img src={book.cover} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;