console.log("A");

setTimeout(() => {
  console.log("B");

  Promise.resolve().then(() => {
    console.log("C");
  });
}, 0);

Promise.resolve().then(() => {
  console.log("D");

  Promise.resolve().then(() => {
    console.log("E");
  });
});

console.log("F");
