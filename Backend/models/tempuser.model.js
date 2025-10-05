const mongoose = require("mongoose");

const TempUserModel = new mongoose.Schema({
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
  otp: {
    type: String,
    required: true,
  },
  otpExpire: {
    type: Date,
    required: true,
    index: { expires: 300 },
  },
});

TempUserModel.index({ otpExpire: 1 }, { expireAfterSeconds: 300 });

const TempUser = mongoose.model("TempUser", TempUserModel);

module.exports = TempUser;
