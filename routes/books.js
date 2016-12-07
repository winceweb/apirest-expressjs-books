var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var booksApi = require('../models/Book.js');

/* GET /books-api listing. */
router.get('/', function(req, res, next) {
  booksApi.find(function (err, books) {
    if (err) return next(err);
    res.json(books);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  booksApi.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  booksApi.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  booksApi.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  booksApi.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
