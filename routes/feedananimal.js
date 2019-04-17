const express = require('express');
const router  = express.Router();
const Animal = require('../models/animal')

router.get("/feed-an-animal/:name", (req, res, next) => {
console.log(req.params.name)
  Animal.findOne({name: req.params.name})
.then(animal =>{
  res.render('feedananimal', animal);
})
.catch(err => {
  console.log('Could not feed the animal', err)
})
});

module.exports = router;



