import amqp from "amqplib/callback_api";

import * as rabbitConfig from "../../../config/rabbit/url";
import NotificacaoController from "../controller/index";

const queue = "enviar-notificacao.queue";

export function connect() {
  console.log(rabbitConfig.RABBIT_MQ_URL);
  amqp.connect(rabbitConfig.RABBIT_MQ_URL, (error, connection) => {
    if (error) {
      throw error;
    }
    connection.createChannel((error, channel) => {
      if (error) {
        throw error;
      }
      console.log("Conectado ao RabbitMq");
      const exchange = "biot-admin.topic";
      channel.assertExchange(exchange, "topic", {
        durable: true,
      });
      channel.assertQueue(queue, {
        durable: false,
      });
      console.log("Fila " + queue + " ativa");
      consumeMessage(channel);
      return channel;
    });
  });
}

function consumeMessage(channel) {
  channel.consume(
    queue,
    (message) => {
      NotificacaoController.receberMensagemNotificacao(
        message.content.toString()
      );
    },
    {
      noAck: true,
    }
  );
}
