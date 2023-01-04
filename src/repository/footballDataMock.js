const fs = require("fs");

const competitions = () => {

  return new Promise((resolve, reject) => {
    fs.readFile("src/database/competicoes.json", 'utf8', (error, fileContent) => {
     if (error != null) {
      reject(error);
      return;
     }
     var jsonData = JSON.parse(fileContent)
     resolve(jsonData.competitions);
    });
   });
};


const teams = () => {

  return new Promise((resolve, reject) => {
    fs.readFile("src/database/timesCompeticao.json", 'utf8', (error, fileContent) => {
     if (error != null) {
      reject(error);
      return;
     }
     var jsonData = JSON.parse(fileContent)
     resolve(jsonData.teams);
    });
   });
};

module.exports = { competitions, teams };
