const express = require("express");
const app = express();
const ejs = require('ejs');
const { v4: uuidv4 } = require('uuid');

app.set('view engine', 'ejs');

const router = require('./routes/router');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.listen(5000);



