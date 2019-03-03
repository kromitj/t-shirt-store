var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
	console.log("yoooooooooooooooo")
  models.Product.findAll()
  .then(function(products) {
    res.json(products)
  });
});

module.exports = router;
