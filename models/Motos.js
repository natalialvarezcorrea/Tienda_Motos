const { Schema, model } = require("mongoose");
const UsuarioShema = new Schema({
  nombreM: { type: String, required: true },
  modelo: { type: Number, required: true },
  valor: { type: Number, required: true },
  colores: { type: String, required: true },
  created_since: { type: Date, default: Date.now }
});

module.exports = model("tipoMotos", UsuarioShema);
