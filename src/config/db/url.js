const env = process.env.NODE_ENV;
export const url =
  env == "development"
    ? "mongodb://localhost:27017/notificacao"
    : "mongodb+srv://biot_admin:biot_admin@cluster0.jcts2.mongodb.net/biot_notificacao?retryWrites=true&w=majority";
