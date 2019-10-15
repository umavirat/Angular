const mongoose = require('mongoose');

mongoose
  .connect(
    "mongodb://localhost:27017/pileoftales"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });
