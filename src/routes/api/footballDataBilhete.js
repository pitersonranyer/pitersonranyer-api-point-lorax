const Router = require('express').Router();

const controller = require('../../controller/footballDataBilhete');


Router.post('/', controller.gerarBilhete);
Router.get('/listTotalBilheteBolao/:situacao_bolao', controller.listTotalBilheteBolao);
Router.get('/listBilheteBolao/:id_bolao/:situacao_bolao', controller.listBilheteBolao);


module.exports = Router;
