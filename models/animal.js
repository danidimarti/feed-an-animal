const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const animalSchema = new Schema({
  name: { type: String, required: true},
  //small case identiier for url and partials 
  indentifier: { type: String, required: true, unique: true },
  origin: String,
  age: Number,
  favoritefood: String,
  plan: { 
    once: { type: Number, required: true},
    monthly: { type: Number, required: true }
  },
  description: String,
  image: String,
  video: String,
  button: String,
  species: { type: String, required: true },
  bgimg: { type: String, required: true},
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;






