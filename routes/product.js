let models  = require('../models');
let express = require('express');
let router  = express.Router();
const { filterByDeptnCat,	filterBySearch,filterByAtts, generateQueryParams } = require('./helpers/product-helpers');

router.get('/', (req, res) => {
	let { query, offset, department, category, color, size, search } = generateQueryParams(req.query)

	filterByDeptnCat(department, category, (products, err) => {
		if (err) { return res.status(400).json(err)}
		if (!search) {return res.json(products)}
		filterBySearch(search, products, (searchProducts) => {
			if (!color && !size) return res.json(searchProducts)
			filterByAtts( [color, size], searchProducts, (attProducts) => {
				return res.json(attProducts)
			})
		})
	})
})


	  
module.exports = router;
