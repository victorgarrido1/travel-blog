import express from 'express';
import {PORT, momgoDBURL } from './config.js';
import mongoose from 'mongoose';
import travelRoutes from './routes'

const app = express();

//sample route to check to see if the server is running 
app.get('/', (req, res) => {
    res.send("Server is now running");
});

//connect to mongoDB
mongoose.connect(mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("Error connecting to MongoDB", err));


//then we start the server here 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}) ;