const mongoose=require("mongoose");
// Define the user schema
const donor_schema = new mongoose.Schema({
    uname: { type: String, required: true},
    amount: { type: String, required: true},
   
  });
  
  // Create a model from the schema
  const donor = mongoose.model('donor', donor_schema);
  
  module.exports = donor;