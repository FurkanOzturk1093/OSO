const createTag = require("./tags/create.service.js");
const createAudience = require("./audience/create.service.js");
const getAllAudience = require("./audience/getAll.service.js");
const getAllTags = require("./tags/getAll.service.js");
const deleteAudience = require("./audience/delete.service.js");
const updateAudience = require("./audience/update.service.js");
const server = {
  audience: {
    getAll: getAllAudience,
    getById: (req, res) => {
      res.send("Get audience by id");
    },
    create: createAudience,
    update: updateAudience,
    delete: deleteAudience,
  },
  tags: {
    create: createTag,
    getAll: getAllTags,
  },
};

module.exports = server;
