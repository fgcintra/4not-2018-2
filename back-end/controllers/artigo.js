const Artigo = require('../models/Artigo')(/* construtor */);

module.exports = function() {

   const controller = {};

   controller.novo = function(req, res) {

      // Cria um novo artigo a partir das informações
      // que vieram no corpo (body) da requisição
      Artigo.create(req.body).then(
         // Callback se der certo
         function() {
            // HTTP 201: Criado
            res.send(201).end();
         },
         // Callback se der errado
         function(erro) {
            // Para que possamos visualizar o erro
            console.log(erro);
            // HTTP 500: Erro interno do servidor
            res.send(500).end();            
         }
      );

   }

   return controller;

}