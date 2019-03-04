const chai = require('chai')
const chaihttp = require('chai-http')
const app = require("../../app")

const expect = chai.expect

const { Attribute } = require('../../models')

const attributeSeed = {
    "name": "Sale",
    
  }
const notNullAbles = [
	"name",
]

describe('Attribute to DB', () => {
	describe("", () => {
		it("can create a new Attribute and save it to the db", (done) => {
			Attribute.create(attributeSeed)
			.then((attribute) => {
				expect(attribute.get("name")).to.equal(attributeSeed.name)
				done()
			})
			.catch((err) => {
				done(err)
			}).then(() => {
				Attribute.destroy({
					where: {
						name: attributeSeed.name
					}
				}).catch((err) => {
					console.error(err)
				})
			})
		})		
		it("can find the first record", (done) => {
			Attribute.findByPk(1)
			.then(attribute => {
			  expect(attribute.get('name')).to.equal('Size')		
			  done()	  
			})
			.catch((err) => {
				done(err)
			})
		})
		describe("Not-nullable properties give the proper validation errors", () => {
			notNullAbles.forEach((property) => {
				it(`Error thrown for ${property}`, (done) => {
					attributeSeed[property] = null
					Attribute.create(attributeSeed).catch((err) => {
						expect(err.name).to.equal('SequelizeValidationError')
						done()
					})				
				})
			})
		})
		describe("Assossiations: ", () => {
			it("can find its associated category", (done) => {			
				Attribute.findByPk(1).then((attribute) => {
					attribute.getAttributeValues().then((attributeValues) => {
						expect(attributeValues[0].value).to.equal("S")
						done()
					})
				})
			})
		})
	})
}) 