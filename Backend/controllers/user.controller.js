const TempUserModel = require("../models/tempuser.model");
const UserModel = require("../models/user.model");
const UserService = require("../services/user.service");

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await TempUserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const ifUserExists = await UserModel.findOne({ email });

    if (ifUserExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    const user = await UserService.CreateTempuser(req.body);

    if (!user) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

    res.status(201).json({
      message: "Verfiy your email via otp",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
