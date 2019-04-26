const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const donorSchema = new Schema({
  plan: String,
  gender: String,
  firstname: String,
  lastname: String,
  email: String,
  number: Number,
  animal: [ { type : Schema.Types.ObjectId, ref: 'Animal' } ]
 });




const Donor = mongoose.model('Donor', donorSchema);
module.exports = Donor;






