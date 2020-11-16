const Task = require("./model");
const User = require("../users/model");

const TaskRepository = {};

TaskRepository.getAllTasks = async () => {
  return await Task.find();
}

TaskRepository.createTask = async (task) => {
  task.status = false;
  return await Task.create(task);
}

TaskRepository.deleteTask = async (id) => {
  return await Task.findByIdAndDelete(id);
}

TaskRepository.updateTask = async (id, task) => {
  return await Task.findByIdAndUpdate(id, task);
}

TaskRepository.getOneTask = async (id) => {
  return await Task.findById(id);
}

TaskRepository.getTasksByUserId = async (id) => {
  const user = await User.findById(id);
  return await Task.find({author: user});
} 

module.exports = TaskRepository;