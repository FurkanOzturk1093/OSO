const db = require("../../database/dbConfig.js");

async function getAllTags() {
  return db("tags");
}

module.exports = getAllTags;
