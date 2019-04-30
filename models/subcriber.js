const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const subsSchema = new Schema({
  email: {type: String, required: true, unique: true },
  firstname: {type: String, required: true}
}, {
  timestamps: { 
    createdAt: "created_at", 
    updatedAt: "updated_at" }
 });




const Subscriber = mongoose.model('Subscriber', subsSchema);
module.exports = Subscriber;






