const Artigo = require('../models/Artigo')(/* construtor */);

module.exports = function() {

   const controller = {};

   controller.novo = function(req, res) {

      // Cria um novo artigo a partir das informações
      // que vieram no corpo (body) da requisição
      const artigo = new Artigo(req.body);

      artigo.save(
         // Callback quando acabar de salvar
         function(deuErro) {
            if(deuErro) { // Deu ruim
               // HTTP 500: Erro interno do servidor
               res.send(500).end();
            }
            else { // Deu certo
               // HTTP 201: Criado
               res.send(201).end();
            }

         }
      );


   }

   return controller;

}