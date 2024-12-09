const mongoose = require('mongoose'); // Corrected spelling of 'mongoose'
const bcrypt = require('bcrypt'); // Corrected spelling of 'require'
const jwt = require('jsonwebtoken'); // Corrected spelling of 'require'

const userSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: [3, 'First name must be at least 3 characters long'], // Fixed error message syntax
  },
  lastname: {
    type: String,
    minlength: [3, 'Last name must be at least 3 characters long'], // Fixed field description
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, 'Email must be at least 3 characters long'], // Fixed error message syntax
  },
  password: {
    type: String,
    required: true,
    select: false, // Ensures password is not included in query results by default
  },
  socketId: {
    type: String,
  },
});

// Instance method to generate a JWT token
userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET); // Ensure JWT_SECRET is set in your environment
  return token;
};

// Instance method to compare passwords
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Static method to hash a password
userSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

// Corrected the spelling of 'userModel' and ensured it uses mongoose
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;
