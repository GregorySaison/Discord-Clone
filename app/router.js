const express = require("express");
const router = express.Router();
const groupController = require("./controllers/groupController");
const contactController = require("./controllers/contactController.js");

router.get("/groups", groupController.getAll);
router.get("/groups/:id/contacts", contactController.getAllByGroup);

module.exports = router;
