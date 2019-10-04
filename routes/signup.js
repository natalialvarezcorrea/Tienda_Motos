const { Router } = require("express");
const router = Router();

router.get("/signup", async (req, res) => {
  res.render("partials/signup");
});

module.exports = router;
