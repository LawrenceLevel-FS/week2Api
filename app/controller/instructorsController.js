// * @GET all Instructors
const getAllInstructors = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @GET Instructor by ID
const getOneInstructorById = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @POST Instructors
const createNewInstructor = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @UPDATE Instructor by ID
const updateInstructorById = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @DELETE Instructor by ID
const deleteInstructorById = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

module.exports = {
  getAllInstructors,
  getOneInstructorById,
  createNewInstructor,
  updateInstructorById,
  deleteInstructorById,
};
