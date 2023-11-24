const redis = require("../config/redis");
const { BASE_URL_APP, BASE_URL_USER } = require("../config/URL");
const axios = require("axios");

class ConItem {
  static async showItem(req, res, next) {
    try {
      const itemsCache = await redis.get("items:all");
      if (itemsCache) {
        console.log("Load Cache...");
        const data = JSON.parse(itemsCache);
        res.status(200).json(data);
      } else {
        console.log("Fetching...");
        const { data } = await axios(`${BASE_URL_APP}/user/item`);
        await redis.set("items:all", JSON.stringify(data));
        console.log("Complete Fetching");
        res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }

  static async showItemId(req, res, next) {
    try {
      console.log("masuk bos");
      const { id } = req.params;
      const itemCache = await redis.get(`items:${id}`);
      if (itemCache) {
        console.log("Load Cache...");
        const data = JSON.parse(itemCache);
        res.status(200).json(data);
      } else {
        console.log("Fetching...");
        const { data: item } = await axios.get(
          `${BASE_URL_APP}/user/item/${id}`
        );
        const { data: author } = await axios(
          `${BASE_URL_USER}/user/${item.authorId}`
        );
        item.User = author;
        await redis.set(`items:${id}`, JSON.stringify(item));
        console.log("Complete Fetching");
        res.status(200).json(item);
      }
    } catch (error) {
      console.log(error);
      // if (error.response.data.message === "Item Not Found") {
      //   error = { name: "Item Not Found" };
      // } else if (error.response.data.message === "Invalid ID") {
      //   error = { name: "Invalid ID" };
      // }
      next(error);
    }
  }

  static async createItem(req, res, next) {
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
      // console.log(username, email, password, role, phoneNumber, address);
      const newUser = await axios.post(`${BASE_URL_APP}/user/item`, {
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
        ingredientName1,
        ingredientName2,
        ingredientName3,
      });
      await redis.del("items:all");
      res.status(200).json({
        message: `Succed Fetch Create Item`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async deleteItem(req, res, next) {
    try {
      const { id } = req.params;
      const { data } = await axios.delete(`${BASE_URL_APP}/user/item/${id}`);
      await redis.del(`items:${id}`);
      res.status(200).json(data);
    } catch (error) {
      if (error.response.data.message === "Item Not Found") {
        error = { name: "Item Not Found" };
      } else if (error.response.data.message === "Invalid ID") {
        error = { name: "Invalid ID" };
      }
      next(error);
    }
  }

  static async updateItem(req, res, next) {
    const { id } = req.params;
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
      // console.log(username, email, password, role, phoneNumber, address);
      const newUser = await axios.put(`${BASE_URL_APP}/user/item/${id}`, {
        name,
        description,
        price,
        imgUrl,
        authorId,
        categoryId,
        ingredientName1,
        ingredientName2,
        ingredientName3,
      });
      await redis.del(`items:${id}`);
      res.status(200).json({
        message: `Succed Fetch Create Item`,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConItem;
