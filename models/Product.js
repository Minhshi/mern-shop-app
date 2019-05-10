const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  product_title: String
});

module.exports = mongoose.model("products", productSchema);
