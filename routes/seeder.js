var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var User = require('../models/Users.js');

router.get('/', function(req, res) {
  // create a sample seeder
  var seeders = new User({
    name: 'user1',
    password: '0000',
    admin: false
  });

  // save the sample seeder
  seeders.save(function(err) {
    if (err) throw err;

    console.log('User saved successfully');
    res.json({ success: true });
  });

});


module.exports = router;
