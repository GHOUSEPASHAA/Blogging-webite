const mongoose = require('mongoose');
require('dotenv').config();

// It's good practice to store sensitive information like connection strings in environment variables
const uri = process.env.MONGODB_URI; // Make sure to set MONGODB_URI in your .env file

console.log('Connecting to MongoDB with URI:', uri);

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB Atlas:', error);
    });
