const chai = require('chai')

const expect = chai.expect

const seeds = require('../../testSeed')

const departmentSeed = seeds.department.seed
const notNullAbles = seeds.product.nonNull

const app = require("../../app")

const { Department } = require('../../models')

describe('Department to DB', () => {
	describe("", () => {
		it("can create a new Department and save it to the db", (done) => {
			Department.create(departmentSeed)
			.then((department) => {
				expect(department.get("name")).to.equal(departmentSeed.name)
				expect(department.get("description")).to.equal(departmentSeed.description)
				done()
			})
			.catch((err) => {
				done(err)
			}).then(() => {
				Department.destroy({
					where: {
						name: departmentSeed.name
					}
				}).catch((err) => {
					console.error(err)
				})
			})
		})		
		it("can find the first record", (done) => {
			Department.findByPk(1)
			.then(department => {
			  expect(department.get('name')).to.equal('Regional')		
			  done()	  
			})
			.catch((err) => {
				done(err)
			})
		})
		describe("Not-nullable properties give the proper validation errors", () => {
			notNullAbles.forEach((property) => {
				it(`Error thrown for ${property}`, (done) => {
					departmentSeed[property] = null
					Department.create(departmentSeed).catch((err) => {
						expect(err.name).to.equal('SequelizeValidationError')
						done()
					})				
				})
			})
		})
		describe("Assossiations: ", () => {
			it("can find its associated category", (done) => {			
				Department.findByPk(1).then((department) => {
					department.getCategories().then((categories) => {
						expect(categories[0].name).to.equal("French")
						done()
					})
				})
			})
		})
	})
}) 