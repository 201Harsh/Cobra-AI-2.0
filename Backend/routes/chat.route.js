const router = require("express").Router();
const ChatContaller = require("../controllers/chat.controller");
const AuthMiddleware = require("../middlewares/auth.middleware");
const RateLimitMiddleware = require("../middlewares/rate-limit.middleware");

router.get(
  "/get/all",
  AuthMiddleware.AuthUser,
  RateLimitMiddleware.GlobalLimit,
  ChatContaller.getAllChats
);

router.delete(
  "/del/all",
  AuthMiddleware.AuthUser,
  RateLimitMiddleware.GlobalLimit,
  ChatContaller.DelAllChats
);

module.exports = router;
