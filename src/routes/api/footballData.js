const Router = require('express').Router();

const controller = require('../../controller/footballData');

Router.get('/competicoes', controller.competicoes);

Router.get('/competicaoPorId/:id_competicao', controller.competicaoPorId);

Router.get('/timesPorCompeticaoId/:id_competicao', controller.timesPorCompeticaoId);

Router.get('/classificaoPorCompeticaoId/:id_competicao', controller.classificaoPorCompeticaoId);

Router.get('/partidasPorCompeticaoId/:id_competicao', controller.partidasPorCompeticaoId);


module.exports = Router;
