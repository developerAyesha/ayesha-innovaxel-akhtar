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
router.get('/shorten/:shortCode', async (req, res) => {
    const { shortCode } = req.params;
    const urlData = await Url.findOne({ shortCode });
    if (!urlData) return res.status(404).json({ error: 'Not found' });
    urlData.accessCount++;
    await urlData.save();
    res.status(200).json(urlData);
});

module.exports = router;