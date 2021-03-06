const express = require("express");

const mongoose = require("mongoose");

const bodyParser = require("body-parser");

const keys = require("./config/keys");

mongoose.connect(keys.mongoURI);

const app = express();

const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use(bodyParser.json());

require("./routes/productRoutes")(app);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection established");
});

app.listen(PORT, () => console.log(`App is running on port: ${PORT}`));
