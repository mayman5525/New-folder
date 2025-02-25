"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("Products", "title");
    await queryInterface.removeColumn("Products", "description");
    await queryInterface.removeColumn("Products", "heroDescription");
    await queryInterface.removeColumn("Products", "specifications");
    await queryInterface.removeColumn("Products", "applications");
    await queryInterface.removeColumn("Products", "details");
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Products", "title", {
      type: Sequelize.STRING,
    });
    await queryInterface.addColumn("Products", "description", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "heroDescription", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "specifications", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "applications", {
      type: Sequelize.TEXT,
    });
    await queryInterface.addColumn("Products", "details", {
      type: Sequelize.TEXT,
    });
  },
};
