const express = require("express");
const app = express();
const router = express.Router();
const connectDB = require("./db/config");
require("dotenv").config();
const morgan = require("morgan");

// middleware
app.use(express.json());
app.use(morgan("dev"));

// todo: importing routes
const authorRoute = require("./routes/authorRoutes");
const courseRoute = require("./routes/coursesRoutes");
const instructorRoute = require("./routes/instructorRoutes");

//! Starting Database
connectDB();

const port = process.env.PORT || 3000;

// * http://localhost:3001
router.get("/", (req, res) => {
  res.status(200).json({ message: `${req.method} - ` });
});

//routes
router.use("/author", authorRoute);
router.use("/course", courseRoute);
router.use("/instructor", instructorRoute);

module.exports = { app, port, router };
