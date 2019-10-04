const { Router } = require("express");
const router = Router();
const Usuarios = require("../models/usuario");

router
  //.route("/api/usuario")
  .route("/formulario")
  .post((req, res) => {
    try {
      const { nombre, apellido, cedula, telefono, email, pago } = req.body;

      if (!nombre) {
        res.send("Nombre es necesario");
      } else if (!apellido) {
        res.send("Apellido es necesario");
      } else if (!cedula) {
        res.send("Cedula es necesaria");
      } else if (!email) {
        res.send("Email es necesario");
      } else if (!pago) {
        res.send("Pago es requerido");
      } else {
        let query = { nombre, apellido, cedula, email, pago };

        if (telefono) query.telefono = telefono;

        let newUsuario = new Usuarios(query);

        newUsuario.save(err => {
          if (err) {
            res.send(err);
          } else {
            res.send("Su compra se ha realizado con exito, dirijase al concesionario");
          }
        });
      }
    } catch (err) {
      res.send(err);
    }
  })
  .get()
  .put();

module.exports = router;
