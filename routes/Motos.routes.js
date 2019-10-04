const { Router } = require("express");
const router = Router();
const motos = require("../models/Motos");

router;

router
  .route("api/tipomotos")
  .post((req, res) => {
    let { nombreM, modelo, colores, valor } = req.body;
    try {
      if (!nombreM) {
        res.send("El nombre de la moto es necesario");
      } else if (!modelo) {
        res.send("El modelo es necesario");
      } else if (!colores) {
        res.send("El color es necesario");
      } else if (!valor) {
        res.send("El valor es necesario");
      } else {
        let query = { nombreM, modelo, colores, valor };

        let newMoto = new motos(query);

        newMoto.save(err => {
          err ? res.send(err) : res.send("Se ha guardado satisfactoriamente");
        });
      }
    } catch (error) {}
  })
  .get((req, res) => {
    try {
      motos.find().exec((err, result) => {
        err ? res.send(err) : res.send(result);
      });
    } catch (err) {
      res.send(err);
    }
  });

router.route("/api/motos/:compra").post((req, res) => {
  try {
    let idCompra = req.params.compra;
    // motos.find({ _id: idCompra }).exec((err, result) => {
    //   err ? res.send(err) : res.send(result);
    // });

    motos.update({ _id: idCompra }, { $set: { modelo: 2019 } }, err => {
      err ? res.send(err) : res.send(`has comprado la moto`);
    });
  } catch (err) {
    res.send(err);
  }
});

router.route("/api/tipomotos/:motoid").delete((req, res) => {
  let motoid = req.params.motoid;
  motos.findById(motoid, (err, motos) => {
    if (err) res.status(500).send({ message: "error" });

    motos.remove(err => {
      if (err) res.status(500).send({ message: "error" });
      res.status(200).send({ message: "bien" });
    });
  });
});

router.route("/api/motos/:motoid").put((req, res) => {
  let motoid = req.params.motoid;
  let update = ({ nombreM, modelo, colores, valor } = req.body);
  motos.findByIdAndUpdate(motoid, update, (err, motosUpdate) => {
    if (err) res.status(500).send({ message: "error" });
    res.status(200).send({ motos: motosUpdate });
  });
});
module.exports = router;
