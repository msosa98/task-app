const TaskRepository = require("./repository");

const TaskService = {};

TaskService.getAllTasks = async () => {
  return await TaskRepository.getAllTasks();
};

TaskService.createTask = async (task) => {
  return await TaskRepository.createTask(task);
};

TaskService.deleteTask = async (id) => {
  return await TaskRepository.deleteTask(id);
};

TaskService.updateTask = async (id, task) => {
  return await TaskRepository.updateTask(id, task);
};

TaskService.getOneTask = async (id) => {
  return await TaskRepository.getOneTask(id);
};

TaskService.getTasksByUserId = async (id) => {
  return await TaskRepository.getTasksByUserId(id);
}

module.exports = TaskService;