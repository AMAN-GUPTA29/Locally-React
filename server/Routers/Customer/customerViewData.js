const express = require('express');
const {redirectUnLoggedCustomer} = require('./../sessionHandlers');

const route = express.Router();

const dummyData = [
    {
        id : 1,
        photo : "logo1",
        title : "Test 1",
        tag : "Auto",
        description : "Auto driver he is",
        charge : 100,
    },
    {
        id : 2,
        photo : "logo2",
        title : "Test 2",
        tag : "Prof",
        description : "Professor she is",
    },
]

route.get('/', redirectUnLoggedCustomer, (req, res) => {
   return res.json({data: dummyData,
        // message: "Data Sent"
    })
});

module.exports = route;