const express = require('express');
const router = express.Router();
const userModel = require('../models/user.model'); // Ensure the file path is correct
const userController = require('../controllers/user.controller'); // Ensure this file exists and is implemented
const { body } = require('express-validator');


// POST route for user registration
router.post(
  '/register',
  [
    // Validation for the 'email' field
    body('email')
      .isEmail()
      .withMessage('Invalid Email'),

    // Validation for the 'fullname.firstname' field
    body('fullname.firstname')
      .isLength({ min: 3 })
      .withMessage('First name must be at least 3 characters long'),

    // Validation for the 'password' field
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters long'),
  ],
  userController.registerUser // Controller method to handle the request
);

console.log('Resolved Path:', require.resolve('../models/user.model'));


module.exports = router;
