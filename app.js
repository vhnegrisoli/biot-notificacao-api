import express from "express";
import cors from "cors";

import * as mq from "./src/modulos/notificacao/listener/listener";
import * as db from "./src/config/db/config";
import notificacoes from "./src/modulos/notificacao/routes/index";

const app = express();

app.use(express.json());
app.use(cors());
app.use(notificacoes);

mq.connect();
db.connect();

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Our app is running on port ${PORT}`);
});
