import express from 'express';
import Book from '../models/bookModel.js';

const router = express.Router();

// Fetch all books
router.get('/books', async (req, res) => {
    try {
        const books = await Book.find({});
        res.json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new book
router.post('/books', async (req, res) => {
    const { title, author, cover, category } = req.body;
    const book = new Book({ title, author, cover, category });

    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router;
