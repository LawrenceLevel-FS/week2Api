// importing router
const router = require("express").Router();
// importing instructor controllers
const {
  getAllInstructors,
  getOneInstructorById,
  createNewInstructor,
  updateInstructorById,
  deleteInstructorById,
} = require("../controller/instructorsController");

// * http://localhost:3001/instructor

// ?@GET all Instructors
router.get("/", getAllInstructors);

// ?@GET Instructor by ID
router.get("/:id", getOneInstructorById);

// ?@POST Instructors
router.post("/", createNewInstructor);

// ?@UPDATE Instructor by ID
router.patch("/:id", updateInstructorById);

// ?@DELETE Instructor by ID
router.delete("/:id", deleteInstructorById);

module.exports = router;
