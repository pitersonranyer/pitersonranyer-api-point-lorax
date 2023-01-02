const Router = require('express').Router();

const controller = require('../../controller/usuarios');


Router.post('/', controller.cadastro);

module.exports = Router;
