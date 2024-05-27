import express from 'express';
import { Location } from '../models/travelModel.js';

const router = express.Router();


//Route for saving a destination
router.post('/add', async (req, res) => {
  try {
    console.log('Request Body:', req.body); // Log the request body for debugging

    // Create a new location instance with data from the request body
    const newLocation = new Location(req.body);

    // Save the location to the database
    await newLocation.save();

    // Send a success response with the saved location data
    res.status(201).json(newLocation);
  } catch (err) {
    console.error('Error saving the location:', err); // Log the error
    // Handle any errors that occur during saving
    res.status(500).json({ message: "Error saving the location", error: err });
  }
});

// Route for Get All Places from the database
router.get('/', async (req, res, next) => {
  try {
    const locations = await Location.find({});

    return res.status(200).json({
    
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;