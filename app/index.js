const express = require("express");
const router = express.Router();
const app = express();
const connectDB = require("./db/config");
require("dotenv").config();
const morgan = require("morgan");

// middleware
app.use(express.json());
app.use(morgan("dev"));

// todo: importing routes
const authorRoute = require("./routes/authorRoutes");

//! Starting Database
connectDB();

const port = process.env.PORT || 3000;

// * http://localhost:3001
router.get("/", (req, res) => {
  res.status(200).json({ message: `${req.method} - ` });
});

//routes
router.use("/author", authorRoute);

module.exports = { app, port, router };
