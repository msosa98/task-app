const UserService = require("../users/service");
const jwt = require("jsonwebtoken");
const error = require("../../helpers/error");

const AuthService = {};

AuthService.signUp = async (user) => {

  const userExist = await UserService.getUserByUsername(user.username);

  if (userExist) return error(400, "User already exists");

  return await UserService.createUser(user);
};

AuthService.signIn = async (user) => {

  const userExist = await UserService.getUserByUsername(user.username);

  if (!userExist) return error(404, "User does not exist");

  const validPassword = await userExist.comparePassword(user.password, userExist.password);

  if (!validPassword) return error(404, "Invalid password");

  const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, {expiresIn: "4h"});
  return { userExist, token };
};

module.exports = AuthService;
