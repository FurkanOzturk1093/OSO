const db = require("../../database/dbConfig.js");

async function updateAudience({ name, tags, status, id }) {
  const audience = await db("audience").where({ id }).update({ name, status });
  await db("audience_tags").where({ audience_id: id }).del();
  await Promise.all(
    tags.map(async (tag) => {
      const tagId = await db("tags")
        .where({ name: tag.name })
        .select("id")
        .first();
      return db("audience_tags").insert({ audience_id: id, tag_id: tagId.id });
    })
  );
  return audience;
}

module.exports = updateAudience;
