const express = require("express");
const {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} = require("../controller/reportController");
const router = express.Router();
const { upload } = require("../uploadUtils");

router.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }]), // Upload Image
  createReport
);

router.get("/", getReports);
router.get("/:id", getReportById);
router.put(
  "/:id",
  upload.fields([{ name: "image", maxCount: 1 }]), // Upload Image
  updateReport
);
router.delete("/:id", deleteReport);

module.exports = router;
