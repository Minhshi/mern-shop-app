const express = require("express");

const mongoose = require("mongoose");

const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
