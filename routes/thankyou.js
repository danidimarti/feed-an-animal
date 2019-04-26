const express = require('express');
const router  = express.Router();

const Donation = require('../models/donation')



router.get('/thankyou', (req, res, next) => {
  const {gender, firstname, lastname, email, number } = req.body;
  const newDonation = new Donation(req.body)

  res.render('thankyou', {name: req.query.name});
});

module.exports = router;


