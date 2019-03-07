const request = require('supertest');
const chai = require('chai')
const expect = chai.expect
const app = require('../../../app'); //reference to you app.js file

const errorMsgs = require('../../../routes/helpers/error-messages')
console.log(errorMsgs)
//==================== product API test ====================

/**
 * Testing get all product endpoints
 */
describe('Product Route API', function () {
  it('respond with json containing a list of all products', function (done) {
    request(app)
    .get('/product')
    .set('Accept', 'application/json')
    .then(response => {
    	expect(response.statusCode).to.equal(200)
    	expect(response.type).to.equal('application/json')
      expect(response.body.length).to.equal(101)
      done()
  	}).catch((err) => done(err))
 	});
 	it('respond with all products on department', function (done) {
    request(app)
    .get('/product?department=1')
    .set('Accept', 'application/json')
    .then(response => {
    	expect(response.statusCode).to.equal(200)
    	expect(response.type).to.equal('application/json')
    	const productParams = Object.keys(response.body[0])
      expect(productParams.toString()).to.equal([ 'product_id',  'name',  'display',  'description',  'price',  'discounted_price',  'thumbnail' ].toString())
      done()
  	}).catch((err) => done(err))
 	});
 	it('respond with proper error given invalid department_id', function (done) {
    request(app)
    .get('/product?department=10')
    .set('Accept', 'application/json')
    .then(response => {
    	expect(response.statusCode).to.equal(400)
    	expect(response.type).to.equal('application/json')
      expect(response.body).to.equal(errorMsgs.department.idNotFound)
      done()
  	}).catch((err) => done(err))
 	});
 	it('respond with all products on category', function (done) {
    request(app)
    .get('/product?department=1&category=1')
    .set('Accept', 'application/json')
    .then(response => {
    	const productParams = Object.keys(response.body[0])
    	expect(response.statusCode).to.equal(200)
    	expect(response.type).to.equal('application/json')
      expect(productParams.toString()).to.equal([ 'product_id',  'name',  'description',  'price',  'discounted_price' ].toString())
      done()
  	}).catch((err) => done(err))
 	});
 	it('respond with proper error given invalid category_id', function (done) {
    request(app)
    .get('/product?department=1&category=100')
    .set('Accept', 'application/json')
    .then(response => {
    	expect(response.statusCode).to.equal(400)
    	expect(response.type).to.equal('application/json')
      expect(response.body).to.equal(errorMsgs.category.idNotFound)
      done()
  	}).catch((err) => done(err))
 	});
 	it('respond with products that match the search query', function (done) {
    request(app)
    .get('/product?department=1&category=1&search=chicken')
    .set('Accept', 'application/json')
    .then(response => {
    	const product = response.body[0]
    	expect(response.statusCode).to.equal(200)
    	expect(response.type).to.equal('application/json')
      expect(product.description).to.equal("This fancy chicken is perhaps the most beloved of all French symbols. Unfortunately, there are only a few hundred left, so you'd better get your T-shirt now!")
      done()
  	}).catch((err) => done(err))
 	});
});





