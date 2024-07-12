import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import errorhandler from 'errorhandler';
import cors from 'cors';
import { PORT, mongoDB_URL } from './config.js';
import travelRoutes from './routes/travelRoutes.js';
import shopRoutes from './routes/shopRoutes.js';
import bookRoutes from './routes/bookRoutes.js';
import tropicalBookRoutes from './routes/TropicalBookRoutes.js';

dotenv.config();

const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(errorhandler());
}

app.use(express.json());

const corsOptions = {
  origin:
    process.env.NODE_ENV === "development"
      ? "http://localhost:5173"
      : "https://travel-lit-lounge-project.netlify.app",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Stack of WorkPlace");
});

app.use("/api/travel", travelRoutes);
app.use("/api/shop", shopRoutes);
app.use("/api/book", bookRoutes);
app.use("/api/tropical-book", tropicalBookRoutes);

mongoose
  .connect(mongoDB_URL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.log("Error connecting to MongoDB:", err));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
