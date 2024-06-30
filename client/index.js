import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import cors from 'cors';
import { PORT, mongoDB_URL } from './config.js';
import travelRoutes from './routes/travelRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import bookRoutes from './routes/bookRoutes.js';  // Import book routes

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use error handling middleware only in development mode
if (process.env.NODE_ENV === 'development') {
  app.use(errorhandler());
}

// Middleware for parsing the request body as JSON
app.use(express.json());

// Allow all origins with default CORS settings
app.use(cors({
  origin: 'http://localhost:5173'  // Allow your frontend's origin
}));

// Sample route to check if the server is running
app.get('/', (req, res) => {
  console.log('Received GET request at /');
  res.status(200).send('Welcome to the Stack of WorkPlace');
});

// Use the travel routes with the /travel prefix
app.use('/travel', travelRoutes);

// Use the shop routes with the /shop prefix
app.use('/shop', shopRoutes);

// Use the book routes with the /book prefix
app.use('/book', bookRoutes);  // Use /book prefix

// Connect to MongoDB
mongoose
  .connect(mongoDB_URL)
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.log('Error connecting to MongoDB:', err));


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});