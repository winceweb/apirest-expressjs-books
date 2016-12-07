var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    admin: Boolean,
    read: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }],
    unread: [{
      type: Schema.Types.ObjectId,
      ref: 'Book'
    }]
});

module.exports = mongoose.model('User', UserSchema);
