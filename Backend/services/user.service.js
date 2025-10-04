const TempUserModel = require("../models/tempuser.model");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");

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

module.exports.ResendOtp = async ({ email, otp, otpExpire }) => {
  if (!email) {
    throw new Error("Email is required");
  }

  const tempuser = await TempUserModel.findOne({ email });

  tempuser.otp = otp;
  tempuser.otpExpire = otpExpire;

  await tempuser.save();

  return tempuser;
};

module.exports.ForgetPasswordSendOtp = async ({
  email,
  otp,
  otpExpire,
  user,
}) => {
  if (!email) {
    throw new Error("Email is required");
  }

  const TempUser = await TempUserModel.create({
    email: user.email,
    name: user.name,
    password: user.password,
    otp,
    otpExpire,
  });

  return TempUser;
};

module.exports.CheckOtp = async ({ email, otp }) => {
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
};

module.exports.UpdatePassword = async ({ email, password }) => {
  if (!email || !password) {
    throw new Error("All fields are required");
  }

  const TempUser = await TempUserModel.findOne({ email });

  if (!TempUser) {
    throw new Error("User not found");
  }

  const isSamePassword = await bcrypt.compare(password, TempUser.password);
  if (isSamePassword) {
    throw new Error("Password used before cannot be used again");
  }

  const HashedPassword = await UserModel.HashPassword(password);

  TempUser.password = HashedPassword;

  await TempUser.save();

  const updatedUser = await UserModel.findOneAndUpdate(
    { email },
    { password: TempUser.password },
    { new: true }
  );

  if (!updatedUser) {
    throw new Error("User not found in main collection");
  }

  return updatedUser;
};
