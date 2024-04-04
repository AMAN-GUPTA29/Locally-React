const {Router} = require('express')
const getTasks = require('./taskController')
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const auth = require('./auth')

module.exports = app; 

const route = Router();

route.get("/requests",auth,getTasks.requests);
route.get("/customerDetails",auth,getTasks.consumer);
route.get("/sellerDetails",auth,getTasks.seller);
route.get("/broadcast",auth,getTasks.broadcast);
route.get("/adminDetails",auth,getTasks.admin);
route.get("/getRegistrationTimes",auth,getTasks.getRegistrationTimes)
route.get('/allSellerDetails',auth,getTasks.getAllSellerDetails);
route.post("/sendbroadcast",auth,getTasks.sendBroadcast);
route.post("/registerAdmin", getTasks.registerAdmin);
route.post("/adminLogging", getTasks.adminLogging); 
route.put('/api/blockCustomer/:id', async (req, res) => {
  try {
      const { id } = req.params;
      const { blocked, customerId } = req.body;
      const seller = await getTasks.sellerModel.findByIdAndUpdate(id, { blocked });
      // Update the customer's blocked status here using the customerId
      res.json(seller);
  } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
  }
});

  

module.exports = route;