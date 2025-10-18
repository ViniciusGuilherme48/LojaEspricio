//importar a conexão com o banco de dados e os tipos de dados SQL
const { sql, getConnection } = require("../config/db");


const clienteModel = {

    //consultar clientes
    buscarTodos: async () => {
        try {

            const pool = await getConnection();

            let querySLQ = "SELECT * FROM Clientes";

            const result = await pool.request().query(querySLQ);

            return result.recordset;

        } catch (error) {
            console.error("erro ao buscar Cliente", error);
            throw error;
        }
    },
    //buscar cliente por cpf

    buscarCpf: async (cpfCliente) => {
        const pool = await getConnection();

        let querySLQ = 'SELECT * FROM Clientes WHERE cpfCliente = @cpfCliente';

        const clientes = await pool.request()
            .input('cpfCliente', sql.VarChar(11), cpfCliente)
            .query(querySLQ);

        return clientes.recordset;
    },

    //cadastrar cliente
    inserirCliente: async (nomeCliente, cpfCliente) => {
        try {

            const pool = await getConnection();

            let querySLQ = 'INSERT INTO Clientes (nomeCliente, cpfCliente) VALUES(@nomeCliente, @cpfCliente)';

            await pool.request()
                .input('nomeCliente', sql.VarChar(100), nomeCliente)
                .input('cpfCliente', sql.VarChar(11), cpfCliente)
                .query(querySLQ);

        } catch (error) {
            console.error('Erro ao inserir cliente', error);
            throw error;

        }
    }

}

module.exports = { clienteModel };