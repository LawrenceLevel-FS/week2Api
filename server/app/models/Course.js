const mongoose = require("mongoose");
const Instructor = require("./Instructor");

var courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  advance: {
    type: Boolean,
  },
  description: {
    type: String,
    required: true,
  },
  credits: {
    type: Number,
  },
  instructors: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Instructor",
    },
  ],
});

//Export the model
module.exports = mongoose.model("Course", courseSchema);
