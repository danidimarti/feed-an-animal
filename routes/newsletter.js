const express = require('express');
const router  = express.Router();
const Subscriber = require('../models/subcriber')
const nodemailer = require("nodemailer");


router.get("/newsletter", (req, res, next) => {
  res.render('subscribe');
})




router.post("/subscribe", (req, res, next) => {
  console.log(req.body)
    const {firstname, email} = req.body;
  const newSubscribers = new Subscriber(req.body)
  newSubscribers.save()
    .then((subscriber) => {
      console.log(subscriber)
      res.send(subscriber) 

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
        subject: `Welcome, ${firstname}`,
        text: `Your donation made a difference to ${req.query.animal}. After years of suffering ${req.query.animal} a species appropriate life. And thanks to you he will also eat like a king! Kind regards, the FOUR PAWS Team`,
        html: `<h1>Welcome to our animal friendly community</h1>
                <p> Dear, ${firstname}, </br>
                Thank you for subscribing to our newsletter. Here you will find everything you need to know about our projects, campaigns and way you can help making the world more humane towards animals.
                With the warmest regards,
                FOUR PAWS Team</p>`,

      })

    })
    .catch((err) => {
      console.log(err)
    })
 
})

module.exports = router;