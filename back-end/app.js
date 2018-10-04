var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors');
app.use(cors());

const db = require('./config/database');

// mongodb:// -> protocolo de rede
// localhost -> nome do servidor, no caso, a máquina local
// :27017 -> porta na qual o MongoDB espera ("escuta") conexões
// brecho-not -> nome do banco de dados
db('mongodb://localhost:27017/brecho-not');

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Ligando a aplicação à rota
const teste = require('./routes/teste');

// Associando a rota /ola à rota
app.use('/ola', teste);

const artigo = require('./routes/artigo');
app.use('/artigo', artigo);

const tipo = require('./routes/tipo');
app.use('/tipo', tipo);

const linha = require('./routes/linha');
app.use('/linha', linha);

const tamanho = require('./routes/tamanho');
app.use('/tamanho', tamanho);

module.exports = app;
