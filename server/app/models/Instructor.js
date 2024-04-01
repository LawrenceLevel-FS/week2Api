const mongoose = require("mongoose");

const InstructorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  department: {
    type: String,
    required: true,
  },
  office: {
    type: String,
  },
});

//Export the model
module.exports = mongoose.model("Instructor", InstructorSchema);
