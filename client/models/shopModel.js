import mongoose from 'mongoose';

// Shop Item Schema
const shopItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  inStock: {
    type: Boolean,
    default: true
  }
});

// Export Shop Item model
export const ShopItem = mongoose.model('ShopItem', shopItemSchema);
