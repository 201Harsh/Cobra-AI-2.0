const router = require("express").Router();
const AIController = require("../controllers/ai.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const { body } = require("express-validator");

router.post(
  "/site/gen",
  [
    body("prompt").notEmpty().withMessage("Prompt is required"),
    body("UserDetails").notEmpty().withMessage("UserDetails is required"),
  ],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  AIController.GenerateWebsite
);

module.exports = router;
