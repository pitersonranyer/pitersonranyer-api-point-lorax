const footballDataBolao = require('../repository/footballDataBolao');

const cadastro = (req, res, next) => {
    const dadosBolao = req.body;
    return footballDataBolao.cadastrarBolao(dadosBolao)
        .then(bolao => {
            if (!bolao) {
                return res.status(409).end();
            }
            
            return res.status(200).end();
        })  
        .catch(error => next(error));
};

const listPartidasBolao = async  (req, res, next) => {

    const id_bolao = req.params.id_bolao;
    
     
    return footballDataBolao.getPartidasBolao (id_bolao)
   .then(partidas => res.json(partidas))
   .catch(err => next(err)); 
  
  };

module.exports = { cadastro, listPartidasBolao };
