const express = require("express");
const router = express.Router();
const Business = require("../models/business.model");
const Joi = require("joi");

// Joi Validation Schema
const businessSchema = Joi.object({
    business_name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    mobile_number: Joi.string().pattern(/^[0-9]{10}$/).required(),
    address: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required()
});

// POST API - Register a Business with Validation
router.post("/", async (req, res) => {
    const { error } = businessSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    try {
        const newBusiness = new Business(req.body);
        await newBusiness.save();
        res.status(201).json(newBusiness);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

// GET API - Fetch All Businesses
router.get("/", async (req, res) => {
    try {
        const businesses = await Business.find();
        res.json(businesses);
    } catch (error) {
        res.status(500).json({ error: "Server Error" });
    }
});

module.exports = router;
