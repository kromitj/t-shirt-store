const chai = require('chai')
const chaihttp = require('chai-http')
const app = require("../../app")

const expect = chai.expect

const { Category } = require('../../models')

const categorySeed = {
    "name": "Dumpster",
    "description": "Items that are in the dumster....",
    "department_id": 4
    
  }

  const notNullAbles = [
	"name",
]

describe('Category to DB', () => {
	describe("", () => {
		it("can create a new Category and save it to the db", (done) => {
			Category.create(categorySeed)
			.then((category) => {
				expect(category.get("name")).to.equal(categorySeed.name)
				expect(category.get("description")).to.equal(categorySeed.description)	
				done()
			})
			.catch((err) => {
				done(err)
			}).then(() => {
				Category.destroy({
					where: {
						name: categorySeed.name
					}
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
		it("can find the first record", (done) => {
			Category.findByPk(1)
			.then(category => {
			  expect(category.get('name')).to.equal('French')		
			  done()	  
			})
			.catch((err) => {
				done(err)
			})
		})
	})
}) 