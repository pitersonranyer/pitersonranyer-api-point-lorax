const Usuario = require('../model/usuario');    

const cadastrarUsuario = dadosUsuario => {
    return Usuario.findOne({ where: { email: dadosUsuario.email } }).then(data => {
        if (data === null ) {
            
            const usuario = new Usuario({ ...dadosUsuario });
            
            usuario.save();
            return true;
            
        } else {
          Usuario.update({
            nome: dadosUsuario.nome           
          },
            { where: { email: dadosUsuario.email } });
        }
        return true;
        
    });
};

module.exports = { cadastrarUsuario };
