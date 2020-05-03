import Notificacao from "../model/Notificacao";
import * as Yup from "yup";

class NotificacaoController {
  async receberMensagemNotificacao(mensagem) {
    const jsonRequest = JSON.parse(mensagem);
    await this.prepararDadosNotificacao(jsonRequest);
    await this.salvarMensagem(jsonRequest);
  }

  async prepararDadosNotificacao(request) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      body: Yup.string().required(),
      userToken: Yup.string().required(),
      aplicacao: Yup.string().required(),
      firebaseClient: Yup.string().required(),
      firebaseSecret: Yup.string().required(),
    });
    console.log(request);
    if (!(await schema.isValid(request))) {
      console.log("Erro ao processar");
      throw "Erro ao processar fila. Dados inválidos.";
    }
  }

  async salvarMensagem(request) {
    const {
      title,
      body,
      userToken,
      aplicacao,
      firebaseClient,
      firebaseSecret,
    } = request;
    try {
      const notificacao = await Notificacao.create({
        title,
        body,
        userToken,
        aplicacao,
        firebaseClient,
        firebaseSecret,
      });
      console.log("Notificação salva: " + JSON.stringify(notificacao));
    } catch (error) {
      throw error;
    }
  }

  async buscarTodasNotificacoes(req, res) {
    try {
      const notificacoes = await Notificacao.find();
      return res.json(notificacoes);
    } catch (error) {
      return res.json(error);
    }
  }

  async buscarNotificacaoPorId(req, res) {
    const { id } = req.params;
    try {
      const notificacao = await Notificacao.findById({ _id: String(id) });
      if (notificacao) {
        return res.json(notificacao);
      }
      return res
        .status(400)
        .json({ message: "Não existe notificação para esta aplicação." });
    } catch (error) {
      return res.json(error);
    }
  }

  async buscarNotificacaoPorAplicacao(req, res) {
    const { aplicacao } = req.params;
    try {
      const notificacao = await Notificacao.find({ aplicacao });
      if (notificacao) {
        return res.json(notificacao);
      }
      return res
        .status(400)
        .json({ message: "Não existe notificação para esta aplicação." });
    } catch (error) {
      return res.json(error);
    }
  }
}

export default new NotificacaoController();
