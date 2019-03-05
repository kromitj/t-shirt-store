const chai = require('chai')
	const expect = chai.expect

const seeds = require('../../../testSeed')
	const productSeed = seeds.product.seed
	const notNullAbles = seeds.product.nonNull

const app = require("../../../app")
console.log("yoooooooooooooooo")

const { Product, Category } = require('../../../models')

describe('Product to DB', () => {
	it("can find the first record", (done) => {
		Product.findByPk(1).then(product => {
		  expect(product.get('price')).to.equal('14.99')		
		  done()	  
		}).catch((err) => {
			done(err)
		})
	})
	it("can create a new Product and save it to the db", (done) => {
		Product.create(productSeed).then((product) => {
			Object.keys(productSeed).forEach((el) => {
				expect(product.dataValues[el]).to.equal(productSeed[el])				
			})
			done()
		}).catch((err) => {
			done(err)
		}).then(() => {
			Product.destroy({
				where: {
					name: productSeed.name
				}
			}).catch((err) => {
				console.error(err)
			})
		})
	})
	describe("Non-Nullable properties throw error when Null", () => {
		notNullAbles.forEach((property) => {
			it(`${property} is null, so error is thrown` , (done) => {
				const propertyTemp = productSeed[property]
				productSeed[property] = null
				Product.create(productSeed).catch((err) => {
					expect(err.name).to.equal('SequelizeValidationError')
					productSeed[property] = propertyTemp
					done()
				})				
			})
		})
	})
	describe("Assossiations: ", () => {
		it("can find its associated category", (done) => {			
			Product.findByPk(1).then((product) => {
				product.getCategory().then((category) => {
					expect(category.name).to.equal("French")
					done()
				})
			})
		})
		xit("can find its associated attributeValues", (done) => {			
			Product.findByPk(1).then((product) => {
				product.getAttributeValues().then((attrubuteValues) => {
					console.log("yoooooooooooooooo")
					expect(attrubuteValues[0].name).to.equal("French")
					done()
				})
			})
		})
	})
}) 