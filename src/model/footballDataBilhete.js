const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const FootballDataBilhete = sequelize.define("footballDataBilhete", {
  id_bilhete: { 
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },

  id_bolao: {
    allowNull: false,
    type: Sequelize.INTEGER
  },

  id_usuario: {
    allowNull: false,
    type: Sequelize.INTEGER
  },

  ticket: { 
    allowNull: false,
    type: Sequelize.STRING(12)
  },

  valor: {
    allowNull: true,
    type: Sequelize.DECIMAL(15, 2)
  },

  pontos: {
    allowNull: true,
    type: Sequelize.SMALLINT()
  },




},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = FootballDataBilhete;