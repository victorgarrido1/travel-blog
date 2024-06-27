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
      image: 'https://i.postimg.cc/rynGTcJS/teeshirt.jpg'
    },
    {
      name: 'Beach Sandals',
      price: 19.99,
      inStock: true,
      image: 'https://i.postimg.cc/TwHctXNq/beachsandles.jpg'
    },
    {
      name: 'Sun Hat',
      price: 15.49,
      inStock: false,
      image: 'https://i.postimg.cc/k5mKs5Jd/sunhat.jpg'
    },
    {
      name: 'Sunglasses',
      price: 49.99,
      inStock: true,
      image: 'https://i.postimg.cc/Z5FCTxS1/sunglasses.jpg'
    },
    {
      name: 'Swim Trunks',
      price: 24.99,
      inStock: true,
      image: 'https://i.postimg.cc/449VhMRc/trunks.jpg'
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
