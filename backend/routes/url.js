const express = require('express');
const router = express.Router();
const Url = require('../models/Url');
const { nanoid } = require('nanoid');

router.post('/shorten', async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: 'URL is required' });
    const shortCode = nanoid(6);
    const newUrl = await Url.create({ url, shortCode });
    res.status(201).json(newUrl);
});

module.exports = router;