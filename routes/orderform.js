const express = require('express');
const router = express.Router();
const Donor = require('../models/donor')

router.get("/orderform", (req, res, next) => {
  res.render('orderform');

});

router.post("orderform", (req, res, next) => {
  const { name, age, email } = req.body;
  const newDonor = new Donor({ name, age, email })
  newDonor.save()
    .then((donor) => {
      res.redirect("/orderform");
    })
    .catch((err)=> {
      console.log(err)
})
})

module.exports = router;