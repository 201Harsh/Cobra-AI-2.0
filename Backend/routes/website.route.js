const router = require("express").Router();
const WebsiteController = require("../controllers/website.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const RateLomitMiddleware = require("../middlewares/rate-limit.middleware");

router.get(
  "/all",
  AuthMiddleware.AuthUser,
  RateLomitMiddleware.GlobalLimit,
  WebsiteController.GetAllWebsites
);

router.get(
  "/g/:id",
  AuthMiddleware.AuthUser,
  RateLomitMiddleware.GlobalLimit,
  WebsiteController.GetWebsiteById
);

router.delete(
  "/delete/:id",
  AuthMiddleware.AuthUser,
  RateLomitMiddleware.GlobalLimit,
  WebsiteController.DeleteWebsite
);

module.exports = router;
