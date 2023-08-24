const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();

const api = require('./api');

const app = express();

// config JSON and form data response
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// solve CORS
// app.use(cors({credentials: true, origin: "https://reactgram-iqsilva.vercel.app"}))
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

// Upload directory
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

app.get('/', (req, res) => {
    res.json({
      message: 'Working',
    });
  });
  
  app.use('/', api);

module.exports = app;

// DB connection
require("./config/db.js")
