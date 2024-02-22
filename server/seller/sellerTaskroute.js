const { Router } = require('express');
const getTasks = require('./sellerTaskController')

const route = Router();

route.post('/register-seller', getTasks.registerSeller);
route.post('/seller-login', getTasks.sellerLogging);
route.get("/broadcast",getTasks.broadcast);

module.exports = route;
