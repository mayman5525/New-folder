const express = require("express");
const {
  createReport,
  getReports,
  updateReport,
  deleteReport,
} = require("../controller/reportController");
const router = express.Router();

router.post("/", createReport);
router.get("/", getReports);
router.put("/:id", updateReport);
router.delete("/:id", deleteReport);

module.exports = router;
