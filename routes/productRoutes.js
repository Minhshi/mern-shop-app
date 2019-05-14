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

  products.get("/:id", (req, res) => {
    productSchema.findById(req.params.id, (err, product) => {
      if (product) {
        res.status(302).json(product);
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
        res.status(200).json(product);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  });

  products.patch("/edit/:id", (req, res) => {
    productSchema.findByIdAndUpdate(req.params.id, req.body, (err, product) => {
      if (product) {
        res.status(202).json(product);
      } else {
        res.status(400).send(err);
      }
    });
  });

  products.delete("/:id", (req, res) => {
    productSchema.findByIdAndRemove(req.params.id, req.body, (err, product) => {
      if (product) {
        res.status(202).json(product);
      } else {
        res.status(400).send(err);
      }
    });
  });
};
