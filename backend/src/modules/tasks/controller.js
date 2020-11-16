const TaskService = require("./service");

const TaskController = {};

TaskController.getAllTasks = async (req, res) => {
  const tasks = await TaskService.getAllTasks();
  res.status(200).send(tasks);
};

TaskController.createTask = async (req, res) => {
  const task = req.body;
  const taskDB = await TaskService.createTask(task);
  res.status(201).send(taskDB);
};

TaskController.deleteTask = async (req, res) => {
  const id = req.params.id;
  const taskDB = await TaskService.deleteTask(id);
  res.status(200).send(taskDB);
};

TaskController.updateTask = async (req, res) => {
  const id = req.params.id;
  const task = req.body;
  const taskDB = await TaskService.updateTask(id, task);
  res.status(200).send(taskDB);
};

TaskController.getOneTask = async (req, res) => {
  const id = req.params.id;
  const task = await TaskService.getOneTask(id);
  res.status(200).send(task);
};

TaskController.getTasksByUserId = async (req, res) => {
  const id = req.params.id;
  const tasks = await TaskService.getTasksByUserId(id);
  res.status(200).send(tasks);
};

module.exports = TaskController;
