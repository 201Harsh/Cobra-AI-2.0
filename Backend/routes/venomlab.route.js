const router = require("express").Router();
const VenomLabController = require("../controllers/venomlab.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const ValidateMiddleware = require("../middlewares/validate.middleware");
const { body } = require("express-validator");

router.post(
  "/create",
  [body("name").notEmpty().withMessage("Name is required")],
  [body("environment").notEmpty().withMessage("Environment is required")],
  AuthMiddleware.AuthUser,
  VenomLabController.createVenomLab,
  ValidateMiddleware.validateUser
);

module.exports = router;
