const express = require('express');
const router = express.Router();
const Business = require('../models/business.model');

// Create a new business
router.post('/', async (req, res) => {
  try {
    const newBusiness = new Business(req.body);
    await newBusiness.save();
    res.status(201).json(newBusiness);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all businesses
router.get('/', async (req, res) => {
  try {
    const businesses = await Business.find();
    res.json(businesses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;  // ✅ Make sure to export `router`
