const express = require("express");
// const path = require("path");
// const rootDir = require("../helpers/path");

const router = express.Router();
const products = [];

router.get("/add-product", (request, response) => {
  // response.sendFile(path.join(rootDir, "views", "add-product.html"));
  response.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

router.post("/add-product", (request, response) => {
  products.push(request.body);
  console.log(products);
  response.redirect("/");
});

module.exports = { routes: router, products: products };
