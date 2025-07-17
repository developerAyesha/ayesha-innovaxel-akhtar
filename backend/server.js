const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const urlRoutes = require('./routes/url.js');
require('dotenv').config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
connectDB();
app.use(express.json());

app.use('/', urlRoutes);




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
