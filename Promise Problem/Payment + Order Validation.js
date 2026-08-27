// const cart = ["pant", "shirt"];
const cart = [];

function validateCart(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length != 0) {
      resolve("Cart is vallid !");
    } else {
      reject(new Error("Invallid cart !"));
    }
  });
}

function createOrder(cart) {
  return new Promise((resolve,reject) => {
    validateCart(cart)
      .then((cartStatus) => {
        const orderId = cart.length * 100;
        resolve(orderId);
      })
      .catch((err) => {
        reject(err)
      });
  });
}
function processPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId != 0) {
      resolve({
        success: true,
        transactionId: "TXN123",
      });
    } else {
      reject(new Error("Error !"));
    }
  });
}

createOrder(cart)
  .then((orderId) => {
    console.log("order ID = " + orderId);
    return processPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(JSON.stringify(paymentInfo));
  })
  .catch((err) => {
    console.error(err.message);
  });
