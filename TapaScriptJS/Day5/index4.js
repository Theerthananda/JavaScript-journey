let num = 108;
let rev = 0;
while (num != 0) {
  let dig = num % 10;
  rev = rev * 10 + dig;
  num = Math.floor(num / 10);
}

console.log(rev);


