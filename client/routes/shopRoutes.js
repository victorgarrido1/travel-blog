import express from "express";
import { ShopItem } from "../models/shopModel.js";

const router = express.Router();

// Get all clothing items
router.get("/clothing", async (req, res) => {
  try {
    const items = await ShopItem.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add multiple sample items
router.post('/add-sample-items', async (req, res) => {
  const sampleItems = [
    {
      name: 'Tropical Shirt',
      price: 29.99,
      inStock: true,
      image: 'https://postimg.cc/xkbRDvW1'
    },
    {
      name: 'Beach Sandals',
      price: 19.99,
      inStock: true,
      image: 'https://postimg.cc/bZ3tKJyr'
    },
    {
      name: 'Sun Hat',
      price: 15.49,
      inStock: false,
      image: 'https://postimg.cc/2LQqTj9z'
    },
    {
      name: 'Sunglasses',
      price: 49.99,
      inStock: true,
      image: 'https://postimg.cc/2LQqTj9z'
    },
    {
      name: 'Swim Trunks',
      price: 24.99,
      inStock: true,
      image: 'https://postimg.cc/zytyxc7R'
    },
  ];

  try {
    const items = await ShopItem.insertMany(sampleItems);
    res.status(201).json(items);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
