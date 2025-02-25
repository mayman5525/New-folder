const { Project } = require("../models");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const project = await Project.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.destroy({
      where: { id: req.params.id },
    });
    res.json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
