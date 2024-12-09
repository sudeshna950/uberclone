const express = require('express');
const dotenv = require('dotenv');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');

 connectToDb();

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware for parsing JSON (optional, depending on your needs)
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// Define routes (example route)
app.get('/', (req, res) => {
  res.send('Hello, world, I am sudeshna!');
});

app.use('/users', userRoutes);


 
// Export the app for use in server.js
module.exports = app;
