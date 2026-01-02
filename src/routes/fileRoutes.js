const express = require("express");
const router = express.Router();

const fileController = require("../controllers/fileController");
const auth = require("../middleware/authMiddleware");
router.post("/create-document", auth, fileController.createDocument);
router.get("/get-document/:id", auth, fileController.getDocument);
router.get("/get-documents", auth, fileController.getDocuments);
router.put("/edit-document/:id", auth, fileController.editDocument);
router.get("/get-versions/:id", auth, fileController.getVersions);
router.delete("/delete-document/:id", auth, fileController.deleteDocument);
router.get("/search", auth, fileController.searchTitle);

module.exports = router;
