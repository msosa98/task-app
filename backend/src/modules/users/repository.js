const User = require("./model");

const UserRepository = {};

UserRepository.getAllUsers = async () => {
  return await User.find();
};

UserRepository.createUser = async (user) => {
  return await User.create(user);
};

UserRepository.deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};

UserRepository.updateUser = async (id, user) => {
  return await User.findByIdAndUpdate(id, user);
};

UserRepository.getOneUser = async (id) => {
  return await User.findById(id);
};

UserRepository.getUserByUsername = async (username) => {
  return await User.findOne({ username: username });
};

module.exports = UserRepository;
