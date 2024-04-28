const db = require("../../database/dbConfig.js");

async function createTag({ name }) {
  // name must be unique on the tags table
  const tags = await db("tags").select("name");
  const tag = tags.find((tag) => tag.name === name);
  if (tag) {
    throw new Error("Tag already exists");
  }
  const [id] = await db("tags").insert({ name });
  return { id, name };
}

module.exports = createTag;
