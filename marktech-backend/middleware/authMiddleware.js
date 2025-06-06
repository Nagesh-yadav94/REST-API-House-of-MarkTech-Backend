const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.SECRET_KEY

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: "Missing token" });

  const token = authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    console.error("Token error:", err.message);
    res.status(401).json({ message: "Invalid or expired token" });
  }
};
