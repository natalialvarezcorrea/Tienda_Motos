const { Router } = require("express");
const router = Router();

router.get("/index", async (req, res) => {
  res.render("partials/index");
});

module.exports = router;
