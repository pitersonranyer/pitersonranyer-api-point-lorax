const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const FootballDataBilhete = sequelize.define("footballDataBilhete", {
  ticket: { 
    allowNull: false,
    primaryKey: true,
    type: Sequelize.STRING(12)
  },

  id_usuario: {
    allowNull: false,
    type: Sequelize.INTEGER
  },

},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = FootballDataBilhete;