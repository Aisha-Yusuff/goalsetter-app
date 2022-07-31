const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000; // use port from .env or 5000 if not working

// Initialise express
const app = express();

// Specify where the routes are for this path
app.use("/api/goals", require("./routes/goalRoutes"));

app.listen(port, () => console.log(`Server started on port ${port}`));
