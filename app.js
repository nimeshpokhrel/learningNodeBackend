const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./helpers/path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes.routes);
app.use(shopRoutes);

app.use((request, response) => {
  response.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
