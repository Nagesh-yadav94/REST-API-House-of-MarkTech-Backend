const express = require("express");
const { getUserTasks, addUserTask, deleteUserTask } = require("../controllers/userTaskController");
const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

router.use(authMiddleware);
router.get("/", getUserTasks);
router.post("/", addUserTask);
router.delete("/:id", deleteUserTask);

module.exports = router;
