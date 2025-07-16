const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());
const urlRoutes = require('./routes/url.js');
require('dotenv').config();
const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));
app.use(express.json());

app.use('/', urlRoutes);



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
