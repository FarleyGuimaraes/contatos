const Contato = require('../models/Contato');

module.exports = {
    
    async index(req, res){
        await Contato.findAll().then((contatos)=>{
            return res.render('home', {contatos: contatos});
        }).catch((erro)=>{
            return res.send(`Erro na conexão: ${erro}`);
        })
    },

    create(req, res) {
        res.render('formulario')
    },

    async store(req,res) {
        await Contato.create(req.body).then(() => {
            res.redirect('/contatos');
        }).catch((erro) => {
            res.send('Houve um erro ' + erro);
        });
    },

    async edit(req, res) {
        const { id } = req.params;
        await Contato.findOne({where: {'id': id}}).then((contato) => {
            if(contato){
                res.render('formulario', {contato: contato});
            }else{
                res.render('notFound')
            }
            
        }).catch((erro) => {
            res.send(`Erro ao consultar banco de dados: ${erro}`);
        });
    },

    async update(req,res) {
        const {id} = req.params;
        await Contato.update(req.body, {where: {'id': id}}).then(() => {
            res.redirect('/contatos')
        }).catch((erro) => {
            res.send(`Não foi possivel atualizar: ${erro}`)
        })
    },

    async destroy(req,res) {
        const { id } = req.params;
        await Contato.destroy({where: {'id': id}}).then(() => {
            res.redirect('/contatos')            
        }).catch((erro) => {
            res.send(`Não foi possivel deletar: ${erro}`)
        })
    }
}
