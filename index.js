const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 5001;
const fruits = require("./fruits");

//routes
app.listen(PORT, () => console.log(`up on port ${PORT}`));

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/greet/:name", (req, res) => {
  res.send("Hello!", `${req.params.name}`);
});

app.get("/five", (req, res) => {
  res.send([1, 2, 3, 4, 5]);
});

function evenNumbers(number) {
  let numbers = [];
  for (let x = 2; x <= number; x += 2) {
    numbers.push(x);
  }
  return res.json(numbers);
}
app.get("/namelength/:name", (req, res) => {
  res.json(req.params.name.length);
});

app.get("/fruits", (req, res) => {
  res.send(fruits);
});

app.get("/fruits/:name", (req, res) => {
  let fruitMatch = fruits.find((fruit) => fruit.name === req.params.name);
  return res.json(fruitMatch);
});

app.listen(PORT, () => console.log(`up on port ${PORT}`));
