const chai = require('chai')

const expect = chai.expect

const seeds = require('../../../testSeed')

const attributeValueSeed = seeds.attributeValue.seed
const notNullAbles = seeds.attributeValue.nonNull

const app = require("../../../app")

const { AttributeValue } = require('../../../models')

describe('AttributeValue to DB', () => {
	it("can find the first record", (done) => {
		AttributeValue.findByPk(1)
		.then(attributeValue => {
		  expect(attributeValue.get('value')).to.equal('S')		
		  done()	  
		})
		.catch((err) => {
			done(err)
		})
	})
	it("can create a new AttributeValue and save it to the db", (done) => {
		AttributeValue.create(attributeValueSeed)
		.then((attributeValue) => {
			expect(attributeValue.get("value")).to.equal(attributeValueSeed.value)
			done()
		})
		.catch((err) => {
			done(err)
		}).then(() => {
			AttributeValue.destroy({
				where: {
					value: attributeValueSeed.value
				}
			})
		})
	})
	describe("Not-nullable properties give the proper validation errors", () => {
		notNullAbles.forEach((property) => {
			it(`Error thrown for ${property}`, (done) => {
				attributeValueSeed[property] = null
				AttributeValue.create(attributeValueSeed).catch((err) => {
					expect(err.name).to.equal('SequelizeValidationError')
					done()
				})				
			})
		})
	})
	describe("Assossiations: ", () => {
		it("can find its associated attribute", (done) => {			
			AttributeValue.findByPk(1).then((attributeValue) => {
				attributeValue.getAttribute().then((attribute) => {
					expect(attribute.name).to.equal("Size")
					done()
				}).catch((err) => 	done(err))
			}).catch((err) => done(err)) 
		})
		// it("can find its associated products", (done) => {			
		// 	AttributeValue.findByPk(1).then((attributeValue) => {
		// 		attributeValue.getProducts().then((products) => {
		// 			expect(products.length).to.equal(18)
		// 			done()
		// 		}).catch((err) => 	done(err))
		// 	}).catch((err) => done(err)) 
		// })
		})
}) 