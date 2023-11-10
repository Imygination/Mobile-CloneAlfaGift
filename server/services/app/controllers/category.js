// const { pagination, pagingData } = require("../helper/pagination");
const { Category } = require("../models");
const { Op } = require("sequelize");

class ConCategory {
  static async showCategory(req, res, next) {
    try {
      const { name } = req.query;
      const condition = name ? { name: { [Op.iLike]: `%${name}%` } } : null;
      const categories = await Category.findAll({ where: condition });
      // console.log(categories);
      res.status(200).json(categories);
    } catch (error) {
      next(error);
    }
  }

  static async showCategoryById(req, res, next) {
    try {
      const { id } = req.params;
      const category = await Category.findByPk(id);
      if (!category) {
        throw { name: "Category Not Found" };
      }
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async createCategory(req, res, next) {
    try {
      const { name } = req.body;
      const category = await Category.create({
        name,
      });
      res.status(201).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    const { id } = req.params;
    try {
      const category = await Category.findByPk(id);
      if (!category) {
        throw { name: "Category Not Found" };
      }
      const deleted = await Category.destroy({
        where: { id },
      });
      res.status(200).json(category);
    } catch (error) {
      next(error);
    }
  }

  static async updateCategory(req, res, next) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const category = await Category.findByPk(id);
      if (!category) {
        throw { name: "Category Not Found" };
      }
      const updatedCategory = await category.update({ name });
      res.status(200).json(updatedCategory);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConCategory;
