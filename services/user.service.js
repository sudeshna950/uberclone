const userModel = require('../models/user.model');

module.exports.createUser = async ({ firstname, lastname, email, password }) => {
  if (!firstname || !email || !password) {
    throw new Error('Please fill all the required fields');
  }

  try {
    // Create a new user in the database
    const user = await userModel.create({
      fullname: {
        firstname,
        lastname, // lastname can be optional if the schema allows
      },
      email,
      password,
    });

    return user;
  } catch (err) {
    // Handle potential errors during user creation
    throw new Error(`Error creating user: ${err.message}`);
  }
};
