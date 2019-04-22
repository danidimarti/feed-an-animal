require('dotenv').config();
const mongoose = require('mongoose')
const Animal = require('../models/animal')

mongoose.connect(process.env.DATABASE)

const dushi = new Animal({
  name: 'Dushi',
  origin: 'Albania',
  age: 2,
  favoritefood: 'berries',
  foodcost: 3,
  description: 'Dushi is the most recent addition to the FOUR PAWS family. Dushi scaped the cruel care of the infamous "The Zoo of Hell", in Albania. How about giving her a delicious welcome meal today?' ,
  image: "images/dushi.JPG",
  video: "videos/gonda.mp4",
  button: "Feed Dushi",
  species: "BEAR",

})
dushi.save()
  .catch(err => {
    console.log(err)
  })


  const bakari = new Animal({
    name: 'Bakari',
    origin: 'Germany',
    age: 2,
    favoritefood: 'Meat',
    foodcost: 3,
    description: 'Bakari was born in a German zoo and was used as a photo prop for visitors. Now Bakari is one of our wildest cats. Feed Bakari today and get a thank you roar!',
    image: "images/bakari.JPG",
    video: "videos/nhinho.mp4",
    button: "Feed Bakari",
    species: "LEOPARD",
  
  })
  bakari.save()
    .catch(err => {
      console.log(err)
    })

      const gonda = new Animal({
        name: 'Gonda',
        origin: 'Borneo',
        age: 2,
        favoritefood: 'flowers',
        foodcost: 3,
        description: 'Baby Gonda is one of the youngest pupils at the Orangutan Forest School in Borneo. He was orphaned for palm oil plantations. Help Gonda go up strong and healthy!',
        image: "images/gonda.JPG",
        video: "videos/gonda.mp4",
        button: "Feed Gonda",
        species: "ORGANGUTAN",
      
      })
      gonda.save()
        .catch(err => {
          console.log(err)
        })


        const caruso = new Animal({
          name: 'Caruso',
          origin: 'Unknown',
          age: 2,
          favoritefood: 'Meat',
          foodcost: 3,
          description: 'Caruso was abandoned by a Zoo for being too payful. Here, that is what we most love about him. Give a delicious meal to Caruso today',
          image: "images/caruso.JPG",
          video: "videos/gonda.mp4",
          button: "Feed Caruso",
          species: "TIGER",
        
        })
        caruso.save()
          .catch(err => {
            console.log(err)
          })

          const tegar = new Animal({
            name: 'Tegar',
            origin: 'Borneo',
            age: 2,
            favoritefood: 'flowers',
            foodcost: 3,
            description: 'Tegar, is the brave one of the Forest School. He is always leading the group to new adventures. With this much energy Tegar will need a lot of food!',
            image: "images/tegar.JPG",
            video: "videos/gonda.mp4",
            button: "Feed Tegar",
            species: "ORGANGUTAN",
          
          })
          tegar.save()
            .catch(err => {
              console.log(err)
            })

            const lenci = new Animal({
              name: 'Lenci',
              origin: 'Albania',
              age: 2,
              favoritefood: 'Meat',
              foodcost: 3,
              description: "Before his rescue, Lenci had never seen life outside the tiny cage of the 'Zoo of Hell' in Albania. Give Lenci a meal worthy of a king",
              image: "images/lion.png",
              video: "videos/gonda.mp4",
              button: "Feed Lenci",
              species: "LION",
            
            })
            lenci.save()
              .catch(err => {
                console.log(err)
              })