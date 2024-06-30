import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/book/books');
                console.log('Fetched data:', response.data); // Log the fetched data for debugging
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    console.log('Books state:', books); // Log the state to see its value during rendering

    return (
        <div>
            <h1>Books</h1>
            {Array.isArray(books) && books.length > 0 ? (
                <ul>
                    {books.map(book => (
                        <li key={book._id}>
                            <h2>{book.title}</h2>
                            <p>Author: {book.author}</p>
                            <img src={book.cover} alt={`${book.title} cover`} />
                            <p>Category: {book.category}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No books available</p>
            )}
        </div>
    );
};

export default BookList;
