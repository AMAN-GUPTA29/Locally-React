const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
    if (req.session.userID){
        res.json({
            status: "OK",
            code: 200,
            data: [
                1,2,3,4,5,6,7,8,9,10
            ],
            message: "Data Sent"
        })
    }else {
        res.json({
            status: "OK",
            code: 204,
            data: "None",
            message: "Login first"
        })
    }
})

module.exports = route