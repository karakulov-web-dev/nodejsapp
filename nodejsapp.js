const express = require("express");
const proxy = require("http-proxy-middleware");

const app = express();

app.use("/nodejsapp/it-works", (req, res) => {
  res.send("it works!");
});

app.use(
  "/nodejsapp/instructions",
  proxy({
    target: "http://212.77.128.203:8005/",
    changeOrigin: true,
    pathRewrite: path => path.replace(/^\/nodejsapp\/instructions/, "")
  })
);

app.use(
  "/nodejsapp/proxy",
  proxy({
    target: "http://212.77.128.203:8006/",
    changeOrigin: true,
    pathRewrite: path => path.replace(/^\/nodejsapp\/proxy/, "")
  })
);

app.use(
  "/nodejsapp/speechKit",
  proxy({
    target: "http://localhost:8081/",
    changeOrigin: true,
    pathRewrite: path => path.replace(/^\/nodejsapp\/speechKit/, "")
  })
);

app.use(
  "/nodejsapp/log",
  proxy({
    target: "http://localhost:8007/",
    changeOrigin: true,
    pathRewrite: path => path.replace(/^\/nodejsapp\/log/, "/log")
  })
);

app.use(
  "/nodejsapp/youtube",
  proxy({
    target: "http://localhost:8008/",
    changeOrigin: true,
    pathRewrite: path => path.replace(/^\/nodejsapp/, "")
  })
);

app.use(
  "/nodejsapp/forpost-app-server-side",
  proxy({
    target: "http://localhost:8009/",
    changeOrigin: true,
    pathRewrite: path =>
      path.replace(/^\/nodejsapp\/forpost-app-server-side/, "")
  })
);

app.use(
  "/nodejsapp/cam-rikt-ru",
  proxy({
    target: "http://cam.rikt.ru/",
    changeOrigin: true,
    pathRewrite: path => path.replace(/^\/nodejsapp\/cam-rikt-ru/, "")
  })
);

http: app.listen(30080);
