const userName = 'Rajan';
let amount = Number(prompt("Enter amout to withdraw !"));

if (amount % 100 === 0) {
    console.log("Withdrawal successful !");
}

else {
    console.error("Withdrawal unsuccessful !");
}