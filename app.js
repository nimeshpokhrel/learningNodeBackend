const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const rootDir = require("./helpers/path");

const app = express();

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use((request, response) => {
  response.status(404).sendFile(path.join(rootDir, "views", "404.html"));
});

app.listen(3000);
