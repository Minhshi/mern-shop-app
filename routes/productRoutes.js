module.exports = products => {
  products.get("/", (req, res) => {
    res.send("Hello World");
  });
};
