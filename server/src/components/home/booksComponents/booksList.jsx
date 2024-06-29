import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await axios.get('/api/books');
                console.log(response.data); // Add this line to debug the fetched data
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchBooks();
    }, []);

    if (!Array.isArray(books)) {
        return <div>Error: Data fetched is not an array</div>;
    }

    return (
        <div>
            <h1>Books</h1>
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
        </div>
    );
};

export default BookList;
