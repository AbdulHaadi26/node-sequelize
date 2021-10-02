//To get process env variables
require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const http = require('http');
const compression = require('compression');
const { sequelize } = require('./sequelize/db');

//Middleware functions
app.use(express.json({ limit: '100mb' }));
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(cors());
app.use(compression({ filter: shouldCompress }));

sequelize.sync({ force: true });

app.use('/belongsTo', require('./belongsTo'));
app.use('/hasMany', require('./hasMany'));
app.use('/hasOne', require('./hasOne'));
app.use('/belongsToMany', require('./belongsToMany'));
app.use('/aggregate', require('./aggregate'));

function shouldCompress(req, res) {
    if (req.headers["x-no-compression"]) return false;
    return compression.filter(req, res);
}

http.createServer(app).listen(80);


