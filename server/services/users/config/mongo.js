const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb://gemaramadhan20:ksamXrZXK2FAFyAo@ac-3vkg2mn-shard-00-00.zjteeqn.mongodb.net:27017,ac-3vkg2mn-shard-00-01.zjteeqn.mongodb.net:27017,ac-3vkg2mn-shard-00-02.zjteeqn.mongodb.net:27017/?ssl=true&replicaSet=atlas-93jrv1-shard-0&authSource=admin&retryWrites=true&w=majority`;
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
