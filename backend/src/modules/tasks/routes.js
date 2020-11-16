const { Router } = require("express");
const verifyToken = require("../../middlewares/verifyToken");

const router = Router();

const {
  getAllTasks,
  createTask,
  deleteTask,
  updateTask,
  getTasksByUserId
} = require("./controller");

router.get("/tasks", verifyToken, getAllTasks);

router.post("/tasks", verifyToken, createTask);

router.delete("/tasks/:id", verifyToken, deleteTask);

router.put("/tasks/:id", verifyToken, updateTask);

router.get("/tasks/:id", verifyToken, getTasksByUserId);

module.exports = router;
