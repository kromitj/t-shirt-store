const chai = require('chai')
	const expect = chai.expect

const seeds = require('../../testSeed')
	const customerSeed = seeds.customer.seed
	const notNullAbles = seeds.customer.nonNull

const app = require("../../app")

const { Customer } = require('../../models')

describe('Customer to DB', () => {
	it("can create a new Customer and save it to the db", (done) => {
		Customer.create(customerSeed).then((customer) => {
			Object.keys(customerSeed).forEach((el) => {
				expect(customer.dataValues[el]).to.equal(customerSeed[el])
			})
			done()
		}).catch((err) => {
			done(err)
		}).then(() => {
			Customer.destroy({
				where: {
					name: customerSeed.name
				}
			}).catch((err) => {
				console.error(err)
			})
		})
	})
	it("can find the first record", (done) => {
		Customer.findByPk(4).then(customer => {
		  expect(customer.get('name')).to.equal('Wolf Blitzer')		
		  done()	  
		}).catch((err) => {
			done(err)
		})
	})
	describe("Not-nullable properties give the proper validation errors", () => {
		notNullAbles.forEach((property) => {
			it(`${property} is null, so error is thrown`, (done) => {
				const propertyTemp = customerSeed[property]
				customerSeed[property] = null
				Customer.create(customerSeed).catch((err) => {
					expect(err.name).to.equal('SequelizeValidationError')
					customerSeed[property] = propertyTemp
					done()
				})				
			})
		})
	})
	describe("Assossiations: ", () => {
		
	})
})  