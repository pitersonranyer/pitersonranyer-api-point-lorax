const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const FootballDataPartidaCompeticao = sequelize.define("footballDataPartidaCompeticao", {
  id_competicao: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  id_partida: {
    allowNull: false,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  utcDate: {
    allowNull: true,
    type: Sequelize.STRING(20)
  },
  status: {
    allowNull: true,
    type: Sequelize.STRING(50)
  },
  matchday: {
    allowNull: true,
    type: Sequelize.SMALLINT
  },
  stage: {
    allowNull: true,
    type: Sequelize.STRING(50)
  },
  group: {
    allowNull: true,
    type: Sequelize.STRING(30)
  },

  /* time mandante */
  id_homeTeam: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  name_homeTeam: {
    allowNull: true,
    type: Sequelize.STRING(100)
  },
  shortName_homeTeam: {
    allowNull: true,
    type: Sequelize.STRING(50)
  },
  tla_homeTeam: {
    allowNull: true,
    type: Sequelize.STRING(3)
  },
  crest_homeTeam: {
    allowNull: true,
    type: Sequelize.STRING(255)
  },
  placar_homeTeam: {
    allowNull: true,
    type: Sequelize.SMALLINT
  },

  /* time visitante */
  id_awayTeam: {
    allowNull: true,
    type: Sequelize.INTEGER
  },
  name_awayTeam: {
    allowNull: true,
    type: Sequelize.STRING(100)
  },
  shortName_awayTeam: {
    allowNull: true,
    type: Sequelize.STRING(50)
  },
  tla_awayTeam: {
    allowNull: true,
    type: Sequelize.STRING(3)
  },
  crest_awayTeam: {
    allowNull: true,
    type: Sequelize.STRING(255)
  },
  placar_awayTeam: {
    allowNull: true,
    type: Sequelize.SMALLINT
  },
},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = FootballDataPartidaCompeticao;