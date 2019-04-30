const express = require('express');
const router = express.Router();
const Animal = require('../models/animal')
const Donor = require('../models/donor')
const Donation = require('../models/donation')
const nodemailer = require("nodemailer");

router.get("/:identifier", (req, res, next) => {
  console.log(req.params.identifier)
  Animal.findOne({ indentifier: req.params.identifier })
    .then(animal => {
      console.log("animal: ", animal)
      res.render('feedananimal', { animal });
    })
    .catch(err => {
      console.log('Could not feed the animal', err)
    })
});

router.post("/donate", (req, res, next) => {
  const { plan, gender, firstname, lastname, email, number, animal } = req.body;
  const newDonor = new Donor(req.body)
  newDonor.save()
    .then((donor) => {
      console.log(req.query.animal.name)
      res.redirect("/thankyou?name=" + req.query.animal);

    })
    .then(() => {
      let transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          user: "faa.ironhack@gmail.com",
          pass: process.env.GMAIL_PASS,
        }

      });
      transporter.sendMail({
        from: "FOUR PAWS",
        to: req.body.email,
        subject: "Thank you for your support",
        text: `Your donation made a difference to ${req.query.animal}. After years of suffering ${req.query.animal} a species appropriate life. And thanks to you he will also eat like a king! Kind regards, the FOUR PAWS Team`,
        html: `<h1>Thank you for being awesome! </h1>
                <p> Your donation made a difference to ${req.query.animal}. After years of suffering ${req.query.animal} a species appropriate life. And thanks to you he will also eat like a king! Kind regards, the FOUR PAWS Team </p>`

      })

    })
    .catch((err) => {
      console.log(err)
    })
 
})

module.exports = router;






