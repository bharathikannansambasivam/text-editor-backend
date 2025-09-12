const express = require("express");
const router = express.Router();

const fileController = require("../controllers/fileController");

router.post("/create-document", fileController.createDocument);
router.get("/get-document/:id", fileController.getDocument);
router.get("/get-documents", fileController.getDocuments);
router.put("/edit-document/:id", fileController.editDocument);
router.get("/get-versions/:id", fileController.getVersions);
router.delete("/delete-document/:id", fileController.deleteDocument);
router.get("/search", fileController.searchTitle);

module.exports = router;
