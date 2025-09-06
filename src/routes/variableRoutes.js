const express = require("express");
const router = express.Router();
const variableController = require("../controllers/variableController");

router.post("/create-variable", variableController.createVariable);
router.get("/get-variables", variableController.getAllVariable);
router.put("/edit-variable/:id", variableController.editVariable);
router.delete("/delete-variable/:id", variableController.deleteVariable);
module.exports = router;
