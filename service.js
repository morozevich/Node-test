var models = require('./models');
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    next();
});

router.get('/', function (req, res) {
    let books = models.Book.findAndCountAll({
    });
    books.then(result => {
        res.send(result);
    });
    books.catch(error => {
        res.send("Error..");
    });
});

router.get('/:id', function (req, res) {
    let book = models.Book.findById(req.params.id);
    book.then(result => {
        res.send(result);
    });
    book.catch(error => {
        res.send("Error..");
    });
});

router.post('/', function (req, res) {
    console.log(req.body);
    // let book = models.Book.findById(req.params.id);
    // book.then(result => {
    //     res.send(result);
    // });
    // book.catch(error => {
    //     res.send("Error..");
    // });
});

module.exports = router;