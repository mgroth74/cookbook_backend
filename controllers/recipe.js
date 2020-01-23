const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipes");

router.get("/", (req, res) => {
   Recipe.find({}).then(recipe => res.json(recipe));
});

router.get("/name/:name", (req, res) => {
  const name=req.params.name
  Recipe.find({name}).then(recipe => res.json(recipe));
});

router.get("/type/:type", (req, res) => {
  const type=req.params.type
  Recipe.find({type}).then(recipe => res.json(recipe));
});
router.get("/course/:course", (req, res) => {
  const course=req.params.course
  console.log(req.params.course)
  Recipe.find({course}).then(recipe => res.json(recipe));
});

router.post("/", (req, res) => {
  let newRecipe = req.body;
  Recipe.create(req.body).then(recipe => res.json(recipe))
  })

  router.put("/:name", (req, res) => {
    let RecipeData = req.body;
    let name = req.params.name;
    Recipe.findOneAndUpdate(
      { name}, 
      RecipeData,
      { new: true }
    ).then(recipe => res.json(recipe))
  });

  router.delete("/:name", (req, res) => {
    const name = req.params.name
    Recipe.findOneAndDelete({name})
    .then(recipe => res.json(recipe))
});

  
module.exports = router;