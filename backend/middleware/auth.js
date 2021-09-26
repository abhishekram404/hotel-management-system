const jwt = require("jsonwebtoken");
const auth = async (req, res, next) => {
  try {
    const token = await req.cookies.jwt;
    if (!token) {
      res.clearCookie("jwt");
      return res.status(401).send({
        type: "error",
        isUserLoggedIn: false,
        message: "Access denied! Please login again.",
        details: {},
      });
    }

    const user = await jwt.verify(token, "JWTSUPERSECRETKEY");

    if (!user) {
      res.clearCookie("jwt");
      res.clearCookie("isUserLoggedIn");
      return res.status(401).send({
        message: "Access denied! Please login first.",
        details: {},
        isUserLoggedIn: false,
      });
    }
    req.authenticatedUser = user;
    next();
  } catch (err) {
    res.clearCookie("jwt");
    res.clearCookie("isUserLoggedIn");
    res.status(500).send({
      isUserLoggedIn: false,
      message: "Access denied! Please login again.",
      details: {},
    });
  }
};

module.exports = auth;
