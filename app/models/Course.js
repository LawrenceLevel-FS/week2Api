const mongoose = require("mongoose");

var courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  Advance: {
    type: Boolean,
  },
  description: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
  },
  instructor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Instructor",
  },
});

//Export the model
module.exports = mongoose.model("Course", courseSchema);
