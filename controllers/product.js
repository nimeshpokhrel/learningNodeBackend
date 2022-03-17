const Product = require("../models/product");

exports.getAddProduct = (request, response) => {
  response.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (request, response) => {
  const product = new Product(request.body.title, request.body.price, request.body.description);
  product.saveData();
  response.redirect("/");
};

exports.getProducts = (request, response) => {
  Product.fetchAll((products) => {
    console.log(products);
    response.render("shop", {
      products: products,
      pageTitle: "Book Shop",
      path: "/",
    });
  });
};
