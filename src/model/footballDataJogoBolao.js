const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const FootballDataJogoBolao = sequelize.define("footballDataJogoBolao", {
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

  partida_valida: {
    allowNull: false,
    defaultValue: true,
    type: Sequelize.BOOLEAN,
  },


},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = FootballDataJogoBolao;