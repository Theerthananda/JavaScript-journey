let num1 = Number(prompt("Enter a Number 1 :"));

let num2 = Number(prompt("Enter a Number 2 :"));

let symbol = prompt("Enter Op (+,-,x,/,%) :");

switch (symbol) {
  case "+":
    console.log(num1 + num2);
    break;

  case "-":
    console.log(num1 - num2);
    break;

  case "x":
    console.log(num1 * num2);
    break;

  case "/":
    console.log(num1 / num2);
    break;

  case "%":
    console.log(num1 % num2);
    break;

  default:
    console.error("Invalid Input! Use only (+, -, x, /, %)");
}
