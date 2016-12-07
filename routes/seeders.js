var express = require('express');
var router = express.Router();

var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var User = require('../models/User.js');
var Book = require('../models/Book.js');

router.get('/', function(req, res) {

  // Drop database
  mongoose.connection.db.dropDatabase();

  var User1 = new User({
    name: 'user1',
    password: '0000',
    admin: true
  });

  var User2 = new User({
    name: 'User2',
    password: '0000',
    admin: false
  });

  var Book1 = new Book({
    title: "Livre1",
    description: 'Description livre 1',
    author: 'gege'
  });

  var Book2 = new Book({
    title: "Livre2",
    description: 'Description livre 2',
    author: 'gogo'
  });

  Book1.save();
  Book2.save();

  User1.read.push(Book1,Book2);
  User1.save();

  User2.unread.push(Book1,Book2);
  User2.save();

  res.json(User2);

});

module.exports = router;
