const express = require("express"); // this is require module syntax -> common JS
// import express from "express" -> module JS syntax
const app = express(); // with using express we create a variable
const port = 3000; // virual port -> one of free port for server to listen
require("dotenv").config();

// we need to make a get request listen if anyone request on that endpoint
app.get("/", (req, res) => {
  // if someone goes to "/" we'll do a callback
  res.send("Hello World!");
});
// we can handle more such request
app.get("/twitter", (req, res) => {
  res.send("welcome to twitter !");
});

app.get("/login", (req, res) => {
  res.send("<h1>Hello from H1 Tag</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

// the listen power is also provided my app variable(express)
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
// here we tell on which port to listen and also a callback return
