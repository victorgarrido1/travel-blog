import express from "express";
import { Location } from "../models/travelModel.js";

const router = express.Router();

// Route for saving a destination
router.post("/add", async (req, res) => {
  try {
    console.log("Request Body:", req.body); // Log the request body for debugging

    // Create a new location instance with data from the request body
    const newLocation = new Location(req.body);

    // Save the location to the database
    await newLocation.save();

    // Send a success response with the saved location data
    res.status(201).json(newLocation);
  } catch (err) {
    console.error("Error saving the location:", err); // Log the error
    // Handle any errors that occur during saving
    res.status(500).json({ message: "Error saving the location", error: err });
  }
});

// Route for getting all places from the database
router.get("/", async (req, res) => {
  try {
    // Retrieve all locations from the database
    const locations = await Location.find({});

    // Send the retrieved locations in the response
    return res.status(200).json({
      count: locations.length,
      data: locations,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

// Route for getting one location by ID from the database
router.get("/:id", async (req, res) => {
  try {
    // Extract the ID from the request parameters
    const { id } = req.params;

    // Find the location by its ID
    const location = await Location.findById(id);

    // Check if the location was found
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }

    // Send the found location in the response
    return res.status(200).json(location);
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

// Route for deleting a location by ID from the database
router.delete("/:id", async (req, res) => {
  try {
    // Extract the ID from the request parameters
    const { id } = req.params;

    // Find and delete the location by its ID
    const result = await Location.findByIdAndDelete(id);

    // Check if the location was found and deleted
    if (!result) {
      return res.status(404).json({ message: "Location not found" });
    }

    // Send a success message in the response
    return res.status(200).json({ message: "Location has been deleted" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: err.message });
  }
});

//route to be able to update a location 
router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params 
    const updatedLocation = await Location.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedLocation) {
      return res.status(404).send("Location not found");
    } 
    res.status(200).send(updatedLocation); //this is in charge of updating the res

  } catch (err) {
    res.status(500).send(err.message);
  }
})

export default router;
