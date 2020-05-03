import { Router } from "express";
import NotificacaoController from "../controller/index";

const router = new Router();

router.get("/api/notificacoes", NotificacaoController.buscarTodasNotificacoes);
router.get(
  "/api/notificacoes/:id",
  NotificacaoController.buscarNotificacaoPorId
);
router.get(
  "/api/notificacoes/aplicacao/:aplicacao",
  NotificacaoController.buscarNotificacaoPorAplicacao
);

export default router;
