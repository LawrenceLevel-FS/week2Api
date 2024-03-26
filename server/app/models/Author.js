const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the Author name"],
    unique: true,
    trim: true,
    index: true,
    minLength: 2,
    maxLength: 50,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
    max: 120,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
});

//Export the model
module.exports = mongoose.model("Author", authorSchema);
