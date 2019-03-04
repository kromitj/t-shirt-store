const chai = require('chai')
const chaihttp = require('chai-http')
const app = require("../../app")

const expect = chai.expect
const should = chai.should

const { Product, Category } = require('../../models')

const productSeed = {
    "name": "BLah BLah",
    "description": "\"The Fur Merchants\". Not all the beautiful stained glass in the great cathedrals depicts saints and angels! Lay aside your furs for the summer and wear this beautiful T-shirt!",
    "price": "22.95",
    "discounted_price": "17.95",
    "image": "chartres-cathedral.gif",
    "image_2": "chartres-cathedral-2.gif",
    "thumbnail": "chartres-cathedral-thumbnail.gif",
    "display": 1
  }

const notNullAbles = [
	"name",
	"description",
	"price",
	"discounted_price",
	"display",
]

describe('Product to DB', () => {
		it("can create a new Product and save it to the db", (done) => {
			Product.create(productSeed)
			.then((product) => {
				expect(product.get("name")).to.equal(productSeed.name)
				expect(product.get("description")).to.equal(productSeed.description)
				expect(product.get("price")).to.equal(productSeed.price)
				expect(product.get("discounted_price")).to.equal(productSeed.discounted_price)
				expect(product.get("image")).to.equal(productSeed.image)
				expect(product.get("image_2")).to.equal(productSeed.image_2)
				expect(product.get("thumbnail")).to.equal(productSeed.thumbnail)
				expect(product.get("display")).to.equal(productSeed.display)
				done()
			})
			.catch((err) => {
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
		// it("can find the first record", (done) => {
		// 	Product.findByPk(1)
		// 	.then(product => {
		// 	  expect(product.get('price')).to.equal('14.99')		
		// 	  done()	  
		// 	})
		// 	.catch((err) => {
		// 		done(err)
		// 	})

		// })
		// describe("Assossiations: ", () => {
			// it("can find its associated category", (done) => {			
			// 	Product.findByPk(1).then((product) => {
			// 		product.getCategory().then((category) => {
			// 			expect(category.name).to.equal("French")
			// 			done()
			// 		})
			// 	})
			// })
			// it("can find its associated attributeValues", (done) => {			
				// Product.findByPk(1).then((product) => {
				// 	product.getAttributeValues().then((attrubuteValues) => {
				// 		console.log("yoooooooooooooooo")
				// 		expect(attrubuteValues[0].name).to.equal("French")
				// 		done()
				// 	})
				// })
			// })
		// })
		// afterEach(() => {
		// 	Product.destroy({
		// 		where: {
		// 			name: productSeed.name
		// 		}
		// 	}).catch((err) => {
		// 		console.error(err)
		// 	})
		// })
}) 