const express = require('express');
const router  = express.Router();
const Donor = require('../models/donor')


router.get('/thankyou', (req, res, next) => {
  res.render('thankyou', {name: req.query.name});
});

module.exports = router;


