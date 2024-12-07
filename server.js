const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const Ticker = require('./models/Ticker');
const dataRoute = require('./routes/dataRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api', dataRoute);

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017/hodlinfo';
mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));








    // Start the server
    app.listen(8080, () => {
      console.log('Server running on http://localhost:8080');
    });
  
  


