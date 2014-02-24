describe('TriangleTracker', function() {
  describe('invalid', function(){
    it('will test if three inputted lengths can form a valid triangle', function(){
      invalid(3, 5, 9).should.equal(false);
    });
  });
});
  // describe('type', function() {
  //   it('will test three inputted lengths to determine if it is a triangle and what type', function() {
  //     var testTriangle = Object.create(TriangleTracker);
  //     testTriangle.equalateral = 
  //   }
  //   })
  // })


