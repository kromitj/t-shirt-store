let models  = require('../models');
let express = require('express');
let router  = express.Router();
const { filterByDeptnCat,	filterBySearch,filterByAtts } = require('./helpers/product-helpers');

router.post('/', function(req, res) {
	let limit = 20,
			query = {},
			offset = 0,
			department = null,
			category = null,
			color = null,
			size = null,
			search = null

  if(typeof req.body.limit !== 'undefined'){limit = req.body.limit}
  if(typeof req.body.offset !== 'undefined'){offset = req.body.offset }
  if(typeof req.body.department !== 'undefined'){ department  = req.body.department}
  if(typeof req.body.category !== 'undefined'){ category  = req.body.category }
  if(typeof req.body.color !== 'undefined'){ color  = req.body.color }
  if(typeof req.body.size !== 'undefined'){ size  = req.body.size}
  if(typeof req.body.search !== 'undefined'){search  = req.body.search}

	filterByDeptnCat(department, category, function(products) {
		if (!search) return res.json(products)
			filterBySearch(search, products, function(searchProducts) {
				if (!color && !size) return res.json(searchProducts)
				filterByAtts(color, size, searchProducts, function(attProducts) {
					return res.json(attProducts)
				})
			})
		})
	})
	  
module.exports = router;
