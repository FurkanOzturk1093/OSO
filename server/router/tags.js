const { Router } = require("express");
const controller = require("../controller/index.js");
const router = Router();

router.post("/create", (req, res) => {
  controller.tags.create(req, res);
});

router.get("/getAll", (req, res) => {
  controller.tags.getAll(req, res);
});

module.exports = router;
