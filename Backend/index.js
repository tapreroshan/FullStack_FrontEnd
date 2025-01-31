const mongoose = require('mongoose');
require('dotenv').config(); 
const express = require('express');
const userRoute = require('./Routes/user')
const productRoute = require('./Routes/productRoutes')
const app = express();
// Get variables from .env
const PORT = process.env.PORT || 8000 
const ATLAS_URL = process.env.ATLAS_URL;
const cors = require("cors");

app.use(cors());


app.use(express.json());

app.use('/users', userRoute);

app.use('/api', productRoute);

// Connecting to atlas database
const connect = async () => {
    try {
        await mongoose.connect(ATLAS_URL);
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
