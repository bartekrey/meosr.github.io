const fs = require("fs");
const http = require("http");
const express = require('express');
const path = require('path');

const app = express();
const httpServer = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.use(express.static("./images"));
//app.get("/images", express.static(path.join(__dirname, "./images")));

app.get('/drawing.html', (req, res) => {
  res.sendFile(path.join(__dirname, './drawing.html'));
});

app.get('/animation.html', (req, res) => {
  res.sendFile(path.join(__dirname, './animation.html'));
});

httpServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

fs.readdir("./images", (err, files) => {
  console.log(files.length);
  let number_of_images = files.length;
});
