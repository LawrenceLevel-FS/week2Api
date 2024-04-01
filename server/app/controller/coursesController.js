// importing course model
const { query } = require("express");
const Course = require("../models/Course");
const { populate } = require("../models/Instructor");

// * @GET all Courses
const getAllCourses = async (req, res) => {
  try {
    // Pagination setup
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    // Building the query with any filters excluding special keys
    let queryFilters = { ...req.query };
    ["select", "sort", "page", "limit"].forEach(
      (param) => delete queryFilters[param]
    );

    let query = Course.find(queryFilters);

    if (req.query.select) {
      const fields = req.query.select.split(",").join(" ");
      query = query.select(fields);
    }

    query.populate("instructors");

    // Sorting
    if (req.query.sort) {
      const sort = req.query.sort.split(",").join(" ");
      query = query.sort(sort);
    }

    // Apply pagination to the query
    query = query.skip(skip).limit(limit);

    const courses = await query;

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses,
    });
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ success: false, error: err.message });
    }
  }
};

// * @GET Course by ID
const getOneCourseById = async (req, res) => {
  const id = req.params.id;
  try {
    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * @POST Course
const createNewCourse = async (req, res) => {
  const { courses } = req.body;
  try {
    const newCourse = await Course.create(courses);
    res.status(201).json({ id: courses._id });
    console.log(">>>", courses);
  } catch (err) {
    res.status(500).send({ message: err.message });
    console.error({ err: err.message });
  }
};

// * @UPDATE Course by ID
const updateCourseById = async (req, res) => {
  const id = req.params.id;

  try {
    const updateCourse = await Course.findByIdAndUpdate(id, req.body, {
      upsert: true,
    });
    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Update successful",
      data: updateCourse,
    });
    if (!updateCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// * @DELETE Course by ID
const deleteCourseById = async (req, res) => {
  const id = req.params.id;
  try {
    const deleteCourse = await Course.findByIdAndDelete(id);
    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Deleted successful",
    });
    if (!deleteCourse) {
      return res.status(404).json({ message: "Course not found" });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCourses,
  getOneCourseById,
  createNewCourse,
  updateCourseById,
  deleteCourseById,
};
