const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World23345!");
});

app.post("/", (req, res) => {
  res.send("Hello World23345!");
});

app.listen(3000, function () {
  console.log("Aplicativo rodando na porta 3000!");
});
