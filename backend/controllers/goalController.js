const asyncHandler = require("express-async-handler");

const Goal = require("../models/goalModel");

// @desc Get all goals
// @route GET /api/goals
// @acess Private - need authentication
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();

  res.status(200).json(goals);
});

// @desc Set new goal
// @route POST /api/goals
// @acess Private - need authentication
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
});

// @desc  Update goal
// @route PUT /api/goals
// @acess Private - need authentication
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
});

// @desc  Delete goal
// @route DELETE /api/goals
// @acess Private - need authentication
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
