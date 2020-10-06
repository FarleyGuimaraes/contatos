const express = require('express');
const ContatoController = require('./controllers/ContatoController');

const routes = express.Router();

routes.get('/',(req, res) => {
    res.redirect('/contatos')
})
routes.get('/contatos', ContatoController.index);
routes.get('/contatos/cadastro', ContatoController.create);
routes.post('/contatos/cadastro', ContatoController.store);
routes.get('/contatos/atualizar/:id', ContatoController.edit);
routes.post('/contatos/atualizar/:id', ContatoController.update);
routes.get('/contatos/deletar/:id', ContatoController.destroy);
routes.get('*', (req, res) => {
    res.render('notFound');
})


module.exports = routes;