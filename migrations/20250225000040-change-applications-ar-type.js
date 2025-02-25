"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "Products" ALTER COLUMN "applications_ar" TYPE VARCHAR(255)[]
      USING string_to_array("applications_ar", ',');
    `);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.query(`
      ALTER TABLE "Products" ALTER COLUMN "applications_ar" TYPE TEXT;
    `);
  },
};
