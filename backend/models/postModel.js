const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  imagePath: { type: String, required: true },
  creator: { type: String, require: true },
  creatorName: { type: String, require: true },
  date: { type: String }
});

module.exports = mongoose.model("Post", postSchema);
