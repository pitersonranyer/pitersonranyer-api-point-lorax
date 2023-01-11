const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const FootballDataCompeticao = sequelize.define("footballDataCompeticao", {
  id: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING(100)
  },
  code: {
    allowNull: false,
    type: Sequelize.STRING(3),
  },

  type: {
    allowNull: false,
    type: Sequelize.STRING(50),
  },

  emblem: {
    allowNull: false,
    type: Sequelize.STRING(255),
  },

},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = FootballDataCompeticao;