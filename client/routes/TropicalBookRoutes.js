import express from 'express';
import TropicalBook from '../models/TropicalBookModel.js';

const router = express.Router();

// Get All of the tropical books 
router.get('/tropical-books', async (req, res) => {
    try {
        const books = await TropicalBook.find();
        res.json(books);
    } catch (err) {
        console.error("Error fetching the books", err);
        res.status(500).json({ message: err.message });
    }
});

// Post a new Tropical Book //Route for the admin
router.post('/tropical-books', async (req, res) => {
    const book = new TropicalBook({
        title: req.body.title,
        author: req.body.author,
        cover: req.body.cover,
        category: req.body.category,
    });
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// GET a single tropical book by ID
router.get('/tropical-books/:id', async (req, res) => {
    try {
        const book = await TropicalBook.findById(req.params.id);
        if (book === null) {
            return res.status(404).json({ message: 'Cannot find book' });
        }
        res.json(book);
    } catch (error) {
        console.error('Error Fetching the book:', error);
        res.status(500).json({ message: error.message });
    }
});

// DELETE a tropical book by its ID
router.delete('/tropical-books/:id', async (req, res) => {
    try {
        const book = await TropicalBook.findByIdAndDelete(req.params.id);
        if (book == null) {
            return res.status(404).json({ message: 'Cannot find book' });
        }
        res.json({ message: 'Deleted book' });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: error.message });
    }
});

export default router;
