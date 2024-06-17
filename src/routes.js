const Send = require('./app/controllers/MessageController')
const {Router} = require('express');
const routes = new Router();

routes.get('/', Send.helloWorld)

module.exports = routes;