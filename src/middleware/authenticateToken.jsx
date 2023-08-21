/************************************
* File Name: authenticateToken.jsx  *
* Author: Ammar S.A.A               *
* Output: Authenticate token page   *
************************************/

const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("./env"); // Your secret key

function authenticateToken(req, res, next) {
  // Get the token from headers, query params, cookies, etc.
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Verify the token
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }
    // Attach user info to the request object
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
