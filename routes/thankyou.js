const express = require('express');
const router  = express.Router();
const Donor = require('../models/donor')


router.get('/thankyou', (req, res, next) => {
  console.log(req.donor.name)
  res.send("test")
Donor.find()
.then(donors =>{
  res.render('thankyou', {donor:donors});
})
.catch(err => {
  console.log('no thanks', err)
})
});

module.exports = router;


