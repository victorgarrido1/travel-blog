import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import { PORT, mongoDB_URL } from './config.js';
import travelRoutes from './routes/travelroutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use error handling middleware only in development mode
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}

// Middleware for parsing the request body
app.use(express.json());


//this seems to work
// Sample route to check if the server is running 
app.get('/', (req, res) => {
    console.log("hello!!!!")
    // Logging specific properties of the request object
    console.log(`GET request received at ${req.url}`);
    // Sending a simple response
    return res.status(200).send("Welcome to the Stack of WorkPlace");
});

// Use the travel routes with the /travel prefix
app.use('/travel', travelRoutes);

// Connect to MongoDB
mongoose.connect(mongoDB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error connecting to MongoDB", err));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});