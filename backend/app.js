require("./config/db.confiq");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const router= require('./routes/index.routes');
postControl = require('./controllers/postControl');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/images", express.static(path.join("./images")));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});
app.use("/api", router);
app.use("/api/posts",postControl);

module.exports = app;
