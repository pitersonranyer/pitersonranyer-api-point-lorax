const footballDataBilhete = require('../repository/footballDataBilhete');

const gerarBilhete = (req, res, next) => {
    const dadosFootballDataBilhete = req.body;
    return footballDataBilhete.gerarBilhete(dadosFootballDataBilhete)
        .then(bilhete => {
            if (!bilhete) {
                return res.status(409).end();
            }

            return res.status(200).end();
        })
        .catch(error => next(error));
};


const listTotalBilheteBolao = async (req, res, next) => {

    const situacao_bolao = req.params.situacao_bolao;

    return footballDataBilhete.getListTotalBilheteBolao(situacao_bolao)
        .then(resultList => res.json(resultList))
        .catch(err => next(err));

};

const listBilheteBolao = async (req, res, next) => {

    const id_bolao = req.params.id_bolao;
    const situacao_bolao = req.params.situacao_bolao;
    
    return footballDataBilhete.getListBilheteBolao(id_bolao, situacao_bolao)
        .then(resultList => res.json(resultList))
        .catch(err => next(err));

};
module.exports = { gerarBilhete, listTotalBilheteBolao, listBilheteBolao };
