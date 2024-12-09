const userModel = require('../models/user.model');
const userService = require('../services/user.service'); // Corrected spelling of 'require'
const { validationResult } = require('express-validator');

module.exports.registerUser = async (req, res, next) => {
  // Validate request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

 

  // Extract data from the request body
  const { fullname, email, password } = req.body; // Fixed 'passowrd' typo

  try {
    // Hash the password
    const hashedPassword = await userModel.hashPassword(password);

    // Create a new user using the service
    const user = await userService.createUser({
      firstname : fullname.firstname,
      lastname: fullname.lastname,
      email,
      password: hashedPassword,
    });

    // Generate authentication token
    const token = user.generateAuthToken();

    // Respond with the token and user details
    res.status(201).json({ token, user });
  } catch (err) {
    // Handle errors and pass them to the next middleware
    next(err);
  }
};
