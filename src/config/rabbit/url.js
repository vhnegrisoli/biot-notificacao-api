const env = process.env.NODE_ENV;
export const RABBIT_MQ_URL =
  env == "development"
    ? "amqp://localhost:5672"
    : "amqp://yfsypxcf:wrX6LNWtKlsRd0l1ICC5TNEWf0yCpF1f@skunk.rmq.cloudamqp.com/yfsypxcf";
