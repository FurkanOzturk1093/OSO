const services = require("../../services/index.js");

async function deleteAudience(req, res) {
  const { id } = req.body;
  if (!id) {
    return res.status(400).send("Missing required information");
  }
  const audience = await services.audience.delete({ id });
  res.status(200).send(audience);
}

module.exports = deleteAudience;
