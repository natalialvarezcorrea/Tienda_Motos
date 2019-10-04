const { Router } = require("express");
const router = Router();

router.get("/formulario", async (req, res) => {
  res.render("partials/compraFormulario");
});

module.exports = router;
