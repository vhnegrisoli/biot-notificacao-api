import axios from "axios";

import * as firebase from "../../../config/firebase/config";

export async function sendNotification(data) {
  const { auth, message } = data;
  const headers = {
    Authorization: "key=" + auth,
  };
  console.log("Mensagem a ser enviada ao Firebase: ");
  console.log(headers);
  console.log(message);
  await axios
    .post(firebase.SEND_NOTIFICATION_URL, message, { headers: headers })
    .then((success) => {
      console.log("Mensagem de notificação enviada ao Firebase com sucesso!");
      console.log(success.data);
    })
    .catch((error) => {
      console.log("Houve um erro ao enviar a notificação ao Firebase.");
      console.log(error);
    });
}
