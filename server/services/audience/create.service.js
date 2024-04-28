const db = require("../../database/dbConfig.js");

async function createAudience({ name, tags, status }) {
  const tagsFromDb = await db("tags");
  const tagsIds = [];
  tags.forEach(async (tag) => {
    const tagFromDb = tagsFromDb.find((t) => t.name === tag.name);
    if (tagFromDb) {
      tagsIds.push(tagFromDb.id);
    } else {
      const [id] = await db("tags").insert({ name: tag.name });
      tagsIds.push(id);
    }
  });

  const [id] = await db("audience").insert({
    name,
    status: status || "passive",
  });
  await db("audience_tags").insert(
    tagsIds.map((tagId) => ({ audience_id: id, tag_id: tagId }))
  );
  return { id, name, tags };
}

module.exports = createAudience;
