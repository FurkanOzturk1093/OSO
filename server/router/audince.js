const { Router } = require("express");
const controller = require("../controller/index.js");
const router = Router();

router.get("/getAll", (req, res) => {
  controller.audience.getAll(req, res);
});
router.post("/create", (req, res) => {
  controller.audience.create(req, res);
});
router.delete("/delete", (req, res) => {
  controller.audience.delete(req, res);
});
router.put("/update", (req, res) => {
  controller.audience.update(req, res);
});
module.exports = router;
