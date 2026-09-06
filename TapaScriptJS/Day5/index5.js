for (let i = 9, j = 10; i <= 10, j >= 1; i++, j--) {
  console.log(i, j);
}

// Comma operator: both expressions are evaluated,
// but only the last expression (j >= 1) determines the condition.

for (let i = 1, j = 1; i <= 10 || j >= 1; i++, j--) {
  console.log(i, j);
}

// || (OR): the loop continues as long as at least one condition is true.

for (let i = 1, j = 10; i <= 10 && j >= 1; i++, j--) {
  console.log(i, j);
}

// && (AND): the loop continues only while all conditions are true.
