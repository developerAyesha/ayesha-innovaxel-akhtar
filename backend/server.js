const express = require('express');
const mongoose = require('mongoose');
const urlRoutes = require('./routes/url');
require('dotenv').config();
const app = express();
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
