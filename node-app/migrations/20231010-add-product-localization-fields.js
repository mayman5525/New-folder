"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Products", "title_ar", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Products", "title_en", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Products", "description_ar", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "description_en", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "heroDescription_ar", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "heroDescription_en", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "specifications_ar", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "specifications_en", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "applications_ar", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "applications_en", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "details_ar", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "details_en", {
      type: Sequelize.TEXT,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Products", "title_ar");
    await queryInterface.removeColumn("Products", "title_en");
    await queryInterface.removeColumn("Products", "description_ar");
    await queryInterface.removeColumn("Products", "description_en");
    await queryInterface.removeColumn("Products", "heroDescription_ar");
    await queryInterface.removeColumn("Products", "heroDescription_en");
    await queryInterface.removeColumn("Products", "specifications_ar");
    await queryInterface.removeColumn("Products", "specifications_en");
    await queryInterface.removeColumn("Products", "applications_ar");
    await queryInterface.removeColumn("Products", "applications_en");
    await queryInterface.removeColumn("Products", "details_ar");
    await queryInterface.removeColumn("Products", "details_en");
  },
};
