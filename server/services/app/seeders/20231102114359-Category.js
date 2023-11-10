"use strict";
const categories = require("../../rawData/dataCategory.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Categories",
      categories.map((category) => {
        category.createdAt = category.updatedAt = new Date();
        delete category.id
        return category;
      })
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
