const router = require("express").Router();
const AIController = require("../controllers/ai.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const { body } = require("express-validator");
const RateLimitMiddleware = require("../middlewares/rate-limit.middleware");

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
  RateLimitMiddleware.createWebsiteLimit,
  AIController.GenerateWebsite
);

router.post(
  "/recreate/:id",
  [body("newPrompt").notEmpty().withMessage("Prompt is required")],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.createWebsiteLimit,
  AIController.UpdateWebsite
);

router.post(
  "/chat/gen",
  [body("prompt").notEmpty().withMessage("Prompt is required")],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.devModeLimit,
  AIController.GenerateChat
);

module.exports = router;
