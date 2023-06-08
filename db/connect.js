const mongoose = require('mongoose');

// Connect to MongoDB
const connectDB = async () => {
    return mongoose.connect('mongodb://0.0.0.0:27017/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  };
  
module.exports = connectDB;