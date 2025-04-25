const { readData, writeData } = require("../utils/fileHandler");

exports.getUserTasks = (req, res) => {
  const getUserTasks = readData("userTasks.json").filter(userTask => userTask.userId === req.userId);
  res.json(getUserTasks);
};

exports.addUserTask = (req, res) => {
  const { title } = req.body;
  let addUserTasks = readData("userTasks.json");

  const addNewUserTask = { id: Date.now(), userId: req.userId, title };
  addUserTasks.push(addNewUserTask);
  writeData("userTasks.json", addUserTasks);

  res.json(addNewUserTask);
};

exports.deleteUserTask = (req, res) => {
  let deleteUserTasks = readData("userTasks.json");
  deleteUserTasks = deleteUserTasks.filter(task => task.id !== Number(req.params.id) || task.userId !== req.userId);
  writeData("userTasks.json", deleteUserTasks);

  res.status(200).json({ message: "Task deleted successfully" });
};
