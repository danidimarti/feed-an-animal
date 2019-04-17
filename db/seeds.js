require('dotenv').config();
const mongoose = require('mongoose')
const Animal = require('../models/animal')

mongoose.connect(process.env.DATABASE)

const gonda = new Animal({
  name: 'Gonda',
  origin: 'Borneo',
  age: 2,
  favoritefood: 'Banana',
  foodcost: 3,
  description: 'My name is Gonda and I am one of the youngest pupils at the Orangutan Forest School in Borneo. I was brought here after my mother was killed and our home was destroyed for palm oil plantations. My teachers at the school are teaching me how to climb and find food. I can’t wait to graduate so me and my friends can go back to the wild. ',
  image: "images/gondaimage.JPG",
  video: "videos/gonda.mp4",

})
gonda.save()
  .catch(err => {
    console.log(err)
  })


  const masha = new Animal({
    name: 'Masha',
    origin: 'Vietnam',
    age: 2,
    favoritefood: 'Bambu',
    foodcost: 3,
    description: 'Masha was rescued from heartbreaking conditions in 2013. Her life was marked by loneliness and fear. Masha used be a baiting bear and she was forced to spend her days at a hunting station in Ukraine. Cuffed by the neck and with little chance of movement, Masha was only brought out of her tiny cage to fight dogs. Now Masha can enjoy a species appropriate life. And man, she loves to eat. Share a meal with Masha today!',
    image: "images/nhinhoimage.JPG",
    video: "videos/nhinho.mp4",
  
  })
  masha.save()
    .catch(err => {
      console.log(err)
    })