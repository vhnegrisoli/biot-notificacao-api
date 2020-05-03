import mongoose from "mongoose";

const Schema = mongoose.Schema;
const model = mongoose.model;

const NotificacaoSchema = new Schema({
  title: String,
  body: String,
  userToken: String,
  aplicacao: String,
  firebaseClient: String,
  firebaseSecret: String,
});

module.exports = model("Notificacao", NotificacaoSchema);
