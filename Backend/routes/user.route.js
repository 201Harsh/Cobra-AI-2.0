const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const AuthMiddleware = require("../middlewares/auth.middleware");
const { body } = require("express-validator");

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
  UserController.registerUser,
]);

router.post(
  "/verify",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("otp").notEmpty().withMessage("OTP is required"),
  ],
  ValidateMiddleware.validateUser,
  UserController.verifyOtp
);

router.post(
  "/resend",
  [body("email").isEmail().withMessage("Email is invalid")],
  ValidateMiddleware.validateUser,
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
  UserController.loginUser
);

router.post(
  "/forgot",
  [body("email").isEmail().withMessage("Email is invalid")],
  ValidateMiddleware.validateUser,
  UserController.forgotPasswordSendOtp
);

router.post(
  "/check",
  [
    body("email").isEmail().withMessage("Email is invalid"),
    body("otp").notEmpty().withMessage("OTP is required"),
  ],
  ValidateMiddleware.validateUser,
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
  UserController.UpdatePassword
);

router.post("/logout", AuthMiddleware.AuthUser, UserController.logoutUser);

router.get("/me", AuthMiddleware.AuthUser, UserController.getUser);

router.get("/all", UserController.getAllUsers);

router.post(
  "/updateMode",
  [body("mode").notEmpty().withMessage("Mode is required")],
  AuthMiddleware.AuthUser,
  UserController.updateMode,
  ValidateMiddleware.validateUser
);

module.exports = router;
