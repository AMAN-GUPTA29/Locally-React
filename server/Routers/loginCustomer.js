const express = require('express');
const bodyParser = require('body-parser')
const myModels = require('./../MongoUtils/models.js');

const route = express.Router();
route.use(bodyParser.urlencoded({ extended: false }))

route.post('/login', (req, res) => {
    const { email, password } = req.body

    myModels.customerModel
        .find({ email: email, password: password })
        .then((data) => {
                if (data.length != 0){
                req.session.userID = data[0]._id;
                req.session.customer = true;
                req.session.seller = false;
                req.session.admin = false;
                res.json({
                    status: "OK",
                    code: 200,
                    message: "Login Authenticated"
                })
            }
            else {
                res.json({
                    status: "OK",
                    code: 201,
                    message: "Invalid Credentials",
                })
            }
        })
        .catch((err) => {
            console.log("Login err :\n", err);
            res.json({
                status: "OK",
                code: 500,
                message: err.message
            })
        });
})


module.exports = route