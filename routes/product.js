const requestIp = require('request-ip');
const models = require('../models');
const express = require('express');
const router = express.Router();
const { filterByDeptnCat, filterBySearch, filterByAtts, generateQueryParams } = require('./helpers/product-helpers');
// need to impliment offset and limit

router.get('/:id', (req, res) => {
	const ip = requestIp.getClientIp(req);
	models.Product.findByPk(req.params.id).then((product) => {
		if (!product) {
			return res.status(404).json("product doesn't exist")
		}
		return res.json({product: product, ip_address: ip})
	})
})
router.get('/', (req, res) => {
	const ip = requestIp.getClientIp(req);
	let { query, offset, department, category, color, size, search } = generateQueryParams(req.query)

	filterByDeptnCat(department, category, (products, err) => {
		if (err) { return res.status(400).json(err) }
		if (!search && req) { return res.json({products: products, ip_address: ip}) }
		filterBySearch(search, products, (searchProducts) => {
			if (!color && !size) return res.json({products: products, ip_address: ip})
			filterByAtts([color, size], searchProducts, (attProducts) => {
				return res.json({products: products, ip_address: ip})
			})
		})
	})
})












module.exports = router;
