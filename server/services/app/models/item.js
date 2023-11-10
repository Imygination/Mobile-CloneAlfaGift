"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Item.belongsTo(models.Category, {foreignKey: 'categoryId'})
      Item.hasMany(models.Ingredient, {foreignKey: 'itemId'})
    }
  }
  Item.init(
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
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Description Cannot Empty",
          },
          notNull: {
            msg: "Description Required",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Price Cannot Empty",
          },
          notNull: {
            msg: "Price Required",
          },
          min: {
            msg: "Price minimum RP 5,00",
            args: [5],
          },
        },
      },
      imgUrl: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Imgage URL Cannot Empty",
          },
          notNull: {
            msg: "Imgage URL Required",
          },
        },
      },
      authorId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
