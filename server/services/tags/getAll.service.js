const db = require("../../database/dbConfig.js");

async function getAllTags() {
  return db("tags").select("*");
}

module.exports = getAllTags;
