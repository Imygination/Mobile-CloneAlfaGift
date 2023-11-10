const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017";

let db = null;

async function mongoInit() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    console.log("Connected successfully to server");
    db = client.db("Alfa_User");
    console.log("DB successfully created");
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

module.exports = { mongoInit, getDB };
