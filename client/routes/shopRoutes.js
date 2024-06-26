import express from "express";
import { ShopItem } from "../models/shopModel.js";

const router = express.Router();

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const item = await ShopItem.findById(id);

    // Check if the item was found
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Send the found item in the response
    return res.status(200).json(item);
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({ message: "Server error" });
  }
});

//this is the route to create a single new item for the shop
router.post("/", async (req, res) => {
  const { name, price, inStock } = req.body;
  const newItem = new ShopItem({ name, price, inStock });

  try {
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

///this route is in charge top update the item by using its ID
router.put("/:id", async (req, res) => {
  //this const is the id from the mongodb _id
  const { id } = req.params;
  //then by using {} allows the data to be spread and it is used from the body of the data
  const { name, price, inStock } = req.body;

  try {
    const item = await ShopItem.findOneAndUpdate(
      id,
      { name, price, inStock },
      { new: true }
    );

    //check to see if the item was found and updated
    if (!item) {
      return res.status(404).json({ message: "Item not found " });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

  //then this is the route where we delete the item
  router.delete("/:id", async (req, res) => {
    try {
      //first make a variable where we can hold what we want to delete
      const { id } = req.params;
      const item = await ShopItem.findByIdAndDelete(id);

      //check to see if the item was found and deleted
      if (!item) {
        return res.status(404).json({ message: "Item not found " });
      }

      //if it works we then send them the response back saying it was good.
      res.status(200).json({ message: "Item successfully deleted " });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
});

export default router;
