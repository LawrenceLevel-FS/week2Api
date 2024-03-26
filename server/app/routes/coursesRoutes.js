const router = require("express").Router();
const {
  getAllCourses,
  getOneCourseById,
  createNewCourse,
  updateCourseById,
  deleteCourseById,
} = require("../controller/coursesController");

// * http://localhost:3001/course

// ?@GET all Courses
router.get("/", getAllCourses);

// ?@GET Course by ID
router.get("/:id", getOneCourseById);

// ?@POST Course
router.post("/", createNewCourse);

// ?@UPDATE Course by ID
router.patch("/:id", updateCourseById);

// ?@DELETE Course by ID
router.delete("/:id", deleteCourseById);

module.exports = router;
