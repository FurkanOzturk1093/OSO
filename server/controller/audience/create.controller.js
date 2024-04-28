const services = require("../../services/index.js");

async function createAudience(req, res) {
  const { name, tags, status } = req.body;
  if (!name || !tags || !status) {
    return res.status(400).send("Missing required information");
  }
  const audience = await services.audience.create({ name, tags, status });
  res.status(201).send(audience);
}

module.exports = createAudience;
