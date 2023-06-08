const mongoose = require('mongoose');

// Define a Mongoose schema
const dataSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    password1: String,
  },
  { 
    timestamps: true 
});
  
module.exports = mongoose.model('RGP', dataSchema);