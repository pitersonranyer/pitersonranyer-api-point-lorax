const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const FootballDataPalpiteBilhete = sequelize.define("footballDataPalpiteBilhete", {
  ticket: { 
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING(12)
  },

  id_bolao: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  id_partida: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  casa_vence: {
    allowNull: true,
    type: Sequelize.BOOLEAN,
  },

  empate_jogo: {
    allowNull: true,
    type: Sequelize.BOOLEAN,
  },

  fora_vence: {
    allowNull: true,
    type: Sequelize.BOOLEAN,
  },

},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = FootballDataPalpiteBilhete;