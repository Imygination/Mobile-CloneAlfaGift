const redis = require("../config/redis");
const { BASE_URL_USER } = require("../config/URL");
const axios = require("axios");

class ConUser {
  static async createUser(req, res, next) {
    try {
      const { username, email, password, role, phoneNumber, address } =
        req.body;
      // console.log(username, email, password, role, phoneNumber, address);
      const newUser = await axios.post(`${BASE_URL_USER}/user/register`, {
        username,
        email,
        password,
        role,
        phoneNumber,
        address,
      });
      await redis.del("users:all");
      res.status(200).json({
        message: `Succed Fetch Register`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findAllUser(req, res, next) {
    try {
      const usersCache = await redis.get("users:all");
      if (usersCache) {
        console.log("Load Cache...");
        const data = JSON.parse(usersCache);
        res.status(200).json(data);
      } else {
        console.log("Fetching...");
        const { data } = await axios(`${BASE_URL_USER}/user`);
        await redis.set("users:all", JSON.stringify(data));
        console.log("Complete Fetching");
        res.status(200).json(data);
      }
    } catch (error) {
      next(error);
    }
  }

  static async findUser(req, res, next) {
    try {
      const { id } = req.params;
      const userCache = await redis.get(`users:${id}`);
      if (userCache) {
        console.log("Load Cache...");
        const data = JSON.parse(userCache);
        res.status(200).json(data);
      } else {
        console.log("Fetching...");
        const { data } = await axios(`${BASE_URL_USER}/user/${id}`);
        await redis.set(`users:${id}`, JSON.stringify(data));
        console.log("Complete Fetching");
        res.status(200).json(data);
      }
    } catch (error) {
      if (error.response.data.message === "User Not Found") {
        error = { name: "User Not Found" };
      } else if (error.response.data.message === "Invalid ID") {
        error = { name: "Invalid ID" };
      }
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const { data } = await axios.delete(`${BASE_URL_USER}/user/${id}`);
      await redis.del(`users:${id}`);
      res.status(200).json(data);
    } catch (error) {
      if (error.response.data.message === "User Not Found") {
        error = { name: "User Not Found" };
      } else if (error.response.data.message === "Invalid ID") {
        error = { name: "Invalid ID" };
      }
      next(error);
    }
  }
}

module.exports = ConUser;
