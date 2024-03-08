var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
<<<<<<< HEAD
var usersRouter = require('./routes/users');
var donarListRouter = require('./routes/donars_List');
var donar_module_router = require('./routes/donar-module');
var submitformRouter = require('./routes/submit-form');
=======
var donorsRouter = require('./routes/crud_donors');
>>>>>>> d8da1b25cb2e90435e2e9e6c97ace8b20509886b

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
<<<<<<< HEAD
app.use('/users', usersRouter);
app.use('/donorsList', donarListRouter);
app.use('/donar-module', donar_module_router);
app.use('/submit-form', submitformRouter);
=======
app.use('/donors', donorsRouter);
>>>>>>> d8da1b25cb2e90435e2e9e6c97ace8b20509886b

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
