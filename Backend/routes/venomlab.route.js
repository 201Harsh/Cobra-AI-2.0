const router = require("express").Router();
const VenomLabController = require("../controllers/venomlab.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const { body } = require("express-validator");
const RateLimitMiddleware = require("../middlewares/rate-limit.middleware");

router.post(
  "/create",
  [body("name").notEmpty().withMessage("Name is required")],
  [body("environment").notEmpty().withMessage("Environment is required")],
  AuthMiddleware.AuthUser,
  ValidateMiddleware.validateUser,
  RateLimitMiddleware.venomLabLimit,
  VenomLabController.createVenomLab
);

router.get(
  "/all",
  RateLimitMiddleware.GlobalLimit,
  VenomLabController.getVenomLabs
);

router.get(
  "/one/:id",
  RateLimitMiddleware.GlobalLimit,
  VenomLabController.getVenomLabById
);

router.delete(
  "/delete/:id",
  AuthMiddleware.AuthUser,
  RateLimitMiddleware.GlobalLimit,
  VenomLabController.deleteVenomLab
);

module.exports = router;
