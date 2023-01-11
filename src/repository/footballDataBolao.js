const FootballDataBolao = require('../model/footballDataBolao');
const FootballDataJogoBolao = require('../model/footballDataJogoBolao');
const sequelize = require('../database/database');

const cadastrarBolao = dadosFootballDataBolao => {

  return FootballDataBolao.findOne({ where: { nome_bolao: dadosFootballDataBolao.nome_bolao } }).then(data => {
    if (data === null) {

      /* Gravar bolão */
      const dadosBolao = {
        nome_bolao: dadosFootballDataBolao.nome_bolao,
        situacao_bolao: dadosFootballDataBolao.situacao_bolao,
      };
      const footballDataBolao = new FootballDataBolao({ ...dadosBolao });

      footballDataBolao.save()
        .then(function (bolao) {

          for (let i = 0; i < dadosFootballDataBolao.partidas.length; i++) {

            /* Gravar jogos do bolão */
            const dadosJogosBolao = {
              id_bolao: bolao.id_bolao,
              id_partida: dadosFootballDataBolao.partidas[i],
              partida_valida: true
            };

            const footballDataJogoBolao = new FootballDataJogoBolao({ ...dadosJogosBolao });
            footballDataJogoBolao.save()

          }

        }).catch(function (error) {
          console.log(error);
        });

      return true;

    }
  });
};

const getPartidasBolao = async (id_bolao) => {

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
    " , `B`.`id_bolao` " +
    " , `B`.`partida_valida` " +
    " , `C`.`nome_bolao` " +
    " , `C`.`situacao_bolao` " +
    "  FROM `footballdatapartidacompeticao` `A` " +
    " inner join `footballdatajogobolao` `B` " +
    "  ON `B`.`id_partida` = `A`.`id_partida` " +
    " inner join `footballdatabolao` `C` " +
    "  ON `C`.`id_bolao` = `B`.`id_bolao` " +
    " WHERE `B`.`id_bolao`   =  " + `${id_bolao} ` +
    "  ORDER BY `A`.`utcDate` "
    , {
      type: sequelize.QueryTypes.SELECT
    });

  if (partidas.length > 0) {
    for (let ix = 0; ix < partidas.length; ix++) {
      const utcDate1 = new Date(partidas[ix].utcDate);
      partidas[ix].utcDate = utcDate1.toLocaleString();
    }

    return partidas;

  } else {

    return partidas = [];

  }


};

module.exports = { cadastrarBolao, getPartidasBolao };
