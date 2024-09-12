const express = require("express");
const https = require("https");
const fs = require("fs");

const app = express();

const privateKey = fs.readFileSync("key.pem");
const certificate = fs.readFileSync("csr.pem");

app.use("/", (req, res, next) => {
  res.send("Hello from SSL server");
});

const sslServer = https.createServer(
  { key: privateKey, cert: certificate },
  app
);

console.log(process.env.PORT);

sslServer.listen(process.env.PORT || 3000, () =>
  console.log("https://localhost:3000/ OKOK in 3000")
);
// use  npm "run use-env" in cmd to run env code