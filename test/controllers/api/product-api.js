const request = require('supertest');
const chai = require('chai')
const expect = chai.expect
const app = require('../../../app'); //reference to you app.js file

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
    	console.log(response.body)
    	expect(response.statusCode).to.equal(200)
    	expect(response.type).to.equal('application/json')
      expect(response.body.length).to.equal(101)
      done()
  	})
 	});
 	it('respond with all products on department', function (done) {
    request(app)
    .get('/product?department=1')
    .set('Accept', 'application/json')
    .then(response => {
    	expect(response.statusCode).to.equal(200)
    	expect(response.type).to.equal('application/json')
      expect(response.body.length).to.equal(16)
      done()
  	}).catch((err) => {
  		console.log(err)
  		done()
  	})
 	});
 	it('respond with proper error given invalid department_id', function (done) {
    request(app)
    .get('/product?department=10')
    .set('Accept', 'application/json')
    .then(response => {
    	console.log(response.body)
    	expect(response.statusCode).to.equal(400)
    	expect(response.type).to.equal('application/json')
      expect(response.body).to.equal('Invalid Department, does not exist')
      done()
  	}).catch((err) => {
  		console.log(err)
  		done()
  	})
 	});
});