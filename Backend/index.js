const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')
const userRouter = require('./routes/user')
const packageRouter = require('./routes/package')

const port = process.env.PORT || 3000;


var app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/users', setCompanyId, userRouter);
app.use('/packages', setCompanyId, packageRouter);

//Db Connection

mongoose.connect('mongodb://localhost:27017/userdb', {useNewUrlParser: true});
var db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection Error"));
db.once("open", () => {
    console.log("Connected to Database!")
});

function setCompanyId(req,next){
    req.companyObj = {}
    req.companyObj.companyId = 'MY1234'
    next()
}

//Staring the app
app.listen(port, () => {
    console.log(`Server started at ${port}`);
});


