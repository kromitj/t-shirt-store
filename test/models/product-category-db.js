// const chai = require('chai')
// const chaihttp = require('chai-http')
// const app = require("../../app")

// const expect = chai.expect



// const { Product, Category,ProductCategory } = require('../../models')

// const product_categorySeed = {
//     "product_id": null,
//     "category_id": null,
    
//   }

// describe('ProductCategory to DB', () => {
// 	describe("", () => {
// 		it("can create a new ProductCategory and save it to the db", (done) => {
// 			Product.findByPk(1)
// 			.then((product) => {
// 				Category.findByPk(1)
// 				.then((category) => {	
// 						product_categorySeed.product_id = product.product_id
// 						product_categorySeed.category_id = category.category_id
// 						ProductCategory.create(product_categorySeed)
// 						.then((product_category) => {
// 							expect(product_category.get("product_id")).to.equal(product_categorySeed.product_id)
// 							expect(product_category.get("category_id")).to.equal(product_categorySeed.category_id)
// 							done()
// 						})
// 						.catch((err) => {
// 							done(err)
// 						})
// 				})
// 			})
// 		})
// 	})
// }) 