const jwt = require("jsonwebtoken");
const error = require("../helpers/error");

async function verifyToken(req, res, next) {

  const token = req.headers["authorization"];

  if (!token) res.send(error(400, "Token must be sent"));

  jwt.verify(token, process.env.JWT_SECRET, function (err,decodedToken) {
    if (err) res.send(error(401, "Invalid token"));
    next();
  });
}

module.exports = verifyToken;
