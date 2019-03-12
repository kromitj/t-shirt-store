module.exports = {
	department: {
		seed: {
			"name": "Blah",
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
			"name": "Skate Board",
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
	shoppingCart: {
		seed: {
			"description": "brrr its cold outside",
			"quantity": 1,
			"buy_now": false,
			"quantity": 1,
			"cart_id": 1,
			"product_id": 1,
		},
		nonNull: [
			"description",
			"quantity",
			"buy_now",
			"quantity,",
			"cart_id",
			"product_id",
		]
	},
	customer: {
		seed: {
			"name": "Ned Flander",
			"email": "email2@email.com",
			"password": "password",
			"credit_card": "424242424242",
			"address_1": "123 blah st",
			"address_2": "",
			"city": "Amazon",
			"region": "Georgia",
			"postal_code": "55092",
			"country": "USA",
			"shipping_region_id": 2,
			"day_phone": "312-867-5305",
			"eve_phone": "312-867-5305",
			"mob_phone": "312-867-5305",
		},
		nonNull: [
			"name",
			"email",
			"password",
		]
	},
}
