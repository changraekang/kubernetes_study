"use strict";
const morgan = require("morgan");

const env = require("node-env-file");
const fs = require("fs");
const http = require("http");
const https = require("https");
const express = require("express");
const flash = require("connect-flash");
const compression = require("compression");
const cors = require("cors");

// Environment
env(__dirname + "/server.cfg");

//
// Web
//

let app = express();

app.use(cors("*"));

//app.use(morgan("combined"));

// http --> https
/*
  app.enable("trust proxy");
  app.use(function (req, res, next) {
    if (req.secure) return next();
    res.redirect("https://" + req.headers.host + req.url);
});
*/

app.use(flash());
app.use(compression());

//console.log(process.env.SSL_CA);
//console.log(process.env.SSL_KEY);
//console.log(process.env.SSL_CERT);
var SSL_options = {
  ca: require("fs").readFileSync(process.env.SSL_CA),
  key: require("fs").readFileSync(process.env.SSL_KEY),
  cert: require("fs").readFileSync(process.env.SSL_CERT),
};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(SSL_options, app);
//socket io 설정
console.log("소켓준비");
const io = require("socket.io")(httpsServer, {
  //cors 설정
  cors: {
    origin: "*",
    credentials: true,
  },
});

// io chatting server
console.log("소켓연결", io);
io.on("connection", (socket) => {
  console.log("소켓 내부", socket);

  socket.on("message", ({ name, message }) => {
    console.log("소켓 온", name, message);
    io.emit("message", { name, message });
  });
});
var httpListener = httpServer.listen(process.env.my_port, function () {
  console.log("Listening on port " + process.env.my_port);
});
var httpsListener = httpsServer.listen(process.env.my_portSSL, function () {
  console.log("SSL Proxy listening on port " + process.env.my_portSSL);
});

app.use(express.static("../frontend/build"));

app.use(function (err, req, res, next) {
  switch (err.name) {
    case "customError":
      return res.status(err.status).json({
        message: err.msg,
      });
      break;

    default:
      return res.status(500).json({ message: "Something Broke!", err });
      break;
  }
});
console.log(JSON.stringify(process.versions));
