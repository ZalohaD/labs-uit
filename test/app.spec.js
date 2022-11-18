const assert = require('chai').assert;
const sayHello = require('./app').sayHello;

describe('App', function(){
    it('App should return Hello', function(){
        assert.equal(sayHello(), 'hello');
    });
    
});