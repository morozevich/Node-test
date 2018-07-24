var models = require('./models');
var express = require('express');
var router = express.Router();

router.use(function timeLog(req, res, next) {
    next();
});

router.get('/', function (req, res) {
    let books = models.Book.findAll({
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
    let book = models.Book.create({
        title: req.body.title,
        content: req.body.content,
        author: req.body.author
    });
    book.then(result => {
        res.send(result);
    });
    book.catch(error => {
        res.send("Error..");
    });
});

router.put('/:id', function (req, res) {
    let book = models.Book.findById(req.params.id);
    book.then(result => {
        let valuesToUpdate = {};
        for (var key in req.body) {
            valuesToUpdate[key] = req.body[key];
        }
        let bookUpdated = result.update(valuesToUpdate);
        bookUpdated.then(result => {
            res.send(result);
        });
        bookUpdated.catch(error => {
            res.send("Error..");
        });
    });
    book.catch(error => {
        res.send("Error..");
    });
});

router.delete('/:id', function (req, res) {
    let book = models.Book.findById(req.params.id);
    book.then(result => {
        let destroy = result.destroy();
        destroy.then(result => {
            res.send(result);
        });
        destroy.catch(error => {
            res.send("Error..");
        });
    });
    book.catch(error => {
        res.send("Error..");
    });
});

module.exports = router;