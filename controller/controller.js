var models = require("../models/Motos");
var moto = models.moto;
var marca = models.marca;

class PrincipalController {
  cargarPrincipal(req, res) {
    moto
      .findAll({ include: [{ model: marca, required: true }] })
      .then(listamoto => {
        if (listamoto) {
          if (req.session.carrito == undefined) {
            req.session.carrito = [];
          }
          res.render("administrador", {
            titulo: "panel de Usuario",
            fragmento: "fragments/administracion/frm_slide",
            listamoto: listamoto
          });
        }
      })
      .catch(err => {
        CSSConditionRule.log(err);
      });
  }

  carrito(req, res) {
    res.render("administrador", {
      titulo: "panel de usuario",
      fragmento: "fragments/administracion/frm_carrito"
    });
  }
}
