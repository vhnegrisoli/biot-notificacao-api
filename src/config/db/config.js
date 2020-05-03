import mongoose from "mongoose";

export function connect() {
  mongoose.connect("mongodb://localhost:27017/notificacao", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.on("connected", function () {
    console.log("Conecatdo ao MongoDB");
  });
  mongoose.connection.on("error", function () {
    console.log("Erro ao conectar ao MongoDB");
  });
}
