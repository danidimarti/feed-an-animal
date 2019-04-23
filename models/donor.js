const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const donorSchema = new Schema({
  gender: String,
  firstname: String,
  lastname: String,
  email: String,
  number: Number,

});

const Donor = mongoose.model('Donor', donorSchema);
module.exports = Donor;






