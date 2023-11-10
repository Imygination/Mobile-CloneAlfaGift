"use strict";
const items = require("../../rawData/dataItem.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Items",
      items.map((item) => {
        item.createdAt = item.updatedAt = new Date();
        delete item.id
        return item;
      })
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Items", null, {});
  },
};
