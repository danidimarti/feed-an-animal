const express = require('express');
const router  = express.Router();
const Animal = require('../models/animal')
const Donor = require('../models/donor')




router.get("/:name", (req, res, next) => {
console.log(req.params.name)
console.log("test")
  Animal.findOne({name: req.params.name})
.then(animal =>{
  console.log(animal)
  res.render('feedananimal', animal);
})
.catch(err => {
  console.log('Could not feed the animal', err)
})
});

router.post("/donate", (req, res, next) => {
  const {gender, firstname, lastname, email, number } = req.body;
  const newDonor = new Donor(req.body)
  newDonor.save()
    .then((donor) => {
      res.redirect("/thankyou?name=" + req.query.name);
    })
    .catch((err)=> {
      console.log(err)
})
})

module.exports = router;






