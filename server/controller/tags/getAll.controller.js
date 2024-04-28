const service = require("../../services/index.js");
async function getAllTags(req, res) {
  const tags = await service.tags.getAll();
  res.json(tags).status(200);
}
module.exports = getAllTags;
