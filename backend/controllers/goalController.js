// @desc Get all goals
// @route GET /api/goals
// @acess Private - need authentication
const getGoals = (req, res) => {
  res.status(200).json({ message: "Get goals" });
};

module.exports = { getGoals };
