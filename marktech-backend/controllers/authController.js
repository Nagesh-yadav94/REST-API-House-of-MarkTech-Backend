require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { readData, writeData } = require("../utils/fileHandler");

const SECRET_KEY = process.env.SECRET_KEY
const TOKEN_EXPIRY = process.env.TOKEN_EXPIRY || "7d";
exports.register = (req, res) => {
  const { name, email, password } = req.body;
  let users = readData("users.json");

  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: "User already exists" });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = { id: Date.now(), name, email, password: hashedPassword };
  users.push(newUser);
  writeData("users.json", users);

  res.json({ msg: "Registered successfully" });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const users = readData("users.json");
  const user = users.find(u => u.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: TOKEN_EXPIRY });
  res.json({message: "Login Successsfully", token });
};
