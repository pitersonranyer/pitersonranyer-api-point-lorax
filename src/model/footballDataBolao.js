const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const FootballDataBolao = sequelize.define("footballDataBolao", {
  id_bolao: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome_bolao: {
    allowNull: false,
    type: Sequelize.STRING(100)
  },

  situacao_bolao: {
    allowNull: false,
    type: Sequelize.STRING(50),
  },

},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = FootballDataBolao;