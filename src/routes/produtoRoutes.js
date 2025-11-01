const express = require("express");
const router = express.Router();
const { produtoController } = require("../controllers/produtoController");

//GET /produtos -> Listar todos os produtos

router.get('/produtos', produtoController.listarProdutos);

//POST /produtos -> Criar um novo produto

router.post('/produtos', produtoController.criarProduto);

//PUT /produtos/idProduto -> Atualizar produto cadastrado

router.put('/produtos/:idProduto', produtoController.atualizarProduto);

//DELETE /produtos -> Deletar produto cadastrado

router.delete('/produtos/:idProduto', produtoController.deletarProduto);

module.exports = { produtoRoutes: router };