const Router = require('express').Router();

const usuariosRouter = require('./usuarios');
const footballDataRouter = require('./footballData');
const footballDataBolaoRouter = require('./footballDataBolao');

const endpoints = {
    message: 'essa é a API da nossa rede social',
    endpoints: {
        usuarios: {
            caminho: '/usuarios'
        },
        footballData: {
            caminho: '/footballData'
        },

        footballDataBolao: {
            caminho: '/footballDataBolao'
        },
    }
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/footballData', footballDataRouter);
Router.use('/footballDataBolao', footballDataBolaoRouter);

module.exports = Router;
