const express = require('express');
const router = express.Router();
const Donation = require('../models/donation')
const Animal = require('../models/animal')


router.get('/thankyou', (req, res, next) => {
  Animal.findOne({ name: req.query.name })
    .then(animal => {
      console.log(animal)
      res.render('thankyou', {animal: animal});
    })
    .catch(err => {
      console.log('No thanks', err)
    })
});

module.exports = router;


