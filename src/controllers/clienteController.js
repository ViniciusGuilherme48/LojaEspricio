const { default: message } = require("tedious/lib/message");
const { clienteModel } = require("../models/clienteModel");

const clienteController = {
    /*
    -------------------------
    Listar todos os clientes
    -------------------------
    */

    listarCliente: async (req, res) => {
        try {
            const clientes = await clienteModel.buscarTodos();

            res.status(200).json(clientes);

        } catch (error) {
            console.error("Erro ao listar clientes", error)
            res.status(500).json({ error: 'Erro ao buscar clientes' });
        }
    },

    /*
    ------------------------
    cadastrar clientes
    POST /Clientes
    BODY:
    {
        "nomeCliente":"nome",
        "cpfCliente":"cpf"
    }
    ------------------------
    */

    criarCliente: async(req, res)=>{
        try {
            const {nomeCliente, cpfCliente} = req.body;

            if (nomeCliente == undefined || cpfCliente == undefined) {
                return res.status(400).json({erro :'Campos obrigatórios não preenchidos'});
            }

            const clientes = await clienteModel.buscarCpf(cpfCliente);

            if (clientes.length > 0) {
                return res.status(409).json({erro:'CPF já existe!'});
            }
            
            await clienteModel.inserirCliente(nomeCliente, cpfCliente);
            res.status(201).json({message: 'Cliente cadastrado com sucesso'});

        } catch (error) {
            
            console.error('Erro ao cadastrar cliente', error);
            res.status(500).json({erro: 'Erro ao cadastrar cliente'});
        }
    }
}

module.exports = { clienteController };