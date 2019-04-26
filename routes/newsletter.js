const express = require('express');
const router  = express.Router();
const Subscriber = require('../models/subcriber')


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
    .catch((err)=> {
      console.log(err)
})
})

module.exports = router;






