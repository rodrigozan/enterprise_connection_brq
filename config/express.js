const express = require('express');
const config = require('config');
const consign = require('consign')

module.exports = () => {
    const app = express();

    // SETANDO VARIÁVEIS DA APLICAÇÃO
    app.set('port', process.env.PORT || config.get('server.port'));

    // MIDDLEWARES
    app.use(express.json());

    consign()
    .include("api")

    return app;
};