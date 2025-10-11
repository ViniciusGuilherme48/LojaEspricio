const express = require("express");
const app = express();
const {produtoRoutes} = require("./src/routes/produtoRoutes");
const{clienteRoutes} = require("./src/routes/clienteRoutes");
const PORT = 8081;

app.use(express.json());

//Rotas da aplicação de produtos

app.use('/', produtoRoutes);


//Rotas da aplicação de clientes
app.use('/', clienteRoutes);

app.listen(PORT,()=>{
    console.log(`Servidor rodando em http//localhost:${PORT}`);
});