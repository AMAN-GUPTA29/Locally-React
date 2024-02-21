const express = require('express')
const session = require('express-session');
const uri = require("./MongoUtils/mongo_pass.js");
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./admin/taskroute.js')
const bodyParser = require('body-parser'); // Add this line


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

App.use(bodyParser.json());


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
App.use('/api',routes);

App.use('/api/customer', require('./Routers/routeCustomer'));
App.use('/api/customerview/data', require('./Routers/Customer/customerViewData.js'));

// =================================================================================

App.get('/', (req, res) => {
    res.json({
        status: "OK",
        code: 200,
        message: "Welcome To New API Server"
    })
})