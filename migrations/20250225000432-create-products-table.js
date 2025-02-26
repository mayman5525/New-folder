"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      is_featured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      title_ar: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      title_en: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description_ar: {
        type: Sequelize.TEXT,
      },
      description_en: {
        type: Sequelize.TEXT,
      },
      image: {
        type: Sequelize.STRING,
      },
      pdfUrl: {
        type: Sequelize.STRING,
      },
      applications_ar: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      applications_en: {
        type: Sequelize.ARRAY(Sequelize.STRING),
      },
      details_ar: {
        type: Sequelize.TEXT,
      },
      details_en: {
        type: Sequelize.TEXT,
      },

      ratio: {
        type: Sequelize.STRING,
      },
      crossSection: {
        type: Sequelize.STRING,
      },
      diameter: {
        type: Sequelize.STRING,
      },
      length: {
        type: Sequelize.STRING,
      },
      shape: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
