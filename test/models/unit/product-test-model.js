const SequelizeMock = require('sequelize-mock');

const dbMock = new SequelizeMock();

// const ProductModel = require('../../models/product')

var ProductMock = dbMock.define('product', {
    name: 'Ginger Tea',
    description: "bljbfkldsjfhdjskhfkdsjfhk kjdsfhkasjdhfkdjs",
    price: 10.21,
    discounted_price: 9.99,
    image_2: "dkfhkdsjhfkdjsfhkdsajhfkdjsfhkldas",
    thumbnail: "dkfhkdsjhfkdjsfhkdsajhfkdjsfhkldas",
    image: 2,
    display: 2
}, {
    instanceMethods: {
        
    },
  })

var proxyquire = require('proxyquire');
// product.controller needs to be created
var myModule = proxyquire('product.controller', {
    './product.model': ProductMock
});

describe('#getName', function () {
    it("should return a user's name <EMAIL> format", function (done) {
        myModule.FindByPK(1).then(function (product) {

            // Given the defined Mock object above, the default values should be used for all the values
            product.name.should.equal('Ginger Tea')

            done();

        }).catch(done);
    });
});