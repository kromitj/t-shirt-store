let models  = require('../../models');

const filterByDeptnCat = function(department, category, callback) {
	if (!department) {
		 models.Product.findAll().then((products, search, color, size) => {
		 	return callback(products)
		 })
	} else if (!category) {
			models.sequelize.query('call catalog_get_products_on_department(:inDepartmentId, :inShortProductDescriptionLength,:inProductsPerPage, :inStartItem)',
			{ replacements: { inDepartmentId: parseInt(department), inShortProductDescriptionLength: 15,inProductsPerPage: 20, inStartItem: 0}}).then((products) => {
		 	return callback(products)
		 })
	} else {
		models.sequelize.query('call catalog_get_category_products(:inCategoryId)', 
		{ replacements: {inCategoryId: category, inShortProductDescriptionLength: 15, inProductsPerPage: 20, inStartItem: 0}}).then((products) => {
			return callback(products)
		})
	}
}

const filterBySearch = function(search, products, callback) {
	if (!search)  return callback(products)
	else {
		const filtered = products.filter((product) => {
			return (product.description.includes(search) || product.name.includes(search))
		})
		return callback(filtered)
	}
}
const filterByAtts = function(attributes, products, callback) {
	if (attributes.every(attribute => attribute === null)) return callback(products)
	const product_ids = products.map((product) => {
     return product.product_id
 	})
	product_ids.forEach((p_id, i) => {
		models.sequelize.query('call catalog_get_attributes_not_assigned_to_product(:inProductId)',
				{ replacements: { inProductId: p_id}}).then((non_atts) => {
					const productHasAtts = true
					non_atts.forEach((att) => {
						if (attributes.includes(non_att.attribute_value) ) {
							productHasAtt = false
						}
					})
					if (!productHasAtts) {
						const idx  = product_ids.indexOf(p_id)
						products.splice(idx, 1)
					}
					return callback(products)
		})
  }) 
}

const generateQueryParams = (queryParams) => {
	let limit = 20,
			query = {},
			offset = 0,
			department = null,
			category = null,
			color = null,
			size = null,
			search = null

  if(typeof queryParams.limit !== 'undefined'){limit = queryParams.limit}
  if(typeof queryParams.offset !== 'undefined'){offset = queryParams.offset }
  if(typeof queryParams.department !== 'undefined'){ department  = queryParams.department}
  if(typeof queryParams.category !== 'undefined'){ category  = queryParams.category }
  if(typeof queryParams.color !== 'undefined'){ color  = queryParams.color }
  if(typeof queryParams.size !== 'undefined'){ size  = queryParams.size}
  if(typeof queryParams.search !== 'undefined'){search  = queryParams.search}

  return { query, offset, department, category, color, size, search }
}

module.exports = {
	filterByDeptnCat,
	filterBySearch,
	filterByAtts,
	generateQueryParams
}