const chai = require('chai')
const chaihttp = require('chai-http')
const app = require("../../app")

const expect = chai.expect

const { Department } = require('../../models')

const departmentSeed = {
    "name": "Sale",
    "description": "Items that nobody wants",
    
  }
const notNullAbles = [
	"name",
]

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
	})
}) 