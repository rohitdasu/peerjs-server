const { PeerServer } = require("peer");
const Express = require("express");
const BodyParser = require("body-parser");
const multer = require("multer");

var app = Express();
var cors = require("cors");

const fs = require("fs");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hi, This is the back-end");
});



const peerServer = PeerServer({ port: 9000, path: "/mycommunication" });

app.listen(process.env.PORT || 3000, () => {
  console.log("Server Started!!!");
});
