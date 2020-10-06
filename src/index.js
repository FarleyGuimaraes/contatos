const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

const app = express();

//Config

    //Arquivos estáticos
    app.use(express.static(path.join(__dirname,'public')))

    //Template engine
    app.engine('handlebars',handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars');
    app.set('views', __dirname + '/views');

    //Body-Parser
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(bodyParser.json());

    //Rotas
    app.use(routes);

app.listen(3333, () => {
    console.log('Servidor rodando na url http://localhost:3333');
})