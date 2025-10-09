const router = reqire("express").Router();
const WebsiteController = require("../controllers/website.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");

router.get("/all", WebsiteController.GetAllWebsites, AuthMiddleware.AuthUser);

module.exports = router;
