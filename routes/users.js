var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var usersModel = require('../models/Users.js');


/* GET /users-api listing. */
router.get('/', function(req, res, next) {
  usersModel.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  usersModel.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  usersModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  usersModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  usersModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;
