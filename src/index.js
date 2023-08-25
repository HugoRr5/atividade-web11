
import express from "express";      // Requisição do pacote do express
import dotenv from "dotenv";
import roteadorUsuario from "./routes/usuario.js";
//index.js
dotenv.config();


const app = express();//se de error tira isso 
const port = 3000;  



app.use(express.json());
app.use(roteadorUsuario);

// Define a porta
app.get("/", (req, res) => {        // Cria a rota da raiz do projeto
  res.json({
    nome: "hugo rodrigues rocha ",      // Substitua pelo seu nome
  });
  console.log("Rota / solicitada");
});

app.listen(port, () => {            // Um socket para "escutar" as requisições
  console.log(`Serviço escutando na porta:  ${port}`);
});

//estava a linha 8


