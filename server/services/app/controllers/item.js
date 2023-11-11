// const { pagination, pagingData } = require("../helper/pagination");
const { User, Category, Item, Ingredient, sequelize } = require("../models");
const { Op } = require("sequelize");

class ConItem {
  static async showItem(req, res, next) {
    try {
      const { name } = req.query;
      const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
      const items = await Item.findAll({
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
        where: condition,
      });
      // console.log(items);
      res.status(200).json(items);
    } catch (error) {
      next(error);
    }
  }

  static async showItemId(req, res, next) {
    try {
      console.log('masuk');
      const { id } = req.params;
      const item = await Item.findByPk(id, {
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      });
      if (!item) {
        throw { name: "Item Not Found" };
      }
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async createItem(req, res, next) {
    const trasnCreateItem = await sequelize.transaction();
    const trasnCreateIngredient = await sequelize.transaction();
    try {
      const {
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
        ingredientName1,
        ingredientName2,
        ingredientName3,
      } = req.body;
      const item = await Item.create(
        {
          name,
          description,
          price,
          imgUrl,
          authorId,
          categoryId,
        },
        { transaction: trasnCreateItem }
      );
      await trasnCreateItem.commit();
      const ingredient = await Ingredient.bulkCreate(
        [
          { name: ingredientName1, itemId: item.id },
          { name: ingredientName2, itemId: item.id },
          { name: ingredientName3, itemId: item.id },
        ],
        { validate: true },
        { transaction: trasnCreateIngredient }
      );
      await trasnCreateIngredient.commit();
      console.log(ingredient);
      res.status(201).json(item);
    } catch (error) {
      await trasnCreateItem.rollback();
      await trasnCreateIngredient.rollback();
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    const { id } = req.params;

    try {
      const item = await Item.findByPk(id);
      if (!item) {
        throw { name: "Item Not Found" };
      }

      const deleted = await Item.destroy({
        where: {
          id,
        },
      });
      res.status(200).json(item);
    } catch (error) {
      next(error);
    }
  }

  static async updateItem(req, res, next) {
    const { id } = req.params;
    const { name, description, price, imgUrl, authorId, categoryId } = req.body;

    try {
      const item = await Item.findByPk(id, {
        include: [
          {
            model: Category,
          },
          {
            model: Ingredient,
          },
        ],
      });
      if (!item) {
        throw { name: "Item Not Found" };
      }
      const updatedItem = await item.update({
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
      });
      res.status(200).json(updatedItem);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConItem;
