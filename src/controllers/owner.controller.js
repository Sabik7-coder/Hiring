const Owner = require("../models/owner.model");

// Create an owner
exports.createOwner = async (req, res) => {
    try {
        const newOwner = new Owner(req.body);
        await newOwner.save();
        res.status(201).json(newOwner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all owners
exports.getAllOwners = async (req, res) => {
    try {
        const owners = await Owner.find();
        res.json(owners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
