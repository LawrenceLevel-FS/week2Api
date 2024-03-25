const Instructor = require("../models/Instructor");
// const { faker } = require("@faker-js/faker");

// * @GET all Instructors
const getAllInstructors = async (req, res) => {
  try {
    // pagination setup
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 2;
    const skip = (page - 1) * limit;

    // building the query with any filters excluding special keys
    let queryFilters = { ...req.query };
    ["select", "sort", "page", "limit"].forEach(
      (param) => delete queryFilters[param]
    );

    let query = Instructor.find(queryFilters);

    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      if (fields.includes("office")) {
        console.log(fields.split(" ").splice(1));
      }
      query = query.select(fields);
    }

    if (req.query.sort) {
      const sort = req.query.sort.split(",").join(" ");
      query = query.sort(sort);
    }

    if (req.query.sort && req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      const sort = req.query.sort.split(",").join(" ");
      query = query.sort(sort).select(fields);
    }

    // Apply pagination
    query = query.skip(skip).limit(limit);

    const instructors = await query;

    res
      .status(200)
      .json({ success: true, count: instructors.length, data: instructors });
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: err.message });
    }
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
