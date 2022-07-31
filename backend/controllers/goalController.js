// @desc Get all goals
// @route GET /api/goals
// @acess Private - need authentication
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

// @desc Set new goal
// @route POST /api/goals
// @acess Private - need authentication
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text field");
  }
  res.status(200).json({ message: "Set goals" });
};

// @desc  Update goal
// @route PUT /api/goals
// @acess Private - need authentication
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update goal ${req.params.id}` });
};

// @desc  Delete goal
// @route DELETE /api/goals
// @acess Private - need authentication
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete goal ${req.params.id}` });
};
module.exports = { getGoals, setGoal, updateGoal, deleteGoal };
