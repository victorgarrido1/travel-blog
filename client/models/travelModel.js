import mongoose from 'mongoose';

// Review Schema
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Amenities Schema
const amenitiesSchema = new mongoose.Schema({
  wifi: {
    type: Boolean,
    default: false
  },
  pool: {
    type: Boolean,
    default: false
  },
  breakfast: {
    type: Boolean,
    default: false
  },
  parking: {
    type: Boolean,
    default: false
  },
  airConditioning: {
    type: Boolean,
    default: true
  },
  kitchen: {
    type: Boolean,
    default: false
  }
});

// Location Schema
const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  summary: {
    type: String,
    required: true,
    trim: true
  },
  address: {
    street: {
      type: String,
      required: false,
      trim: true
    },
    city: {
      type: String,
      required: false,
      trim: true
    },
    state: {
      type: String,
      required: false,
      trim: true
    },
    country: {
      type: String,
      required: false,
      trim: true
    },
    zipCode: {
      type: String,
      required: false,
      trim: true
    }
  },
  spaceRoomInfo: {
    type: String,
    required: true,
    trim: true
  },
  userNotes: {
    type: String,
    trim: true
  },
  locationRules: {
    type: String,
    trim: true
  },
  locationType: {
    type: String,
    enum: ['City', 'Beach', 'Urban', 'Mountain', 'Rural'],
    required: true
  },
  familyFriendly: {
    type: Boolean,
    default: false
  },
  amenities: amenitiesSchema,
  numberOfReviews: {
    type: Number,
    default: 0
  },
  transitInfo: {
    type: String,
    trim: true
  },
  reviews: [reviewSchema]
}, {
  timestamps: true
});

// Export Location model
export const Location = mongoose.model('Location', locationSchema);