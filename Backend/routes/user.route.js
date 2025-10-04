const router = require("express").Router();
const UserController = require("../controllers/user.controller");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const { body } = require("express-validator");

router.post("/register", [
  body("name").notEmpty().withMessage("Name is required"),
  body("email").isEmail().withMessage("Email is invalid"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  ValidateMiddleware.validateUser,
  UserController.registerUser,
]);

module.exports = router;
