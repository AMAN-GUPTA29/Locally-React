const express = require('express');
const bodyParser = require('body-parser')
const myModels = require('./../MongoUtils/models.js');
const {redirectLogged} = require('./sessionHandlers.js')
const {csrfProtection} = require("./../index.js")

const route = express.Router();
route.use(bodyParser.urlencoded({ extended: false }))
route.use('/data', require('./Customer/routeData.js'))

route.post('/login', redirectLogged, (req, res) => {
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
                    message: "Login Authenticated",
                    redirect: "/customerview"
                })
            }
            else {
                res.json({
                    status: "OK",
                    code: 201,
                    message: "Invalid Credentials",
                    redirect: "/login"
                })
            }
        })
        .catch((err) => {
            console.log("Login err :\n", err);
            res.json({
                status: "OK",
                code: 500,
                message: err.message,
                redirect: "/login"
            })
        });
})

route.get('/logout', (req, res) => {
    if (req.session.userID) res.clearCookie("sessionID");
    res.json({
        status: "OK",
        code: 200,
        message: "Logout Successful",
        redirect: '/'
    })
})


module.exports = route