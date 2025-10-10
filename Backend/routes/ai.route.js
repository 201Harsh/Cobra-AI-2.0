const router = require("express").Router();
const AIController = require("../controllers/ai.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const { body } = require("express-validator");

router.post(
  "/site/gen",
  [
    body("brandName").notEmpty().withMessage("Brand name is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("email").isEmail().withMessage("Email is invalid"),
    body("tone").notEmpty().withMessage("Tone is required"),
  ],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  AIController.GenerateWebsite
);

module.exports = router;
