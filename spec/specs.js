describe('TriangleTracker', function() {
  describe('invalid', function(){
    it('will test if three inputted lengths form an invalid triangle', function(){
      var testTriangle = Object.create(TriangleTracker);
      testTriangle.sideOne = 3;
      testTriangle.sideTwo = 50;
      testTriangle.sideThree = 9;
      testTriangle.invalid().should.equal(true);
    });

    it('will test if three inputted lengths form an valid triangle', function(){
      var testTriangle = Object.create(TriangleTracker);
      testTriangle.sideOne = 4;
      testTriangle.sideTwo = 4;
      testTriangle.sideThree = 4;
      testTriangle.invalid().should.equal(false);
    });
  });

  describe('type', function() {
    it('will return the type of triangle, based on three inputted lengths', function() {
      var testTriangle = Object.create(TriangleTracker);
      testTriangle.sideOne = 4;
      testTriangle.sideTwo = 4;
      testTriangle.sideThree = 4;
      testTriangle.type().should.equal("equilateral");
    });

    it('will return the type of triangle, based on three inputted lengths', function() {
    var testTriangle = Object.create(TriangleTracker);
      testTriangle.sideOne = 5;
      testTriangle.sideTwo = 5;
      testTriangle.sideThree = 4;
      testTriangle.type().should.equal("isosceles");
    });

    it('will return the type of triangle, based on three inputted lengths', function() {
    var testTriangle = Object.create(TriangleTracker);
      testTriangle.sideOne = 2;
      testTriangle.sideTwo = 3;
      testTriangle.sideThree = 4;
      testTriangle.type().should.equal("scalene");
    });
  });
});


  
