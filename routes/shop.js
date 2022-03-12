const express = require("express");
const path = require("path");

const router = express.Router();
const rootDir = require("../helpers/path");

router.get("/", (request, response) => {
  response.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
