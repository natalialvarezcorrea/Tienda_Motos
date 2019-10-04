const { Router } = require("express");
const router = Router();

router.get("/signin", async (req, res) => {
  res.render("partials/signin");
});

module.exports = router;
