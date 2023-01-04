const Router = require('express').Router();

const usuariosRouter = require('./usuarios');
const footballDataRouter = require('./footballData');

const endpoints = {
    message: 'essa é a API da nossa rede social',
    endpoints: {
        usuarios: {
            caminho: '/usuarios'
        },
        footballData: {
          caminho: '/footballData'
      }
    }
};

Router.get('/', (req, res, next) => res.json(endpoints));
Router.use('/usuarios', usuariosRouter);
Router.use('/footballData', footballDataRouter);

module.exports = Router;
