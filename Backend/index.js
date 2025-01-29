const mongoose = require('mongoose');
require('dotenv').config(); 
const express = require('express');
const userRoute = require('./Routes/user')
const productRoute = require('./Routes/productRoutes')
const app = express();
// Get variables from .env
const PORT = process.env.PORT || 8000 
// // const ATLAS_URL = process.env.ATLAS_URL;
// const cros = require("cros");

// app.use(cors());


app.use(express.json());

app.use('/users', userRoute);

app.use('/api', productRoute);

// Connecting to atlas database
const connect = async () => {
    try {
        await mongoose.connect("mongodb+srv://roshantapre666:roshan@productdatabase.h83gl.mongodb.net/productwale?retryWrites=true&w=majority&appName=Productdatabase");
        console.log("Connected to MongoDB Atlas");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
    
};
 


// run on local host
app.listen(PORT,()=>{
    connect();
    console.log(`Server running on port ${PORT}`);
})
