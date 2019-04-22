const mongoose = require('mongoose')
const Schema   = mongoose.Schema;

const animalSchema = new Schema({
  name: String,
  origin: String,
  age: Number,
  favoritefood: String,
  foodcost: Number,
  description: String,
  image: String,
  video: String,
  button: String,
  species: String,
});

const Animal = mongoose.model('Animal', animalSchema);
module.exports = Animal;






