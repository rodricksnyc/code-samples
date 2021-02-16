var express = require('express');
var router = express.Router();
var Farsi = require('../models/farsi');

// 'Index' route for listing all the grumbles
router.get('/', function(req, res) {
  Farsi.find(function(err, farsi) {
    res.json(farsi);
  });
});

// 'Create' route for creating new grumbles from the data in the form from the 'new' route
router.post('/', function(req, res) {
  let data = {
    word: req.body.word,
    phonetic: req.body.phonetic,
    author: req.body.author
  };

  Farsi.create(data, function(err, farsi) {
    res.json(farsi);
  });

});

// 'Show' route for displaying the data from one grumble
// NOTE: This route must be defined *below* the 'new' route. Why?
router.get('/:id', function(req, res) {
  let id = req.params.id;

  Farsi.findById(id, function(err, farsi) {
    res.json(farsi);
  });
});

// 'Update' route that takes the data from the 'edit' form and updates an existing grumble
router.put('/:id', function(req, res) {
  let id = req.params.id;

  let data = {
    word: req.body.word,
    phonetic: req.body.phonetic,
    author: req.body.author
  };

  Farsi.findByIdAndUpdate(id, data, function(err, farsi) {
    res.json(farsi);
  });
});

// 'Delete' route for deleting an existing grumble
router.delete('/:id', function(req, res) {
  let id = req.params.id;

  Farsi.findByIdAndRemove(id, function(err) {
    res.sendStatus(200);
  });
});

module.exports = router;
