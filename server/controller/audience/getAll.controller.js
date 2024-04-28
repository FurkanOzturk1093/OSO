const services = require("../../services/index.js");

async function getAllAudience(req, res) {
  try {
    const { search, tag, status } = req.query;

    const searchFilter = search || "";
    const tagFilter = tag || "";
    const statusFilter = status || "";

    const audience = await services.audience.getAll({
      search: searchFilter,
      tag: tagFilter,
      status: statusFilter,
    });
    res.status(200).send(audience);
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = getAllAudience;
