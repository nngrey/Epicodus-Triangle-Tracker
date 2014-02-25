var TriangleTracker = {

  invalid: function() {
    var sidesArray = [this.sideOne, this.sideTwo, this.sideThree];
    sidesArray.sort(function(a,b){
      return (a - b);
    });
    return (sidesArray[2] > sidesArray[0] + sidesArray[1]);
  },

  type: function() {
    if (this.sideOne === this.sideTwo && this.sideTwo === this.sideThree) {
      return "equilateral";
    } else if (this.sideOne === this.sideTwo || this.sideTwo === this.sideThree || this.sideOne === this.sideThree) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
};

$(document).ready(function() {
  $("#triangle-sides").submit(function(event) {
    event.preventDefault();

    var sideOne = parseInt($("input#side1").val());
    var sideTwo = parseInt($("input#side2").val());
    var sideThree = parseInt($("input#side3").val());

    var newTriangle = Object.create(TriangleTracker);
    newTriangle.sideOne = sideOne;
    newTriangle.sideTwo = sideTwo;
    newTriangle.sideThree = sideThree;
    var result1 = newTriangle.invalid();
    var result2 = newTriangle.type();

    if (result1) {
      alert("Your sides cannot form a triangle; please enter new values.");
    } else if (result2 === "equilateral") {
      $("#equilateral").append("<li>" + newTriangle.sideOne + ", " + newTriangle.sideTwo + ", " + newTriangle.sideThree + "</li>");
    } else if (result2 === "isosceles") {
      $("#isosceles").append("<li>" + newTriangle.sideOne + ", " + newTriangle.sideTwo + ", " + newTriangle.sideThree + "</li>");
    } else if (isNaN(newTriangle.sideOne)) {
      alert("Please enter integer values.");
    } else {
      $("#scalene").append("<li>" + newTriangle.sideOne + ", " + newTriangle.sideTwo + ", " + newTriangle.sideThree + "</li>");
    }
  $("#triangle-sides")[0].reset();  
  });
});
