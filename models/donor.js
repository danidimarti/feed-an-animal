const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const donorSchema = new Schema({
  name: String,
  age: Number,
  email: String,
  
});

const Donor = mongoose.model('Donor', donorSchema);
module.exports = Donor;






