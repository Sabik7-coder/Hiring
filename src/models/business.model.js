const mongoose = require('mongoose');

const BusinessSchema = new mongoose.Schema({
  business_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile_number: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  opening_time: { type: String },
  closing_time: { type: String },
  restaurant_image: { type: String }
});

module.exports = mongoose.model('Business', BusinessSchema);  // ✅ Ensure model is exported correctly
