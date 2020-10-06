const db = require('./db')

const Contato = db.sequelize.define('contatos',{
    nome:{
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    celular: {
        type: db.Sequelize.STRING
    }
})

//Contato.sync({force: true});

module.exports = Contato;