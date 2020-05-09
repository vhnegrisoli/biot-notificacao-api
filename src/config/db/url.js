const env = process.env.NODE_ENV;
export const url =
  env == "development"
    ? "mongodb://localhost:27017/notificacao"
    : "mongodb://ds141924.mlab.com:41924/heroku_gfbdnnj7";
