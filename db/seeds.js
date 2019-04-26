require('dotenv').config();
const mongoose = require('mongoose')
const Animal = require('../models/animal')

mongoose.connect(process.env.DATABASE)

const dushi = new Animal({
  name: 'Dushi',
  indentifier: 'dushi',
  origin: 'Albania',
  age: 2,
  favoritefood: 'berries',
  plan: { 
    once: 20,
    monthly: 100
  },
  description: 'Dushi is the most recent addition to the FOUR PAWS family. Dushi scaped the cruel care of the infamous "The Zoo of Hell", in Albania. How about giving her a delicious welcome meal today?' ,
  image: "images/dushi.JPG",
  button: "Feed Dushi",
  species: "BEAR",
  bgimg: "/images/bears_up.jpg"
})
dushi.save()
  .catch(err => {
    console.log(err)
  })


  const bakari = new Animal({
    name: 'Bakari',
    indentifier: 'bakari',
    origin: 'Germany',
    age: 2,
    favoritefood: 'Meat',
    plan: { 
      once: 2,
      monthly: 70
    },
    description: 'Bakari was born in a German zoo and was used as a photo prop for visitors. Now Bakari is one of our wildest cats. Feed Bakari today and get a thank you roar!',
    image: "images/bakari.JPG",
    button: "Feed Bakari",
    species: "LEOPARD",
    bgimg: "/images/tigers_2.jpg"
  
  })
  bakari.save()
    .catch(err => {
      console.log(err)
    })

      const gonda = new Animal({
        name: 'Gonda',
        indentifier: 'gonda',
        origin: 'Borneo',
        age: 2,
        favoritefood: 'flowers',
        plan: { 
          once: 2,
          monthly: 70
        },
        description: 'Baby Gonda is one of the youngest pupils at the Orangutan Forest School in Borneo. He was orphaned for palm oil plantations. Help Gonda go up strong and healthy!',
        image: "images/gonda.JPG",
        video: "videos/gonda.mp4",
        button: "Feed Gonda",
        species: "ORGANGUTAN",
        bgimg: "/images/orangutans_2.jpg"
      
      })
      gonda.save()
        .catch(err => {
          console.log(err)
        })


        const caruso = new Animal({
          name: 'Caruso',
          indentifier: 'caruso',
          origin: 'Unknown',
          age: 2,
          favoritefood: 'Meat',
          plan: { 
            once: 3,
            monthly: 70
          },
          description: 'Caruso was abandoned by a Zoo for being too payful. Here, that is what we most love about him. Give a delicious meal to Caruso today',
          image: "images/caruso.JPG",
          video: "videos/gonda.mp4",
          button: "Feed Caruso",
          species: "TIGER",
          bgimg: "/images/tigers_2.jpg"
        
        })
        caruso.save()
          .catch(err => {
            console.log(err)
          })

          const tegar = new Animal({
            name: 'Tegar',
            indentifier: 'tegar',
            origin: 'Borneo',
            age: 2,
            favoritefood: 'flowers',
            plan: { 
              once: 2,
              monthly: 70
            },
            description: 'Tegar, is the brave one of the Forest School. He is always leading the group to new adventures. With this much energy Tegar will need a lot of food!',
            image: "images/tegar.JPG",
            video: "videos/gonda.mp4",
            button: "Feed Tegar",
            species: "ORGANGUTAN",
            bgimg: "/images/orangutans_2.jpg"
          
          })
          tegar.save()
            .catch(err => {
              console.log(err)
            })

            const lenci = new Animal({
              name: 'Lenci',
              indentifier: 'lenci',
              origin: 'Albania',
              age: 2,
              favoritefood: 'Meat',
              plan: { 
                once: 2,
                monthly: 30
              },
              description: "Before his rescue, Lenci had never seen life outside the tiny cage of the 'Zoo of Hell' in Albania. Give Lenci a meal worthy of a king",
              image: "images/lion.png",
              video: "videos/gonda.mp4",
              button: "Feed Lenci",
              species: "LION",
              bgimg: "/images/lions_2.jpg"
            
            })
            lenci.save()
              .catch(err => {
                console.log(err)
              })