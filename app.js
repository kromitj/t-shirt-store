var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const dotenv = require('dotenv');
	dotenv.config();
var indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const customerRouter = require('./routes/customer')
const clientRouter = require('./routes/client')
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

 app.use(require('forest-express-sequelize').init({
    modelsDir: __dirname + '/models',
    envSecret: process.env.FOREST_ENV_SECRET,
    authSecret: process.env.FOREST_AUTH_SECRET,
    sequelize: require('./models').sequelize,
  }));

// Passport middleware
const passport = require('passport');
app.use(passport.initialize());
require('./config/passport')(passport);


app.use('/api/product', productRouter);
app.use('/api/user', customerRouter);

// serve static assets 
app.use(express.static('client/build'));

app.get('*', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})



module.exports = app;
