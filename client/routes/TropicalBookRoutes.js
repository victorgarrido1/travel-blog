import express from 'express';
import TropicalBook from '../models/TropicalBookModel.js';

const router = express.Router();

// Get all tropical books
router.get('/', async (req, res) => {
  console.log('Received request to fetch all tropical books');
  try {
    const books = await TropicalBook.find();
    console.log('Successfully fetched tropical books:', books);
    res.json(books);
  } catch (err) {
    console.error('Error fetching the books', err);
    res.status(500).json({ message: err.message });
  }
});

// Post a new tropical book (Route for the admin)
router.post('/tropical-books', async (req, res) => {
  console.log('Received request to add a new tropical book:', req.body);
  const book = new TropicalBook({
    title: req.body.title,
    author: req.body.author,
    cover: req.body.cover,
    category: req.body.category,
  });
  try {
    const newBook = await book.save();
    console.log('Successfully added a new tropical book:', newBook);
    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error adding the book:', error);
    res.status(400).json({ message: error.message });
  }
});

// Get a single tropical book by ID
router.get('/tropical-books/:id', async (req, res) => {
  console.log('Received request to fetch tropical book by ID:', req.params.id);
  try {
    const book = await TropicalBook.findById(req.params.id);
    if (!book) {
      console.log('Cannot find book with ID:', req.params.id);
      return res.status(404).json({ message: 'Cannot find book' });
    }
    console.log('Successfully fetched tropical book:', book);
    res.json(book);
  } catch (error) {
    console.error('Error fetching the book:', error);
    res.status(500).json({ message: error.message });
  }
});

// Delete a tropical book by ID
router.delete('/tropical-books/:id', async (req, res) => {
  console.log('Received request to delete tropical book by ID:', req.params.id);
  try {
    const book = await TropicalBook.findByIdAndDelete(req.params.id);
    if (!book) {
      console.log('Cannot find book with ID:', req.params.id);
      return res.status(404).json({ message: 'Cannot find book' });
    }
    console.log('Successfully deleted tropical book:', book);
    res.json({ message: 'Deleted book' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ message: error.message });
  }
});

export default router;
