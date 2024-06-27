import mongoose from 'mongoose';

const shopItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Boolean, required: true },
  image: { type: String, required: true } // Add the image field
});

export const ShopItem = mongoose.model('ShopItem', shopItemSchema);
