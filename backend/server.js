const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const { errorHandler } = require("../middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT || 4000; // use port from .env or 5000 if not working

// connect to the database
connectDB();

// Initialise express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Specify where the routes are for this path (middleware)
app.use("/api/goals", require("./routes/goalRoutes"));

// Handle errors using custom middleware function
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
