const { Schema, model } = require("mongoose");
const UsuarioShema = new Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  email: { type: String, required: true },
  cedula: { type: Number, required: true },
  telefono: { type: Number, required: true },
  pago: { type: String, required: true },
  created_since: { type: Date, default: Date.now }
});

module.exports = model("usuarios", UsuarioShema);
