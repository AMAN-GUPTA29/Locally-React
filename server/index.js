const express = require('express')
const session = require('express-session');
const uri = require("./MongoUtils/mongo_pass.js");
const multer = require('multer')
const bodyparser = require('body-parser')
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

App.use(express.urlencoded({extended:false}))

// =================================================================================

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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
       return cb(null, "./public/uploads")
    },
    filename: function (req, file, cb) {
       return cb(null,   `${Date.now()}-${file.originalname}`)
    }
});

  
const upload = multer({ 
    storage: storage
});

App.post('/xtraDetails', upload.single("ProfileImage"),(req, res)=>{
    console.log("hi consumer")
    console.log(`File Name : ${req.file.filename}`);
    console.log(req.file)
    res.send("Hi consumer")
})
App.post('/xtraDetails2', upload.single("ProfileImage2"),(req, res)=>{
    console.log("hi seller")
    console.log(`File Name : ${req.file.filename}`);
    console.log(req.file)
    res.send("Hi seller")
})
// const storage2 = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, '/uploads2')
//     },
//     filename: function (req, file, cb) {
//       cb(null,   +`${Date.now()}-${file.originalname}`)
//     }
//   });
//   // App.use(express.urlencoded({extended:false}))
//   const upload2= multer({ 
//     storage2: storage2});
// App.post('/xtraDetails2', upload2.single("ProfileImage2"),(req, res)=>{
//     console.log("hi seller")
//     console.log(req.file ,req.body);
//     res.send("Hi seller")
// })

