require('dotenv').config();
const mongoose = require('mongoose')
const Donor = require('../models/donor')

mongoose.connect(process.env.USER)