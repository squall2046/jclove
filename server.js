const express = require('express');
const app = express();
const path = require('path');
const jwt = require("jsonwebtoken");

const bodyParser = require('body-parser')
app.use(bodyParser.json());

const morgan = require("morgan");
app.use(morgan("dev"));

const cors = require("cors");
app.use(cors());

// Add headers (access control 允许跨域)
// =============================================================
app.all("*", function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader("Access-Control-Allow-Origin", "*");
    // Request methods you wish to allow
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    // Request headers you wish to allow
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);
    // Pass to next layer of middleware
    next();
});

app.use(express.static(__dirname + '/dist/jclove'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/jclove/index.html'));
});

// Connect to the Mongo DB
// =============================================================
const mongoose = require("mongoose");
// const mongoURL = process.env.MONGODB_URI || "mongodb://localhost/jcloveDB";

// New MongoDB Atlas Cloud Database
const mongoURL = "mongodb+srv://squall2046:090909@cluster0.shj0c.mongodb.net/jc_love?retryWrites=true&w=majority";

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
// mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connect(mongoURL)
    .then(() => console.log(` ==> Successfully connected to mongoDB!`))
    .catch((err) => console.log(` ==> Error connecting to mongoDB: ${err}`));

// Routes 放在最后，且在listen port前。
// =============================================================
require(path.join(__dirname, "/server/routes/api.js"))(app, jwt);
// app.use('/api', require(path.join(__dirname + '/routes/apiRoutes.js')));

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` ==> API Server now listening on PORT ${PORT}!`);
});

// npx nodemon 开始程序
// node server 也可以, 但是每次更新要通过ctrl+c,并重开server才能显示更新内容.
// 每次更新完内容， 要ng build， server才能读出来！！！
