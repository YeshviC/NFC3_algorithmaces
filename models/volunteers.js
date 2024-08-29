const mongoose = require('mongoose');

// Define the user schema
const volunteers_schema = new mongoose.Schema({
  username:{ type: String, required: true},
  project_name: { type: String, required: true},
  time: { type: String, required: true, minlength: 1 },
  reference: { type: String, required: true, minlength: 5},
  why: { type: String, required: true, minlength: 5},

});

// Create a model from the schema
const volunteer = mongoose.model('volunteers', volunteers_schema);

module.exports = volunteer;