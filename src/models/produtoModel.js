// importar a conexão com o banco de dados e o tipos de dados SQL
const { sql, getConnection } = require("../config/db");

const produtoModel = {

    buscarTodos: async () => {
        try {

            const pool = await getConnection();

            let querySLQ = "SELECT * FROM Produtos";

            const result = await pool.request().query(querySLQ);

            return result.recordset;

        } catch (error) {

            console.error("erro ao buscar produtos:", error);
            throw error;

        }
    }
};

module.exports = { produtoModel };