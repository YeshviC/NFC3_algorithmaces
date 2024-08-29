const mongoose = require('mongoose');

// Define the user schema
const register_schema = new mongoose.Schema({
  first_name: { type: String, required: true},
  last_name: { type: String, required: true},
  gender: { type: String, required: true},
  age: { type: String, required: true},
  city: { type: String, required: true},
  phno: { type: String, required: true},
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 }
});

// Create a model from the schema
const register = mongoose.model('registers', register_schema);

module.exports = register;