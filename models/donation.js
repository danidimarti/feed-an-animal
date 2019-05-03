const mongoose = require("mongoose");
const Schema   = mongoose.Schema;
const Animal = require('../models/animal')
const Donor = require('../models/donor')

const donationSchema = new Schema({
  animal: { type: Schema.Types.ObjectId, ref: 'Animal' },
  donor: { type: Schema.Types.ObjectId, ref: 'Donor' },
  amount: Number,
}, {
    timestamps: {
      createdAt: "createdAt",
      updatedAt: "updatedAt"
    }
  });

const Donation = mongoose.model("Donation", donationSchema);

// const createDonations = Donor.map(donor => {
//   const newDonation = new Donation(donor.donation)
//   return newDonation.save()
//   .then(donation => {
//     return donation;
//   })
//   .catch(error => {
//     throw new Error(`Impossible to add the author. ${error}`)
//   })
// })

module.exports = Donation;