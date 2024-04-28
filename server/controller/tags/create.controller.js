const services = require("../../services/index.js");
async function createTag(req, res) {
  const { name } = req.body;
  try {
    const tag = await services.tags.create({ name });
    res.status(201).send(tag);
  } catch (error) {
    if (error.message === "Tag already exists") {
      res.status(400).send(error.message);
    }
  }
}

module.exports = createTag;
