const express = require('express');
const router  = express.Router();
const Animal = require('../models/animal')



/* GET home page */
router.get('/', (req, res, next) => {
  //find animal database
Animal.find({})
.then(animals =>{
  console.log(animals)
  res.render('index', {animals});
})
.catch((err) => {
  console.log('Could not find animal', err)
})
});

module.exports = router;
