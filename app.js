const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const requestIp = require('request-ip');



const dotenv = require('dotenv');
dotenv.config();
const indexRouter = require('./routes/index');
const productRouter = require('./routes/product');
const customerRouter = require('./routes/customer')
const clientRouter = require('./routes/client')
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(requestIp.mw())

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
