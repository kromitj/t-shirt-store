
const seed = require('../../../testSeed')
const productSeed = seed.product.seed
const models = require('../../../models')
var SequelizeMock = require('sequelize-mock');


var DBConnectionMock = new SequelizeMock();

const productMock = DBConnectionMock.define('products', models.Product)
const product = productMock.build(productSeed)
console.log(product.description)
product.$addValidationError('name', 'Username is too short');
productMock.findOne({ where: {description: productSeed.description}}).then((product) => {
	console.log(product.name)
})