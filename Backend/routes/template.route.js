const router = require("express").Router();
const { body } = require("express-validator");
const ValidationMiddleware = require("../middlewares/validate.middleware");
const AuthMiddleware = require("../middlewares/auth.middleware");
const TemplateController = require("../controllers/template.controller");

router.post(
  "/create",
  AuthMiddleware.AuthUser,
  [
    body("name")
      .notEmpty()
      .withMessage("Name is required")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters"),

    body("type").notEmpty().withMessage("Type is required"),

    body("programming_language")
      .notEmpty()
      .withMessage("Programming language is required"),

    body("details")
      .notEmpty()
      .withMessage("Details are required")
      .isLength({ min: 10 })
      .withMessage("Details must be at least 10 characters"),

    body("cover_img")
      .notEmpty()
      .withMessage("Cover image URL is required")
      .isURL()
      .withMessage("Cover image must be a valid URL"),

    body("status")
      .optional()
      .isIn(["free", "premium"])
      .withMessage("Status must be either 'free' or 'premium'"),

    body("price").optional().isNumeric().withMessage("Price must be a number"),

    body("examples_img")
      .isArray({ min: 1 })
      .withMessage("Examples images must be a non-empty array")
      .custom((arr) => arr.every((url) => typeof url === "string"))
      .withMessage("All example images must be strings"),

    body("features")
      .isArray({ min: 1 })
      .withMessage("Features must be a non-empty array")
      .custom((arr) => arr.every((feature) => typeof feature === "string"))
      .withMessage("All features must be strings"),

    body("rating")
      .optional()
      .isFloat({ min: 0, max: 5 })
      .withMessage("Rating must be a number between 0 and 5"),

    body("tech_stack")
      .isArray({ min: 1 })
      .withMessage("Tech stack must be a non-empty array")
      .custom((arr) => arr.every((tech) => typeof tech === "string"))
      .withMessage("All tech stack items must be strings"),

    body("author").notEmpty().withMessage("Author is required"),

    body("code_url")
      .notEmpty()
      .withMessage("Code URL is required")
      .isURL()
      .withMessage("Code URL must be a valid URL"),

    body("demo_url")
      .notEmpty()
      .withMessage("Demo URL is required")
      .isURL()
      .withMessage("Demo URL must be a valid URL"),

    body("uses")
      .optional()
      .isInt({ min: 0 })
      .withMessage("Uses must be a non-negative integer"),
  ],
  ValidationMiddleware.validateUser,
  TemplateController.CreateTemplate
);

router.get("/all", TemplateController.GetAllTemplates);

module.exports = router;
