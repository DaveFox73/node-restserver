require('./config/config');


const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');

//middlewares bodyparser:
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(require('./routes/usuario'));

//Obtener

mongoose.connect(process.env.URLDB /*'mongodb://localhost:27017/cafe'*/ , { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }, (err, res) => {
    if (err) throw err;

    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});