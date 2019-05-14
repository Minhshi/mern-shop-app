const productSchema = require("../models/Product");

module.exports = products => {
  // products.get("/", (req, res) => {
  //   res.send("Hello World");
  // });

  products.get("/", (req, res) => {
    productSchema.find((err, products) => {
      if (products) {
        res.status(302).json(products);
      } else {
        res.status(404).send(err);
      }
    });
  });

  products.post("/new", (req, res) => {
    // console.log(req.body)
    const product = new productSchema(req.body);
    product
      .save()
      .then(product => {
        res.status(200).json({ product: "Product added" });
      })
      .catch(err => {
        res.status(400).send("Product could not be added");
      });
  });
};
