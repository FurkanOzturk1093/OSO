const db = require("../../database/dbConfig.js");
async function getAllAudiences({ search, tag, status }) {
  // get all audience with their tags
  const audience = await db("audience").select("*");
  let audienceWithTags = await Promise.all(
    audience.map(async (audience) => {
      const tags = await db("tags")
        .join("audience_tags", "tags.id", "audience_tags.tag_id")
        .where("audience_tags.audience_id", audience.id)
        .select("tags.name");
      return { ...audience, tags };
    })
  );
  // filter audience by search
  if (search) {
    audienceWithTags = audienceWithTags.filter((audience) =>
      audience.name.toLowerCase().includes(search)
    );
  }

  // filter audience by tag
  if (tag) {
    audienceWithTags = audienceWithTags.filter((audience) =>
      audience.tags.some((t) => t.name === tag)
    );
  }
  // filter audience by status
  if (status) {
    audienceWithTags = audienceWithTags.filter(
      (audience) => audience.status === status
    );
  }

  return audienceWithTags;
}

module.exports = getAllAudiences;
