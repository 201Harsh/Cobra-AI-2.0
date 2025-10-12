const router = require("express").Router();
const WebsiteController = require("../controllers/website.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");

router.get("/all", AuthMiddleware.AuthUser, WebsiteController.GetAllWebsites);

router.get("/g/:id", AuthMiddleware.AuthUser, WebsiteController.GetWebsiteById);

router.delete(
  "/delete/:id",
  AuthMiddleware.AuthUser,
  WebsiteController.DeleteWebsite
);

module.exports = router;
