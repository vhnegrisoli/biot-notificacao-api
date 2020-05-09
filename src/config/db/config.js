import mongoose from "mongoose";

import * as db from "./url";

export function connect() {
  console.log(db.url);
  console.log(process.env.NODE_ENV);
  mongoose.connect(db.url, {
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
