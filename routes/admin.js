const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../helpers/path");

router.get("/add-product", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "add-product.html"));
});

router.post("/add-product", (request, response) => {
  response.redirect("/");
  console.log(request.body.title);
});

module.exports = router;
