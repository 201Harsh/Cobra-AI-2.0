const TempUserModel = require("../models/tempuser.model");
const UserModel = require("../models/user.model");

module.exports.CreateTempuser = async ({
  email,
  name,
  password,
  otp,
  otpExpire,
}) => {
  if (!email || !name || !password || !otp || !otpExpire) {
    throw new Error("All fields are required");
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

  const tempuser = await TempUserModel.create({
    email,
    name,
    password,
    otp,
    otpExpire,
  });

  return tempuser;
};
