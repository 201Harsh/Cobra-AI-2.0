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

module.exports.VerifyOtp = async ({ email, otp }) => {
  if (!email || !otp) {
    throw new Error("All fields are required");
  }

  const tempuser = await TempUserModel.findOne({ email });

  if (!tempuser) {
    throw new Error("User not found");
  }

  if (tempuser.otp !== otp) {
    throw new Error("Invalid OTP");
  }
  if (tempuser.otpExpire < Date.now()) {
    throw new Error("OTP expired");
  }

  const user = await UserModel.create({
    email: tempuser.email,
    name: tempuser.name,
    password: tempuser.password,
  });

  await tempuser.deleteOne();

  return user;
};
