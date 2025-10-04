const sql = require("mssql");

const CONFIG = {
    user: 'sa',
    password: '123456789',
    server: 'localhost',
    database: 'LojaDB',
    options: {
        encrypt: true,
        trustServerCertificate: true //ignora o erro de certificado autoassinado
    }
}

async function getConnection() {
    try {
        const pool = await sql.connect(CONFIG);
        return pool;
    } catch (error) {
        console.error('Erro na conexão SQL Server', error);
    }
}

// (async () => {
//     try {
//         const pool = await getConnection();
//         console.log("Conexão estabelecida com sucesso");
//     } catch (error) {
//         console.error("Erro ao estabelecer conexão", error);
//     }
// })()

module.exports = {sql, getConnection};