express = require("express");
const router = express.Router();
const { clienteController } = require("../controllers/clienteController");

//GET /clientes -> listar clientes

router.get('/clientes', clienteController.listarCliente);

//POST /clientes -> cadastrar clientes

router.post('/clientes',clienteController.criarCliente);

module.exports = { clienteRoutes: router };