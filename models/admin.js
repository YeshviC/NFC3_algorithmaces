const mongoose = require('mongoose');

// Define the user schema
const project_schema = new mongoose.Schema({
 
  project_name: { type: String, required: true},
  project_description: { type: String, required: true, minlength: 1 },
  volunteers: { type: String, required: true, minlength: 1 },
});

const event_schema = new mongoose.Schema({
 
    event_name: { type: String, required: true},
    event_description: { type: String, required: true, minlength: 1 },
    date: { type: Date, required: true, minlength: 1 },
    venue: { type: String, required: true, minlength: 1 },
    volunteers: { type: String, required: true, minlength: 1 },
});


const inventory_schema = new mongoose.Schema({
 
    item: { type: String, required: true, unique: true },
    quantity: { type: String, required: true, minlength: 1 },
    event:{ type: String, required: true, minlength: 1 },
    
});

// Create a model from the schema
const event = mongoose.model('events', event_schema);
const projects = mongoose.model('projects', project_schema);
const inventory = mongoose.model('inventory', inventory_schema);

module.exports = {projects, event, inventory};