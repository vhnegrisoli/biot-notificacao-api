const swaggerAutogen = require("swagger-autogen")();

const documentacaoConfig = {
  info: {
    title: "BIoT - Notificação API",
    description:
      "Microsserviço de recebimento e envio de notificações dos projetos da BIoT",
  },
  host: `localhost:${process.env.PORT || 8080}`,
  schemes: ["http"],
};

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/modulos/notificacao/routes/index.js"];

swaggerAutogen(outputFile, endpointsFiles, documentacaoConfig);
