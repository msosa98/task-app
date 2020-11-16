const { Router } = require("express");
const verifyToken = require("../../middlewares/verifyToken");

const router = Router();

const {
  getAllUsers,
  deleteUser,
  updateUser,
  getOneUser,
} = require("./controller");

router.get("/users", verifyToken, getAllUsers);

router.delete("/users/:id", verifyToken, deleteUser);

router.put("/users/:id", verifyToken, updateUser);

router.get("/users/:id", verifyToken, getOneUser);

module.exports = router;
