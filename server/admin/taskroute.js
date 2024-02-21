const {Router} = require('express')
// const {getTasks} = require('./taskController');
const getTasks = require('./taskController')

const route = Router();

route.get("/requests",getTasks.requests);
route.get("/customerDetails",getTasks.consumer);
route.get("/sellerDetails",getTasks.seller);
route.get("/broadcast",getTasks.broadcast);
route.get("/adminDetails", getTasks.admin);
route.get("/getRegistrationTimes",getTasks.getRegistrationTimes)
route.post("/sendbroadcast",getTasks.sendBroadcast);
route.post("/registerAdmin", getTasks.registerAdmin);
route.post("/adminLogging", getTasks.adminLogging); // New route for admin login

module.exports = route;