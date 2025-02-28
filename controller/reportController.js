const { Report } = require("../models");

// Create Report
const createReport = async (req, res) => {
  try {
    const {
      name_ar,
      name_en,
      description_ar,
      description_en,
      mainDescription_ar,
      mainDescription_en,
    } = req.body;
    const image = req.files?.image ? req.files.image[0].path : null;

    const report = await Report.create({
      name_ar,
      name_en,
      description_ar,
      mainDescription_ar,
      mainDescription_en,
      description_en,
      Image: image,
    });

    res.status(201).json({ message: "Report created successfully", report });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating report", error: error.message });
  }
};

// Get All Reports
const getReports = async (req, res) => {
  try {
    const reports = await Report.findAll();
    res.status(200).json(reports);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving reports", error: error.message });
  }
};

// Get Report by ID
const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findByPk(id);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json(report);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving report", error: error.message });
  }
};

// Update Report
const updateReport = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name_ar,
      name_en,
      description_ar,
      mainDescription_ar,
      mainDescription_en,
      description_en,
    } = req.body;
    const image = req.files?.image ? req.files.image[0].path : null;

    const report = await Report.findByPk(id);
    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    await report.update({
      name_ar,
      name_en,
      description_ar,
      mainDescription_ar,
      mainDescription_en,
      description_en,
      Image: image || report.Image,
    });

    res.status(200).json({ message: "Report updated successfully", report });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating report", error: error.message });
  }
};

// Delete Report
const deleteReport = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Report.findByPk(id);

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    await report.destroy();
    res.status(200).json({ message: "Report deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting report", error: error.message });
  }
};

module.exports = {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
};
