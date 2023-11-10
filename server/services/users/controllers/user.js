const { ObjectId } = require("mongodb");
const { getDB } = require("../config/mongo");
const { checkPassword, hashPassword } = require("../helper/bcryptjs");
const { signToken } = require("../helper/jwt");

class ConUser {
  static getCollection() {
    return getDB().collection("Users");
  }

  static async createUser(req, res, next) {
    try {
      const { username, email, password, role, phoneNumber, address } =
        req.body;
      // console.log(username, email, password, role, phoneNumber, address);
      const newUser = await ConUser.getCollection().insertOne({
        username,
        email,
        password: hashPassword(password),
        role,
        phoneNumber,
        address,
      });
      res.status(201).json({
        message: `Succed add`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findAllUser(req, res, next) {
    try {
      const newUser = await ConUser.getCollection().find().toArray();
      res.status(201).json(newUser);
    } catch (error) {
      next(error);
    }
  }

  static async findUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await ConUser.getCollection().findOne({
        _id: new ObjectId(id),
      });
      if (!user) {
        throw { name: "User Not Found" };
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async deleteUser(req, res, next) {
    try {
      const { id } = req.params;
      const user = await ConUser.getCollection().deleteOne({
        _id: new ObjectId(id),
      });
      if (user.deletedCount === 0) {
        throw { name: "User Not Found" };
      }
      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }

  static async loginUser(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw { name: "Email and Password cannot empty" };
      }

      const user = await ConUser.getCollection().findOne({ email });
      if (!user) {
        throw { name: "Invalid email or Password" };
      }

      const correctPass = checkPassword(password, user.password);
      if (!correctPass) {
        throw { name: "Invalid email or Password" };
      }

      const token = signToken({
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.username,
      });
      res.status(200).json({
        accessToken: token,
        email: user.email,
        role: user.role,
        id: user.id,
        username: user.username,
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ConUser;
