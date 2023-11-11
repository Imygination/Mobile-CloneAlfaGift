const { mongoInit, getDB, client } = require("../config/mongo");
const { hashPassword } = require("../helper/bcryptjs");
const dataUsers = require("./usersRaw.json");

mongoInit()
  .then(async () => {
    const users = getDB().collection("Users");
    const result = await users.insertMany(
      dataUsers.map((user) => {
        user.password = hashPassword(user.password);
        return user;
      })
    );
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(async () => {
    client.close();
  });
