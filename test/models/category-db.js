const chai = require('chai')
	const expect = chai.expect

const seeds = require('../../testSeed')
	const categorySeed = seeds.category.seed
	const notNullAbles = seeds.category.nonNull

const app = require("../../app")

const { Category } = require('../../models')

describe('Category to DB', () => {
	it("can find the first record", (done) => {
		Category.findByPk(1).then(category => {
		  expect(category.get('name')).to.equal('French')		
		  done()	  
		}).catch((err) => {
			done(err)
		})
	})
	it("can create a new Category and save it to the db", (done) => {
		Category.create(categorySeed).then((category) => {
			Object.keys(categorySeed).forEach((el) => {
				expect(category.dataValues[el]).to.equal(categorySeed[el])
			})
			done()
		}).catch((err) => {
			done(err)
		}).then(() => {
			Category.destroy({
				where: {
					name: categorySeed.name
				}
			}).catch((err) => {
				console.error(err)
			})
		})
	})
	describe("Not-nullable properties give the proper validation errors", () => {
		notNullAbles.forEach((property) => {
			it(`Error thrown for ${property}`, (done) => {
				categorySeed[property] = null
				Category.create(categorySeed).catch((err) => {
					expect(err.name).to.equal('SequelizeValidationError')
					done()
				})				
			})
		})
	})
	describe("Assossiations: ", () => {
		it("can find its associated department", (done) => {			
			Category.findByPk(1).then((category) => {
				category.getDepartment().then((department) => {
					expect(department.name).to.equal("Regional")
					done()
				}).catch((err) => 	done(err))
			}).catch((err) => done(err)) 
		})
		it("can find its associated products", (done) => {			
			Category.findByPk(1).then((category) => {
				category.getProducts().then((products) => {
					expect(products.length).to.equal(18)
					done()
				}).catch((err) => 	done(err))
			}).catch((err) => done(err)) 
		})
	})
}) 