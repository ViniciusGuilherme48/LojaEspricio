const { default: Message } = require("tedious/lib/message");
const { produtoModel } = require("../models/produtoModel");

const produtoController = {
    /*
    -------------------------------
     LISTAR TODOS OS PRODUTOS
     GET /produtos
    -------------------------------
     */
    listarProdutos: async (req, res) => {
        try {

            const produtos = await produtoModel.buscarTodos();

            res.status(200).json(produtos);

        } catch (error) {
            console.error("erro ao listar produtos", error);
            res.status(500).json({ error: 'Erro ao buscar produtos.' });
        }
    },
    /*
   -------------------------------
    CRIAR UM NOVO PRODUTO
    POST /produtos
    BODY:
    {
        "nomeProduto:"nome",
        "precoProduto":0.00
    }
   -------------------------------
    */
    criarProduto: async (req, res) => {
        try {

            const { nomeProduto, precoProduto } = req.body;

            if (nomeProduto == undefined || precoProduto == undefined || isNaN(precoProduto)) {
                return res.status(400).json({ erro: 'Campos obrigatórios não preenchidos' });
            }
            await produtoModel.inserirProduto(nomeProduto, precoProduto);
            res.status(201).json({ Message: 'Produto cadastrado com sucesso' });

        } catch (error) {

            console.error('Erro ao cadastrar produto', error);
            res.status(500).json({ erro: 'Erro ao cadastrar produto.' });
        }

    },

    atualizarProduto: async (req, res) => {
        try {

            const { idProduto } = req.params;
            const { nomeProduto, precoProduto } = req.body;

            // validação de UUID(unico universalmente ID)
            if (idProduto.legth != 36) {
                return res.status(400).json({ error: 'id do produto invalido' })
            }

            const produto = await produtoModel.buscarUm(idProduto);//buscar pelo banco de dados

            if (!produto || produto.legth !== 1) {
                return res.status(404).json({ error: 'produto não encontrado' });
            }

            //array de produto
            const produtoAtual = produto[0];

            //verifica se existe e verifica se não está vazio
            const nomeAtualizado = nomeProduto ?? produtoAtual.nomeProduto;
            //verifica já existe um preço e se não está vazio
            const precoAtualizado = precoProduto ?? produtoAtual.precoProduto;

            await produtoModel.atualizarProduto(idProduto, nomeAtualizado, precoAtualizado);
            res.status(200).json({ Message: 'Produto atualizado com sucesso!' });

        } catch (error) {

            console.error('erro ao atualizar produto', error);
            res.status(500).json({ erro: 'erro interno no servidor ao atualizar produto' });

        }
    }
}

module.exports = { produtoController };