const createTag = require("./tags/create.service.js");
const createAudience = require("./audience/create.service.js");
const getAllAudience = require("./audience/getAll.service.js");
const getAllTags = require("./tags/getAll.service.js");
const server = {
  audience: {
    getAll: getAllAudience,
    getById: (req, res) => {
      res.send("Get audience by id");
    },
    create: createAudience,
    update: (req, res) => {
      res.send("Update audience");
    },
    delete: (req, res) => {
      res.send("Delete audience");
    },
  },
  tags: {
    create: createTag,
    getAll: getAllTags,
  },
};

module.exports = server;
