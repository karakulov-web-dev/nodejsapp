const express = require("express");
const proxy = require("http-proxy-middleware");

const app = express();
app.use(express.json());

app.use(
  "/nodejsapp/instructions",
  proxy({
    target: "http://212.77.128.203:8005/",
    changeOrigin: true,
    pathRewrite: function(path, req) {
      return path.replace(/^\/nodejsapp\/instructions/, "");
    }
  })
);

app.use(
  "/nodejsapp/proxy",
  proxy({
    target: "http://212.77.128.203:8006/",
    changeOrigin: true,
    pathRewrite: function(path, req) {
      return path.replace(/^\/nodejsapp\/proxy/, "");
    }
  })
);

app.listen(30080);
