const mongoose = require("mongoose");

const OwnerSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobile_number: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true },
    profile_pic: { type: String } // URL of uploaded profile picture
}, { timestamps: true });

module.exports = mongoose.model("Owner", OwnerSchema);
