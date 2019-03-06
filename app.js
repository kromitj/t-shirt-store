var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
	dotenv.config();
var indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const customerRouter = require('./routes/customer')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
const passport = require('passport');

// Passport middleware
app.use(passport.initialize());
require('./config/passport')(passport);

app.use('', indexRouter);
app.use('/product', productRouter);
app.use('/user', customerRouter);

module.exports = app;
