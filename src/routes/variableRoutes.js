const express = require("express");
const router = express.Router();
const variableController = require("../controllers/variableController");
const auth = require("../middleware/authMiddleware");
router.post("/create-variable", auth, variableController.createVariable);
router.get("/get-variables", auth, variableController.getAllVariable);
router.put("/edit-variable/:id", auth, variableController.editVariable);
router.delete("/delete-variable/:id", auth, variableController.deleteVariable);
module.exports = router;
