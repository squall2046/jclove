const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
app.use(bodyParser.json());

// var mongodb = require("mongodb");

// const cors = require("cors");
// app.use(cors());
// // Add headers (access control 允许跨域)
// // =============================================================
// app.all("*", function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     // Request methods you wish to allow
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//     );
//     // Request headers you wish to allow
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "X-Requested-With,content-type"
//     );
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     // Pass to next layer of middleware
//     next();
// });

app.use(express.static(__dirname + '/dist/jclove'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/jclove/index.html'));
});

// Routes 放在最后，且在listen port前。
// =============================================================
require(path.join(__dirname, "/routes/apiRoutes.js"))(app);

// PORT
const PORT = process.env.PORT || 3000;
// app.listen(PORT, "127.0.0.1", () => console.log("App running on port " + PORT + "!"));
app.listen(PORT);

// app.listen(process.env.PORT || 8080);

// npx nodemon 开始程序
// node server 也可以, 但是每次更新要通过ctrl+c,并重开server才能显示更新内容.
