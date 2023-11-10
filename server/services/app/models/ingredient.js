"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Ingredient extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ingredient.belongsTo(models.Item, {foreignKey: "itemId"})
    }
  }
  Ingredient.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Name Cannot Empty",
          },
          notNull: {
            msg: "Name Required",
          },
        },
      },
      itemId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Ingredient",
    }
  );
  return Ingredient;
};
