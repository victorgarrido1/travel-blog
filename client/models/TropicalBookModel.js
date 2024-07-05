import mongoose from "mongoose";

const tropicalBookSchema = new mongoose.Schema({ 
    title: { type: String, required: true },
    author: { type: String, required: true },
    cover: { type: String, required: true },
    category: { type: String, required: true },
});

const TropicalBook = mongoose.model('TropicalBook', tropicalBookSchema);

export default TropicalBook;
