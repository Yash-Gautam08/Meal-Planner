const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 GET recipes API
app.get("/recipes", (req, res) => {
  const data = fs.readFileSync("./data/recipes.json");
  const recipes = JSON.parse(data);
  res.json(recipes);
});

// test route
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});