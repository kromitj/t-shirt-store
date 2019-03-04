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
		describe("Not-nullable properties give the proper validation errors", () => {
			notNullAbles.forEach((property) => {
				it(`Error thrown for ${property}`, (done) => {

					productSeed[property] = null
					Product.create(productSeed).then((product) => {
						done()
					}).catch((err) => {
						expect(err.name).to.equal('SequelizeValidationError')
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
		describe("Assossiations: ", () => {
			it("can find its associated category", (done) => {			
				Product.findByPk(1).then((product) => {
					product.getCategory().then((category) => {
						expect(category.name).to.equal("French")
						done()
					})
				})
			})
		})
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