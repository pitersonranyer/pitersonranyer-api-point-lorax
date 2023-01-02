module.exports = {
  development: {
    database: {
      
      /* host: "mysql-93308-0.cloudclusters.net",
      port: 19619,
      name: "pointdojogador",
      dialect: "mysql",
      user: "admin",
      password: "9K1nB5iq" */

      host: "localhost",
      port: 3306,
      name: "app-pointdojogador",
      dialect: "mysql",
      user: "root",
      password: "admin"

    },
    secret: '1C3C7E1694F1E9DAD939399E87E5FFB5DF06B2327CA31B409CB3'
  },
  production: {
    database: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      secret: process.env.JWT_SECRET
    }
  }
};
