const Tipo = require('../models/Tipo')(/* construtor */);

module.exports = function() {

   const controller = {};

   controller.novo = function(req, res) {
      Tipo.create(req.body).then(
         function() {
            res.status(201).end();
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );
   }

   controller.listar = function(req, res) {
      Tipo.find().exec().then(
         function(tipos) {
            res.json(tipos).end();
         },
         function(erro) {
            console.log(erro);
            res.status(500).end();
         }
      );
   }

   controller.obterUm = function (req, res) {

      Tipo.findById(req.params.id).exec().then(
         function (tipo) {
            if (tipo) { // Se o tipo existe (não veio vazio) 
               // Retorna o tipo com status 200
               res.json(tipo).end();
            }
            else {
               // HTTP 404: Não encontrado
               res.status(404).end();
            }
         },
         function (erro) {
            console.log(erro);
            res.status(500).end();
         }

      );

   }

   controller.atualizar = function (req, res) {

      Tipo.findByIdAndUpdate(req.body._id, req.body).exec().then(
         function () {
            // HTTP 204: OK, sem dados
            res.send(204).end();
         },
         function (erro) {
            console.log(erro);
            res.send(500).end();
         }
      );

   }

   controller.excluir = function (req, res) {

      // findByIdAndRemove(): busca o objeto pelo id
      // passado e o exclui do BD      
      Tipo.findByIdAndRemove(req.params.id).exec().then(
         function () {
            res.send(204).end();
         },
         function (erro) {
            console.log(erro);
            res.send(500).end();
         }
      );

   }

   return controller;
}