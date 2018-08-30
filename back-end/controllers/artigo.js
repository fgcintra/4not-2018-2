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

   controller.listar = function(req, res) {

      Artigo.find().populate('tipo').exec().then(
         // Foi bem
         function(artigos) {
            // Retornando os artigos encontrados com
            // status HTTP 200: Ok
            res.json(artigos).end();
         },
         // Deu ruim
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );

   }

   controller.obterUm = function(req, res) {

      Artigo.findById(req.params.id).exec().then(
         function(artigo) {
            if(artigo) { // Se o artigo existe (não veio vazio) 
               // Retorna o artigo com status 200
               res.json(artigo).end();
            }
            else {
               // HTTP 404: Não encontrado
               res.status(404).end();
            }
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }

      );

   }

   controller.atualizar = function(req, res) {

      Artigo.findByIdAndUpdate(req.body._id, req.body).exec().then(
         function() {
            // HTTP 204: OK, sem dados
            res.send(204).end();
         },
         function(erro) {
            console.log(erro);
            res.send(500).end();
         }
      );

   }

   controller.excluir = function(req, res) {

      // findByIdAndRemove(): busca o objeto pelo id
      // passado e o exclui do BD      
      Artigo.findByIdAndRemove(req.params.id).exec().then(
         function() {
            res.send(204).end();
         },
         function(erro) {
            console.log(erro);
            res.send(500).end();
         }
      );

   }
   
   return controller;

}