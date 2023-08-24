/************************************
* File Name: authenticateToken.js   *
* Author: Ammar S.A.A               *
* Output: Authenticate token page   *
************************************/

const jwt = require("jsonwebtoken");
require('dotenv').config()

function authenticateToken(req, res, next) {
  // Get the token from headers, query params, cookies, etc.
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Verify the token
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    // Attach user info to the request object
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
