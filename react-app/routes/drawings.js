var express = require('express');
var router = express.Router();
var Drawing = require('../models/drawing');

 router.get('/api/drawings', function(req, res) {
  Drawing.find().then((drawings) => {
    res.json(drawings)
  });
 });

// we need to save the drawing we make

router.post('/save', function(req, res) {
  let title = req.body.title;
  let image = req.body.image;
  Drawing.create({title: title, image: image}, function(err) {
    res.send(200)
  });
});

// display the page for user to create a new drawing
// router.get('/:id', function(req, res) {
//   res.render('drawings/new');
//
// });

// id displays one drawing

// router.get('/drawing/:id', function(req, res) {
//   let id = req.params.id;
//
//   Drawing.findById(id, function(err, drawing) {
//     res.render('drawings/show', {drawing: drawing});
//
//   });
// });

//update the drawing
router.put('/:id', function(req, res) {
  let id = req.params.id;
  let title = req.body.title;
  let image = req.body.image;

  Drawing.findByIdAndUpdate(id, { title: title, image: image }, function(err, drawing) {
      res.redirect('/drawings');
  });


});

router.get('/', (req, res) => {
  Drawing.find()
    .then(data => {
      res.json(data);
    })
})

//remove drawing
router.delete('/:id', function(req, res) {
  let id = req.params.id;

    Drawing.findByIdAndRemove(id, function(err) {
      res.redirect('/drawings');
    });

});


module.exports = router;
