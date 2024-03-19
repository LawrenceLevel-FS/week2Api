const Instructor = require("../models/Instructor");

// * @GET all Instructors
const getAllInstructors = async (req, res) => {
  try {
    const allInstructors = await Instructor.find();
    res.status(200).json({ all_Instructor: allInstructors });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * @GET Instructor by ID
getOneInstructorById = async (req, res) => {
  const id = req.params.id;

  try {
    const instructor = await Instructor.findById(id);
    if (!instructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
    res.status(200).json(instructor);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * @POST Instructors
const createNewInstructor = async (req, res) => {
  const { Instructors } = req.body;
  try {
    const newInstructor = await Instructor.create(Instructors);
    if (!Instructors) {
      return res.status(404).json({ message: "Instructor not found" });
    }
    res
      .status(200)
      .json({ success: true, response: `${req.method} - was made` });
    console.log(">>>", Instructors);
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.error({ err: err.message });
  }
};

// * @UPDATE Instructor by ID
const updateInstructorById = async (req, res) => {
  const id = req.params.id;

  try {
    const updateInstructor = await Instructor.findByIdAndUpdate(id, req.body, {
      upsert: true,
    });
    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Update successful",
      data: updateInstructor,
    });
    if (!updateInstructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * @DELETE Instructor by ID
const deleteInstructorById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteInstructor = await Instructor.findByIdAndDelete(id);
    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Deleted successful",
    });
    if (!deleteInstructor) {
      return res.status(404).json({ message: "Instructor not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllInstructors,
  getOneInstructorById,
  createNewInstructor,
  updateInstructorById,
  deleteInstructorById,
};
