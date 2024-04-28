const createTag = require("./tags/create.controller.js");
const createAudience = require("./audience/create.controller.js");
const getAllAudience = require("./audience/getAll.controller.js");
const getAllTags = require("./tags/getAll.controller.js");
const controller = {
  audience: {
    create: createAudience,
    getById: (req, res) => {
      res.send("read audience");
    },
    update: (req, res) => {
      res.send("update audience");
    },
    delete: (req, res) => {
      res.send("delete audience");
    },
    getAll: getAllAudience,
  },
  tags: {
    create: createTag,
    getAll: getAllTags,
  },
};

module.exports = controller;
