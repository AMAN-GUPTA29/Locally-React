const express = require('express')
const session = require('express-session');
const uri = require("./MongoUtils/mongo_pass.js");
const mongoose = require('mongoose')
const cors = require('cors')

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
    })
    .then(() => console.log("Mongoose Connected !!!"))
    .catch((err) => {
        console.log("FAILED TO CONNECT !!!");
        console.log(err);
    });

const App = express()

App.use(
    session({
        secret: "keyy that will sign cookie",
        resave: false,
        saveUninitialized: false,
        name: "sessionID",
        cookie: {
            expires: 60000 * 10, // 10 Minutes
        },
    })
);
App.use(cors())

App.listen(8080, () => {
    console.log("\nListening to \nhttp://localhost:8080/")
});

// =================================================================================

App.use('/api/customer', require('./Routers/routeCustomer'));

// =================================================================================

App.get('/', (req, res) => {
    res.json({
        status: "OK",
        code: 200,
        message: "Welcome To New API Server"
    })
})