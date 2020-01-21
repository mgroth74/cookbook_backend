
const mongoose = require("../db/connection");
const RecipeSchema = mongoose.Schema({
  name: String,
  course: String,
  type: String,
  calories: Number,
  });
const Recipe = mongoose.model("Recipe", RecipeSchema);
module.exports = Recipe;