const app = require('./app');
const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.DB_URI;

const run = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Database connection successful");
    app.listen(8000, () => {
      console.log("Server running. Use our API on port: 8000");
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  };
};

run();