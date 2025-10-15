const jwt = require("jsonwebtoken");

module.exports.AuthUser = (req, res, next) => {
  try {
    const token =
      req.cookies?.token || req.headers?.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "Access Denied",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    // res.clearCookie("token");
    res.status(401).json({
      message: "Unauthorized Access",
    });
  }
};
