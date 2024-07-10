import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT || 5554;

export const mongoDBOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

export const mongoDB_URL = process.env.MONGODB_URL;
