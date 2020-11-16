const UserService = require("./service");

const UserController = {};

UserController.getAllUsers = async (req, res) => {
  const users = await UserService.getAllUsers();
  res.status(200).send(users);
};

UserController.deleteUser = async (req, res) => {
  const id = req.params.id;
  const userDB = await UserService.deleteUser(id);
  res.status(200).send(userDB);
};

UserController.updateUser = async (req, res) => {
  const id = req.params.id;
  const user = req.body;
  const userDB = await UserService.updateUser(id, user);
  res.status(200).send(userDB);
};

UserController.getOneUser = async (req, res) => {
  const id = req.params.id;
  const user = await UserService.getOneUser(id);
  res.status(200).send(user);
};

module.exports = UserController;
