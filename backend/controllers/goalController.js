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
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc  Update goal
// @route PUT /api/goals
// @acess Private - need authentication
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
});

// @desc  Delete goal
// @route DELETE /api/goals
// @acess Private - need authentication
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Goal not found");
  }

  await goal.remove();

  res.status(200).json({ id: req.params.id });
});
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
