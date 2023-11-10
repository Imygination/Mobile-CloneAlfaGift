"use strict";
const ingredients = require("../../rawData/dataIngredient.json");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Ingredients",
      ingredients.map((ingredient) => {
        ingredient.createdAt = ingredient.updatedAt = new Date();
        delete ingredient.id
        return ingredient;
      })
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Ingredients", null, {});
  },
};
