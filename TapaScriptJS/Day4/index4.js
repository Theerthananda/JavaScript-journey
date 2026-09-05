function checkTriangleType(a, b, c) {
  if (a === b && b === c) {
    console.log("Equilateral Triangle.");
  } else if (a === b || a === c || c === b) {
    console.log("Isosceles Triangle");
  } else {
    console.log("Scalene Triangle.");
  }
}

checkTriangleType(80, -8, 8);
