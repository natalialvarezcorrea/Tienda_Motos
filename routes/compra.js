const { Router } = require("express");
const router = Router();

router.get("/compra", async (req, res) => {
  res.render("partials/compra");
});

module.exports = router;
