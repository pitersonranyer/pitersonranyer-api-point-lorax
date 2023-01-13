const FootballDataBilhete = require('../model/footballDataBilhete');
const FootballDataPalpiteBilhete = require('../model/footballDataPalpiteBilhete');
const sequelize = require('../database/database');

const gerarBilhete = dadosFootballDataBilhete => {

  let first = Math.random()       // Gera um valor randômico
    .toString(36)   // Utiliza a Base36
    .substring(8, 4)     // Captura os 4 últimos números
    .toUpperCase(); // Converte para maiúscula 

  let last = Math.floor((Math.random() * (9999 - 1000)) + 1000); // Gera um valor entre 999 e 10000

  let ticket = `${first}-${last}`

  dadosFootballDataBilhete.ticket = ticket;

  const footballDataBilhete = new FootballDataBilhete({ ...dadosFootballDataBilhete });

  footballDataBilhete.save()
    .then(function (bilhete) {

      for (let i = 0; i < dadosFootballDataBilhete.palpites.length; i++) {

        /* Gravar palpites do bilhete */
        const dadosPalpiteBilhete = {
          id_bilhete: bilhete.id_bilhete,
          id_partida: dadosFootballDataBilhete.palpites[i].id_partida,
          casa_vence: dadosFootballDataBilhete.palpites[i].casaVence,
          empate_jogo: dadosFootballDataBilhete.palpites[i].empateJogo,
          fora_vence: dadosFootballDataBilhete.palpites[i].foraVence
        };

        const footballDataPalpiteBilhete = new FootballDataPalpiteBilhete({ ...dadosPalpiteBilhete });
        footballDataPalpiteBilhete.save()
          .then(function () {
            return true;
          })
          .catch(function (error) {
            console.log(error);
            return false;
          });


      }

    }).catch(function (error) {
      console.log(error);
      return false;
    });


};


const getListTotalBilheteBolao = async (situacao_bolao) => {

  resultQuery = await sequelize.query(
    " SELECT `A`.`id_bolao` " +
    ",      `A`.`nome_bolao` " +
    ",   COUNT(*) as `count` " +
    " FROM `footballdatabolao` `A` " +
    "  INNER JOIN  `footballdatabilhete` `B` " +
    "  ON `A`.`id_bolao` = `B`.`id_bolao` " +
    " where `A`.`situacao_bolao` =  " + `"${situacao_bolao}"` +
    " group by `A`.`id_bolao`  " +
    ",        `A`.`nome_bolao` "
    , {
      type: sequelize.QueryTypes.SELECT
    });

  if (resultQuery.length > 0) {

    return resultQuery;

  } else {

    return resultQuery = [];

  }


};


const getListBilheteBolao = async (id_bolao, situacao_bolao) => {

  resultQuery = await sequelize.query(
    " SELECT `A`.`id_bolao` " +
    " ,      `A`.`nome_bolao` " +
    " ,      `A`.`situacao_bolao`  " +
    " ,      `C`.`nome` " +
    " ,      `B`.`ticket` " +
    " ,      `B`.`id_bilhete` " +
    " ,      `B`.`pontos` " +
    "  FROM `footballdatabolao` `A` " +
    "   INNER JOIN  `footballdatabilhete` `B` " +
    "   ON `A`.`id_bolao` = `B`.`id_bolao` " +
    "   INNER JOIN  `usuario` `C`  " +
    "   ON `C`.`id` = `B`.`id_usuario` " +
    "  WHERE `B`.`id_bolao`  = " + `${id_bolao}` +
    "  AND   `A`.`situacao_bolao` =  " + `"${situacao_bolao}"` +
    "  ORDER BY  `B`.`pontos`  DESC "
    , {
      type: sequelize.QueryTypes.SELECT
    });

  if (resultQuery.length > 0) {

    return resultQuery;

  } else {

    return resultQuery = [];

  }


};



module.exports = { gerarBilhete, getListTotalBilheteBolao, getListBilheteBolao };
