const Sequelize = require('sequelize');
// The Uri settings is postgres://{user}:{pass}@{host}:{post}/{dbname}
const sequelize = new Sequelize('postgres://carlos:ada1815@localhost:5432/test');

var express = require('express');
var app = express();

let connect = sequelize.authenticate();

connect.then(() => {
    app.listen(3000, function () {
        console.log('Example app listening on port 3000!');
    });
});

connect.catch(err => {
    console.error('Unable to connect to the database:', err);
});