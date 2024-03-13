// import the controllers
const {
  getAllAuthor,
  postAuthor,
  getAuthorByID,
  updateAuthorByID,
  deleteAuthorByID,
} = require("../controller/authorController");
const router = require("express").Router();

// * http://localhost:3001/author
// ?@GET all Authors
router.get("/", getAllAuthor);

//?@aGET Author by ID
router.get("/:id", getAuthorByID);

// ?@POST to Author
router.post("/", postAuthor);

// ?@UPDATE Author by ID
router.put("/:id", updateAuthorByID);

// ?@DELETE Author by ID
router.delete("/:id", deleteAuthorByID);

module.exports = router;
