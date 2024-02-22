const {Router} = require('express')
// const {getTasks} = require('./taskController');
const getTasks = require('./taskController')
const express = require('express');
const app = express();

// Other app configurations and middleware

module.exports = app; // Export the app object

const route = Router();

route.get("/requests",getTasks.requests);
route.get("/customerDetails",getTasks.consumer);
route.get("/sellerDetails",getTasks.seller);
route.get("/broadcast",getTasks.broadcast);
route.get("/adminDetails", getTasks.admin);
route.get("/getRegistrationTimes",getTasks.getRegistrationTimes)
route.get('/allSellerDetails', getTasks.getAllSellerDetails);
route.post("/sendbroadcast",getTasks.sendBroadcast);
route.post("/registerAdmin", getTasks.registerAdmin);
route.post("/adminLogging", getTasks.adminLogging); // New route for admin login
// Add this route to your server
app.put('/api/blockSeller/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const { blocked } = req.body;
      const seller = await TaskModel.sellerModel.findByIdAndUpdate(id, { blocked });
      res.json(seller);
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  });
  

module.exports = route;