const { Report } = require("../models");

exports.createReport = async (req, res) => {
  try {
    const report = await Report.create(req.body);
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateReport = async (req, res) => {
  try {
    const report = await Report.update(req.body, {
      where: { id: req.params.id },
    });
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.deleteReport = async (req, res) => {
  try {
    const report = await Report.destroy({
      where: { id: req.params.id },
    });
    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
