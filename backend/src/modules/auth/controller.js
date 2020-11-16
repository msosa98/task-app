const AuthService = require("./service");

const AuthController = {};

AuthController.signUp = async (req, res) => {
  const user = req.body;
  const createdUser = await AuthService.signUp(user);
  return res.status(201).send(createdUser);
};

AuthController.signIn = async (req, res) => {
  const user = req.body;
  const creds = await AuthService.signIn(user);
  return res.status(200).send(creds);
};

module.exports = AuthController;