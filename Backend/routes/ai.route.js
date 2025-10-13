const router = require("express").Router();
const AIController = require("../controllers/ai.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const { body } = require("express-validator");

router.post(
  "/site/gen",
  [
    body("prompt")
      .notEmpty()
      .withMessage("Prompt is required")
      .isLength({ min: 10 })
      .withMessage("Prompt must be at least 10 characters"),
  ],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  AIController.GenerateWebsite
);

router.post(
  "/chat/gen",
  [body("prompt").notEmpty().withMessage("Prompt is required")],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  AIController.GenerateChat
);

module.exports = router;
