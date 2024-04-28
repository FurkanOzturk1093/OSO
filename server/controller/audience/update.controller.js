const services = require("../../services/index.js");

async function updateAudience(req, res) {
  const { data, id } = req.body;
  const { name, tags, status } = data;
  if (!name || !tags || !status || !id) {
    return res.status(400).send("Missing required information");
  }
  const audience = await services.audience.update({ name, tags, status, id });
  res.status(201).json(audience);
}

module.exports = updateAudience;
