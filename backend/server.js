const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 4000; // use port from .env or 5000 if not working

// initialise express
const app = express();

app.get("/api/goals", (req, res) =>
  res.status(200).res.json({ message: "Get goals" })
);

app.listen(port, () => console.log(`Server started on port ${port}`));
