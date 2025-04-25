require("dotenv").config();
const express = require("express");
const app = express();
const authRoutes = require('./routes/authRoutes');
const userTaskRoute = require('./routes/userTaskRoutes');

app.use(express.json());

app.use("/api/auth", authRoutes);   
app.use("/api/tasks", userTaskRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
