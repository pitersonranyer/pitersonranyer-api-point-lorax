const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Usuario = sequelize.define("usuario", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  nome: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [2, 100]
    }
  },
  email: {
    allowNull: false,
    type: Sequelize.STRING(100),
    validate: {
      len: [2, 100]
    }
  },

  /* dados login fire base */

  uid: {
    allowNull: true,
    type: Sequelize.STRING(100),
  },


},
  {
    freezeTableName: true,
    timestamps: false

  });

module.exports = Usuario;
