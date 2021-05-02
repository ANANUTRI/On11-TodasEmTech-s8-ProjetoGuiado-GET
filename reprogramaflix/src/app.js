const express = require("express") //chama o express
const app = express() //executa express

const filmes = require("./routes/filmesRoutes") //chamando todas as rotas que vão iniciar /filmes

app.use("/filmes",filmes) //colocando a rota raiz

module.exports = app  //exportando o app para ser usado no server.js