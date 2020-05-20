const express = require('express');
const cors = require('cors');

const sequelize = require("./database/database");
const routes = require('./routes');
const { internalServer, notFound } = require('./middleware/errorHandler');
const environment = process.env.ENV || 'development';

const app = express();

const http = require("http");
const status = require("http-status");
const usuariosRoute = require("./routes/api/usuarios");

app.use(express.json());
app.use(cors());

app.use(routes);
app.use(internalServer);
app.use(notFound);

//app.use("/api", usuariosRoute);


app.use((request, response, next) => {
  response.status(status.NOT_FOUND).send();
});


app.use((error, request, response, next) => {
    response.status(status.INTERNAL_SERVER_ERROR).json({ error });
  });
  
  sequelize.sync({ force: false }).then(() => {
    const port = process.env.PORT || 3000;
  
    app.set("port", port);
  
    const server = http.createServer(app);
  
    server.listen(port);
  });
  
