const express = require('express');
const router  = express.Router();
const Animal = require('../models/animal')
const Donor = require('../models/donor')


router.get("/:identifier", (req, res, next) => {
console.log(req.params.identifier)
  Animal.findOne({indentifier: req.params.identifier})
.then(animal =>{
  console.log("animal: ", animal)
  res.render('feedananimal', {animal});
})
.catch(err => {
  console.log('Could not feed the animal', err)
})
});

router.post("/donate", (req, res, next) => {
  const {plan, gender, firstname, lastname, email, number } = req.body;
  const newDonor = new Donor(req.body)
  newDonor.save()
    .then((donor) => {
      console.log(req.query.animal.name)
      res.redirect("/thankyou?name=" + req.query.animal);

    })
    .catch((err)=> {
      console.log(err)
})
})

module.exports = router;






