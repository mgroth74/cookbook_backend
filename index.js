
const express = require('express')
const app = express()
const parser = require('body-parser')
const recipeController = require("./controllers/recipe");
 const cors = require('cors');

 app.use(cors()); 
app.get("/", (req, res) => {
  res.send("this is the default rout for recipes")
})

app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use("/recipes/", recipeController);


app.listen(3000, () => console.log("Running on port 3000!"))

