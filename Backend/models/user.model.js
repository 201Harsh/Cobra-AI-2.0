const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  plan: {
    type: String,
    enum: ["starter", "creator", "pro", "devx", "enterprise"],
    default: "starter",
  },
  mode: {
    type: String,
    enum: ["creator", "developer"],
    default: "creator",
  },
  siteGenToken: {
    type: Number,
    default: 5,
  },
  sitegenerated: {
    type: Number,
    default: 0,
  },
  maxSitegeneration: {
    type: Number,
    default: 5,
  },
  labGenToken: {
    type: Number,
    default: 2,
  },
  labUsed: {
    type: Number,
    default: 0,
  },
  chatGenToken: {
    type: Number,
    default: 50,
  },
});

UserModel.methods.Jwt_token = function () {
  return jwt.sign({ _id: this._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "21d",
  });
};

UserModel.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserModel.statics.HashPassword = async (password) => {
  return await bcrypt.hash(password, 12);
};

const User = mongoose.model("User", UserModel);

module.exports = User;
