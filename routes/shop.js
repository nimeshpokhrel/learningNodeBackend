const express = require("express");
// const path = require("path");
// const rootDir = require("../helpers/path");
const adminRoutes = require("./admin");

const router = express.Router();

router.get("/", (request, response) => {
  // response.sendFile(path.join(rootDir, "views", "shop.html"));
  response.render("shop", {
    products: adminRoutes.products,
    pageTitle: "Book Shop",
    path: "/",
  });
});

module.exports = router;
