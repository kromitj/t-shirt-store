module.exports = {
	department: {
		seed: {
			"name": "Sale",
	    "description": "Items that nobody wants",    
		},
		nonNull: [
			"name",
		]
	},
	category: {
		seed: {
			"name": "Sale",
	    "description": "Items that nobody wants", 
      "department_id": 4
		},
		nonNull: [
			"department_id",
			"name",
		]
	},
	product: {
		seed: {
			"name": "BLah BLah",
	    "description": "\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!",
	    "price": "22.95",
	    "discounted_price": "17.95",
	    "image": "chartres-cathedral.gif",
	    "image_2": "chartres-cathedral-2.gif",
	    "thumbnail": "chartres-cathedral-thumbnail.gif",
	    "display": 1
		},
		nonNull: [
			"name",
			"description",
			"price",
			"discounted_price",
			"display",
		]
	},
	attribute: {
		seed: {
			"name": "Material",
		},
		nonNull: [
			"name",
		]
	},
	attributeValue: {
		seed: {
			"value": "XXXXXXXXXXXXXXXXXXL",
			"attribute_id": 1
		},
		nonNull: [
			"attribute_id",
			"value",
		]
	},
}
