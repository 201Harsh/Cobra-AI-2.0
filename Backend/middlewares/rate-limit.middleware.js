const rateLimit = require("express-rate-limit");

// 🌐 Global limiter for general requests
module.exports.GlobalLimit = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 100,
  message: "Too many requests, please try again after 5 minutes",
});

// 🔐 Auth-related endpoints
module.exports.registerLimit = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 3,
  message: "Too many registration attempts, please try again after 10 minutes",
});

module.exports.verifyOtpLimit = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 3,
  message: "Too many OTP verifications, please try again after 5 minutes",
});

module.exports.loginLimit = rateLimit({
  windowMs: 2 * 60 * 1000, // 2 minutes
  max: 5,
  message: "Too many login attempts, please try again after 2 minutes",
});

module.exports.forgotPasswordLimit = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 3,
  message:
    "Too many password reset attempts, please try again after 10 minutes",
});

// 💻 Website creation limit
module.exports.createWebsiteLimit = rateLimit({
  windowMs: 5 * 60 * 1000, // 15 minutes
  max: 5,
  message:
    "Too many website creation requests, please try again after 15 minutes",
});

// ⚙️ Developer Mode / AI usage limiter
module.exports.devModeLimit = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5,
  message: "Too many AI/dev requests, please try again after 1 minute",
});
