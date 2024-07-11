import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { PORT, mongoDB_URL } from './config.js';
import travelRoutes from './routes/travelRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import bookRoutes from './routes/bookRoutes.js'; // Import book routes
import TropicalBookRoutes from './routes/TropicalBookRoutes.js';

// Load environment variables from .env file
dotenv.config();

console.log("Environment Variables:");
console.log("MONGODB_URL:", process.env.MONGODB_URL);
console.log("PORT:", process.env.PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);

// Check if routes directory and files exist
const checkFiles = () => {
  const routesPath = path.resolve('./routes');
  console.log('Routes Path:', routesPath);
  fs.readdir(routesPath, (err, files) => {
    if (err) {
      console.error('Error reading routes directory:', err);
    } else {
      console.log('Files in routes directory:', files);
    }
  });
};

checkFiles();

const app = express();

// Use error handling middleware only in development mode
if (process.env.NODE_ENV === "development") {
  app.use(errorhandler());
}

// Middleware for parsing the request body as JSON
app.use(express.json());

// Set CORS options
const corsOptions = {
  origin:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5173" // Allow your local frontend's origin for development
      : "https://travel-lit-lounge-project.netlify.app", // Allow your production frontend's origin
  optionsSuccessStatus: 200,
};

// Allow all origins with default CORS settings
app.use(cors(corsOptions));

// Sample route to check if the server is running
app.get("/", (req, res) => {
  console.log("Received GET request at /");
  res.status(200).send("Welcome to the Stack of WorkPlace");
});

// Use the travel routes with the /api/travel prefix
app.use("/api/travel", travelRoutes);

// Use the shop routes with the /api/shop prefix
app.use("/api/shop", shopRoutes);

// Use the book routes with the /api/book prefix
app.use("/api/book", bookRoutes);

// Use the tropical book routes with the /api/tropical-book prefix
app.use("/api/tropical-book", TropicalBookRoutes);

// Connect to MongoDB
mongoose
  .connect(mongoDB_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
