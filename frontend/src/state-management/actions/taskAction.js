const { types } = require("../types/types");

export const loadTasks = (tasks) => ({
  type: types.loadTasks,
  payload: tasks
});

export const addTask = (task) => ({
  type: types.addTask,
  payload: {
    id: task._id,
    description: task.description,
    status: task.status
  },
});

export const deleteTask = (id) => ({
  type: types.deleteTask,
  payload: id
});

export const updateTask = (id) => ({
  type: types.updateTask,
  payload: id
});

export const cleanTasks = () => ({
  type: types.cleanTasks,
});
