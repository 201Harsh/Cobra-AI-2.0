const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const AuthMiddleware = require("../middlewares/auth.middleware");
const { body } = require("express-validator");
const RateLimitMiddleware = require("../middlewares/rate-limit.middleware");

router.post("/register", [
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.registerLimit,
  UserController.registerUser,
]);

router.post(
  "/verify",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("otp").notEmpty().withMessage("OTP is required"),
  ],
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.verifyOtpLimit,
  UserController.verifyOtp
);

router.post(
  "/resend",
  [body("email").isEmail().withMessage("Email is invalid")],
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.verifyOtpLimit,
  UserController.resendOtp
);

router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .notEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.loginLimit,
  UserController.loginUser
);

router.post(
  "/forgot",
  [body("email").isEmail().withMessage("Email is invalid")],
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.forgotPasswordLimit,
  UserController.forgotPasswordSendOtp
);

router.post(
  "/check",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("otp").notEmpty().withMessage("OTP is required"),
  ],
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.verifyOtpLimit,
  UserController.checkOtp
);

router.post(
  "/updatePass",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
  ],
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.GlobalLimit,
  UserController.UpdatePassword
);

router.post(
  "/logout",
  AuthMiddleware.AuthUser,
  RateLimitMiddleware.GlobalLimit,
  UserController.logoutUser
);

router.get(
  "/me",
  AuthMiddleware.AuthUser,
  RateLimitMiddleware.GlobalLimit,
  UserController.getUser
);

router.get("/all", UserController.getAllUsers);

router.post(
  "/updateMode",
  [body("mode").notEmpty().withMessage("Mode is required")],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.GlobalLimit,
  UserController.updateMode
);

router.post(
  "/del",
  AuthMiddleware.AuthUser,
  RateLimitMiddleware.GlobalLimit,
  UserController.deleteUser
);

router.post(
  "/contact/admin",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("subject").notEmpty().withMessage("Subject is required"),
    body("category").notEmpty().withMessage("Category is required"),
    body("priority").notEmpty().withMessage("Priority is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  ValidateMiddleware.validateUser,
  UserController.SendContactMessage
);

module.exports = router;
