import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import { PORT, mongoDB_URL } from './config.js';
import travelRoutes from './routes/travelroutes.js';
import cors from 'cors';
import path from 'path';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use error handling middleware only in development mode
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}

// Middleware for parsing the request body
app.use(express.json());

// Allow all origins with default CORS
app.use(cors());

// Use the travel routes with the /travel prefix
app.use('/api', travelRoutes);



// Sample route to check if the server is running 
app.get('/', (req, res) => {
    console.log("Hello!!!!");
    // Logging specific properties of the request object
    console.log(`GET request received at ${req.url}`);
    // Sending a simple response
    return res.status(200).send("Welcome to the Stack of WorkPlace");
});

// Route to serve date prices
// Route to serve date prices
app.get('/api/date-prices', (req, res) => {
    const filePath = path.join(__dirname, '../server/data/datePrices.json');
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(500).send({ err: 'Failed to read file' });
        }
    });
});

// Connect to MongoDB
mongoose.connect(mongoDB_URL, {
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error connecting to MongoDB", err));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
