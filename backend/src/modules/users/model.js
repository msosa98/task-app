const { Schema, model } = require("mongoose");
const { genSaltSync, hashSync, compareSync } = require("bcryptjs");

const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

UserSchema.methods.toJSON = function() {
  let user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.pre("save", async function (next) {
  this.password = hashSync(this.password, genSaltSync(10));
  next();
});

UserSchema.methods.comparePassword = async function (password) {
  return compareSync(password, this.password);
};

module.exports = model("User", UserSchema);
