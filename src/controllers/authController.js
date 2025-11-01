const { clienteModel } = require("../models/clienteModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const authController = {
    clienteLogin: async (req, res) => {
        try {

            const { emailCliente, senhaCliente } = req.body;

            if (emailCliente == undefined || senhaCliente == undefined) {
                return res.status(400).json({ error: "email e senha são obrigatórios" });
            }

            const result = await clienteModel.buscarEmail(emailCliente);

            if (result.length == 0) {
                return res.status(401).json({ error: 'Email não encontrado' });
            }

            const cliente = result[0];

            const senhaValida = await bcrypt.compare(senhaCliente, cliente.senhaCliente);

            if (!senhaValida) {
                return res.status(401).json({ error: 'Credenciais inválidas' });
            }

            const payload = {
                idCliente: cliente.idCliente,
                nomeCliente: cliente.nomeCliente,
                tipoUsuario: 'cliente'
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: process.env.JWT_EXPIRES_IN
            });

            res.status(200).json({
                message: "logado com sucesso",
                token
            });

        } catch (error) {
            console.error("erro no login do cliente", error);
            return res.status(500).json({ error: "Erro no servidor ao realizar login do cliente" });
        }
    },
};

module.exports = { authController };