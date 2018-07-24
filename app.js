const Sequelize = require('sequelize');
// The Uri settings is postgres://{user}:{pass}@{host}:{post}/{dbname}
const config = require('./config/config.json');
// Set to enviroment (for example development).
const enviroment = config.development;
const sequelize = new Sequelize(`${enviroment.dialect}://${enviroment.username}:${enviroment.password}@${enviroment.host}:5432/${enviroment.database}`);

var express = require('express');
var app = express();

var service = require('./service');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', service);

let connect = sequelize.authenticate();

connect.then(() => {
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
});

connect.catch(err => {
    console.error('Unable to connect to the database:', err);
});
