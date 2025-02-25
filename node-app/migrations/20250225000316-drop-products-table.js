"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products"); // Drop the table
  },
  down: async (queryInterface, Sequelize) => {
    // Recreate the table (if needed for rollback)
    await queryInterface.createTable("Products", {
      id: { type: Sequelize.STRING, primaryKey: true },
      title_ar: { type: Sequelize.STRING, allowNull: false },
      title_en: { type: Sequelize.STRING, allowNull: false },
      type: { type: Sequelize.STRING },
      is_featured: { type: Sequelize.BOOLEAN, defaultValue: false },
      description_ar: { type: Sequelize.TEXT },
      description_en: { type: Sequelize.TEXT },
      image: { type: Sequelize.STRING },
      pdfUrl: { type: Sequelize.STRING },
      heroDescription_en: { type: Sequelize.TEXT },
      heroDescription_ar: { type: Sequelize.TEXT },
      specifications_ar: { type: Sequelize.TEXT },
      specifications_en: { type: Sequelize.TEXT },
      applications_ar: { type: Sequelize.ARRAY(Sequelize.STRING) },
      applications_en: { type: Sequelize.ARRAY(Sequelize.STRING) },
      details_ar: { type: Sequelize.JSONB },
      details_en: { type: Sequelize.JSONB },
      createdAt: { type: Sequelize.DATE, allowNull: false },
      updatedAt: { type: Sequelize.DATE, allowNull: false },
    });
  },
};
