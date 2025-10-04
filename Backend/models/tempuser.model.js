const mongoose = require("mongoose");

const TempUserModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  otpExpire: {
    type: Date,
    required: true,
  },
});

const TempUser = mongoose.model("TempUser", TempUserModel);

module.exports = TempUser;
