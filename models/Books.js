var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  title: String,
  description: String,
  author: String,
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Book', BookSchema);
