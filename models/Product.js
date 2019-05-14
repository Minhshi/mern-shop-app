const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    product_title: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", productSchema);
