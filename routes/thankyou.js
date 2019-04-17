const express = require('express');
const router  = express.Router();
const Animal = require('../models/animal')

app.get(`/youfed/${req.animals.name}`, (req, res, next) => {
  console.log(req.animals.name)
Animal.find()
.then(animals =>{
  res.render('thankyou', {animal:animals});
})
.catch(err => {
  console.log('no thanks', err)
})
});

module.exports = router;

})

