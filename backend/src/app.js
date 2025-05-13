const express = require('express');
const morgan = require('morgan')
const config = require('./config');

const users = require("./modules/users/routes.js")
const error = require("./network/errors.js")

const app = express();

//Middleware
app.use(morgan('dev'));

//Config
app.set('port', config.app.port);

//Routes
app.use('/api/users', users)
app.use(error)

module.exports = app;