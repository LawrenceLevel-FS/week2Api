// * @GET all Courses
const getAllCourses = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @GET Course by ID
const getOneCourseById = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @POST Course
const createNewCourse = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @UPDATE Course by ID
const updateCourseById = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

// * @DELETE Course by ID
const deleteCourseById = (req, res) => {
  res.status(200).json({ success: true, response: `${req.method} - was made` });
  console.log(">>>", req.method);
};

module.exports = {
  getAllCourses,
  getOneCourseById,
  createNewCourse,
  updateCourseById,
  deleteCourseById,
};
