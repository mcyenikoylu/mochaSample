var assert = require("assert");
describe('ilk test', function(){
var x  = 0;
    before(function() {
        // runs before all tests in this block
        console.log("before");
      });
    
      after(function() {
        // runs after all tests in this block
        console.log("after");

      });
    
      beforeEach(function() {
        // runs before each test in this block
        console.log("beforeEach");
x=0;
      });
    
      afterEach(function() {
        // runs after each test in this block
        console.log("afterEach");

      });
    

    describe('#indexOf()', function() {
    it('ilk iterasyon, x true mu?',function(){
        assert.equal(x,0);
         x = true;
        assert.equal(x,true);
    });

    it('ilk iterasyon, x true mu?',function(done){
        assert.equal(x,0);
         x = 5;
        assert.equal(x,5);

        setTimeout(function(){
            done();
        //},5000);
        },50);
    });


});
});


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});