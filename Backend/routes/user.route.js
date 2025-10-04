const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const ValidateMiddleware = require("../middlewares/validate.middleware");
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

module.exports = router;
