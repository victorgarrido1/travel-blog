import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import { PORT, mongoDB_URL } from './config.js';
import travelRoutes from './routes/travelroutes.js';
import cors from 'cors'

// Load environment variables from .env file
dotenv.config();

const app = express();

// Use error handling middleware only in development mode
if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler());
}

// Middleware for parsing the request body
app.use(express.json());

//allow All origns with default cors
app.use(cors());

app.use(
    cors({ 
        origin: 'http://localhost:5554',
        methods: [ 'GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type']
    })
)




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
   
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error connecting to MongoDB", err));


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Route for Get All Books from database
// router.get('/', async (request, response) => {
//     try {
//       const books = await Book.find({});
  
//       return response.status(200).json({
//         count: books.length,
//         data: books,
//       });
//     } catch (error) {
//       console.log(error.message);
//       response.status(500).send({ message: error.message });
//     }
//   });