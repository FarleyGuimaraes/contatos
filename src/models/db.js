const Sequelize = require('sequelize');

const database = 'contatos';
const user = 'root';
const password = '';

const sequelize = new Sequelize(database, user, password,{
    host: 'localhost',
    dialect: 'mysql',
    query: {raw: true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}