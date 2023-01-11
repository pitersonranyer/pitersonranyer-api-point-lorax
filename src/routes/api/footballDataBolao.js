const Router = require('express').Router();

const controller = require('../../controller/footballDataBolao');

Router.post('/', controller.cadastro);
Router.get('/listPartidasBolao/:id_bolao', controller.listPartidasBolao);

module.exports = Router;
