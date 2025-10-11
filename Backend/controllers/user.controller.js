const TempUserModel = require("../models/tempuser.model");
const UserModel = require("../models/user.model");
const UserService = require("../services/user.service");

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const allowedDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
      "protonmail.com",
      "aol.com",
      "mail.com",
      "zoho.com",
      "yandex.com",
    ];

    const validateEmail = (email) => {
      const domain = email.split("@")[1]?.toLowerCase();
      if (!allowedDomains.includes(domain)) {
        throw new Error("Use a Valid Email Address");
      }
      return true;
    };

    validateEmail(email);

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const existingUser = await TempUserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists Please Verify your email",
      });
    }

    const ifUserExists = await UserModel.findOne({ email });

    if (ifUserExists) {
      return res.status(400).json({
        message: "User already exists Please Login",
      });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);

    const OtpExpiryTime = Date.now() + 5 * 60 * 1000;

    const hashedPassword = await UserModel.HashPassword(password);

    const tempuser = await UserService.CreateTempuser({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpire: OtpExpiryTime,
    });

    if (!tempuser) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

    res.status(201).json({
      message: "Verfiy your email via otp",
      tempuser,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const User = await UserService.VerifyOtp({
      email,
      otp,
    });

    if (!User) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

    const token = User.Jwt_token();

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "Account created successfully",
      User,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.resendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const Otp = Math.floor(1000 + Math.random() * 9000);
    const OtpExpiryTime = Date.now() + 5 * 60 * 1000;

    const User = await UserService.ResendOtp({
      email,
      otp: Otp,
      otpExpire: OtpExpiryTime,
    });

    if (!User) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

    res.status(200).json({
      message: "OTP sent successfully",
      User,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid credentials",
      });
    }

    const token = user.Jwt_token();

    res.cookie("token", token, {
      httpOnly: true,
    });

    res.status(200).json({
      message: "Login successful",
      user,
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.forgotPasswordSendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required",
      });
    }

    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    const Otp = Math.floor(100000 + Math.random() * 900000);
    const OtpExpiryTime = Date.now() + 5 * 60 * 1000;

    const User = await UserService.ForgetPasswordSendOtp({
      user,
      email,
      otp: Otp,
      otpExpire: OtpExpiryTime,
    });

    if (!User) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

    res.status(201).json({
      message: "OTP sent successfully",
      User,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.checkOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    await UserService.CheckOtp({
      email,
      otp,
    });

    res.status(201).json({
      message: "OTP verified successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.UpdatePassword = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const User = await UserService.UpdatePassword({
      email,
      password,
    });

    if (!User) {
      return res.status(400).json({
        message: "Something went wrong",
      });
    }

    res.status(200).json({
      message: "Password updated successfully",
      User,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.logoutUser = async (req, res) => {
  try {
    res.clearCookie("token");

    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.getUser = async (req, res) => {
  try {
    const UserId = req.user._id;

    if (!UserId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const user = await UserModel.findById(UserId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      message: "User found",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.getAllUsers = async (req, res) => {
  try {
    const Users = await UserModel.find();

    if (!Users) {
      return res.status(400).json({
        message: "No Users Yet",
      });
    }

    res.status(200).json({
      message: "Users found",
      Users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports.updateMode = async (req, res) => {
  try {
    const UserId = req.user._id;

    const { mode } = req.body;

    const user = await UserModel.findById(UserId);

    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    user.mode = mode;

    await user.save();

    res.status(200).json({
      message: "Mode updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
