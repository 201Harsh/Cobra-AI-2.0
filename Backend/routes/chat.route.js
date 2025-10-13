const router = require("express").Router();
const ChatContaller = require("../controllers/chat.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");

router.get("/get/all", AuthMiddleware.AuthUser, ChatContaller.SaveChats);

module.exports = router;
