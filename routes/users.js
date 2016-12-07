var express = require('express');
var router = express.Router();

var config = require('../config');
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose');
var usersModel = require('../models/User.js');
var booksModel = require('../models/Book.js');


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


router.get('/:id/read/:idBook', function(req, data, next) {

  var idBook = req.params.idBook;
  var id = req.params.id;

  console.log('ID : ********');
  console.log(id);
  console.log('********');

  usersModel.findById(id, function (err, user) {
    if (err) return next(err);

    console.log('Utilisateur : ********');
    console.log(user);
    console.log('********');

    // var token = jwt.sign(user._id, config.secret, {});
    // var currentUserToken = req.body.token || req.query.token || req.headers['x-access-token'];
    // console.log(token);
    // console.log(currentUserToken);
    // if(token == currentUserToken){
    //
    // }

    booksModel.findById(idBook, function(err, book){

      console.log('Livre : ********');
      console.log(book);
      console.log('********');

      usersModel.update(
          {_id: id},
          {$addToSet: {read: book}},
          function(err, data) {
            if (err) return next(err);

            usersModel.update(
                {_id: id},
                {$unset: {unread: book}},
                function(err, data) {
                  console.log('Data : ********');
                  console.log(data);
                  console.log('********');
                  if (err) return next(err);
                  console.log(data);
                }
            );


          }
      );


    });

  });

  res.json(data);

});



router.get('/:id/unread/:idBook', function(req, data, next) {

  var idBook = req.params.idBook;
  var id = req.params.id;

  console.log('ID : ********');
  console.log(id);
  console.log('********');

  usersModel.findById(id, function (err, user) {
    if (err) return next(err);

    console.log('Utilisateur : ********');
    console.log(user);
    console.log('********');

    // var token = jwt.sign(user._id, config.secret, {});
    // var currentUserToken = req.body.token || req.query.token || req.headers['x-access-token'];
    // console.log(token);
    // console.log(currentUserToken);
    // if(token == currentUserToken){
    //
    // }

    booksModel.findById(idBook, function(err, book){

      console.log('Livre : ********');
      console.log(book);
      console.log('********');

      usersModel.update(
          {_id: id},
          {$addToSet: {unread: book}},
          function(err, data) {
            if (err) return next(err);

            usersModel.update(
                {_id: id},
                {$unset: {read: book}},
                function(err, data) {
                  console.log('Data : ********');
                  console.log(data);
                  console.log('********');
                  if (err) return next(err);
                  console.log(data);
                }
            );


          }
      );


    });

  });

  res.json(data);

});






module.exports = router;
