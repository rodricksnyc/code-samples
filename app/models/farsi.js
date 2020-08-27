var mongoose = require('mongoose');
// var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var farsiSchema = new Schema({
  word:  String,
  phonetic: String,
  author: String
});

// farsiSchema.plugin(timestamps);

module.exports = mongoose.model('farsi', farsiSchema);


// function thirdThing() {
//   throw new Error()
// }
//
// function otherThing() {
//   thirdThing()
// }
//
// function thing() {
//   otherThing()
// }
//
//
//
// thing()
