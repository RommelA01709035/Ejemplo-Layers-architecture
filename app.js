require("dotenv").config();
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const http = require('http');
const mongoose = require("mongoose"); 
const cookieParser = require('cookie-parser');

const app = express(); 
const server = http.createServer(app);

const connectDatabase = require('./src/infrastructure/database/databases/index.js');

app.use(express.json());

(async () => {
  await connectDatabase.connectDatabase();

  server.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
  });
})();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "frontend"));
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend")));
app.use(express.static(path.join(__dirname, "frontend", "public")));
app.use(express.urlencoded({ extended: true }));

const playersRoutes = require('./src/interfaces/routes/player.routes');

app.use("/", playersRoutes);
app.use("/players", playersRoutes);