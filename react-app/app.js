const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const normalizePort = require('normalize-port');
const mongoose = require('mongoose');

var app = express();
// var mongoose = require('mongoose');
mongoose.connect('mongodb://elizabeth123:elizabeth123@ds243049.mlab.com:43049/react-express-pixels');


// var port = normalizePort(process.env.PORT || '3000');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



var index = require('./routes/index');
var drawingsRouter = require('./routes/drawings');


app.use('/', index);
app.use('/drawings', drawingsRouter);


if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));
}

app.get('*', (request, response) => {
	response.sendFile('index.html');
});

// app.use(function(req, res, next) {
//   var err = new Error('ERROR BITCH. SUCK A DICK!');
//   err.status = 404;
//   next(err);
// });
//
// app.use(function(err, req, res, next) {
//
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   res.render('error');
//
// });


module.exports = app;
