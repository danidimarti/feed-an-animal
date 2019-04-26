const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const subsSchema = new Schema({
  email: String,
  firstname: String,
  
 });




const Subscriber = mongoose.model('Subscriber', subsSchema);
module.exports = Subscriber;






