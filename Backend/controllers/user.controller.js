const TempUserModel = require("../models/tempuser.model");
const UserModel = require("../models/user.model");
const WebsiteModel = require("../models/Website.model");
const transporter = require("../services/send-mail.service");
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

    const info = await transporter.sendMail({
      from: "Cobra AI 2.0 <endgamingai2@gmail.com>",
      to: email,
      subject: "🔐 Your Cobra AI 2.0 Verification Code",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cobra AI 2.0 Verification Code</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0a0f0f;
            margin: 0;
            padding: 20px;
            -webkit-font-smoothing: antialiased;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #0d1a1a;
            color: #e6f7f7;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #00ffaa;
            box-shadow: 0 10px 25px rgba(0, 255, 170, 0.1);
        }
        
        .email-header {
            background: linear-gradient(135deg, #003329, #001a14);
            padding: 30px 25px;
            text-align: center;
            border-bottom: 1px solid #00ffaa;
            position: relative;
            overflow: hidden;
        }
        
        .email-header::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(0, 255, 170, 0.1) 0%, rgba(0, 255, 170, 0) 60%);
            transform: rotate(30deg);
        }
        
        .logo {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 5px;
            letter-spacing: 1px;
            position: relative;
        }
        
        .logo span {
            color: #00ffaa;
            text-shadow: 0 0 10px rgba(0, 255, 170, 0.7);
        }
        
        .version {
            font-size: 12px;
            color: #00ffaa;
            margin-left: 5px;
            vertical-align: super;
        }
        
        .tagline {
            margin: 5px 0 0;
            font-size: 12px;
            color: #80ffd4;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            position: relative;
        }
        
        .email-body {
            padding: 35px 30px;
        }
        
        .greeting {
            color: #00ffaa;
            margin-top: 0;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        .message {
            line-height: 1.7;
            margin-bottom: 25px;
            font-size: 15px;
            color: #c2f0e0;
        }
        
        .otp-container {
            background-color: #0f2a23;
            border-left: 4px solid #00ffaa;
            padding: 25px;
            margin: 30px 0;
            border-radius: 6px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .otp-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ffaa, transparent);
        }
        
        .otp-label {
            margin: 0 0 15px;
            font-size: 15px;
            color: #80ffd4;
        }
        
        .otp-code {
            font-size: 38px;
            font-weight: bold;
            letter-spacing: 8px;
            color: #ffffff;
            margin: 20px 0;
            background: linear-gradient(135deg, #003329, #001a14);
            padding: 15px 25px;
            border-radius: 8px;
            display: inline-block;
            min-width: 250px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            font-family: 'Courier New', monospace;
            border: 1px solid #00cc88;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        .validity {
            margin: 15px 0 0;
            font-size: 14px;
            color: #80ffd4;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .validity-icon {
            font-size: 16px;
        }
        
        .warning {
            font-size: 14px;
            color: #80ffd4;
            line-height: 1.7;
            padding: 15px;
            background-color: #0f2a23;
            border-radius: 6px;
            margin: 25px 0;
            border-left: 3px solid #00ffaa;
        }
        
        .support-section {
            margin-top: 35px;
            padding-top: 25px;
            border-top: 1px solid #006644;
        }
        
        .support-title {
            margin-bottom: 12px;
            color: #80ffd4;
            font-weight: 500;
        }
        
        .support-email {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #00ffaa;
            text-decoration: none;
            font-weight: 500;
            padding: 10px 15px;
            background-color: #0f2a23;
            border-radius: 6px;
            transition: all 0.3s ease;
        }
        
        .support-email:hover {
            background-color: #003329;
            box-shadow: 0 0 10px rgba(0, 255, 170, 0.3);
        }
        
        .website-link {
            margin-top: 20px;
            font-size: 14px;
            color: #80ffd4;
        }
        
        .website-link a {
            color: #00ffaa;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .website-link a:hover {
            text-decoration: underline;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        .email-footer {
            background-color: #001a14;
            padding: 20px 15px;
            text-align: center;
            font-size: 13px;
            color: #80ffd4;
            border-top: 1px solid #006644;
        }
        
        .copyright {
            margin-bottom: 8px;
        }
        
        .powered-by {
            font-size: 12px;
            opacity: 0.8;
        }
        
        .social-links {
            margin-top: 15px;
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        
        .social-link {
            color: #80ffd4;
            text-decoration: none;
            font-size: 12px;
            transition: color 0.3s ease;
        }
        
        .social-link:hover {
            color: #00ffaa;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        @media (max-width: 480px) {
            .email-body {
                padding: 25px 20px;
            }
            
            .otp-code {
                font-size: 28px;
                letter-spacing: 5px;
                padding: 12px 20px;
                min-width: 200px;
            }
            
            .email-header {
                padding: 25px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1 class="logo">Cobra<span>AI</span><span class="version">2.0</span></h1>
            <p class="tagline">NEXT-GENERATION AI SOLUTIONS</p>
        </div>
        
        <div class="email-body">
            <h2 class="greeting">Verify Your Email Address</h2>
            <p class="message">Thank you for choosing Cobra AI 2.0. To complete your verification and access all our advanced AI features, please enter the following One-Time Password (OTP) in the verification page:</p>
            
            <div class="otp-container">
                <p class="otp-label">Your verification code for ${email}:</p>
                <div class="otp-code">${otp}</div>
                <p class="validity">
                    <span class="validity-icon">⏱</span> 
                    Valid for 5 minutes
                </p>
            </div>
            
            <p class="warning">⚠️ For your security, please do not share this code with anyone. Cobra AI 2.0 team will never ask you for your verification code.</p>
            
            <div class="support-section">
                <p class="support-title">Need assistance?</p>
                <a href="mailto:support@cobraai.com" class="support-email">
                    <span>✉️</span> support@cobraai.com
                </a>
                <p class="website-link">Or visit our website: <a href="https://cobraai.com">cobraai.com</a></p>
            </div>
        </div>
        
        <div class="email-footer">
            <p class="copyright">© ${new Date().getFullYear()} Cobra AI 2.0. All rights reserved.</p>
            <p class="powered-by">Powered by Advanced Neural Network Technology</p>
            <div class="social-links">
                <a href="https://www.instagram.com/cobraai/" class="social-link">Instagram</a>
                <a href="https://cobraai.com/privacy" class="social-link">Privacy Policy</a>
                <a href="https://github.com/cobraai" class="social-link">GitHub</a>
                <a href="https://www.linkedin.com/company/cobraai" class="social-link">LinkedIn</a>
            </div>
        </div>
    </div>
</body>
</html>
`,
    });

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
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
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

    const info = await transporter.sendMail({
      from: "Cobra AI 2.0 <endgamingai2@gmail.com>",
      to: email,
      subject: "🔐 Your Cobra AI 2.0 Verification Code",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cobra AI 2.0 Verification Code</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0a0f0f;
            margin: 0;
            padding: 20px;
            -webkit-font-smoothing: antialiased;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #0d1a1a;
            color: #e6f7f7;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #00ffaa;
            box-shadow: 0 10px 25px rgba(0, 255, 170, 0.1);
        }
        
        .email-header {
            background: linear-gradient(135deg, #003329, #001a14);
            padding: 30px 25px;
            text-align: center;
            border-bottom: 1px solid #00ffaa;
            position: relative;
            overflow: hidden;
        }
        
        .email-header::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(0, 255, 170, 0.1) 0%, rgba(0, 255, 170, 0) 60%);
            transform: rotate(30deg);
        }
        
        .logo {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 5px;
            letter-spacing: 1px;
            position: relative;
        }
        
        .logo span {
            color: #00ffaa;
            text-shadow: 0 0 10px rgba(0, 255, 170, 0.7);
        }
        
        .version {
            font-size: 12px;
            color: #00ffaa;
            margin-left: 5px;
            vertical-align: super;
        }
        
        .tagline {
            margin: 5px 0 0;
            font-size: 12px;
            color: #80ffd4;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            position: relative;
        }
        
        .email-body {
            padding: 35px 30px;
        }
        
        .greeting {
            color: #00ffaa;
            margin-top: 0;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        .message {
            line-height: 1.7;
            margin-bottom: 25px;
            font-size: 15px;
            color: #c2f0e0;
        }
        
        .otp-container {
            background-color: #0f2a23;
            border-left: 4px solid #00ffaa;
            padding: 25px;
            margin: 30px 0;
            border-radius: 6px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .otp-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ffaa, transparent);
        }
        
        .otp-label {
            margin: 0 0 15px;
            font-size: 15px;
            color: #80ffd4;
        }
        
        .otp-code {
            font-size: 38px;
            font-weight: bold;
            letter-spacing: 8px;
            color: #ffffff;
            margin: 20px 0;
            background: linear-gradient(135deg, #003329, #001a14);
            padding: 15px 25px;
            border-radius: 8px;
            display: inline-block;
            min-width: 250px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            font-family: 'Courier New', monospace;
            border: 1px solid #00cc88;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        .validity {
            margin: 15px 0 0;
            font-size: 14px;
            color: #80ffd4;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .validity-icon {
            font-size: 16px;
        }
        
        .warning {
            font-size: 14px;
            color: #80ffd4;
            line-height: 1.7;
            padding: 15px;
            background-color: #0f2a23;
            border-radius: 6px;
            margin: 25px 0;
            border-left: 3px solid #00ffaa;
        }
        
        .support-section {
            margin-top: 35px;
            padding-top: 25px;
            border-top: 1px solid #006644;
        }
        
        .support-title {
            margin-bottom: 12px;
            color: #80ffd4;
            font-weight: 500;
        }
        
        .support-email {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #00ffaa;
            text-decoration: none;
            font-weight: 500;
            padding: 10px 15px;
            background-color: #0f2a23;
            border-radius: 6px;
            transition: all 0.3s ease;
        }
        
        .support-email:hover {
            background-color: #003329;
            box-shadow: 0 0 10px rgba(0, 255, 170, 0.3);
        }
        
        .website-link {
            margin-top: 20px;
            font-size: 14px;
            color: #80ffd4;
        }
        
        .website-link a {
            color: #00ffaa;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .website-link a:hover {
            text-decoration: underline;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        .email-footer {
            background-color: #001a14;
            padding: 20px 15px;
            text-align: center;
            font-size: 13px;
            color: #80ffd4;
            border-top: 1px solid #006644;
        }
        
        .copyright {
            margin-bottom: 8px;
        }
        
        .powered-by {
            font-size: 12px;
            opacity: 0.8;
        }
        
        .social-links {
            margin-top: 15px;
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        
        .social-link {
            color: #80ffd4;
            text-decoration: none;
            font-size: 12px;
            transition: color 0.3s ease;
        }
        
        .social-link:hover {
            color: #00ffaa;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        @media (max-width: 480px) {
            .email-body {
                padding: 25px 20px;
            }
            
            .otp-code {
                font-size: 28px;
                letter-spacing: 5px;
                padding: 12px 20px;
                min-width: 200px;
            }
            
            .email-header {
                padding: 25px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1 class="logo">Cobra<span>AI</span><span class="version">2.0</span></h1>
            <p class="tagline">NEXT-GENERATION AI SOLUTIONS</p>
        </div>
        
        <div class="email-body">
            <h2 class="greeting">Verify Your Email Address</h2>
            <p class="message">Thank you for choosing Cobra AI 2.0. To complete your verification and access all our advanced AI features, please enter the following One-Time Password (OTP) in the verification page:</p>
            
            <div class="otp-container">
                <p class="otp-label">Your verification code for ${email}:</p>
                <div class="otp-code">${Otp}</div>
                <p class="validity">
                    <span class="validity-icon">⏱</span> 
                    Valid for 5 minutes
                </p>
            </div>
            
            <p class="warning">⚠️ For your security, please do not share this code with anyone. Cobra AI 2.0 team will never ask you for your verification code.</p>
            
            <div class="support-section">
                <p class="support-title">Need assistance?</p>
                <a href="mailto:support@cobraai.com" class="support-email">
                    <span>✉️</span> support@cobraai.com
                </a>
                <p class="website-link">Or visit our website: <a href="https://cobraai.com">cobraai.com</a></p>
            </div>
        </div>
        
        <div class="email-footer">
            <p class="copyright">© ${new Date().getFullYear()} Cobra AI 2.0. All rights reserved.</p>
            <p class="powered-by">Powered by Advanced Neural Network Technology</p>
            <div class="social-links">
                <a href="https://www.instagram.com/cobraai/" class="social-link">Instagram</a>
                <a href="https://cobraai.com/privacy" class="social-link">Privacy Policy</a>
                <a href="https://github.com/cobraai" class="social-link">GitHub</a>
                <a href="https://www.linkedin.com/company/cobraai" class="social-link">LinkedIn</a>
            </div>
        </div>
    </div>
</body>
</html>
`,
    });

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
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
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

    const info = await transporter.sendMail({
      from: "Cobra AI 2.0 <endgamingai2@gmail.com>",
      to: email,
      subject: "🔐 Your Cobra AI 2.0 Verification Code",
      html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cobra AI 2.0 Verification Code</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #0a0f0f;
            margin: 0;
            padding: 20px;
            -webkit-font-smoothing: antialiased;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #0d1a1a;
            color: #e6f7f7;
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid #00ffaa;
            box-shadow: 0 10px 25px rgba(0, 255, 170, 0.1);
        }
        
        .email-header {
            background: linear-gradient(135deg, #003329, #001a14);
            padding: 30px 25px;
            text-align: center;
            border-bottom: 1px solid #00ffaa;
            position: relative;
            overflow: hidden;
        }
        
        .email-header::before {
            content: "";
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(0, 255, 170, 0.1) 0%, rgba(0, 255, 170, 0) 60%);
            transform: rotate(30deg);
        }
        
        .logo {
            font-size: 28px;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 5px;
            letter-spacing: 1px;
            position: relative;
        }
        
        .logo span {
            color: #00ffaa;
            text-shadow: 0 0 10px rgba(0, 255, 170, 0.7);
        }
        
        .version {
            font-size: 12px;
            color: #00ffaa;
            margin-left: 5px;
            vertical-align: super;
        }
        
        .tagline {
            margin: 5px 0 0;
            font-size: 12px;
            color: #80ffd4;
            letter-spacing: 1.5px;
            text-transform: uppercase;
            position: relative;
        }
        
        .email-body {
            padding: 35px 30px;
        }
        
        .greeting {
            color: #00ffaa;
            margin-top: 0;
            font-size: 22px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        
        .message {
            line-height: 1.7;
            margin-bottom: 25px;
            font-size: 15px;
            color: #c2f0e0;
        }
        
        .otp-container {
            background-color: #0f2a23;
            border-left: 4px solid #00ffaa;
            padding: 25px;
            margin: 30px 0;
            border-radius: 6px;
            text-align: center;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            position: relative;
            overflow: hidden;
        }
        
        .otp-container::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(90deg, transparent, #00ffaa, transparent);
        }
        
        .otp-label {
            margin: 0 0 15px;
            font-size: 15px;
            color: #80ffd4;
        }
        
        .otp-code {
            font-size: 38px;
            font-weight: bold;
            letter-spacing: 8px;
            color: #ffffff;
            margin: 20px 0;
            background: linear-gradient(135deg, #003329, #001a14);
            padding: 15px 25px;
            border-radius: 8px;
            display: inline-block;
            min-width: 250px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            font-family: 'Courier New', monospace;
            border: 1px solid #00cc88;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        .validity {
            margin: 15px 0 0;
            font-size: 14px;
            color: #80ffd4;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        
        .validity-icon {
            font-size: 16px;
        }
        
        .warning {
            font-size: 14px;
            color: #80ffd4;
            line-height: 1.7;
            padding: 15px;
            background-color: #0f2a23;
            border-radius: 6px;
            margin: 25px 0;
            border-left: 3px solid #00ffaa;
        }
        
        .support-section {
            margin-top: 35px;
            padding-top: 25px;
            border-top: 1px solid #006644;
        }
        
        .support-title {
            margin-bottom: 12px;
            color: #80ffd4;
            font-weight: 500;
        }
        
        .support-email {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            color: #00ffaa;
            text-decoration: none;
            font-weight: 500;
            padding: 10px 15px;
            background-color: #0f2a23;
            border-radius: 6px;
            transition: all 0.3s ease;
        }
        
        .support-email:hover {
            background-color: #003329;
            box-shadow: 0 0 10px rgba(0, 255, 170, 0.3);
        }
        
        .website-link {
            margin-top: 20px;
            font-size: 14px;
            color: #80ffd4;
        }
        
        .website-link a {
            color: #00ffaa;
            text-decoration: none;
            font-weight: 500;
            transition: all 0.3s ease;
        }
        
        .website-link a:hover {
            text-decoration: underline;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        .email-footer {
            background-color: #001a14;
            padding: 20px 15px;
            text-align: center;
            font-size: 13px;
            color: #80ffd4;
            border-top: 1px solid #006644;
        }
        
        .copyright {
            margin-bottom: 8px;
        }
        
        .powered-by {
            font-size: 12px;
            opacity: 0.8;
        }
        
        .social-links {
            margin-top: 15px;
            display: flex;
            justify-content: center;
            gap: 15px;
        }
        
        .social-link {
            color: #80ffd4;
            text-decoration: none;
            font-size: 12px;
            transition: color 0.3s ease;
        }
        
        .social-link:hover {
            color: #00ffaa;
            text-shadow: 0 0 5px rgba(0, 255, 170, 0.5);
        }
        
        @media (max-width: 480px) {
            .email-body {
                padding: 25px 20px;
            }
            
            .otp-code {
                font-size: 28px;
                letter-spacing: 5px;
                padding: 12px 20px;
                min-width: 200px;
            }
            
            .email-header {
                padding: 25px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1 class="logo">Cobra<span>AI</span><span class="version">2.0</span></h1>
            <p class="tagline">NEXT-GENERATION AI SOLUTIONS</p>
        </div>
        
        <div class="email-body">
            <h2 class="greeting">Verify Your Email Address</h2>
            <p class="message">Thank you for choosing Cobra AI 2.0. To complete your verification and access all our advanced AI features, please enter the following One-Time Password (OTP) in the verification page:</p>
            
            <div class="otp-container">
                <p class="otp-label">Your verification code for ${email}:</p>
                <div class="otp-code">${Otp}</div>
                <p class="validity">
                    <span class="validity-icon">⏱</span> 
                    Valid for 5 minutes
                </p>
            </div>
            
            <p class="warning">⚠️ For your security, please do not share this code with anyone. Cobra AI 2.0 team will never ask you for your verification code.</p>
            
            <div class="support-section">
                <p class="support-title">Need assistance?</p>
                <a href="mailto:support@cobraai.com" class="support-email">
                    <span>✉️</span> support@cobraai.com
                </a>
                <p class="website-link">Or visit our website: <a href="https://cobraai.com">cobraai.com</a></p>
            </div>
        </div>
        
        <div class="email-footer">
            <p class="copyright">© ${new Date().getFullYear()} Cobra AI 2.0. All rights reserved.</p>
            <p class="powered-by">Powered by Advanced Neural Network Technology</p>
            <div class="social-links">
                <a href="https://www.instagram.com/cobraai/" class="social-link">Instagram</a>
                <a href="https://cobraai.com/privacy" class="social-link">Privacy Policy</a>
                <a href="https://github.com/cobraai" class="social-link">GitHub</a>
                <a href="https://www.linkedin.com/company/cobraai" class="social-link">LinkedIn</a>
            </div>
        </div>
    </div>
</body>
</html>
`,
    });

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

module.exports.deleteUser = async (req, res) => {
  try {
    const UserId = req.user._id;

    if (!UserId) {
      return res.status(400).json({
        message: "User ID is required",
      });
    }

    const User = await UserModel.findById(UserId);

    if (!User) {
      return res.status(400).json({
        message: "User not found",
      });
    }

    await User.deleteOne();
    res.clearCookie("token");

    const Websites = await WebsiteModel.find({ UserId });

    if (Websites) {
      Websites.forEach(async (website) => {
        await website.deleteOne();
      });
    }

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
