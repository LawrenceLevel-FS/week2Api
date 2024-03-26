const Author = require("../models/Author");

// * @GET all Authors
const getAllAuthor = async (req, res) => {
  const author = await Author.find({});
  res.status(200).json({
    success: true,
    data: author,
    message: `${req.method} - Author request`,
  });
};

// * @aGET Author by ID
const getAuthorByID = async (req, res) => {
  const id = req.params.id;

  try {
    const findAuthor = await Author.findById(id);

    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Author Found",
      data: findAuthor,
    });

    console.log(">>>", req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// * @POST to Author
const postAuthor = async (req, res) => {
  const { author } = req.body;
  try {
    const newAuthor = await Author.create(author);
    res.status(200).send({ res: req.body });
  } catch (err) {
    console.error(err.message);
    res.status(404).json({ Error: err.message });
  }
};

// * @UPDATE Author by ID
const updateAuthorByID = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedAuthor = await Author.findByIdAndUpdate(id, req.body, {
      upsert: true,
    });

    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Update successful",
      data: updatedAuthor,
    });

    console.log(">>>", req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// * @DELETE Author by ID
const deleteAuthorByID = async (req, res) => {
  const id = req.params.id;

  try {
    const deleteAuthor = await Author.findByIdAndDelete(id);

    res.status(200).json({
      method: `Method - ${req.method}`,
      message: "Delete successful",
      data: deleteAuthor,
    });

    console.log(">>>", req.body);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllAuthor,
  postAuthor,
  getAuthorByID,
  updateAuthorByID,
  deleteAuthorByID,
};
