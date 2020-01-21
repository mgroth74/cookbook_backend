const mongoose = require('./connection')
const Recipe = require('../models/Recipes')

Recipe.deleteMany({}).then(() => {
  console.log('deleted all Gifs')
    // create a giffy
    Recipe.create({
      name: "nachos",
      course: "appetizer",
      type: "dinner",
      calories: 200
    })
    
    Recipe.create({
      name: "chicken pot pie",
      course: "main",
      type: "dinner",
      calories: 500
    })
    
    Recipe.create({
      name: "pancakes",
      course: "main",
      type: "breakfeast",
      calories: 400
    })

    Recipe.create({
      name: "black forest cake",
      course: "dessert",
      type: "dinner",
      calories: 400
    })

    Recipe.create({
      name: "lasagna",
      course: "main",
      type: "dinner",
      calories: 700
    })

    Recipe.create({
      name: "omlette",
      course: "main",
      type: "breakfeast",
      calories: 400
    })

})

