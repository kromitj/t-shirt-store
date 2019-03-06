let models  = require('../models');
let express = require('express');
let router  = express.Router();
const { filterByDeptnCat,	filterBySearch,filterByAtts, generateQueryParams } = require('./helpers/product-helpers');

router.post('/', function(req, res) {
	let { query, offset, department, category, color, size, search } = generateQueryParams(req.body)

	filterByDeptnCat(department, category, function(products) {
		if (!search) return res.json(products)
			filterBySearch(search, products, function(searchProducts) {
				if (!color && !size) return res.json(searchProducts)
				filterByAtts( [color, size], searchProducts, function(attProducts) {
					return res.json(attProducts)
				})
			})
		})
	})


	  
module.exports = router;
