import * as firebaseClient from "../client/firebaseClient";

class FirebaseService {
  processarDadosFirebase(data) {
    const { title, body, userToken, aplicacaoToken } = data;
    const notificacao = {
      auth: aplicacaoToken,
      message: {
        notification: {
          body: body,
          title: title,
        },
        to: userToken,
      },
    };
    firebaseClient.sendNotification(notificacao);
  }
}
export default new FirebaseService();
