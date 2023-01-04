const FootballData = require('../repository/footballData');

const myApiToken = '0467208236044fc199bb9de25c253b3c';
const footballData = new FootballData(myApiToken);

const competicoes = (req, res, next) => {
 
   return footballData.competitions()
  .then(competicoes => res.json(competicoes))
  .catch(err => next(err)); 

};

const competicaoPorId = (req, res, next) => {

  id_competicao = req.params.id_competicao;
  
  return footballData.competition(id_competicao)
 .then(competicao => res.json(competicao))
 .catch(err => next(err)); 

};

const timesPorCompeticaoId = (req, res, next) => {

  id_competicao = req.params.id_competicao;
  
  return footballData.teams(id_competicao)
 .then(times => res.json(times))
 .catch(err => next(err)); 

};

const classificaoPorCompeticaoId = (req, res, next) => {

  id_competicao = req.params.id_competicao;
  
  return footballData.standings(id_competicao)
 .then(classificacao => res.json(classificacao))
 .catch(err => next(err)); 

};

const partidasPorCompeticaoId = (req, res, next) => {

  id_competicao = req.params.id_competicao;
  
  return footballData.competitionMatches(id_competicao)
 .then(partidas => res.json(partidas))
 .catch(err => next(err)); 

};

module.exports = { competicoes, 
  competicaoPorId, 
  timesPorCompeticaoId, 
  classificaoPorCompeticaoId,
  partidasPorCompeticaoId
};
