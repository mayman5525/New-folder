const { Project } = require("../models");

// Create Project
const createProject = async (req, res) => {
  try {
    const {
      name_ar,
      name_en,
      mainDescription_ar,
      mainDescription_en,
      description_ar,
      description_en,
    } = req.body;
    const image = req.files?.image ? req.files.image[0].path : null; // Get image path if uploaded

    const project = await Project.create({
      name_ar,
      name_en,
      description_ar,
      mainDescription_ar,
      mainDescription_en,
      description_en,
      Image: image,
    });

    res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating project", error: error.message });
  }
};

// Get All Projects
const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.status(200).json(projects);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving projects", error: error.message });
  }
};

// Get Project by ID
const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json(project);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving project", error: error.message });
  }
};

// Update Project
const updateProject = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name_ar,
      name_en,
      mainDescription_ar,
      mainDescription_en,
      description_ar,
      description_en,
    } = req.body;
    const image = req.files?.image ? req.files.image[0].path : null;

    const project = await Project.findByPk(id);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await project.update({
      name_ar,
      name_en,
      mainDescription_ar,
      mainDescription_en,
      description_ar,
      description_en,
      Image: image || project.Image, // Keep existing image if no new one is uploaded
    });

    res.status(200).json({ message: "Project updated successfully", project });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating project", error: error.message });
  }
};

// Delete Project
const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);

    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    await project.destroy();
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting project", error: error.message });
  }
};

module.exports = {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
