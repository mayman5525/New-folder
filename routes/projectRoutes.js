const express = require("express");
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} = require("../controller/projectController");
const router = express.Router();
const { upload } = require("../uploadUtils");

router.post(
  "/",
  upload.fields([{ name: "image", maxCount: 1 }]),
  createProject
);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put(
  "/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  updateProject
);
router.delete("/:id", deleteProject);

module.exports = router;
