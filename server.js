const express = require("express");
const { ExpressPeerServer } = require("peer");
const cors = require('cors');

const app = express();

app.get("/", (req, res, next) => res.send("Hello world!"));

// =======

let port = process.env.PORT || 9000;

console.log(port);

const server = app.listen(port);

const peerServer = ExpressPeerServer(server, {
  path: "/myapp",
});

app.use("/peerjs", peerServer);
app.use(cors())