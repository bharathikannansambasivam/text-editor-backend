const express = require("express");
const router = express.Router();
const { chatWithAI } = require("../controllers/aiController");
const auth = require("../middleware/authMiddleware");
router.post("/ai", auth, chatWithAI);

module.exports = router;
