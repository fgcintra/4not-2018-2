const mongoose = require('mongoose');

module.exports = function() {

   const schema = mongoose.Schema({
      descricao: {
         type: String,
         required: true // O atributo não pode ficar em branco
      },
      /*
      tipo: {
         type: String,
         required: true
      },
      */
      tipo: {
         type: mongoose.SchemaTypes.ObjectId,
         ref: 'Tipo',
         required: true
      },
      /*
      tamanho: {
         type: String,
         required: true
      },
      */
      tamanho: {
         type: mongoose.SchemaTypes.ObjectId,
         ref: 'Tamanho',
         required: true
      },
      cor: {
         type: String,
         required: true
      },
      marca: {
         type: String
      },
      /*
      linha: {
         type: String,
         required: true
      },
      */
      linha: {
         type: mongoose.SchemaTypes.ObjectId,
         ref: 'Linha',
         required: true
      },
      origem: {
         type: String
      },
      estado_conservacao: {
         type: String,
         required: true
      },
      conjunto: {
         type: Boolean,
         required: true
      },
      data_compra: {
         type: Date,
         required: true,
         default: Date.now() // Valor padrão para o atributo
      },
      valor_compra: {
         type: Number,
         required: true
      },
      data_venda: {
         type: Date
      },
      valor_venda: {
         type: Number
      }

   });

   // 1º parâmetro: Nome do modelo
   // 2º parâmetro: Esquema do modelo
   // 3º parâmetro: Nome da coleção onde os objetos serão armazenados
   return mongoose.model('Artigo', schema, 'artigos');

}