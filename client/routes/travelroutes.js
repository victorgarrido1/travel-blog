import express from 'express';
import { Location } from '../models/travelModel.js';

const router = express.Router();

// Route for Get All Places from the database
router.get('/', async (req, res, next) => {
  try {
    const locations = await Location.find({});

    return res.status(200).json({
      count: locations.length,
      data: locations
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

export default router;