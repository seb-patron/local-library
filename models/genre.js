var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreInstance = Schema({
  name: { type: String, required: true, min: 3, max: 100 }, //reference to the associated book
});

// Virtual for bookinstance's URL
GenreInstance
.virtual('url')
.get(function () {
  return '/catalog/genre/' + this._id;
});

//Export model
module.exports = mongoose.model('GenreInstance', GenreInstance);