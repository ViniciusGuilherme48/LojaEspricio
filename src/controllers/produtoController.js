const { produtoModel } = require("../models/produtoModel");

const produtoController = {
    /*
    -------------------------------
     LISTAR TODOS OS PRODUTOS
     GET /produtos
    -------------------------------
     */
    listarProdutos: async (req, res)=>{
        try {
            
            const produtos = await produtoModel.buscarTodos();

            res.status(200).json(produtos);

        } catch (error) {
            console.error("erro ao listar produtos", error);
            res.status(500).json({error:'Erro ao buscar produtos.'});
        }
    }
}

module.exports = {produtoController};