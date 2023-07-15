const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function getDatabase() {
  const client = MongoClient.connect("mongodb://127.0.0.1:27017");
}
