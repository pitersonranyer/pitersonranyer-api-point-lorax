const fs = require("fs");
const FootballDataPartidaCompeticao = require('../model/footballDataPartidaCompeticao');
const sequelize = require('../database/database');

const competitions = () => {

  return new Promise((resolve, reject) => {
    fs.readFile("src/database/competicoes.json", 'utf8', (error, fileContent) => {
      if (error != null) {
        reject(error);
        return;
      }
      var jsonData = JSON.parse(fileContent)

      for (let i = 0; i < jsonData.competitions.length; i++) {

        console.log(jsonData.competitions[i].id);
        console.log(jsonData.competitions[i].name);
        console.log(jsonData.competitions[i].code);
        console.log(jsonData.competitions[i].type);
        console.log(jsonData.competitions[i].emblem);


        const dadosFootballDataCompeticao = {
          id: jsonData.competitions[i].id,
          name: jsonData.competitions[i].name,
          code: jsonData.competitions[i].code,
          type: jsonData.competitions[i].type,
          emblem: jsonData.competitions[i].emblem
        };


        /*   const footballDataCompeticao = new FootballDataCompeticao({ ...dadosFootballDataCompeticao });
          footballDataCompeticao.save(); */


      }


      resolve(jsonData.competitions);
    });
  });
};




const competitionMatches = () => {

  return new Promise((resolve, reject) => {
    fs.readFile("src/database/partidas2021.json", 'utf8', (error, fileContent) => {
      if (error != null) {
        reject(error);
        return;
      }
      var jsonData = JSON.parse(fileContent)

      for (let i = 0; i < jsonData.matches.length; i++) {

        const dadosFootballDataPartidaCompeticao = {
          id_competicao: jsonData.matches[i].competition.id,
          id_partida: jsonData.matches[i].id,
          utcDate: jsonData.matches[i].utcDate,
          status: jsonData.matches[i].status,
          matchday: jsonData.matches[i].matchday,
          stage: jsonData.matches[i].stage,
          group: jsonData.matches[i].group,

          /* time mandante */

          id_homeTeam: jsonData.matches[i].homeTeam.id,
          name_homeTeam: jsonData.matches[i].homeTeam.name,
          shortName_homeTeam: jsonData.matches[i].homeTeam.shortName,
          tla_homeTeam: jsonData.matches[i].homeTeam.tla,
          crest_homeTeam: jsonData.matches[i].homeTeam.crest,
          placar_homeTeam: jsonData.matches[i].score.fullTime.home,

          /* time visitante */
          id_awayTeam: jsonData.matches[i].awayTeam.id,
          name_awayTeam: jsonData.matches[i].awayTeam.name,
          shortName_awayTeam: jsonData.matches[i].awayTeam.shortName,
          tla_awayTeam: jsonData.matches[i].awayTeam.tla,
          crest_awayTeam: jsonData.matches[i].awayTeam.crest,
          placar_awayTeam: jsonData.matches[i].score.fullTime.away,

        };

        console.log(jsonData.matches[i].group)
        const footballDataPartidaCompeticao = new FootballDataPartidaCompeticao({ ...dadosFootballDataPartidaCompeticao });
        footballDataPartidaCompeticao.save();


      }




      resolve(jsonData.matches);
    });
  });
};



const teams = () => {

  return new Promise((resolve, reject) => {
    fs.readFile("src/database/timesCompeticao.json", 'utf8', (error, fileContent) => {
      if (error != null) {
        reject(error);
        return;
      }
      var jsonData = JSON.parse(fileContent)
      resolve(jsonData.teams);
    });
  });
};




const getPartidasCompeticaoQuery = async (dtInicio, dtFim ) => {

  
  result = await sequelize.query("SELECT `A`.`id` " +
    " , `A`.`code` " +
    " , `A`.`emblem` " +
    " , `A`.`name` " +
    " , `A`.`type` " +
    "  FROM `footballdatacompeticao` `A` " +
    " WHERE   `A`.`id`   not in (2000, 2152, 2013 )  " +
    "  ORDER BY `A`.`id` "
    , {
      type: sequelize.QueryTypes.SELECT
    });

  if (result.length > 0) {

    for (let i = 0; i < result.length; i++) {

      partidas = await sequelize.query(
        "SELECT `A`.`id_competicao` " +
        " , `A`.`id_partida` " +
        " , `A`.`utcDate` " +
        " , `A`.`status` " +
        " , `A`.`matchday` " +
        " , `A`.`stage` " +
        " , `A`.`group` " +
        " , `A`.`id_homeTeam` " +
        " , `A`.`name_homeTeam` " +
        " , `A`.`shortName_homeTeam` " +
        " , `A`.`tla_homeTeam` " +
        " , `A`.`crest_homeTeam` " +
        " , `A`.`placar_homeTeam` " +
        " , `A`.`id_awayTeam` " +
        " , `A`.`name_awayTeam` " +
        " , `A`.`shortName_awayTeam` " +
        " , `A`.`tla_awayTeam` " +
        " , `A`.`crest_awayTeam` " +
        " , `A`.`placar_awayTeam` " +
        "  FROM `footballdatapartidacompeticao` `A` " +
        " WHERE   `A`.`id_competicao`   =  " + `${result[i].id} ` +
        " and     date(utcDate) >= " + `"${dtInicio}"` +
        " and     date(utcDate) <= " + `"${dtFim}"` +
        "  ORDER BY `A`.`utcDate` "
        , {
          type: sequelize.QueryTypes.SELECT
        });

      if (partidas.length > 0) {
        for (let ix = 0; ix < partidas.length; ix++) {
          const utcDate1 = new Date(partidas[ix].utcDate);
          partidas[ix].utcDate = utcDate1.toLocaleString();
        }

        result[i].partidas = partidas;

      } else {

        result[i].partidas = [];

      }


    }

    return result;
  } else {
    return result = [];
  }


}

module.exports = { competitions, teams, competitionMatches, getPartidasCompeticaoQuery };
