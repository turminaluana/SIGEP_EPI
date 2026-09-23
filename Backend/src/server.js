const express = require("express");
const cors = require("cors");

const connection = require("./database/connection");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "Servidor SIGEP-EPI funcionando!"
  });
});

app.get("/teste-banco", async (req, res) => {
    try {
      console.log("Testando conexão com o MySQL...");
  
      const [resultado] = await connection.query("SELECT 1");
  
      console.log("MySQL conectado com sucesso!");
  
      res.json({
        mensagem: "Banco de dados conectado!",
        resultado
      });
  
    } catch (error) {
      console.error("ERRO REAL DO MYSQL:");
      console.error(error);
  
      res.status(500).json({
        mensagem: "Erro ao conectar ao banco de dados.",
        erro: error.message
      });
    }
  });

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});