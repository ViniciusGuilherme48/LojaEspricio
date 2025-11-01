const bcrypt = require('bcrypt');

let senha = 'senha-123';

const saltRounds = 10;

const senhaCriptografada = bcrypt.hashSync(senha, saltRounds);

console.log('senha original', senha);
console.log('senha criptografada', senhaCriptografada);

const senhaIncorreta = 'senha';

const senhaValida = bcrypt.compareSync(senhaIncorreta, senhaCriptografada);

if (senhaValida) {
    console.log('senha valida');
} else {
    console.log('senha incorreta');
}