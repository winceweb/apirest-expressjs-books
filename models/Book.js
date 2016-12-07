var mongoose = require('mongoose')
  , Schema = mongoose.Schema;

var BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  barCode: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Book', BookSchema);
