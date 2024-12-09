const mongoose = require('mongoose');

const connectToDb = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.error('MongoDB connection string is missing in .env file.');
    process.exit(1); // Exit the application
  }

  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB successfully');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
    process.exit(1); // Exit the application
  }
};

module.exports = connectToDb;
