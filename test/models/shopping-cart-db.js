const chai = require('chai')
	const expect = chai.expect
const seeds = require('../../testSeed')
	const shoppingCartSeed = seeds.shoppingCart.seed
	const notNullAbles = seeds.shoppingCart.nonNull

const app = require("../../app")

const { ShoppingCart } = require('../../models')

describe('ShoppingCart to DB', () => {
	it("can create a new ShoppingCart and save it to the db", (done) => {
		ShoppingCart.create(shoppingCartSeed)
		.then((shoppingCart) => {
			expect(shoppingCart.get("description")).to.equal(shoppingCartSeed.description)
			done()
		})
		.catch((err) => {
			done(err)
		}).then(() => {
			ShoppingCart.destroy({
				where: {
					description: shoppingCartSeed.description
				}
			}).catch((err) => {
				console.error(err)
			})
		})
	})		
	it("can find the first record", (done) => {
		ShoppingCart.findByPk(1)
		.then(shoppingCart => {
		  expect(shoppingCart.get('description')).to.equal('djfjdskfldhskfjdhskafjhdlsakfjdhslkj')		
		  done()	  
		})
		.catch((err) => {
			done(err)
		})
	})
	describe("Not-nullable properties give the proper validation errors", () => {
		notNullAbles.forEach((property) => {
			it(`Error thrown for ${property}`, (done) => {
				shoppingCartSeed[property] = null
				ShoppingCart.create(shoppingCartSeed).catch((err) => {
					expect(err.name).to.equal('SequelizeValidationError')
					done()
				})				
			})
		})
	})
	describe("Assossiations: ", () => {
		it("can find its associated shoppingCartValues: ", (done) => {			
			ShoppingCart.findByPk(1).then((shoppingCart) => {
				shoppingCart.getProduct().then((shoppingCartProduct) => {
					expect(shoppingCartProduct.description).to.equal("This beautiful and iconic T-shirt will no doubt lead you to your own triumph.")
					done()
				})
			})
		})
	})
}) 