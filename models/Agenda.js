const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AgendaSchema = new Schema({
  nome: { type: String, required: true },
  fone: { type: String, required: true },
  data: { type: String, required: true },
  hora: { type: String, required: true },
  servico: { type: String, required: true },
});

module.exports = mongoose.model("Agenda", AgendaSchema)