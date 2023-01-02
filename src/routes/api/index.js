const Router = require('express').Router();

const usuariosRouter = require('./usuarios');

const endpoints = {
    message: 'essa é a API da nossa rede social',
    endpoints: {
        usuarios: {
            caminho: '/usuarios'
        }
    }
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);

module.exports = Router;
