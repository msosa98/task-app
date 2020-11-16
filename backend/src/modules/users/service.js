const UserRepository = require("./repository");

const UserService = {};

UserService.getAllUsers = async () => {
  return await UserRepository.getAllUsers();
};

UserService.createUser = async (user) => {
  return await UserRepository.createUser(user);
};

UserService.deleteUser = async (id) => {
  return await UserRepository.deleteUser(id);
};

UserService.updateUser = async (id, user) => {
  return await UserRepository.updateUser(id, user);
};

UserService.getOneUser = async (id) => {
  return await UserRepository.getOneUser(id);
};

UserService.getUserByUsername = async (username) => {
  return await UserRepository.getUserByUsername(username);
};

module.exports = UserService;
