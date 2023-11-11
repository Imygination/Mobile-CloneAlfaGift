const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

let db = null;

async function mongoInit() {
  try {
    await client.connect();
    console.log("Connected successfully to server");
    db = client.db("Alfa_User");
    // console.log("DB successfully created");
    // const User = await db.collection('Users');
    return db;
  } catch (error) {
    console.log(error);
    console.log("Fail Connect to server");
    throw error;
  }
}

function getDB() {
  return db;
}

module.exports = { mongoInit, getDB, client };
