const db = require("../../database/dbConfig.js");

async function deleteAudience({ id }) {
  // first delete all tags associated with the audience
  await db("audience_tags").where({ audience_id: id }).del();
  // then delete the audience
  await db("audience").where({ id }).del();

  return { message: "Audience deleted" };
}

module.exports = deleteAudience;
