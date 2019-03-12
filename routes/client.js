var models  = require('../models');
var express = require('express');
var path = require('path');
var router  = express.Router();

router.get('/', function(req, res) {
	const __parentDir = path.dirname(module.parent.filename);
	res.sendFile(path.normalize(__parentDir +'/client/build/index.html'));
});

module.exports = router;

