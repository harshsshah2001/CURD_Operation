const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  // Add other fields as needed
});

const User = mongoose.model('User', userSchema);

module.exports = User;
